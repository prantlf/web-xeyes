let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u={},f=e=>"object"==(e=typeof e)||"function"===e,d=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?$(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=$(e,null);return i.u=t,c.length>0&&(i.$=c),i},$=(e,t)=>({t:0,p:e,i:t,h:null,$:null,u:null}),y={},p=(e,t,n,l,s,o)=>{if(n!==l){let c=z(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=m(n),o=m(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("ref"===t)l&&l(e);else{const r=f(l);if((c||r&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&o||s)&&!r&&e.setAttribute(t,l=!0===l?"":l)}}},h=/\s/,m=e=>e?e.split(h):[],b=(e,t,n,l)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,o=e&&e.u||u,c=t.u||u;for(l in o)l in c||p(s,l,o[l],void 0,n,t.t);for(l in c)p(s,l,o[l],c[l],n,t.t)},w=(t,n,l)=>{let o,c,r=n.$[l],i=0;if(o=r.h=s.createElement(r.p),b(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.$)for(i=0;i<r.$.length;++i)c=w(t,r,i),c&&o.appendChild(c);return o},S=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=w(null,l,o),r&&(s[o].h=r,i.insertBefore(r,n)))},g=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.h,v(l),s.remove())},j=(e,t)=>e.p===t.p,k=(e,t)=>{const n=t.h=e.h,l=e.$,s=t.$;b(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],d=l[u];for(;o<=r&&c<=u;)null==i?i=t[++o]:null==a?a=t[--r]:null==f?f=l[++c]:null==d?d=l[--u]:j(i,f)?(k(i,f),i=t[++o],f=l[++c]):j(a,d)?(k(a,d),a=t[--r],d=l[--u]):j(i,d)?(k(i,d),e.insertBefore(i.h,a.h.nextSibling),i=t[++o],d=l[--u]):j(a,f)?(k(a,f),e.insertBefore(a.h,i.h),a=t[--r],f=l[++c]):(s=w(t&&t[c],n,c),f=l[++c],s&&i.h.parentNode.insertBefore(s,i.h));o>r?S(e,null==l[u+1]?null:l[u+1].h,n,l,c,u):c>u&&g(t,o,r)})(n,l,t,s):null!==s?S(n,null,t,s,0,s.length-1):null!==l&&g(l,0,l.length-1)},v=e=>{e.u&&e.u.ref&&e.u.ref(null),e.$&&e.$.map(v)},C=(e,t,n)=>{const l=(e=>N(e).m)(e);return{emit:e=>M(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},M=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},O=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},P=(e,t)=>{if(e.t|=16,!(4&e.t))return O(e,e.g),te((()=>x(e,t)));e.t|=512},x=(e,t)=>{const n=e.j;let l;return l=F(l,(()=>A(n,"componentWillRender"))),F(l,(()=>R(e,n,t)))},R=async(e,t,n)=>{const l=e.m,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.m,l=t.t,o=((e,t)=>{let n=a(t),l=J.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);E(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>T(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},E=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.m,o=n.k,c=n.v||$(null,null),r=(e=>e&&e.p===y)(l)?l:d(null,null,l);t=s.tagName,o.C&&(r.u=r.u||{},o.C.map((([e,t])=>r.u[t]=s[e]))),r.p=null,r.t|=4,n.v=r,r.h=c.h=s.shadowRoot||s,e=s["s-sc"],k(c,r)})(n,l)}catch(e){B(e,n.m)}return null},T=e=>{const t=e.m,n=e.g;A(e.j,"componentDidRender"),64&e.t||(e.t|=64,H(t),e.M(t),n||W()),e.O(t),e.S&&(e.S(),e.S=void 0),512&e.t&&ee((()=>P(e,!1))),e.t&=-517},W=()=>{H(s.documentElement),ee((()=>M(l,"appload",{detail:{namespace:"web-xeyes"}})))},A=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){B(e)}},F=(e,t)=>e&&e.then?e.then(t):t(),H=e=>e.classList.add("hydrated"),L=(e,t,n)=>{if(t.P){e.watchers&&(t.R=e.watchers);const l=Object.entries(t.P),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>N(this).T.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=N(e),o=s.m,c=s.T.get(t),r=s.t,i=s.j;if(n=((e,t)=>null==e||f(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.P[t][0]),!(8&r&&void 0!==c||n===c)&&(s.T.set(t,n),i)){if(l.R&&128&r){const e=l.R[t];e&&e.map((e=>{try{i[e](n,c,t)}catch(e){B(e,o)}}))}2==(18&r)&&P(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=N(this);return n.W.then((()=>n.j[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){o.jmp((()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.C.push([e,s]),s}))}}return e},U=e=>{A(e,"connectedCallback")},q=(e,t={})=>{const n=[],c=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),d=s.createElement("style"),$=[];let y,p=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],P:t[2],A:t[3]};l.P=t[2],l.C=[],l.R={};const s=l.o,u=class extends HTMLElement{constructor(e){super(e),_(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),p?$.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=N(e),n=t.k,l=()=>{};if(1&t.t)U(t.j);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){O(t,t.g=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=I(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.R=s.watchers,L(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){B(e)}t.t&=-9,t.t|=128,e(),U(t.j)}if(s.style){let e=s.style;const t=a(n);if(!J.has(t)){const l=()=>{};((e,t,n)=>{let l=J.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,J.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,c=()=>P(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>(()=>{0==(1&o.t)&&A(N(this).j,"disconnectedCallback")})()))}componentOnReady(){return N(this).F}};l.H=e[0],c.includes(s)||i.get(s)||(n.push(s),i.define(s,L(u,l,1)))})))),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),u.insertBefore(d,f?f.nextSibling:u.firstChild),p=!1,$.length?$.map((e=>e.connectedCallback())):o.jmp((()=>y=setTimeout(W,30)))},D=new WeakMap,N=e=>D.get(e),V=(e,t)=>D.set(t.j=e,t),_=(e,t)=>{const n={t:0,m:e,k:t,T:new Map};return n.W=new Promise((e=>n.O=e)),n.F=new Promise((e=>n.M=e)),e["s-p"]=[],e["s-rc"]=[],D.set(e,n)},z=(e,t)=>t in e,B=(e,t)=>(0,console.error)(e,t),G=new Map,I=e=>{const t=e.o.replace(/-/g,"_"),n=e.H,l=G.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(G.set(n,e),e[t])),B)},J=new Map,K=[],Q=[],X=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?ee(Z):o.raf(Z))},Y=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){B(e)}e.length=0},Z=()=>{Y(K),Y(Q),(n=K.length>0)&&o.raf(Z)},ee=e=>c().then(e),te=X(Q,!0);export{y as H,q as b,C as c,d as h,c as p,V as r}