type Offset = { x: number, y: number }

export type Position = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topRight' |
  'topLeft' | 'bottomRight' | 'bottomLeft' | number | Offset

export type Radius = 'natural' | 'circular'

type Options = {
  distance?: number
  reset?: boolean
  radius?: Radius
  position?: Position
  delay?: number
  trigger?: Window | HTMLElement,
  onReset?: () => void
}

const defaultOptions: Options = {
  distance: 0,
  reset: false,
  radius: 'natural',
  position: 'center',
  delay: 0,
  trigger: window
}

const positions = {
  top: 90,
  bottom: -90,
  left: 180,
  right: 0,
  topRight: 45,
  topLeft: 135,
  bottomRight: -45,
  bottomLeft: -135
}

class Iris {
  el: HTMLElement
  width: number
  height: number
  offset: Offset

  constructor(el) {
    this.el = el

    this.width  = el.offsetWidth
    this.height = el.offsetHeight
  }

  resetOffset() {
    const rect = this.el.getBoundingClientRect()
    const win = this.el.ownerDocument.defaultView
    const offset = {
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset
    }
    const style = win.getComputedStyle(this.el)
    this.offset = {
      x: offset.left + (this.width / 2) - parseInt(style.left),
      y: offset.top + (this.height / 2) - parseInt(style.top)
    }
  }

  setOffset({ x, y }: Offset) {
    this.el.style.left = `${x}px`
    this.el.style.top = `${y}px`
  }
}

export class Eye {
  el: HTMLElement
  width: number
  height: number
  distance: number
  position: Offset
  iris: Iris
  mousemove: (MouseEvent) => void
  mouseenter: (MouseEvent) => void
  mouseleave: (MouseEvent) => void
  options: Options

  constructor(el: HTMLElement, irisEl: HTMLElement) {
    this.el = el

    this.width  = this.el.scrollWidth
    this.height = this.el.scrollHeight

    this.iris   = new Iris(irisEl)

    this.position = {
      x: (this.width - this.iris.width) / 2,
      y: (this.height - this.iris.height) / 2
    }

    this.iris.setOffset(this.position)

    this.distance = 0
  }

  follow(mouse: Offset): void {
    mouse.x = mouse.x - this.position.x
    mouse.y = mouse.y - this.position.y

    this.iris.resetOffset()

    const degree = Math.atan(( mouse.y - this.iris.offset.y) / ( mouse.x - this.iris.offset.x)),
    direction = (this.iris.offset.x > mouse.x) ? -1 : 1,
    newX = Math.cos(degree) * ((this.width - this.iris.width) / 2 - this.distance) * direction,
    newY = Math.sin(degree) * ((this.height - this.iris.height) / 2 - this.distance) * direction,
    radius = Math.sqrt(Math.pow(newX, 2) + Math.pow(newY, 2)),
    distance = Math.sqrt(Math.pow(mouse.y - this.iris.offset.y, 2) + Math.pow(mouse.x - this.iris.offset.x, 2))

    if (radius > distance) {
      this.iris.setOffset({
        x: mouse.x - this.iris.offset.x + this.position.x,
        y: mouse.y - this.iris.offset.y + this.position.y
      })
    } else {
      this.iris.setOffset({
        x: this.position.x + newX,
        y: this.position.y + newY
      })
    }
  }

  setPosition(position: Position): void {
    if (typeof position === 'object') {
      this.iris.setOffset({
        x: this.position.x - position.x,
        y: this.position.y - position.y
      })
    } else if (typeof position === 'number') {
      const degree = position * Math.PI / -180
      this.iris.setOffset({
        x: this.position.x + Math.cos(degree) * (this.width / 2 - this.iris.width / 2 - this.distance),
        y: this.position.y + Math.sin(degree) * (this.height / 2 - this.iris.height / 2 - this.distance)
      })
    } else if (position === 'center') {
      this.iris.setOffset({
        x: this.position.x,
        y: this.position.y
      })
    } else if (typeof position === 'string' && positions[position] !== undefined) {
      const degree = positions[position] * Math.PI / -180
      this.iris.setOffset({
        x: this.position.x + Math.cos(degree) * (this.width / 2 - this.iris.width / 2 - this.distance),
        y: this.position.y + Math.sin(degree) * (this.height / 2 - this.iris.height / 2 - this.distance)
      })
    }
    const onReset = this.options.onReset
    if (onReset) onReset()
  }
}

export function attachEye(irisEl: HTMLElement, options: Options = {}): Eye {
  const {
    distance = defaultOptions.distance,
    position = defaultOptions.position,
    radius = defaultOptions.radius
  } = options

  const eye = new Eye(irisEl.parentElement, irisEl)
  eye.options = options
  eye.distance = distance

  if (radius == 'circular' && eye.width > eye.height) eye.width = eye.height
  else if (radius == 'circular') eye.height = eye.width

  eye.setPosition(position)

  return eye
}

export function detachEye(eye: Eye): void {
  eye.el = null
  eye.iris.el = null
}

export function startFollowing(eye: Eye): void {
  const {
    delay = defaultOptions.delay,
    position = defaultOptions.position,
    reset = defaultOptions.reset,
    trigger = defaultOptions.trigger
  } = eye.options

  let follow = true

  eye.mousemove = ({ pageX, pageY }: MouseEvent) => {
    if (!follow) return
    if (delay) setTimeout(() => {
      if (follow) eye.follow({ x: pageX, y: pageY })
    }, delay)
    else eye.follow({ x: pageX, y: pageY })
  }
  trigger.addEventListener('mousemove', eye.mousemove)

  if (reset) {
    const target = trigger === window ? document : (trigger as HTMLElement).ownerDocument

    eye.mouseenter = () => { follow = true }
    target.addEventListener('mouseenter', eye.mouseenter)

    eye.mouseleave = () => {
      follow = false
      if (delay) setTimeout(() => eye.setPosition(position), delay)
      else eye.setPosition(position)
    }
    target.addEventListener('mouseleave', eye.mouseleave)
  }
}

export function stopFollowing(eye: Eye): void {
  const {
    reset = defaultOptions.reset,
    trigger = defaultOptions.trigger
  } = eye.options

  trigger.removeEventListener('mousemove', eye.mousemove)
  eye.mousemove = null

  if (reset) {
    const target = trigger === window ? document : (trigger as HTMLElement).ownerDocument

    target.removeEventListener('mouseenter', eye.mouseenter)
    eye.mouseenter = null

    target.removeEventListener('mouseleave', eye.mouseleave)
    eye.mouseleave = null
  }
}
