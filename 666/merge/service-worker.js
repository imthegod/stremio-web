if(!self.define){let e,c={};const f=(f,b)=>(f=new URL(f+".js",b).href,c[f]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=c,document.head.appendChild(e)}else e=f,importScripts(f),c()})).then((()=>{let e=c[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(b,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(c[d])return;let i={};const s=e=>f(e,d),r={module:{uri:d},exports:i,require:s};c[d]=Promise.all(b.map((e=>r[e]||s(e)))).then((e=>(a(...e),i)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/binaries/stremio_core_web_bg.wasm",revision:"bca86abcbcbe7b4bc89b1c151b8a34c4"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/scripts/main.js",revision:"7e33bf90cec7125cf80b1b52382c9341"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/scripts/worker.js",revision:"4967bce11769d2b8edaf2ddd69b0e83a"},{url:"539caf7c18502f8000371f34bc4ddea8bb88944f/styles/main.css",revision:"de91e194e6e395fdd5383469f1bcef18"},{url:"index.html",revision:"bc5f8e8a6d4d36adedd0bf2821272a1d"}],{})}));
//# sourceMappingURL=service-worker.js.map
