(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./dist/esm/index.js":function(module,exports){},"./dist/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _esm_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index.js");__webpack_require__.o(_esm_index_js__WEBPACK_IMPORTED_MODULE_0__,"XEyesElement")&&__webpack_require__.d(__webpack_exports__,"XEyesElement",(function(){return _esm_index_js__WEBPACK_IMPORTED_MODULE_0__.XEyesElement}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/.pnpm/@storybook+html@6.5.16_@babel+core@7.21.8_eslint@8.40.0_typescript@5.0.4/node_modules/@storybook/html/dist/esm/client/index.js").configure)([__webpack_require__("./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$")],module,!1)}).call(this,__webpack_require__("./node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/buildin/module.js")(module))},"./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./x-eyes/x-eyes.stories.mdx":"./src/components/x-eyes/x-eyes.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/components sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/x-eyes/x-eyes.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultStory",(function(){return defaultStory})),__webpack_require__.d(__webpack_exports__,"delayed",(function(){return delayed})),__webpack_require__.d(__webpack_exports__,"distance",(function(){return distance})),__webpack_require__.d(__webpack_exports__,"position",(function(){return position})),__webpack_require__.d(__webpack_exports__,"radiusAndColor",(function(){return radiusAndColor})),__webpack_require__.d(__webpack_exports__,"resetAndSize",(function(){return resetAndSize})),__webpack_require__.d(__webpack_exports__,"configurable",(function(){return configurable}));__webpack_require__("./node_modules/.pnpm/core-js@3.30.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.30.2/node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.30.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.30.2/node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.30.2/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");var esm=__webpack_require__("./node_modules/.pnpm/@mdx-js+react@1.6.22_react@16.14.0/node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@6.5.16_@babel+core@7.21.8_eslint@8.40.0_react-dom@16.14.0_react@16.14.0_pd7hvwfhmy5u67mewuuanbxbl4/node_modules/@storybook/addon-docs/dist/esm/index.js"),blocks=__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@6.5.16_@babel+core@7.21.8_eslint@8.40.0_react-dom@16.14.0_react@16.14.0_pd7hvwfhmy5u67mewuuanbxbl4/node_modules/@storybook/addon-docs/blocks.js"),dist=__webpack_require__("./dist/index.js"),readme='# &lt;x-eyes&gt;\n\nShows a pair of eyes following movements of the mouse cursor on the page.\n\n![Example](./example.gif)\n\nSee the [on-line demo](https://prantlf.github.io/web-xeyes/) or the [storybook](https://prantlf.github.io/web-xeyes/storybook/).\n\n## Usage\n\n1: Insert the `x-eyes` element to your page, either with no attributes, or with explicit attributes to change the default behaviour:\n\n```html\n<x-eyes></x-eyes>\n<x-eyes delay=200 distance=5></x-eyes>\n```\n\nYou can also use CSS properties to change the default look & feel:\n\n```html\n<style>\n  x-eyes.small-brown {\n    --scale: 0.2;\n    --iris-color: #850;\n  }\n</style>\n<x-eyes class=small-brown></x-eyes>\n```\n\n2: Insert the script loading the web component before the end of the `body` element:\n\n```html\n<script type=module src=https://unpkg.com/web-xeyes@1.0.3/dist/web-xeyes/web-xeyes.esm.js><\/script>\n```\n\n### Local Installation\n\nYou can install this component locally by using your favourite Node.js package manager:\n\n```sh\nnpm i web-xeyes\nyarn add web-xeyes\npnpm i web-xeyes\n```\n\nThen you can refer to the installed component directly from your web pages:\n\n```html\n<script type=module src=node_modules/web-xeyes/dist/web-xeyes/web-xeyes.esm.js><\/script>\n```\n\nYou can also include the component in your application bundle:\n\n```js\nimport { XEyesElement } from \'web-xeyes\'\n```\n\n\x3c!-- Auto Generated Below --\x3e\n\n\n## Overview\n\nShows a pair of eyes following movements of the mouse cursor on the page.\n\n## Properties\n\n| Property   | Attribute  | Description                                                                                                                                                         | Type                                                                                                                       | Default     |\n| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------- |\n| `delay`    | `delay`    | Delay the reaction of the eye of the mouse cursor movement. A number representing a time period in milliseconds is expected.                                        | `number`                                                                                                                   | `0`         |\n| `distance` | `distance` | The minimum distance of the iris from the eye rim to keep when following the mouse cursor movements.                                                                | `number`                                                                                                                   | `0`         |\n| `position` | `position` | The starting position of the pupil in the vitreous. Either a position constant or a number representing an angle in degrees near the eye rim to place the pupil to. | `"bottom" \\| "bottomLeft" \\| "bottomRight" \\| "center" \\| "left" \\| "right" \\| "top" \\| "topLeft" \\| "topRight" \\| number` | `\'center\'`  |\n| `radius`   | `radius`   | The clipping path of the movement of the eye pupil. Either the natural area of the eye vitreous, or only a circle in the middle of it.                              | `"circular" \\| "natural"`                                                                                                  | `\'natural\'` |\n| `reset`    | `reset`    | Moves the pupil to the starting position specified by the `position` property, when the mouse cursor leaves the page boundary.                                      | `boolean`                                                                                                                  | `false`     |\n\n\n## Events\n\n| Event           | Description                                                           | Type                     |\n| --------------- | --------------------------------------------------------------------- | ------------------------ |\n| `resetposition` | Emitted whenever the pupil position gets reset to the original value. | `CustomEvent<undefined>` |\n\n\n## Methods\n\n### `resetPosition() => Promise<boolean>`\n\nSets the position of the eye pupil to the initial value set by `position`.\nReturns `true` if the position was reset.\n\n#### Returns\n\nType: `Promise<boolean>`\n\n\n\n### `startFollowing() => Promise<boolean>`\n\nEnables the eye pupil to follow the mouse cursor movements. This happens\nautomatically after inserting the element and can be changed by calling\n`stopFollowing`.\nReturns `true` if the movements started.\n\n#### Returns\n\nType: `Promise<boolean>`\n\n\n\n### `stopFollowing() => Promise<boolean>`\n\nDisables the eye pupil to follow the mouse cursor movements. The mouse\ncursor movements can be followed again by calling `startFollowing`.\nReturns `true` if the movements stopped.\n\n#### Returns\n\nType: `Promise<boolean>`\n\n\n\n\n## CSS Custom Properties\n\n| Name              | Description                                                                                                                                                   |\n| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `--eye-color`     | Color of the eye vitreous. `#fff` is the default.                                                                                                             |\n| `--eye-height`    | Length of the y-axis of the eye ellipsis. Excludes the eye rim. `150px` is the default.                                                                       |\n| `--eye-width`     | Length of the x-axis of the eye ellipsis. Excludes the eye rim. `110px` is the default.                                                                       |\n| `--iris-breadth`  | Breadth of the eye irs outside of the pupil. Be careful not to make it greater than the diameter io the iris. `7px` is the default.                           |\n| `--iris-color`    | Color of the eye iris. `#000` is the default.                                                                                                                 |\n| `--iris-diameter` | Diameter of the eye irs. Be careful not to make it greater than the length of either of the axes of the elliptical shape of the eye. `25px` is the default.   |\n| `--pupil-color`   | Color of the eye pupil. `#000` is the default.                                                                                                                |\n| `--rim-color`     | Color of the eye vitreous rim - the border around the vitreous. `rgba(0,0,0,1)` is the default.                                                               |\n| `--rim-style`     | Line style of the eye rim - the border around the vitreous. `solid` is the default.                                                                           |\n| `--rim-thickness` | Thickness of the eye rim - the border around the vitreous. Be careful not to make it too thick. `7px` is the default.                                         |\n| `--scale`         | Size transformation factor. If you want to make the eyes greater or smaller as a whole, setting this property is the simplest way. `1` (100%) is the default. |\n\n\n----------------------------------------------\n\n*Built with [StencilJS](https://stenciljs.com/)*\n',_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(blocks.a,{title:"Components/XEyesElement",component:dist.XEyesElement,argTypes:{onResetPosition:{action:"resetposition"}},parameters:{notes:readme,actions:{handles:["resetposition"]},controls:{disable:!0,expanded:!0,hideNoControlsWarning:!0}},mdxType:"Meta"}),Object(esm.b)("h1",{id:"x-eyes"},"<","x-eyes",">"),Object(esm.b)("p",null,"Shows a pair of eyes following movements of the mouse cursor on the page."),Object(esm.b)("h2",{id:"default"},"Default"),Object(esm.b)("p",null,"Default look ","&"," feel:"),Object(esm.b)(blocks.b,{withToolbar:!0,mdxType:"Preview"},Object(esm.b)(blocks.d,{name:"Default",mdxType:"Story"},"\n<x-eyes></x-eyes>\n")),Object(esm.b)("h2",{id:"delayed"},"Delayed"),Object(esm.b)("p",null,"Movement delayed by 200ms:"),Object(esm.b)(blocks.b,{withToolbar:!0,mdxType:"Preview"},Object(esm.b)(blocks.d,{name:"Delayed",mdxType:"Story"},"\n<x-eyes delay=200></x-eyes>\n")),Object(esm.b)("h2",{id:"distance"},"Distance"),Object(esm.b)("p",null,"Iris distance 5px:"),Object(esm.b)(blocks.b,{withToolbar:!0,mdxType:"Preview"},Object(esm.b)(blocks.d,{name:"Distance",mdxType:"Story"},"\n<x-eyes distance=5></x-eyes>\n")),Object(esm.b)("h2",{id:"position"},"Position"),Object(esm.b)("p",null,"Iris starts at the bottom:"),Object(esm.b)(blocks.b,{withToolbar:!0,mdxType:"Preview"},Object(esm.b)(blocks.d,{name:"Position",mdxType:"Story"},"\n<x-eyes position=bottom></x-eyes>\n")),Object(esm.b)("h2",{id:"radius-and-color"},"Radius and Color"),Object(esm.b)("p",null,"Circular iris path, brown:"),Object(esm.b)(blocks.b,{withToolbar:!0,mdxType:"Preview"},Object(esm.b)(blocks.d,{name:"Radius and Color",mdxType:"Story"},"\n<style>x-eyes.brown { --iris-color: #850 }</style>\n<x-eyes radius=circular class=brown></x-eyes>\n")),Object(esm.b)("h2",{id:"reset-and-size"},"Reset and Size"),Object(esm.b)("p",null,"Reset iris position when mouse leaves the page, small:"),Object(esm.b)(blocks.b,{withToolbar:!0,mdxType:"Preview"},Object(esm.b)(blocks.d,{name:"Reset and Size",mdxType:"Story"},"\n<style>x-eyes.small { --scale: 0.15 }</style>\n<x-eyes reset class=small></x-eyes>\n")),Object(esm.b)("h2",{id:"configurable"},"Configurable"),Object(esm.b)("p",null,"Configurable parameters:"),Object(esm.b)(blocks.b,{withToolbar:!0,mdxType:"Preview"},Object(esm.b)(blocks.d,{name:"Configurable",argTypes:{delay:{description:"Delay the reaction of the eye of the mouse cursor movement. A number representing a time period in milliseconds is expected.",control:"number",table:{defaultValue:{summary:0}}},distance:{description:"The minimum distance of the iris from the eye rim to keep when following the mouse cursor movements.",control:"number",table:{defaultValue:{summary:0}}},position:{description:"The starting position of the pupil in the vitreous. Either a position constant or a number representing an angle in degrees near the eye rim to place the pupil to.",control:{type:"select",options:["center","top","bottom","left","right","topRight","topLeft","bottomRight","bottomLeft"]},table:{defaultValue:{summary:"center"}}},radius:{description:"The clipping path of the movement of the eye pupil. Either the natural area of the eye vitreous, or only a circle in the middle of it.",control:{type:"select",options:["natural","circular"]},table:{defaultValue:{summary:"natural"}}},reset:{description:"Moves the pupil to the starting position specified by the `position` property, when the mouse cursor leaves the page boundary.",control:"boolean",table:{defaultValue:{summary:!1}}},onResetPosition:{description:"Emitted whenever the pupil position gets reset to the original value.",action:"resetposition"}},args:{delay:200,distance:10,position:"bottom",radius:"circular",reset:!0},parameters:{controls:{disable:!1}},mdxType:"Story"},(function(_ref2){return"<x-eyes delay="+_ref2.delay+" distance="+_ref2.distance+" position="+_ref2.position+"\n               radius="+_ref2.radius+" reset="+_ref2.reset+"></x-eyes>"}))),Object(esm.b)("h2",{id:"api"},"API"),Object(esm.b)(blocks.c,{of:dist.XEyesElement,mdxType:"Props"}))}MDXContent.isMDXComponent=!0;var defaultStory=function defaultStory(){return"\n<x-eyes></x-eyes>\n"};defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:"`\n<x-eyes></x-eyes>\n`"}};var delayed=function delayed(){return"\n<x-eyes delay=200></x-eyes>\n"};delayed.storyName="Delayed",delayed.parameters={storySource:{source:"`\n<x-eyes delay=200></x-eyes>\n`"}};var distance=function distance(){return"\n<x-eyes distance=5></x-eyes>\n"};distance.storyName="Distance",distance.parameters={storySource:{source:"`\n<x-eyes distance=5></x-eyes>\n`"}};var position=function position(){return"\n<x-eyes position=bottom></x-eyes>\n"};position.storyName="Position",position.parameters={storySource:{source:"`\n<x-eyes position=bottom></x-eyes>\n`"}};var radiusAndColor=function radiusAndColor(){return"\n<style>x-eyes.brown { --iris-color: #850 }</style>\n<x-eyes radius=circular class=brown></x-eyes>\n"};radiusAndColor.storyName="Radius and Color",radiusAndColor.parameters={storySource:{source:"`\n<style>x-eyes.brown { --iris-color: #850 }</style>\n<x-eyes radius=circular class=brown></x-eyes>\n`"}};var resetAndSize=function resetAndSize(){return"\n<style>x-eyes.small { --scale: 0.15 }</style>\n<x-eyes reset class=small></x-eyes>\n"};resetAndSize.storyName="Reset and Size",resetAndSize.parameters={storySource:{source:"`\n<style>x-eyes.small { --scale: 0.15 }</style>\n<x-eyes reset class=small></x-eyes>\n`"}};var configurable=function configurable(_ref3){return"<x-eyes delay="+_ref3.delay+" distance="+_ref3.distance+" position="+_ref3.position+"\n               radius="+_ref3.radius+" reset="+_ref3.reset+"></x-eyes>"};configurable.storyName="Configurable",configurable.argTypes={delay:{description:"Delay the reaction of the eye of the mouse cursor movement. A number representing a time period in milliseconds is expected.",control:"number",table:{defaultValue:{summary:0}}},distance:{description:"The minimum distance of the iris from the eye rim to keep when following the mouse cursor movements.",control:"number",table:{defaultValue:{summary:0}}},position:{description:"The starting position of the pupil in the vitreous. Either a position constant or a number representing an angle in degrees near the eye rim to place the pupil to.",control:{type:"select",options:["center","top","bottom","left","right","topRight","topLeft","bottomRight","bottomLeft"]},table:{defaultValue:{summary:"center"}}},radius:{description:"The clipping path of the movement of the eye pupil. Either the natural area of the eye vitreous, or only a circle in the middle of it.",control:{type:"select",options:["natural","circular"]},table:{defaultValue:{summary:"natural"}}},reset:{description:"Moves the pupil to the starting position specified by the `position` property, when the mouse cursor leaves the page boundary.",control:"boolean",table:{defaultValue:{summary:!1}}},onResetPosition:{description:"Emitted whenever the pupil position gets reset to the original value.",action:"resetposition"}},configurable.args={delay:200,distance:10,position:"bottom",radius:"circular",reset:!0},configurable.parameters=Object.assign({storySource:{source:"({\n  delay,\n  distance,\n  position,\n  radius,\n  reset\n}) => `<x-eyes delay=${delay} distance=${distance} position=${position}\n               radius=${radius} reset=${reset}></x-eyes>`"}},{controls:{disable:!1}});var componentMeta={title:"Components/XEyesElement",parameters:{notes:readme,actions:{handles:["resetposition"]},controls:{disable:!0,expanded:!0,hideNoControlsWarning:!0}},component:dist.XEyesElement,argTypes:{onResetPosition:{action:"resetposition"}},includeStories:["defaultStory","delayed","distance","position","radiusAndColor","resetAndSize","configurable"]},mdxStoryNameToKey={Default:"defaultStory",Delayed:"delayed",Distance:"distance",Position:"position","Radius and Color":"radiusAndColor","Reset and Size":"resetAndSize",Configurable:"configurable"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(esm.b)(MDXContent,null))}});__webpack_exports__.default=componentMeta},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/@storybook+html@6.5.16_@babel+core@7.21.8_eslint@8.40.0_typescript@5.0.4/node_modules/@storybook/html/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/.pnpm/@storybook+core-client@6.5.16_react-dom@16.14.0_react@16.14.0_typescript@5.0.4_webpack@4.46.0/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/.pnpm/@storybook+core-client@6.5.16_react-dom@16.14.0_react@16.14.0_typescript@5.0.4_webpack@4.46.0/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+html@6.5.16_@babel+core@7.21.8_eslint@8.40.0_typescript@5.0.4/node_modules/@storybook/html/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+html@6.5.16_@babel+core@7.21.8_eslint@8.40.0_typescript@5.0.4/node_modules/@storybook/html/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@6.5.16_@babel+core@7.21.8_eslint@8.40.0_react-dom@16.14.0_react@16.14.0_pd7hvwfhmy5u67mewuuanbxbl4/node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-actions@6.5.16_react-dom@16.14.0_react@16.14.0/node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-backgrounds@6.5.16_react-dom@16.14.0_react@16.14.0/node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-measure@6.5.16_react-dom@16.14.0_react@16.14.0/node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-outline@6.5.16_react-dom@16.14.0_react@16.14.0/node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-links@6.5.16_react-dom@16.14.0_react@16.14.0/node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/.pnpm/@storybook+addon-a11y@6.5.16_react-dom@16.14.0_react@16.14.0/node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){},2:function(module,exports){}},[[0,5,6]]]);