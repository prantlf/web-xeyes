'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e130fa01.js');

/*
 Stencil Client Patch Esm v3.2.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["x-eyes.cjs",[[1,"x-eyes",{"delay":[514],"distance":[514],"position":[520],"radius":[513],"reset":[516],"startFollowing":[64],"stopFollowing":[64],"resetPosition":[64]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map