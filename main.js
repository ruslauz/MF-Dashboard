(()=>{var e,r,t,n,a={8809:(e,r,t)=>{Promise.all([t.e(92),t.e(169),t.e(497),t.e(989),t.e(925),t.e(293)]).then(t.bind(t,7986))},5337:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof widgets)return e();t.l("http://localhost:3002/remoteEntry.js",(t=>{if("undefined"!=typeof widgets)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"widgets")})).then((()=>widgets))}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={id:e,loaded:!1,exports:{}};return a[e](t,t.exports,i),t.loaded=!0,t.exports}i.m=a,i.c=o,i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@my-reports/dashboard:",i.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){s=f;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",r+a),s.src=t),e[t]=[n];var c=(r,n)=>{s.onerror=s.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),r)return r(n)},h=setTimeout(c.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=c.bind(null,s.onerror),s.onload=c.bind(null,s.onload),l&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t={925:[4075]},n={4075:["default","./constants/widgets",5337]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var a=n[e];if(!(t.indexOf(a)>=0)){if(t.push(a),a.p)return r.push(a.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),i.m[e]=()=>{throw r},a.p=0},s=(e,t,n,i,s,l)=>{try{var u=e(t,n);if(!u||!u.then)return s(u,i,l);var d=u.then((e=>s(e,i)),o);if(!l)return d;r.push(a.p=d)}catch(e){o(e)}},l=(e,r,n)=>s(r.get,a[1],t,0,u,n),u=r=>{a.p=1,i.m[e]=e=>{e.exports=r()}};s(i,a[2],0,0,((e,r,t)=>e?s(i.I,a[0],0,e,l,t):o()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],s="@my-reports/dashboard",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:s>i.from))&&(a[r]={get:t,from:s,eager:!!n})},u=[];return"default"===t&&(l("@reduxjs/toolkit","1.8.4",(()=>Promise.all([i.e(993),i.e(156)]).then((()=>()=>i(1993))))),l("classnames","2.2.6",(()=>i.e(13).then((()=>()=>i(4013))))),l("classnames","2.2.6",(()=>i.e(641).then((()=>()=>i(8641))))),l("classnames","2.3.1",(()=>i.e(184).then((()=>()=>i(4184))))),l("react-dom","16.14.0",(()=>Promise.all([i.e(935),i.e(624)]).then((()=>()=>i(3935))))),l("react-grid-layout","1.3.4",(()=>Promise.all([i.e(968),i.e(169),i.e(454)]).then((()=>()=>i(2036))))),l("react-redux","8.0.2",(()=>Promise.all([i.e(706),i.e(169),i.e(989),i.e(159)]).then((()=>()=>i(6706))))),l("react","16.14.0",(()=>i.e(976).then((()=>()=>i(7294))))),l("uuid","8.3.2",(()=>i.e(614).then((()=>()=>i(1614))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=i(5337);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return u.push(a.then(o,r));var s=o(a);s&&s.then&&u.push(s.catch(r))}catch(e){r(e)}})()),u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],s=(typeof i)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,n+="u"==(typeof(s=e[o]))[0]?"-":(a>0?".":"")+(a=2,s);return n}var i=[];for(o=1;o<e.length;o++){var s=e[o];i.push(0===s?"not("+l()+")":1===s?"("+l()+" || "+l()+")":2===s?i.pop()+" "+i.pop():t(s))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var a=r[0],o=a<0;o&&(a=-a-1);for(var i=0,s=1,l=!0;;s++,i++){var u,d,f=s<r.length?(typeof r[s])[0]:"";if(i>=t.length||"o"==(d=(typeof(u=t[i]))[0]))return!l||("u"==f?s>a&&!o:""==f!=o);if("u"==d){if(!l||"u"!=f)return!1}else if(l)if(f==d)if(s<=a){if(u!=r[s])return!1}else{if(o?u>r[s]:u<r[s])return!1;u!=r[s]&&(l=!1)}else if("s"!=f&&"n"!=f){if(o||s<=a)return!1;l=!1,s--}else{if(s<=a||d<f!=o)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,s--)}}var c=[],h=c.pop.bind(c);for(i=1;i<r.length;i++){var p=r[i];c.push(1==p?h()|h():2==p?h()&h():p?n(p,t):!h())}return!!h()},a=(e,a,i,s)=>{var l=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,i);return n(s,l)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n,a)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(a)+")")(e,i,l,s)),o(e[i][l])},o=e=>(e.loaded=1,e.get()),s=e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)},l=s(((e,r,t,n,o)=>r&&i.o(r,t)?a(r,0,t,n):o())),u=s(((e,t,a,s,l)=>{var u=t&&i.o(t,a)&&((e,t,a)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!n(a,t)||e&&!r(e,t)?e:t),0))&&o[t]})(t,a,s);return u?o(u):l()})),d={},f={2169:()=>l("default","react-dom",[1,16,13,0],(()=>Promise.all([i.e(935),i.e(624)]).then((()=>()=>i(3935))))),1254:()=>u("default","@reduxjs/toolkit",[1,1,8,3],(()=>i.e(993).then((()=>()=>i(1993))))),5558:()=>l("default","react",[1,16,13,0],(()=>i.e(976).then((()=>()=>i(7294))))),5694:()=>u("default","react-redux",[1,8,0,2],(()=>Promise.all([i.e(706),i.e(169),i.e(989),i.e(159)]).then((()=>()=>i(6706))))),8989:()=>l("default","react",[,[1,18,0,0],[1,17,0,0],[1,16,8,0],1,1],(()=>i.e(976).then((()=>()=>i(7294))))),2184:()=>u("default","classnames",[1,2,3,1],(()=>i.e(184).then((()=>()=>i(4184))))),2231:()=>u("default","uuid",[1,8,3,2],(()=>i.e(614).then((()=>()=>i(1614))))),2970:()=>u("default","react-grid-layout",[1,1,3,4],(()=>Promise.all([i.e(968),i.e(454)]).then((()=>()=>i(2036))))),3138:()=>u("default","classnames",[1,2,3,1],(()=>i.e(13).then((()=>()=>i(4013))))),5154:()=>u("default","classnames",[1,2,3,1],(()=>i.e(641).then((()=>()=>i(8641))))),7700:()=>l("default","react",[,[1,17],[-1,17],1,[0,16,8],2],(()=>i.e(976).then((()=>()=>i(7294))))),8988:()=>l("default","react",[,[1,17,0,0],[1,16,8,0],1],(()=>i.e(976).then((()=>()=>i(7294))))),9808:()=>l("default","react",[,[1,18,0,0],[1,17,0,0],[1,16,0,0],[1,15,3,0],1,1,1],(()=>i.e(976).then((()=>()=>i(7294))))),624:()=>l("default","react",[1,16,14,0],(()=>i.e(294).then((()=>()=>i(7294))))),2442:()=>l("default","react",[0,16,3],(()=>i.e(976).then((()=>()=>i(7294))))),7209:()=>l("default","react",[0,16,3,0],(()=>i.e(976).then((()=>()=>i(7294))))),9159:()=>l("default","react",[,[1,18,0],[1,17,0],[1,16,8],1,1],(()=>i.e(976).then((()=>()=>i(7294)))))},c={159:[9159],169:[2169],454:[2442,7209],497:[1254,5558,5694],624:[624],925:[2184,2231,2970,3138,5154,7700,8988,9808],989:[8989]};i.f.consumes=(e,r)=>{i.o(c,e)&&c[e].forEach((e=>{if(i.o(d,e))return r.push(d[e]);var t=r=>{d[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}},n=r=>{delete d[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var a=f[e]();a.then?r.push(d[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))}})(),(()=>{i.b=document.baseURI||self.location.href;var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^((15|16|98)9|454|497|624)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=i.p+i.u(r),s=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,s,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);l&&l(i)}for(r&&r(t);u<o.length;u++)a=o[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunk_my_reports_dashboard=self.webpackChunk_my_reports_dashboard||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.nc=void 0,i(8809)})();