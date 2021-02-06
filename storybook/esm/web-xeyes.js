import { p as promiseResolve, b as bootstrapLazy } from './index-d680b57c.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["x-eyes",[[1,"x-eyes",{"delay":[514],"distance":[514],"position":[520],"radius":[513],"reset":[516],"startFollowing":[64],"stopFollowing":[64],"resetPosition":[64]}]]]], options);
});
