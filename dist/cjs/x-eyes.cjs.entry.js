'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e130fa01.js');

const defaultOptions = {
  distance: 0,
  reset: false,
  radius: 'natural',
  position: 'center',
  delay: 0,
  trigger: window
};
const positions = {
  top: 90,
  bottom: -90,
  left: 180,
  right: 0,
  topRight: 45,
  topLeft: 135,
  bottomRight: -45,
  bottomLeft: -135
};
class Iris {
  el;
  width;
  height;
  offset;
  constructor(el) {
    this.el = el;
    this.width = el.offsetWidth;
    this.height = el.offsetHeight;
  }
  resetOffset() {
    const rect = this.el.getBoundingClientRect();
    const win = this.el.ownerDocument.defaultView;
    const offset = {
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset
    };
    const style = win.getComputedStyle(this.el);
    this.offset = {
      x: offset.left + (this.width / 2) - parseInt(style.left),
      y: offset.top + (this.height / 2) - parseInt(style.top)
    };
  }
  setOffset({ x, y }) {
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
  }
}
class Eye {
  el;
  width;
  height;
  distance;
  position;
  iris;
  mousemove;
  mouseenter;
  mouseleave;
  options;
  constructor(el, irisEl) {
    this.el = el;
    this.width = this.el.scrollWidth;
    this.height = this.el.scrollHeight;
    this.iris = new Iris(irisEl);
    this.position = {
      x: (this.width - this.iris.width) / 2,
      y: (this.height - this.iris.height) / 2
    };
    this.iris.setOffset(this.position);
    this.distance = 0;
  }
  follow(mouse) {
    mouse.x = mouse.x - this.position.x;
    mouse.y = mouse.y - this.position.y;
    this.iris.resetOffset();
    const degree = Math.atan((mouse.y - this.iris.offset.y) / (mouse.x - this.iris.offset.x)), direction = (this.iris.offset.x > mouse.x) ? -1 : 1, newX = Math.cos(degree) * ((this.width - this.iris.width) / 2 - this.distance) * direction, newY = Math.sin(degree) * ((this.height - this.iris.height) / 2 - this.distance) * direction, radius = Math.sqrt(Math.pow(newX, 2) + Math.pow(newY, 2)), distance = Math.sqrt(Math.pow(mouse.y - this.iris.offset.y, 2) + Math.pow(mouse.x - this.iris.offset.x, 2));
    if (radius > distance) {
      this.iris.setOffset({
        x: mouse.x - this.iris.offset.x + this.position.x,
        y: mouse.y - this.iris.offset.y + this.position.y
      });
    }
    else {
      this.iris.setOffset({
        x: this.position.x + newX,
        y: this.position.y + newY
      });
    }
  }
  setPosition(position) {
    if (typeof position === 'object') {
      this.iris.setOffset({
        x: this.position.x - position.x,
        y: this.position.y - position.y
      });
    }
    else if (typeof position === 'number') {
      const degree = position * Math.PI / -180;
      this.iris.setOffset({
        x: this.position.x + Math.cos(degree) * (this.width / 2 - this.iris.width / 2 - this.distance),
        y: this.position.y + Math.sin(degree) * (this.height / 2 - this.iris.height / 2 - this.distance)
      });
    }
    else if (position === 'center') {
      this.iris.setOffset({
        x: this.position.x,
        y: this.position.y
      });
    }
    else if (typeof position === 'string' && positions[position] !== undefined) {
      const degree = positions[position] * Math.PI / -180;
      this.iris.setOffset({
        x: this.position.x + Math.cos(degree) * (this.width / 2 - this.iris.width / 2 - this.distance),
        y: this.position.y + Math.sin(degree) * (this.height / 2 - this.iris.height / 2 - this.distance)
      });
    }
    const onReset = this.options.onReset;
    if (onReset)
      onReset();
  }
}
function attachEye(irisEl, options = {}) {
  const { distance = defaultOptions.distance, position = defaultOptions.position, radius = defaultOptions.radius } = options;
  const eye = new Eye(irisEl.parentElement, irisEl);
  eye.options = options;
  eye.distance = distance;
  if (radius == 'circular' && eye.width > eye.height)
    eye.width = eye.height;
  else if (radius == 'circular')
    eye.height = eye.width;
  eye.setPosition(position);
  return eye;
}
function detachEye(eye) {
  eye.el = null;
  eye.iris.el = null;
}
function startFollowing(eye) {
  const { delay = defaultOptions.delay, position = defaultOptions.position, reset = defaultOptions.reset, trigger = defaultOptions.trigger } = eye.options;
  let follow = true;
  eye.mousemove = ({ pageX, pageY }) => {
    if (!follow)
      return;
    if (delay)
      setTimeout(() => {
        if (follow)
          eye.follow({ x: pageX, y: pageY });
      }, delay);
    else
      eye.follow({ x: pageX, y: pageY });
  };
  trigger.addEventListener('mousemove', eye.mousemove);
  if (reset) {
    const target = trigger === window ? document : trigger.ownerDocument;
    eye.mouseenter = () => { follow = true; };
    target.addEventListener('mouseenter', eye.mouseenter);
    eye.mouseleave = () => {
      follow = false;
      if (delay)
        setTimeout(() => eye.setPosition(position), delay);
      else
        eye.setPosition(position);
    };
    target.addEventListener('mouseleave', eye.mouseleave);
  }
}
function stopFollowing(eye) {
  const { reset = defaultOptions.reset, trigger = defaultOptions.trigger } = eye.options;
  trigger.removeEventListener('mousemove', eye.mousemove);
  eye.mousemove = null;
  if (reset) {
    const target = trigger === window ? document : trigger.ownerDocument;
    target.removeEventListener('mouseenter', eye.mouseenter);
    eye.mouseenter = null;
    target.removeEventListener('mouseleave', eye.mouseleave);
    eye.mouseleave = null;
  }
}

const xEyesCss = ":host{--scale:1;--rim-color:rgba(0,0,0,1);--rim-style:solid;--rim-thickness:calc(var(--scale) * 7px);--eye-color:#fff;--eye-width:calc(var(--scale) * 110px);--eye-height:calc(var(--scale) * 150px);--pupil-color:#000;--iris-color:#000;--iris-breadth:calc(var(--scale) * 7px);--iris-diameter:calc(var(--scale) * 25px);display:inline-block;width:calc(var(--eye-width) * 2 + var(--rim-thickness) * 2 + 1);height:calc(var(--eye-height) + var(--rim-thickness) * 2)}.eye{width:var(--eye-width);height:var(--eye-height);background:var(--eye-color);border-radius:50%;border-width:var(--rim-thickness);border-style:var(--rim-style);border-color:var(--rim-color);position:relative;display:inline-block;cursor:none}.iris{background:var(--pupil-color);width:calc(var(--iris-diameter) - var(--iris-breadth) * 2);height:calc(var(--iris-diameter) - var(--iris-breadth) * 2);border-radius:50%;border:var(--iris-breadth) solid var(--iris-color);position:absolute}";

const XEyesElement = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.resetPositionEvent = index.createEvent(this, "resetposition", 7);
    this.delay = 0;
    this.distance = 0;
    this.position = 'center';
    this.radius = 'natural';
    this.reset = false;
  }
  /**
   * Emitted whenever the pupil position gets reset to the original value.
   */
  resetPositionEvent;
  validateDelay(newValue) {
    checkPositiveInteger('delay', newValue);
  }
  validateDistance(newValue) {
    checkPositiveInteger('distance', newValue);
  }
  validatePosition(newValue) {
    if (newValue != null && newValue !== '' &&
      newValue !== 'center' && newValue !== 'top' &&
      newValue !== 'bottom' && newValue !== 'left' &&
      newValue !== 'right' && newValue !== 'topRight' &&
      newValue !== 'topLeft' && newValue !== 'bottomRight' &&
      newValue !== 'bottomLeft' && !isPositiveInteger(newValue)) {
      throw new Error('position has to be "center", "top", "bottom", "left", "right", "topRight", "topLeft", "bottomRight", "bottomLeft" or an positive integet, if not empty');
    }
  }
  validateRadius(newValue) {
    if (newValue != null && newValue !== '' &&
      newValue !== 'natural' && newValue !== 'circular') {
      throw new Error('radius has to be "natural" or "circular", if not empty');
    }
  }
  validateReset(newValue) {
    if (newValue != null && newValue !== '' &&
      newValue !== 'true' && newValue !== 'false' &&
      newValue !== true && newValue !== false) {
      throw new Error('reset has to be a boolean, if not empty');
    }
  }
  leftIrisEl;
  rightIrisEl;
  leftEye;
  rightEye;
  render() {
    return index.h(index.Host, null, index.h("div", { class: "eye" }, index.h("div", { class: "iris", ref: el => this.leftIrisEl = el })), index.h("div", { class: "eye" }, index.h("div", { class: "iris", ref: el => this.rightIrisEl = el })));
  }
  /**
   * Enables the eye pupil to follow the mouse cursor movements. This happens
   * automatically after inserting the element and can be changed by calling
   * `stopFollowing`.
   * Returns `true` if the movements started.
   */
  async startFollowing() {
    if (this.leftEye && !this.leftEye.mousemove) {
      startFollowing(this.leftEye);
      startFollowing(this.rightEye);
      return true;
    }
  }
  /**
   * Disables the eye pupil to follow the mouse cursor movements. The mouse
   * cursor movements can be followed again by calling `startFollowing`.
   * Returns `true` if the movements stopped.
   */
  async stopFollowing() {
    if (this.leftEye && this.leftEye.mousemove) {
      stopFollowing(this.leftEye);
      stopFollowing(this.rightEye);
      return true;
    }
  }
  /**
   * Sets the position of the eye pupil to the initial value set by `position`.
   * Returns `true` if the position was reset.
   */
  async resetPosition() {
    if (this.leftEye) {
      this.leftEye.setPosition(this.position);
      this.rightEye.setPosition(this.position);
      return true;
    }
  }
  connectedCallback() {
    this.startFollowing();
  }
  componentWillRender() {
    if (this.leftEye) {
      this.stopFollowing();
      detachEye(this.leftEye);
      detachEye(this.rightEye);
    }
  }
  componentDidRender() {
    const { delay, distance, position, radius, reset } = this;
    const onReset = () => { this.resetPositionEvent.emit(); };
    const options = { delay, distance, position, radius, reset, onReset };
    this.leftEye = attachEye(this.leftIrisEl, options);
    this.rightEye = attachEye(this.rightIrisEl, options);
    this.startFollowing();
  }
  disconnectedCallback() {
    this.stopFollowing();
  }
  static get watchers() { return {
    "delay": ["validateDelay"],
    "distance": ["validateDistance"],
    "position": ["validatePosition"],
    "radius": ["validateRadius"],
    "reset": ["validateReset"]
  }; }
};
function checkPositiveInteger(name, value) {
  if (value == null || value === '')
    return;
  if (!isPositiveInteger(value))
    throw new Error(`${name} has to be a positive integer, if not empty`);
}
function isPositiveInteger(value) {
  const number = +value;
  return number >= 0 && number === Math.floor(number);
}
XEyesElement.style = xEyesCss;

exports.x_eyes = XEyesElement;

//# sourceMappingURL=x-eyes.cjs.entry.js.map