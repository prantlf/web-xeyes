import { EventEmitter } from '../../stencil-public-runtime';
import { Radius } from './eye';
export declare type Position = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft' | number;
/**
 * Shows a pair of eyes following movements of the mouse cursor on the page.
 */
export declare class XEyesElement {
  /**
   * Delay the reaction of the eye of the mouse cursor movement.
   * A number representing a time period in milliseconds is expected.
   */
  delay: number;
  /**
   * The minimum distance of the iris from the eye rim to keep when following
   * the mouse cursor movements.
   */
  distance: number;
  /**
   * The starting position of the pupil in the vitreous. Either a position
   * constant or a number representing an angle in degrees near the eye rim
   * to place the pupil to.
   */
  position: Position;
  /**
   * The clipping path of the movement of the eye pupil. Either the natural
   * area of the eye vitreous, or only a circle in the middle of it.
   */
  radius: Radius;
  /**
   * Moves the pupil to the starting position specified by the `position`
   * property, when the mouse cursor leaves the page boundary.
   */
  reset: boolean;
  /**
   * Emitted whenever the pupil position gets reset to the original value.
   */
  resetPositionEvent: EventEmitter<undefined>;
  validateDelay(newValue: string): void;
  validateDistance(newValue: string): void;
  validatePosition(newValue: string): void;
  validateRadius(newValue: string): void;
  validateReset(newValue: string | boolean): void;
  private leftIrisEl;
  private rightIrisEl;
  private leftEye;
  private rightEye;
  render(): HTMLElement;
  /**
   * Enables the eye pupil to follow the mouse cursor movements. This happens
   * automatically after inserting the element and can be changed by calling
   * `stopFollowing`.
   * Returns `true` if the movements started.
   */
  startFollowing(): Promise<boolean>;
  /**
   * Disables the eye pupil to follow the mouse cursor movements. The mouse
   * cursor movements can be followed again by calling `startFollowing`.
   * Returns `true` if the movements stopped.
   */
  stopFollowing(): Promise<boolean>;
  /**
   * Sets the position of the eye pupil to the initial value set by `position`.
   * Returns `true` if the position was reset.
   */
  resetPosition(): Promise<boolean>;
  connectedCallback(): void;
  componentWillRender(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
}
