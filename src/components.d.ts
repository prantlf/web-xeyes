/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Position } from "./components/x-eyes/x-eyes";
import { Radius } from "./components/x-eyes/eye";
export namespace Components {
    interface XEyes {
        /**
          * Delay the reaction of the eye of the mouse cursor movement. A number representing a time period in milliseconds is expected.
         */
        "delay": number;
        /**
          * The minimum distance of the iris from the eye rim to keep when following the mouse cursor movements.
         */
        "distance": number;
        /**
          * The starting position of the pupil in the vitreous. Either a position constant or a number representing an angle in degrees near the eye rim to place the pupil to.
         */
        "position": Position;
        /**
          * The clipping path of the movement of the eye pupil. Either the natural area of the eye vitreous, or only a circle in the middle of it.
         */
        "radius": Radius;
        /**
          * Moves the pupil to the starting position specified by the `position` property, when the mouse cursor leaves the page boundary.
         */
        "reset": boolean;
        /**
          * Sets the position of the eye pupil to the initial value set by `position`. Returns `true` if the position was reset.
         */
        "resetPosition": () => Promise<boolean>;
        /**
          * Enables the eye pupil to follow the mouse cursor movements. This happens automatically after inserting the element and can be changed by calling `stopFollowing`. Returns `true` if the movements started.
         */
        "startFollowing": () => Promise<boolean>;
        /**
          * Disables the eye pupil to follow the mouse cursor movements. The mouse cursor movements can be followed again by calling `startFollowing`. Returns `true` if the movements stopped.
         */
        "stopFollowing": () => Promise<boolean>;
    }
}
declare global {
    interface HTMLXEyesElement extends Components.XEyes, HTMLStencilElement {
    }
    var HTMLXEyesElement: {
        prototype: HTMLXEyesElement;
        new (): HTMLXEyesElement;
    };
    interface HTMLElementTagNameMap {
        "x-eyes": HTMLXEyesElement;
    }
}
declare namespace LocalJSX {
    interface XEyes {
        /**
          * Delay the reaction of the eye of the mouse cursor movement. A number representing a time period in milliseconds is expected.
         */
        "delay"?: number;
        /**
          * The minimum distance of the iris from the eye rim to keep when following the mouse cursor movements.
         */
        "distance"?: number;
        /**
          * Emitted whenever the pupil position gets reset to the original value.
         */
        "onResetposition"?: (event: CustomEvent<undefined>) => void;
        /**
          * The starting position of the pupil in the vitreous. Either a position constant or a number representing an angle in degrees near the eye rim to place the pupil to.
         */
        "position"?: Position;
        /**
          * The clipping path of the movement of the eye pupil. Either the natural area of the eye vitreous, or only a circle in the middle of it.
         */
        "radius"?: Radius;
        /**
          * Moves the pupil to the starting position specified by the `position` property, when the mouse cursor leaves the page boundary.
         */
        "reset"?: boolean;
    }
    interface IntrinsicElements {
        "x-eyes": XEyes;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "x-eyes": LocalJSX.XEyes & JSXBase.HTMLAttributes<HTMLXEyesElement>;
        }
    }
}
