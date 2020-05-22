(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),l=(n(0),n(151)),i={title:"Getting Started"},o={id:"getting-started",title:"Getting Started",description:"Before getting started, it is best to understand the core concepts of Relay. It is likely best to read the Relay Getting Started guide to familiarize yourself with Relay.",source:"@site/docs/getting-started.md",permalink:"/svelte-relay/docs/getting-started",editUrl:"https://github.com/kesne/svelte-relay/edit/master/website/docs/getting-started.md",sidebar:"someSidebar",next:{title:"Providing The Environment",permalink:"/svelte-relay/docs/usage/providing-the-environment"}},c=[{value:"Installing",id:"installing",children:[]},{value:"Configuring babel",id:"configuring-babel",children:[]},{value:"Configuring the Relay Compiler",id:"configuring-the-relay-compiler",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Before getting started, it is best to understand the core concepts of Relay. It is likely best to read the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://relay.dev/docs/en/quick-start-guide"}),"Relay Getting Started guide")," to familiarize yourself with Relay."),Object(l.b)("p",null,"Svelte Relay consists of two packages:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"strong"},"svelte-relay"))," - Provides the runtime functionality for using Relay in Svelte."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"strong"},"relay-compiler-language-svelte"))," - Provides support for Svelte files to be supported in the Relay Compiler.")),Object(l.b)("p",null,"The code that is generated from the Relay Compiler is TypeScript, using the ",Object(l.b)("inlineCode",{parentName:"p"},".ts")," extension. To accomodate this, your project will need be able to handle TypeScript files. The ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/home.html"}),"TypeScript documentation")," contains examples for how to integrate TypeScript into your project."),Object(l.b)("h2",{id:"installing"},"Installing"),Object(l.b)("p",null,"To install Svelte Relay into an existing project, you must install the base package, along with the package language to add Svelte support to the Relay Compiler:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install svelte-relay\nnpm install relay-compiler relay-compiler-language-svelte --save-dev\n")),Object(l.b)("h2",{id:"configuring-babel"},"Configuring babel"),Object(l.b)("p",null,"Relay requires a Babel plugin to convert the GraphQL queries to runtime artifacts."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install babel-plugin-relay graphql --save-dev\n")),Object(l.b)("p",null,"Once the package is installed, you will need to configure Babel to use this plugin."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title=".babelrc"',title:'".babelrc"'}),'{\n    "plugins": ["relay"]\n}\n')),Object(l.b)("p",null,'Please note that the "relay" plugin should run before other plugins or presets to ensure the graphql template literals are correctly transformed. See ',Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/plugins/#pluginpreset-ordering"}),"Babel's documentation on this topic"),"."),Object(l.b)("p",null,"Alternatively, instead of using ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kentcdodds/babel-plugin-macros"}),Object(l.b)("inlineCode",{parentName:"a"},"babel-plugin-macros")),". After installing ",Object(l.b)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config, you can use the macro in your project:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const graphql = require('babel-plugin-relay/macro');\n\nconst AppQuery = graphql`\n    query AppQuery {\n        # ...\n    }\n`;\n")),Object(l.b)("h2",{id:"configuring-the-relay-compiler"},"Configuring the Relay Compiler"),Object(l.b)("p",null,"While you can configure Relay with CLI arguments, we recommend using the ",Object(l.b)("inlineCode",{parentName:"p"},"relay-config")," package to configure the Relay Compiler."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install relay-config --save-dev\n")),Object(l.b)("p",null,"With this package installed, can then create a ",Object(l.b)("inlineCode",{parentName:"p"},"relay.config.js")," file, where you can provide configuration to the relay comiler."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:'title="relay.config.js"',title:'"relay.config.js"'}),"module.exports = {\n    src: './src',\n    schema: './server/schema.graphql',\n    language: 'svelte',\n};\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Relay Compiler Documentation:")," ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://relay.dev/docs/en/installation-and-setup#set-up-relay-compiler"}),"https://relay.dev/docs/en/installation-and-setup#set-up-relay-compiler")))}s.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),g=r,d=b["".concat(i,".").concat(g)]||b[g]||u[g]||l;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);