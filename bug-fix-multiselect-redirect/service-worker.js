if(!self.define){let e,a={};const d=(d,f)=>(d=new URL(d+".js",f).href,a[d]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=a,document.head.appendChild(e)}else e=d,importScripts(d),a()})).then((()=>{let e=a[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(f,b)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let i={};const s=e=>d(e,c),r={module:{uri:c},exports:i,require:s};a[c]=Promise.all(f.map((e=>r[e]||s(e)))).then((e=>(b(...e),i)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/binaries/stremio_core_web_bg.wasm",revision:"24041b0c451dacea6fa13eacdd9e21f6"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/scripts/main.js",revision:"8ee5fdfd90e1eadb9ab0f9c8f93bee46"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/scripts/worker.js",revision:"b48e99178f1cc97a5e78a72e5a350855"},{url:"8af7adaee97d529633defc85f9b142b8fcdb1a0e/styles/main.css",revision:"06b35ed88442e9874f8678d4ed300797"},{url:"index.html",revision:"01b8461eb8127ec07674a42ac1345263"}],{})}));
//# sourceMappingURL=service-worker.js.map