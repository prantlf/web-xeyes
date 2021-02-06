/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { Component, Prop, Event, Watch, Host, Method, h } from '@stencil/core';
import { attachEye, detachEye, startFollowing, stopFollowing } from './eye';
/**
 * Shows a pair of eyes following movements of the mouse cursor on the page.
 */
export class XEyesElement {
  constructor() {
    /**
     * Delay the reaction of the eye of the mouse cursor movement.
     * A number representing a time period in milliseconds is expected.
     */
    this.delay = 0;
    /**
     * The minimum distance of the iris from the eye rim to keep when following
     * the mouse cursor movements.
     */
    this.distance = 0;
    /**
     * The starting position of the pupil in the vitreous. Either a position
     * constant or a number representing an angle in degrees near the eye rim
     * to place the pupil to.
     */
    this.position = 'center';
    /**
     * The clipping path of the movement of the eye pupil. Either the natural
     * area of the eye vitreous, or only a circle in the middle of it.
     */
    this.radius = 'natural';
    /**
     * Moves the pupil to the starting position specified by the `position`
     * property, when the mouse cursor leaves the page boundary.
     */
    this.reset = false;
  }
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
  render() {
    return h(Host, null,
      h("div", { class: "eye" },
        h("div", { class: "iris", ref: el => this.leftIrisEl = el })),
      h("div", { class: "eye" },
        h("div", { class: "iris", ref: el => this.rightIrisEl = el })));
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
  static get is() { return "x-eyes"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["x-eyes.css"]
  }; }
  static get styleUrls() { return {
    "$": ["x-eyes.css"]
  }; }
  static get properties() { return {
    "delay": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Delay the reaction of the eye of the mouse cursor movement.\nA number representing a time period in milliseconds is expected."
      },
      "attribute": "delay",
      "reflect": true,
      "defaultValue": "0"
    },
    "distance": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The minimum distance of the iris from the eye rim to keep when following\nthe mouse cursor movements."
      },
      "attribute": "distance",
      "reflect": true,
      "defaultValue": "0"
    },
    "position": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "Position",
        "resolved": "\"bottom\" | \"bottomLeft\" | \"bottomRight\" | \"center\" | \"left\" | \"right\" | \"top\" | \"topLeft\" | \"topRight\" | number",
        "references": {
          "Position": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The starting position of the pupil in the vitreous. Either a position\nconstant or a number representing an angle in degrees near the eye rim\nto place the pupil to."
      },
      "attribute": "position",
      "reflect": true,
      "defaultValue": "'center'"
    },
    "radius": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Radius",
        "resolved": "\"circular\" | \"natural\"",
        "references": {
          "Radius": {
            "location": "import",
            "path": "./eye"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The clipping path of the movement of the eye pupil. Either the natural\narea of the eye vitreous, or only a circle in the middle of it."
      },
      "attribute": "radius",
      "reflect": true,
      "defaultValue": "'natural'"
    },
    "reset": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Moves the pupil to the starting position specified by the `position`\nproperty, when the mouse cursor leaves the page boundary."
      },
      "attribute": "reset",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "resetPositionEvent",
      "name": "resetposition",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted whenever the pupil position gets reset to the original value."
      },
      "complexType": {
        "original": "undefined",
        "resolved": "undefined",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "startFollowing": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "Enables the eye pupil to follow the mouse cursor movements. This happens\nautomatically after inserting the element and can be changed by calling\n`stopFollowing`.\nReturns `true` if the movements started.",
        "tags": []
      }
    },
    "stopFollowing": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "Disables the eye pupil to follow the mouse cursor movements. The mouse\ncursor movements can be followed again by calling `startFollowing`.\nReturns `true` if the movements stopped.",
        "tags": []
      }
    },
    "resetPosition": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "Sets the position of the eye pupil to the initial value set by `position`.\nReturns `true` if the position was reset.",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "delay",
      "methodName": "validateDelay"
    }, {
      "propName": "distance",
      "methodName": "validateDistance"
    }, {
      "propName": "position",
      "methodName": "validatePosition"
    }, {
      "propName": "radius",
      "methodName": "validateRadius"
    }, {
      "propName": "reset",
      "methodName": "validateReset"
    }]; }
}
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
