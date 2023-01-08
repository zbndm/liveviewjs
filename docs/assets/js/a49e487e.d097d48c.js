"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[1037],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(7896),r=(n(2784),n(876));const s={sidebar_position:1},o="Security Topics",a={unversionedId:"misc/security-topics",id:"misc/security-topics",title:"Security Topics",description:"Here are some security topics to consider when using LiveViewJS.",source:"@site/docs/13-misc/security-topics.md",sourceDirName:"13-misc",slug:"/misc/security-topics",permalink:"/docs/misc/security-topics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Miscellaneous",permalink:"/docs/category/miscellaneous"},next:{title:"Live Components",permalink:"/docs/misc/livecomponents"}},c={},l=[{value:"Authenticity Tokens / CSRF Protection",id:"authenticity-tokens--csrf-protection",level:2},{value:"Websocket Join Authenticity",id:"websocket-join-authenticity",level:3},{value:"LiveViewJS Forms Authenticity",id:"liveviewjs-forms-authenticity",level:3},{value:"Session Data",id:"session-data",level:2},{value:"Default SerDe uses JWT",id:"default-serde-uses-jwt",level:3},{value:"Please Ask Questions \ud83c\udf81",id:"please-ask-questions-",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"security-topics"},"Security Topics"),(0,r.kt)("p",null,"Here are some security topics to consider when using LiveViewJS."),(0,r.kt)("h2",{id:"authenticity-tokens--csrf-protection"},"Authenticity Tokens / CSRF Protection"),(0,r.kt)("p",null,"We use CSRF tokens (a.k.a. Authenticity Tokens) to protect against Cross-Site Request Forgery (CSRF) attacks. CSRF\nattacks are a type of malicious exploit where unauthorized commands are performed on behalf of an authenticated user."),(0,r.kt)("h3",{id:"websocket-join-authenticity"},"Websocket Join Authenticity"),(0,r.kt)("p",null,"Every LiveView page load embeds a CSRF token in the page header in a ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," tag named ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf-token"),". This token is\ncreated by ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," when the HTML page is initially rendered. The ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," client-side code automatically\npulls in that token and sends it to the server as part of the websocket join phase where it is used to verify that the\nrequest is legitimate."),(0,r.kt)("h3",{id:"liveviewjs-forms-authenticity"},"LiveViewJS Forms Authenticity"),(0,r.kt)("p",null,"LiveViewJS expects forms to have an input named ",(0,r.kt)("inlineCode",{parentName:"p"},"_csrf_token"),". This input field is automatically added to forms by the\n",(0,r.kt)("inlineCode",{parentName:"p"},"form_for")," helper and populated by the csrf token passed in during join. If you don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"form_for")," you can add a\nhidden input with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"_csrf_token")," and populate it yourself. When the form is submitted, the ",(0,r.kt)("inlineCode",{parentName:"p"},"_csrf_token")," input\nfield is sent to the server along with the form data. The ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," server verifies that the submitted CSRF token\nmatches the CSRF token from the page header. If they do not match, the request is rejected. ",(0,r.kt)("strong",{parentName:"p"},"If the CSRF token is\nmissing, the server prints out a warning but allows the form submission to continue.")),(0,r.kt)("h2",{id:"session-data"},"Session Data"),(0,r.kt)("p",null,"Part of the webserver integration is being able to pass any session data from the HTTP session to the LiveView websocket\nsession. ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," allows each webserver integration to implement a ",(0,r.kt)("inlineCode",{parentName:"p"},"getSessionData")," method that returns a JSON\nobject containing the session data. ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," then uses the webserver integration's serializer/deserializer (a.k.a.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SerDe"),") to serialize this data to be passed to the server as part of the websocket join. The ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," server then\ndeserializes the session data and makes it available to the LiveView via the ",(0,r.kt)("inlineCode",{parentName:"p"},"session")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},"mount"),"."),(0,r.kt)("h3",{id:"default-serde-uses-jwt"},"Default SerDe uses JWT"),(0,r.kt)("p",null,"The default SerDe implementation uses JWT to serialize and deserialize the session data. This means that the session\ndata is signed (which prevents tampering) but not encrypted. If you want to encrypt the session data, you will have to\nimplement your own SerDe."),(0,r.kt)("h2",{id:"please-ask-questions-"},"Please Ask Questions \ud83c\udf81"),(0,r.kt)("p",null,"If there is something you are concerned about regarding security and LiveViewJS, please add an issue to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/floodfx/liveviewjs/issues"},"LiveViewJS GitHub repo"),". We will do our best to answer your questions and\naddress any concerns you may have."))}u.isMDXComponent=!0}}]);