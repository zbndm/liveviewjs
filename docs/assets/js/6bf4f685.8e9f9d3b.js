"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[2294],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,b=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?i.createElement(b,r(r({ref:t},u),{},{components:n})):i.createElement(b,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7896),a=(n(2784),n(876));const o={sidebar_position:1},r="Overview",s={unversionedId:"real-time-multi-player-pub-sub/overview",id:"real-time-multi-player-pub-sub/overview",title:"Overview",description:"LiveViewJS natively supports real-time, multi-player user experiences. This is because LiveViewJS (and Phoenix",source:"@site/docs/09-real-time-multi-player-pub-sub/overview.md",sourceDirName:"09-real-time-multi-player-pub-sub",slug:"/real-time-multi-player-pub-sub/overview",permalink:"/docs/real-time-multi-player-pub-sub/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Real-time / Multi-player",permalink:"/docs/category/real-time--multi-player"},next:{title:"Example Pub/Sub LiveView",permalink:"/docs/real-time-multi-player-pub-sub/example-pub-sub"}},p={},l=[{value:"Pub/Sub in LiveViewJS",id:"pubsub-in-liveviewjs",level:2}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"LiveViewJS natively supports real-time, multi-player user experiences. This is because ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," (and Phoenix\nLiveView for that matter) are built on top of Pub/Sub primatives."),(0,a.kt)("p",null,"Pub/Sub is a common pattern for decoupling processes by allowing messages to be sent to a topic by one process and\nreceived asynchronously by another. In LiveViewJS, pub/sub is used to enable real-time, multi-player web application."),(0,a.kt)("h2",{id:"pubsub-in-liveviewjs"},"Pub/Sub in LiveViewJS"),(0,a.kt)("p",null,"There are two main ways to enable real-time, multi-player experiences in LiveViewJS:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"subscribe to topics")," - If you have a LiveView that needs to receive messages from a topic, you can subscribe to the\ntopic in the ",(0,a.kt)("inlineCode",{parentName:"li"},"mount"),' method and receive "Info" messages in the ',(0,a.kt)("inlineCode",{parentName:"li"},"handleInfo")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"broadcast to topics")," - If you have a LiveView (or data model) that needs to send messages to a topic, you can\nbroadcast to the topic using an implementation of the ",(0,a.kt)("inlineCode",{parentName:"li"},"PubSub")," interface.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"LiveViewJS")," ships with three implementations of the ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"PubSub")," interface:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SingleProcessPubSub")," - A pub/sub implementation (backed by ",(0,a.kt)("inlineCode",{parentName:"li"},"EventEmitter")," that is useful for testing and development\n(as it only works in a single process)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RedisPubSub")," - A pub/sub implementation that uses Redis as the pub/sub backend. This is useful for production\ndeployments that are running on NodeJS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BroadcastChannelPubSub")," - A pub/sub implementation that uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"BroadcastChannel")," API which is a server enabled\npub/sub implementation that is useful for production deployments on Deno Deploy. :::")),(0,a.kt)("h2",{parentName:"admonition",id:"subscribe-to-topics"},"Subscribe to Topics"),(0,a.kt)("p",{parentName:"admonition"},"If you have a LiveView that needs to receive messages from a topic, you can subscribe to the topic in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mount"),' method\nand receive "Info" messages in the ',(0,a.kt)("inlineCode",{parentName:"p"},"handleInfo")," method."),(0,a.kt)("p",{parentName:"admonition"},"For example:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\nmount: (socket) => {\n  // subscribe to Info events on the "my_topic" topic\n  socket.subscribe("my_topic");\n},\n...\n')),(0,a.kt)("p",{parentName:"admonition"},"This will cause the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleInfo"),' method to be called with any messages that are broadcast to the "my_topic" topic.'),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\nhandleInfo: (info, socket) => {\n  // handle info messages\n  switch (info.type) {\n    ...\n    case "my_topic":\n      // handle my_topic messages\n      break;\n    ...\n  }\n},\n...\n')),(0,a.kt)("h2",{parentName:"admonition",id:"broadcast-to-topics"},"Broadcast to Topics"),(0,a.kt)("p",{parentName:"admonition"},"If you have a LiveView (or data model) that needs to send messages to a topic, you can broadcast to the topic using an\nimplementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PubSub")," interface."),(0,a.kt)("p",{parentName:"admonition"},"For example:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'...\n// create a pubsub instance\nconst pubSub = new SingleProcessPubSub();\n...\n// broadcast a message to the "my_topic" topic\npubSub.publish("my_topic", { message: "Hello World" });\n...\n')),(0,a.kt)("p",{parentName:"admonition"},"This will cause the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleInfo"),' method to be called with any messages that are broadcast to the "my_topic" topic.'),(0,a.kt)("h2",{parentName:"admonition",id:"connecting-with-other-liveviews"},"Connecting with other LiveViews"),(0,a.kt)("p",{parentName:"admonition"},"It should be clear at this point that if you want to connect LiveView with a different LiveView (either the same type or\na different type) all you need to do is broadcast a message to a topic that the other LiveView is subscribed to."),(0,a.kt)("h2",{parentName:"admonition",id:"connecting-with-external-events"},"Connecting with External Events"),(0,a.kt)("p",{parentName:"admonition"},"Let's say you have an event that is happening outside of the LiveViewJS. All you have to do is connect that event with\nthe ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," by broadcasting a message to a topic that the ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," is subscribed to. This means you either\nneed to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PubSub")," implementation (with the same configuration) in that different code or you need to use the same\npub/sub backend (e.g.,  Redis or BroadcastChannel).")))}m.isMDXComponent=!0}}]);