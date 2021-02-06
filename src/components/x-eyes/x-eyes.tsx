/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { Component, Prop, Event, EventEmitter, Watch, Host, Method, h } from '@stencil/core'
import {
  attachEye, detachEye, startFollowing, stopFollowing, Eye, Radius
} from './eye'

export type Position = 'center' | 'top' | 'bottom' | 'left' | 'right' |
  'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | number

/**
 * Shows a pair of eyes following movements of the mouse cursor on the page.
 */
@Component({ tag: 'x-eyes', styleUrl: 'x-eyes.css', shadow: true })
export class XEyesElement {
  /**
   * Delay the reaction of the eye of the mouse cursor movement.
   * A number representing a time period in milliseconds is expected.
   */
  @Prop({ reflect: true }) delay = 0
  /**
   * The minimum distance of the iris from the eye rim to keep when following
   * the mouse cursor movements.
   */
  @Prop({ reflect: true }) distance = 0
  /**
   * The starting position of the pupil in the vitreous. Either a position
   * constant or a number representing an angle in degrees near the eye rim
   * to place the pupil to.
   */
  @Prop({ reflect: true }) position: Position = 'center'
  /**
   * The clipping path of the movement of the eye pupil. Either the natural
   * area of the eye vitreous, or only a circle in the middle of it.
   */
  @Prop({ reflect: true }) radius: Radius = 'natural'
  /**
   * Moves the pupil to the starting position specified by the `position`
   * property, when the mouse cursor leaves the page boundary.
   */
  @Prop({ reflect: true }) reset = false

  /**
   * Emitted whenever the pupil position gets reset to the original value.
   */
  @Event({ eventName: 'resetposition' }) resetPositionEvent: EventEmitter<undefined>;

  @Watch('delay')
  validateDelay(newValue: string): void {
    checkPositiveInteger('delay', newValue)
  }

  @Watch('distance')
  validateDistance(newValue: string): void {
    checkPositiveInteger('distance', newValue)
  }

  @Watch('position')
  validatePosition(newValue: string): void {
    if (newValue != null && newValue !== '' &&
        newValue !== 'center' && newValue !== 'top' &&
        newValue !== 'bottom' && newValue !== 'left' &&
        newValue !== 'right' && newValue !== 'topRight' &&
        newValue !== 'topLeft' && newValue !== 'bottomRight' &&
        newValue !== 'bottomLeft' && !isPositiveInteger(newValue)) {
      throw new Error('position has to be "center", "top", "bottom", "left", "right", "topRight", "topLeft", "bottomRight", "bottomLeft" or an positive integet, if not empty')
    }
  }

  @Watch('radius')
  validateRadius(newValue: string): void {
    if (newValue != null && newValue !== '' &&
        newValue !== 'natural' && newValue !== 'circular') {
      throw new Error('radius has to be "natural" or "circular", if not empty')
    }
  }

  @Watch('reset')
  validateReset(newValue: string | boolean): void {
    if (newValue != null && newValue !== '' &&
        newValue !== 'true' && newValue !== 'false' &&
        newValue !== true && newValue !== false) {
      throw new Error('reset has to be a boolean, if not empty')
    }
  }

  private leftIrisEl: HTMLElement
  private rightIrisEl: HTMLElement

  private leftEye: Eye
  private rightEye: Eye

  render(): HTMLElement {
    return <Host>
  <div class="eye">
    <div class="iris" ref={el => this.leftIrisEl = el}></div>
  </div>
  <div class="eye">
    <div class="iris" ref={el => this.rightIrisEl = el}></div>
  </div>
</Host>
  }

  /**
   * Enables the eye pupil to follow the mouse cursor movements. This happens
   * automatically after inserting the element and can be changed by calling
   * `stopFollowing`.
   * Returns `true` if the movements started.
   */
  @Method()
  async startFollowing(): Promise<boolean> {
    if (this.leftEye && !this.leftEye.mousemove) {
      startFollowing(this.leftEye)
      startFollowing(this.rightEye)
      return true
    }
  }

  /**
   * Disables the eye pupil to follow the mouse cursor movements. The mouse
   * cursor movements can be followed again by calling `startFollowing`.
   * Returns `true` if the movements stopped.
   */
  @Method()
  async stopFollowing(): Promise<boolean> {
    if (this.leftEye && this.leftEye.mousemove) {
      stopFollowing(this.leftEye)
      stopFollowing(this.rightEye)
      return true
    }
  }

  /**
   * Sets the position of the eye pupil to the initial value set by `position`.
   * Returns `true` if the position was reset.
   */
  @Method()
  async resetPosition(): Promise<boolean> {
    if (this.leftEye) {
      this.leftEye.setPosition(this.position)
      this.rightEye.setPosition(this.position)
      return true
    }
  }

  connectedCallback(): void {
    this.startFollowing()
  }

  componentWillRender(): void {
    if (this.leftEye) {
      this.stopFollowing()
      detachEye(this.leftEye)
      detachEye(this.rightEye)
    }
  }

  componentDidRender(): void {
    const { delay, distance, position, radius, reset } = this
    const onReset = (): void => { this.resetPositionEvent.emit() }
    const options = { delay, distance, position, radius, reset, onReset }
    this.leftEye = attachEye(this.leftIrisEl, options)
    this.rightEye = attachEye(this.rightIrisEl, options)
    this.startFollowing()
  }

  disconnectedCallback(): void {
    this.stopFollowing()
  }
}

function checkPositiveInteger(name: string, value: string): void {
  if (value == null || value === '') return
  if (!isPositiveInteger(value)) throw new Error(`${name} has to be a positive integer, if not empty`)
}

function isPositiveInteger(value: string): boolean {
  const number = +value;
  return number >= 0  && number === Math.floor(number)
}
