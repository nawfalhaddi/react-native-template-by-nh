"use strict";(self.webpackChunkdocs_rn_template_by_nh=self.webpackChunkdocs_rn_template_by_nh||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Get started",s={unversionedId:"intro",id:"intro",title:"Get started",description:"This documentation is made with love, to explain in details our personal approach to design a react native application with best third-party libraries.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/react-native-template-by-nh/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Basic setup",permalink:"/react-native-template-by-nh/docs/category/basic-setup"}},l={},c=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Start a new project:",id:"start-a-new-project",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started"},"Get started"),(0,r.kt)("p",null,"This documentation is made with love, to explain in details our personal approach to design a react native application with best third-party libraries.\nIf you have any idea or suggestion to improve this template, please feel free to reach out to ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/nawfalhaddi/"},"us")," or open an issue inside the repo of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nawfalhaddi/react-native-template-by-nh"},"this template"),"."),(0,r.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure your environnement is ready to run a react native application. if it's not, please check the ",(0,r.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/environment-setup"},"official documentation")," of react native to set up your environnement.")),(0,r.kt)("h2",{id:"start-a-new-project"},"Start a new project:"),(0,r.kt)("p",null,"Once your environnement you're ready to go with creating a new react native application using our template."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, navigate to where you want to start your project and run the following command.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx react-native init MyApp --template react-native-template-by-nh\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once it's done, run this command in order to navigate to your new project and set it up for android and ios:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd MyApp && git init && yarn setup\n")),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"the script ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn setup")," contains all necessary commands to setup your application for android and ios. if you want to know what are these commands check the script ",(0,r.kt)("inlineCode",{parentName:"p"},"setup")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file.")),(0,r.kt)("h1",{id:"project-structure"},"Project structure:"),(0,r.kt)("p",null,"In this part, we will show you the structure of the template and why we chose this structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"src\n|\u2500\u2500 config  => in this folder we include the configuration that our app needs,\n|              such as jest setup and env setup.\n|\n|\u2500\u2500 constants => in this folder we put all constants that we need inside our\n|                application, like react-query-keys and accessibilityIds.\n|\n|\u2500\u2500 hooks     => in this folder we put all hooks that we may be using globally\n|    |           inside our application for example: useIsNetworkEnabled , useApiHeaders...ect.\n|    |\n|    \u251c\u2500\u2500 api  => in this folder we put all hooks of our api calls.\n|    \u2514\u2500\u2500 ..other hooks\n|\n|\u2500\u2500 lib  => in this folder we put the integration of other services, such as sentry, google\n|           analytics...ect\n|\n|\u2500\u2500 navigation => in this folder we include our all kind of navigation such as\n|                 drawer navigation , tab navigation and stack.\n|\n|\u2500\u2500 screens\n|      \u2514\u2500\u2500 screen1  => each screen contains multiple folders that contains specifically\n|             |       the elements that belong to it.\n|             \u251c\u2500\u2500 components\n|             \u251c\u2500\u2500 __tests__\n|             \u251c\u2500\u2500 hooks\n|             \u2514\u2500\u2500 index.tsx\n|\n|\u2500\u2500 scripts => in this folder we put all scripts that we need to run for example we have a script\n|              that creates automatically a new screen `gen-screen.ts`.\n|\n|\u2500\u2500 store  => in this folder we put all reducers that we need to use for redux.\n|\n|\u2500\u2500 translation =>in this folder we put all files related to translation.\n|\n|\u2500\u2500 types => this folder contains all types that we want to declare.\n|\n\u2514\u2500\u2500 ui\n    \u251c\u2500\u2500 components => here we put all common components that are used across the application\n    \u251c\u2500\u2500 fonts => fonts for our application\n    \u251c\u2500\u2500 icons => here we put all icons\n    \u2514\u2500\u2500 theme => here we define our theme\n\n")))}u.isMDXComponent=!0}}]);