'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e130fa01.js');

/*
 Stencil Client Patch Browser v3.2.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('web-xeyes.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["x-eyes.cjs",[[1,"x-eyes",{"delay":[514],"distance":[514],"position":[520],"radius":[513],"reset":[516],"startFollowing":[64],"stopFollowing":[64],"resetPosition":[64]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=web-xeyes.cjs.js.map