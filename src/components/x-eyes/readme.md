# &lt;x-eyes&gt;

Shows a pair of eyes following movements of the mouse cursor on the page.

![Example](./example.gif)

See the [on-line demo](https://prantlf.github.io/web-xeyes/) or the [storybook](https://prantlf.github.io/web-xeyes/storybook/).

## Usage

1: Insert the `x-eyes` element to your page, either with no attributes, or with explicit attributes to change the default behaviour:

```html
<x-eyes></x-eyes>
<x-eyes delay=200 distance=5></x-eyes>
```

You can also use CSS properties to change the default look & feel:

```html
<style>
  x-eyes.small-brown {
    --scale: 0.2;
    --iris-color: #850;
  }
</style>
<x-eyes class=small-brown></x-eyes>
```

2: Insert the script loading the web component before the end of the `body` element:

```html
<script type=module src=https://unpkg.com/web-xeyes@1.0.3/dist/web-xeyes/web-xeyes.esm.js></script>
```

### Local Installation

You can install this component locally by using your favourite Node.js package manager:

```sh
npm i web-xeyes
yarn add web-xeyes
pnpm i web-xeyes
```

Then you can refer to the installed component directly from your web pages:

```html
<script type=module src=node_modules/web-xeyes/dist/web-xeyes/web-xeyes.esm.js></script>
```

You can also include the component in your application bundle:

```js
import { XEyesElement } from 'web-xeyes'
```

<!-- Auto Generated Below -->


## Overview

Shows a pair of eyes following movements of the mouse cursor on the page.

## Properties

| Property   | Attribute  | Description                                                                                                                                                         | Type                                                                                                                       | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `delay`    | `delay`    | Delay the reaction of the eye of the mouse cursor movement. A number representing a time period in milliseconds is expected.                                        | `number`                                                                                                                   | `0`         |
| `distance` | `distance` | The minimum distance of the iris from the eye rim to keep when following the mouse cursor movements.                                                                | `number`                                                                                                                   | `0`         |
| `position` | `position` | The starting position of the pupil in the vitreous. Either a position constant or a number representing an angle in degrees near the eye rim to place the pupil to. | `"bottom" \| "bottomLeft" \| "bottomRight" \| "center" \| "left" \| "right" \| "top" \| "topLeft" \| "topRight" \| number` | `'center'`  |
| `radius`   | `radius`   | The clipping path of the movement of the eye pupil. Either the natural area of the eye vitreous, or only a circle in the middle of it.                              | `"circular" \| "natural"`                                                                                                  | `'natural'` |
| `reset`    | `reset`    | Moves the pupil to the starting position specified by the `position` property, when the mouse cursor leaves the page boundary.                                      | `boolean`                                                                                                                  | `false`     |


## Events

| Event           | Description                                                           | Type                     |
| --------------- | --------------------------------------------------------------------- | ------------------------ |
| `resetposition` | Emitted whenever the pupil position gets reset to the original value. | `CustomEvent<undefined>` |


## Methods

### `resetPosition() => Promise<boolean>`

Sets the position of the eye pupil to the initial value set by `position`.
Returns `true` if the position was reset.

#### Returns

Type: `Promise<boolean>`



### `startFollowing() => Promise<boolean>`

Enables the eye pupil to follow the mouse cursor movements. This happens
automatically after inserting the element and can be changed by calling
`stopFollowing`.
Returns `true` if the movements started.

#### Returns

Type: `Promise<boolean>`



### `stopFollowing() => Promise<boolean>`

Disables the eye pupil to follow the mouse cursor movements. The mouse
cursor movements can be followed again by calling `startFollowing`.
Returns `true` if the movements stopped.

#### Returns

Type: `Promise<boolean>`




## CSS Custom Properties

| Name              | Description                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--eye-color`     | Color of the eye vitreous. `#fff` is the default.                                                                                                             |
| `--eye-height`    | Length of the y-axis of the eye ellipsis. Excludes the eye rim. `150px` is the default.                                                                       |
| `--eye-width`     | Length of the x-axis of the eye ellipsis. Excludes the eye rim. `110px` is the default.                                                                       |
| `--iris-breadth`  | Breadth of the eye irs outside of the pupil. Be careful not to make it greater than the diameter io the iris. `7px` is the default.                           |
| `--iris-color`    | Color of the eye iris. `#000` is the default.                                                                                                                 |
| `--iris-diameter` | Diameter of the eye irs. Be careful not to make it greater than the length of either of the axes of the elliptical shape of the eye. `25px` is the default.   |
| `--pupil-color`   | Color of the eye pupil. `#000` is the default.                                                                                                                |
| `--rim-color`     | Color of the eye vitreous rim - the border around the vitreous. `rgba(0,0,0,1)` is the default.                                                               |
| `--rim-style`     | Line style of the eye rim - the border around the vitreous. `solid` is the default.                                                                           |
| `--rim-thickness` | Thickness of the eye rim - the border around the vitreous. Be careful not to make it too thick. `7px` is the default.                                         |
| `--scale`         | Size transformation factor. If you want to make the eyes greater or smaller as a whole, setting this property is the simplest way. `1` (100%) is the default. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
