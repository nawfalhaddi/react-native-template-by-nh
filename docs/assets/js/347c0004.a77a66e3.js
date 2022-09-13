"use strict";(self.webpackChunkdocs_rn_template_by_nh=self.webpackChunkdocs_rn_template_by_nh||[]).push([[764],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,s=t.originalType,c=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),m=l(n),h=i,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||s;return n?o.createElement(d,r(r({ref:e},p),{},{components:n})):o.createElement(d,r({ref:e},p))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=n.length,r=new Array(s);r[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:i,r[1]=a;for(var l=2;l<s;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3411:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(7462),i=(n(7294),n(3905));const s={sidebar_position:2},r="Implement Git hooks",a={unversionedId:"basic-setup/setup-githooks",id:"basic-setup/setup-githooks",title:"Implement Git hooks",description:"Git hooks are scripts that may be programmed to execute at specific times during the Git lifecycle. These occur at various commit stages, such as the pre-commit and post-commit phases (post-commit).",source:"@site/docs/basic-setup/setup-githooks.md",sourceDirName:"basic-setup",slug:"/basic-setup/setup-githooks",permalink:"/docs/basic-setup/setup-githooks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basic-setup/setup-githooks.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup supporting multiple environments (.env)",permalink:"/docs/basic-setup/setup-env"},next:{title:"Design system",permalink:"/docs/basic-setup/design-system"}},c={},l=[{value:"Setup husky:",id:"setup-husky",level:2},{value:"Install husky:",id:"install-husky",level:3},{value:"Add script to package.json:",id:"add-script-to-packagejson",level:3},{value:"Add commit lint library:",id:"add-commit-lint-library",level:3},{value:"Add scripts to run with git hooks:",id:"add-scripts-to-run-with-git-hooks",level:3},{value:"Sources:",id:"sources",level:2}],p={toc:l};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implement-git-hooks"},"Implement Git hooks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#_client_side_hooks"},"Git hooks")," are scripts that may be programmed to execute at specific times during the Git lifecycle. These occur at various commit stages, such as the pre-commit and post-commit phases (post-commit)."),(0,i.kt)("p",null,"These are beneficial because they enable programmers to execute custom\xa0tasks or even enforce standards by automating the execution of other scripts."),(0,i.kt)("p",null,"In order to execute these scripts, there is a fantastic library which provides easy configuration called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/typicode/husky"},"Husky")),(0,i.kt)("h2",{id:"setup-husky"},"Setup husky:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Husky comes by default set up inside our template, but we would like to explain how to set it up.")),(0,i.kt)("h3",{id:"install-husky"},"Install husky:"),(0,i.kt)("p",null,"You can install husky by running this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add -D husky\n")),(0,i.kt)("h3",{id:"add-script-to-packagejson"},"Add script to package.json:"),(0,i.kt)("p",null,"in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," add this script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="package.json"',title:'"package.json"'},'+   "prepare": "husky install"\n')),(0,i.kt)("h3",{id:"add-commit-lint-library"},"Add commit lint library:"),(0,i.kt)("p",null,"commitlint checks if your commit messages meet the (conventional commit format)","[https://conventionalcommits.org/]","."),(0,i.kt)("p",null,"you can install it by running the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add -D @commitlint/config-conventional @commitlint/cli\n")),(0,i.kt)("h3",{id:"add-scripts-to-run-with-git-hooks"},"Add scripts to run with git hooks:"),(0,i.kt)("p",null,"In our case we want to run ",(0,i.kt)("inlineCode",{parentName:"p"},"commit lint")," for the commit message and run ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lint")," commands in the pre-commit phase."),(0,i.kt)("p",null,"you just need to create the following files that will help you execute these commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title=".husky/commit-msg"',title:'".husky/commit-msg"'},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\nnpx --no -- commitlint --edit ""\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title=".husky/pre-commit"',title:'".husky/pre-commit"'},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\nyarn lint\nyarn test\n')),(0,i.kt)("h2",{id:"sources"},"Sources:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#_client_side_hooks"},"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#","_","client_side_hooks")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/typicode/husky"},"https://github.com/typicode/husky")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/conventional-changelog/commitlint"},"https://github.com/conventional-changelog/commitlint")))}u.isMDXComponent=!0}}]);