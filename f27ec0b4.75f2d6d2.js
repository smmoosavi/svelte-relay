(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),i=(n(0),n(151)),a={title:"Providing The Environment"},l={id:"usage/providing-the-environment",title:"Providing The Environment",description:"In order to use the svelte-relay package, you must provide a Relay Environment to the Svelte Context. This is used to autoamtically provide the environment to all components in your Svelte application.",source:"@site/docs/usage/providing-the-environment.md",permalink:"/svelte-relay/docs/usage/providing-the-environment",editUrl:"https://github.com/kesne/svelte-relay/edit/master/website/docs/usage/providing-the-environment.md",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/svelte-relay/docs/getting-started"},next:{title:"Making Queries",permalink:"/svelte-relay/docs/usage/making-queries"}},c=[{value:"Getting the Environment",id:"getting-the-environment",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to use the ",Object(i.b)("inlineCode",{parentName:"p"},"svelte-relay")," package, you must provide a Relay Environment to the Svelte Context. This is used to autoamtically provide the environment to all components in your Svelte application."),Object(i.b)("p",null,"For details on how to construct a Relay Environment, ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://relay.dev/docs/en/relay-environment"}),"refer to the Relay Documentation"),"."),Object(i.b)("p",null,"The environment can be provided using the ",Object(i.b)("inlineCode",{parentName:"p"},"setRelayEnvironment")," function. Usually, this function is called once at the very root of the application, in order to set the Relay environment for the whole application."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html",metastring:'title="App.svelte"',title:'"App.svelte"'}),"<script>\n    import { setRelayEnvironment } from 'svelte-relay';\n    import environment from './myEnvironment.js';\n\n    setRelayEnvironment(environment);\n<\/script>\n")),Object(i.b)("h2",{id:"getting-the-environment"},"Getting the Environment"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"svelte-relay")," package also exports a ",Object(i.b)("inlineCode",{parentName:"p"},"getRelayEnvironment()")," function, which can be used to get the current Relay Environment from the Svelte Context. If no environment is found, an error will be thrown."))}s.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),v=r,d=u["".concat(a,".").concat(v)]||u[v]||m[v]||i;return n?o.a.createElement(d,l(l({ref:t},p),{},{components:n})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"}}]);