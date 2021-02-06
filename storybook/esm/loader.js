import { p as promiseResolve, b as bootstrapLazy } from './index-d680b57c.js';

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["x-eyes",[[1,"x-eyes",{"delay":[514],"distance":[514],"position":[520],"radius":[513],"reset":[516],"startFollowing":[64],"stopFollowing":[64],"resetPosition":[64]}]]]], options);
  });
};

export { defineCustomElements };
