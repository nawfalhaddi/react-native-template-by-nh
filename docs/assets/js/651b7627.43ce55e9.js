"use strict";(self.webpackChunkdocs_rn_template_by_nh=self.webpackChunkdocs_rn_template_by_nh||[]).push([[260],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=i,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:1},o="Setup supporting multiple environments (.env)",l={unversionedId:"basic-setup/setup-env",id:"basic-setup/setup-env",title:"Setup supporting multiple environments (.env)",description:"In most companies, usually they go through multiple environments such as production, staging and development environment.",source:"@site/docs/basic-setup/setup-env.md",sourceDirName:"basic-setup",slug:"/basic-setup/setup-env",permalink:"/react-native-template-by-nh/docs/basic-setup/setup-env",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basic-setup/setup-env.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic setup",permalink:"/react-native-template-by-nh/docs/category/basic-setup"},next:{title:"Implement Git hooks",permalink:"/react-native-template-by-nh/docs/basic-setup/setup-githooks"}},p={},s=[{value:"Installing react-native-config:",id:"installing-react-native-config",level:2},{value:"Setup for android:",id:"setup-for-android",level:2},{value:"Setup iOS:",id:"setup-ios",level:2},{value:"Accessing environment variables:",id:"accessing-environment-variables",level:2},{value:"Sources:",id:"sources",level:2}],d={toc:s};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-supporting-multiple-environments-env"},"Setup supporting multiple environments (.env)"),(0,i.kt)("p",null,"In most companies, usually they go through multiple environments such as production, staging and development environment.\nIn this chapter we will explain how can you implement ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," configuration inside your react native application to support multiple environments."),(0,i.kt)("admonition",{title:"Warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It is not recommended that you commit any sensitive information in .env file to code in case your git repo is exposed.\nThe best practice is to put a .env.template or .env.development.template that contains dummy values so other developers know what to configure. Then add your .env and .env.development to .gitignore.")),(0,i.kt)("h2",{id:"installing-react-native-config"},"Installing react-native-config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add react-native-config\n")),(0,i.kt)("p",null,"After the install , run the setup for iOS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ios && pod install && cd ..\n")),(0,i.kt)("h2",{id:"setup-for-android"},"Setup for android:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add below line of code in order to apply the plugin:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'},'apply plugin: "com.android.application"\n\n+ apply from: project(\':react-native-config\').projectDir.getPath() + "/dotenv.gradle"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create three files in root folder of the project ",(0,i.kt)("inlineCode",{parentName:"li"},".env.development"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".env.staging")," & ",(0,i.kt)("inlineCode",{parentName:"li"},".env.production")," which will contain our environment variables.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// .env.development\nAPI_URL=https://myapi.development.com\n\n// .env.staging\nAPI_URL=https://myapi.staging.com\n\n// .env.production\nAPI_URL=https://myapi.com\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now we need to define ",(0,i.kt)("inlineCode",{parentName:"li"},"envConfigFiles")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"build.gradle")," associating builds with env files. To achieve this, add the below code before the ",(0,i.kt)("inlineCode",{parentName:"li"},"apply from")," call, and be sure to leave the build cases in lowercase.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'},'+ project.ext.envConfigFiles = [\n+ productiondebug: ".env.production",\n+ productionrelease: ".env.production",\n+ developmentrelease: ".env.development",\n+ developmentdebug: ".env.development",\n+ stagingrelease: ".env.staging",\n+ stagingdebug: ".env.staging"\n+ ]\n\napply from: project(\':react-native-config\').projectDir.getPath() + "/dotenv.gradle"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Next, add ",(0,i.kt)("inlineCode",{parentName:"li"},"productFlavors")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"build.gradle"),", just below ",(0,i.kt)("inlineCode",{parentName:"li"},"buildTypes"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'},'    buildTypes {\n        debug {\n            signingConfig signingConfigs.debug\n        }\n        release {\n            // Caution! In production, you need to generate your own keystore file.\n            // see https://reactnative.dev/docs/signed-apk-android.\n            signingConfig signingConfigs.debug\n            minifyEnabled enableProguardInReleaseBuilds\n            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"\n        }\n    }\n\n+ flavorDimensions "default"\n+ productFlavors {\n+ production {}\n+ staging {\n+ // We can have build-specific configurations here. Like using applicationIdSuffix to create different package name (ex. ".staging")\n+ }\n+ development {}\n+ }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Names should match based on ",(0,i.kt)("inlineCode",{parentName:"li"},"productFlavors"),", so ",(0,i.kt)("inlineCode",{parentName:"li"},"productiondebug")," will match ",(0,i.kt)("inlineCode",{parentName:"li"},"debug")," in this case and generate debug build of App with configuration from ",(0,i.kt)("inlineCode",{parentName:"li"},".env.production"),".")),(0,i.kt)("p",null,"Also add ",(0,i.kt)("inlineCode",{parentName:"p"},"matchingFallbacks")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"buildTypes")," as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'},"    buildTypes {\n        debug {\n            signingConfig signingConfigs.debug\n       +     matchingFallbacks = ['debug', 'release']\n        }\n        release {\n            // Caution! In production, you need to generate your own keystore file.\n            // see https://reactnative.dev/docs/signed-apk-android.\n            signingConfig signingConfigs.debug\n            minifyEnabled enableProguardInReleaseBuilds\n            proguardFiles getDefaultProguardFile(\"proguard-android.txt\"), \"proguard-rules.pro\"\n        }\n    }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add in your ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," these scripts:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="package.json"',title:'"package.json"'},'+ "android:staging": "react-native run-android --variant=stagingdebug",\n+ "android:staging-release": "react-native run-android --variant=stagingrelease",\n+ "android:dev": "react-native run-android --variant=developmentdebug",\n+ "android:dev-release": "react-native run-android --variant=developmentrelease",\n+ "android:prod": "react-native run-android --variant=productiondebug",\n+ "android:prod-release": "react-native run-android --variant=productionrelease",\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now, to have a ",(0,i.kt)("inlineCode",{parentName:"li"},"debug")," build with ",(0,i.kt)("inlineCode",{parentName:"li"},"development")," environment, run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn android:dev\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Or to have a ",(0,i.kt)("inlineCode",{parentName:"li"},"production")," build with release mode, run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn android:prod-release\n")),(0,i.kt)("h2",{id:"setup-ios"},"Setup iOS:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In iOS, we'll build three new schemes called ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAppDevelopment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAppStaging"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"TestAppProduction")," that each contain configuration files for the appropriate environments of ",(0,i.kt)("inlineCode",{parentName:"p"},"development"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"staging"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"production"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open the project in Xcode by running ",(0,i.kt)("inlineCode",{parentName:"p"},"open ./ios/MyApp.xcworkspace")," and perform the following steps to create schemes:\nGo to ",(0,i.kt)("strong",{parentName:"p"},"Product > Scheme > Edit Scheme")," in the Xcode menu.\n",(0,i.kt)("img",{alt:".env setup ios step 1",src:t(670).Z,width:"2268",height:"1472"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click Duplicate Scheme on the bottom and name it ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAppDevelopment")," and check the shared checkbox. The previous actions will be repeated twice more (for ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAppStaging")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAppProduction"),")."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:".env setup ios step 1",src:t(4720).Z,width:"2004",height:"1336"}),"\n",(0,i.kt)("img",{alt:".env setup ios step 1",src:t(7778).Z,width:"1910",height:"1266"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Now inside edit schemes, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"new generated scheme")," and then expand ",(0,i.kt)("inlineCode",{parentName:"p"},"Build settings")," in the sidebar, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Pre actions")," and under the plus sign select ",(0,i.kt)("inlineCode",{parentName:"p"},"New Run Script Action"),".\n",(0,i.kt)("img",{alt:".env setup ios step 1",src:t(6690).Z,width:"1954",height:"1312"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select project from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Provide build settings")," from dropdown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Where it says ",(0,i.kt)("inlineCode",{parentName:"p"},"Type a script or drag a script file"),", type:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cp "${PROJECT_DIR}/../.env.staging" "${PROJECT_DIR}/../.env"  # replace .env.staging for your file\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:".env setup ios step 1",src:t(3808).Z,width:"1936",height:"1286"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Do the same steps to the other generated schemes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add the scripts to ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="package.json"',title:'"package.json"'},'  "ios:dev": "react-native run-ios --scheme \'MyAppDevelopment\'",\n  "ios:dev-release": "react-native run-ios --configuration Release --scheme \'MyAppDevelopment\'",\n  "ios:prod": "react-native run-ios --scheme \'MyAppProduction\'",\n  "ios:prod-release": "react-native run-ios --configuration Release --scheme \'MyAppProduction\'",\n  "ios:staging": "react-native run-ios --scheme \'MyAppStaging\'",\n  "ios:staging-release": "react-native run-ios --configuration Release --scheme \'MyAppStaging\'",\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now, to have a build with development environment, run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn ios:dev\n")),(0,i.kt)("p",null,"And it will run the application with development configuration."),(0,i.kt)("h2",{id:"accessing-environment-variables"},"Accessing environment variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once everything is set up, we can access the variables as follows:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import Config from "react-native-config";\nConfig.API_URL;\n//`https://myapi.development.com`\n\n')),(0,i.kt)("h2",{id:"sources"},"Sources:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-config"},"https://www.npmjs.com/package/react-native-config")))}u.isMDXComponent=!0},670:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ios-env-1-b4d7e3339d93b0631eeabf88eb1bba9f.png"},4720:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ios-env-2-b0e427ae5d1682db2fa455a72630d600.png"},7778:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ios-env-3-031853391e7a0e0b71e481471e169ded.png"},6690:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ios-env-4-5e72c2f8ac2e28267be1ab50eac11389.png"},3808:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ios-env-5-2a842f77d40dc650e71dfe24157033aa.png"}}]);