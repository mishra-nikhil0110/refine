"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5079],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(h,i(i({ref:r},c),{},{components:t})):n.createElement(h,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97739:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={id:"useOnError",title:"useOnError",siderbar_label:"useOnError",description:"useOnError data hook from refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useOnError/index.ts"},i=void 0,s={unversionedId:"api-reference/core/hooks/auth/useOnError",id:"api-reference/core/hooks/auth/useOnError",title:"useOnError",description:"useOnError data hook from refine is a modified version of react-query's useMutation for create mutations",source:"@site/docs/api-reference/core/hooks/auth/useOnError.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useOnError",permalink:"/docs/api-reference/core/hooks/auth/useOnError",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/auth/useOnError.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681285145,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"useOnError",title:"useOnError",siderbar_label:"useOnError",description:"useOnError data hook from refine is a modified version of react-query's useMutation for create mutations",source:"/packages/core/src/hooks/auth/useOnError/index.ts"},sidebar:"someSidebar",previous:{title:"useIsAuthenticated",permalink:"/docs/api-reference/core/hooks/auth/useIsAuthenticated"},next:{title:"useGetIdentity",permalink:"/docs/api-reference/core/hooks/auth/useGetIdentity"}},u={},l=[{value:"Usage",id:"usage",level:2}],c={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useOnError")," calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," method from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,o.kt)("p",null,"It returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being isSuccess and isError."),(0,o.kt)("p",null,"Data that is resolved from the ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," will be returned as the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type OnErrorResponse = {\n    redirectTo?: string;\n    logout?: boolean;\n    error?: Error;\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logout"),": If is ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"useOnError")," calls the ",(0,o.kt)("inlineCode",{parentName:"li"},"logout")," method."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),": An Error object representing any errors that may have occurred during the operation.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Imagine that we make a payment request which is declined by the API. If the error status code is ",(0,o.kt)("inlineCode",{parentName:"p"},"418"),", the user will be logged out for security reasons."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useOnError } from "@refinedev/core";\n\n// highlight-next-line\nconst { mutate: onError } = useOnError();\n\nfetch("http://example.com/payment")\n    .then(() => console.log("Success"))\n    // highlight-next-line\n    .catch((error) => onError(error));\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Any error passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," function will be available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider"),".")),(0,o.kt)("br",null),(0,o.kt)("p",null,"We have a logic in ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"onError")," method like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    logout: () => {\n        // ---\n        return {\n            success: true,\n            redirectTo: "/login",\n        };\n    },\n    // highlight-start\n    onError: (error) => {\n        const status = error.status;\n        if (status === 418) {\n            return {\n                logout: true,\n                redirectTo: "/login",\n                error: new Error(error),\n            };\n        }\n        return {};\n    },\n    // highlight-end\n    // ---\n};\n')))}p.isMDXComponent=!0}}]);