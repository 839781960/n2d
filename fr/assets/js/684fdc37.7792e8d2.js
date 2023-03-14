"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,f=d(e,["components","mdxType","originalType","parentName"]),s=l(n),u=i,m=s["".concat(c,".").concat(u)]||s[u]||p[u]||a;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"Embedding gif",sidebar_position:5,slug:"/f105ae8f-4193-47c3-b91b-1140d9e4f39c"},o=void 0,d={unversionedId:"Examples/Embedding-gif",id:"Examples/Embedding-gif",title:"Embedding gif",description:"If you embed a gif in notion, it should be embedded in Docusaurus",source:"@site/docs/Examples/Embedding-gif.md",sourceDirName:"Examples",slug:"/f105ae8f-4193-47c3-b91b-1140d9e4f39c",permalink:"/n2d/fr/f105ae8f-4193-47c3-b91b-1140d9e4f39c",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Embedding gif",sidebar_position:5,slug:"/f105ae8f-4193-47c3-b91b-1140d9e4f39c"},sidebar:"defaultSidebar",previous:{title:"Embedding Video",permalink:"/n2d/fr/095b02cb-725a-498d-950a-8318a5ab5d93"},next:{title:"Embedding Bloom Books",permalink:"/n2d/fr/21c9b6c4-aa7e-4a07-91b3-4dfb8e90c601"}},c={},l=[{value:"Imgur",id:"d9aea2bf5f144ad18e7a03d9e2696ad0",level:2},{value:"Giffy,",id:"2b6ce97eb0ae482c89dc59f163b2511a",level:2}],f={toc:l};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you embed a gif in notion, it should be embedded in Docusaurus"),(0,i.kt)("h2",{id:"d9aea2bf5f144ad18e7a03d9e2696ad0"},"Imgur"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8748).Z,width:"413",height:"331"})),(0,i.kt)("h2",{id:"2b6ce97eb0ae482c89dc59f163b2511a"},"Giffy,"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9790).Z,width:"384",height:"480"})),(0,i.kt)("p",null,"When it detects an embedded gif, docu-notion does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adds a ",(0,i.kt)("inlineCode",{parentName:"li"},'import GifPlayer from "react-gif-player";')," to the markdown."),(0,i.kt)("li",{parentName:"ul"},"Inserts html like ",(0,i.kt)("inlineCode",{parentName:"li"},'<GifPlayer gif="https://media.giphy.com/media/VhiAuDYHkNPydiNnOs/giphy.gif" />'))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If your site is not based on ",(0,i.kt)("inlineCode",{parentName:"p"},"docu-notion-sample-site"),", you may need to add react-gif-player to your Docusaurus project:\n",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add react-gif-player")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm i react-gif-player"))))}p.isMDXComponent=!0},8748:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1607379524-ccb843d869c0093acb6913b175b65b40.gif"},9790:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/705447076-389b214d9163b9abd56343bc5c3f6c98.gif"}}]);