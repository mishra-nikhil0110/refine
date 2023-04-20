"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"otpLogin",title:"OTP Login","example-tags":["antd","auth-provider","otp-login"]},i=void 0,p={unversionedId:"examples/auth-provider/otpLogin",id:"version-3.xx.xx/examples/auth-provider/otpLogin",title:"OTP Login",description:"A one-time password(OTP) is a password that has two fundamental properties : it expires quickly, and it can\u2019t be reused. OTPs are usually numeric or alphanumeric strings and are generated for a single login procedure. This example shows how to utilize OTP input logic with refine. You can use one-time passwords to access your application with refine AuthProvider.",source:"@site/versioned_docs/version-3.xx.xx/examples/auth-provider/otpLogin.md",sourceDirName:"examples/auth-provider",slug:"/examples/auth-provider/otpLogin",permalink:"/docs/3.xx.xx/examples/auth-provider/otpLogin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/auth-provider/otpLogin.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1682001276,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{id:"otpLogin",title:"OTP Login","example-tags":["antd","auth-provider","otp-login"]},sidebar:"someSidebar",previous:{title:"Keycloak",permalink:"/docs/3.xx.xx/examples/auth-provider/keycloak"},next:{title:"Calendar",permalink:"/docs/3.xx.xx/examples/ant-design-calendar-example"}},s={},l=[],c=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A one-time password(OTP) is a password that has two fundamental properties : it expires quickly, and it can\u2019t be reused. OTPs are usually numeric or alphanumeric strings and are generated for a single login procedure. This example shows how to utilize OTP input logic with ",(0,o.kt)("strong",{parentName:"p"},"refine"),". You can use one-time passwords to access your application with ",(0,o.kt)("strong",{parentName:"p"},"refine")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},"AuthProvider"),"."),(0,o.kt)(c,{path:"auth-otp",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);