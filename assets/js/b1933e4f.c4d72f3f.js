"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75432],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=u(r),m=o,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||n;return r?a.createElement(c,i(i({ref:t},l),{},{components:r})):a.createElement(c,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},23393:(e,t,r)=>{r.d(t,{ZP:()=>i});var a=r(87462),o=(r(67294),r(3905));const n={toc:[]};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},n,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use the following auth provider examples as a starting point for your own auth provider or you can use them as it is. Check the links below to see the details of each example."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/authentication/headless/"},"Basic")," - A basic auth provider example."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/keycloak"},"Keycloak")," - An auth provider example with Keycloak."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/auth0"},"Auth0")," - An auth provider example with Auth0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/google-auth"},"Google Auth")," - An auth provider example with Google Auth."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/otpLogin"},"OTP Login")," - An auth provider example with OTP Login."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/appwrite"},"Appwrite")," - An auth provider example with Appwrite."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/supabase"},"Supabase")," - An auth provider example with Supabase."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/strapi-v4"},"Strapi")," - An auth provider example with Strapi."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/strapi-graphql"},"Strapi Graphql")," - An auth provider example with Strapi Graphql."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/nhost"},"Nhost")," - An auth provider example with Nhost."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/next-js/"},"Basic with Nextjs")," - A basic auth provider example with Nextjs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/examples/remix/remix-headless"},"Basic with Remix")," - A basic auth provider example with Remix.")))}i.isMDXComponent=!0},70549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),o=(r(67294),r(3905)),n=r(23393);const i={id:"index",title:"1. Auth Provider",tutorial:{order:0,prev:!1,next:"tutorial/understanding-authprovider/create-authprovider"}},p=void 0,s={unversionedId:"tutorial/understanding-authprovider/index",id:"version-3.xx.xx/tutorial/understanding-authprovider/index",title:"1. Auth Provider",description:"What is auth provider?",source:"@site/versioned_docs/version-3.xx.xx/tutorial/5-understanding-authprovider/0-intro.md",sourceDirName:"tutorial/5-understanding-authprovider",slug:"/tutorial/understanding-authprovider/index",permalink:"/docs/3.xx.xx/tutorial/understanding-authprovider/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/5-understanding-authprovider/0-intro.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680169059,formattedLastUpdatedAt:"Mar 30, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"1. Auth Provider",tutorial:{order:0,prev:!1,next:"tutorial/understanding-authprovider/create-authprovider"}}},u={},l=[{value:"What is auth provider?",id:"what-is-auth-provider",level:2},{value:"Using Auth Providers in refine",id:"using-auth-providers-in-refine",level:2},{value:"How are auth provider methods used in the app?",id:"how-are-auth-provider-methods-used-in-the-app",level:2},{value:"Auth Provider Examples",id:"auth-provider-examples",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},h=d("Checklist"),m=d("ChecklistItem"),c={toc:l};function v(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-auth-provider"},"What is auth provider?"),(0,o.kt)("p",null,"Auth provider is a object which contains methods to handle authentication and authorization in your app. It provides a way to authenticate users and authorize them to access resources. ",(0,o.kt)("strong",{parentName:"p"},"refine")," consumes these methods via auth hooks."),(0,o.kt)("p",null,"Auth provider's methods expect to return a Promise. So, you can use async methods to create auth provider. Therefore, to create auth provider from scratch, you can use any third-party authentication service like Auth0, Okta, etc. or your own custom methods. We'll see how to create auth provider in the next sections."),(0,o.kt)("p",null,"Moreover, ",(0,o.kt)("strong",{parentName:"p"},"refine")," offers built-in examples for auth providers. You can use them as a starting point for your own auth provider. You can check ",(0,o.kt)("a",{parentName:"p",href:"#auth-provider-examples"},"Auth Provider Examples")," to see the list of examples."),(0,o.kt)("p",null,"The typical auth provider has following methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { AuthProvider } from "@pankod/refine-core";\n\nconst authProvider: AuthProvider = {\n    login: (params) => Promise,\n    logout: (params) => Promise,\n    checkAuth: (params?) => Promise,\n    checkError: (error) => Promise,\n    ...\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Above methods are required. You can find other optional methods in next section.")),(0,o.kt)("p",null,"These methods are used to perform auth operations by ",(0,o.kt)("strong",{parentName:"p"},"refine")," hooks. You can check ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},"Auth Provider")," documentation to see the details of each method."),(0,o.kt)("h2",{id:"using-auth-providers-in-refine"},"Using Auth Providers in refine"),(0,o.kt)("p",null,"When you create a new auth provider, you need to pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component as a prop. So, ",(0,o.kt)("strong",{parentName:"p"},"refine")," can use it to handle authentication."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'...\nimport { AuthProvider } from "@pankod/refine-core";\n\n// It is a mock auth provider.\nconst authProvider: AuthProvider = {\n    login: (params) => Promise,\n    logout: (params) => Promise,\n    checkAuth: (params?) => Promise,\n    checkError: (error) => Promise,\n    ...\n}\n\n<Refine\n    ...\n    authProvider={authProvider}\n/>;\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>")," documentation for more information ","\u2192")),(0,o.kt)("h2",{id:"how-are-auth-provider-methods-used-in-the-app"},"How are auth provider methods used in the app?"),(0,o.kt)("p",null,"Each method of auth provider is corresponding to a hook in ",(0,o.kt)("strong",{parentName:"p"},"refine"),". So, you can use these hooks to perform auth operations in your app. You can check ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/auth/useAuthenticated/"},"Auth Hooks")," documentation to see the details of each hook."),(0,o.kt)("p",null,"For example, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," hook to perform login operation like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@pankod/refine-core";\n\ntype LoginVariables = {\n    email: string;\n    password: string;\n};\n\nconst { mutate } = useLogin<LoginVariables>();\n\nconst handleLogin = async (values) => {\n    await mutate(values);\n};\n')),(0,o.kt)("p",null,"As you can see, ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," hook returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," function. When you call this function, it calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method of auth provider like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const authProvider: AuthProvider = {\n    login: ({ email, password }) => {\n        const response = await axios.post("/api/login", { email, password });\n\n        if (response.status === 200) {\n            return Promise.resolve(response.data);\n        }\n\n        return Promise.reject();\n    },\n    ...\n};\n')),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," method will return a resolved Promise, the ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," function will return a resolved Promise. Otherwise, it will return a rejected Promise. So, you can use the returned Promise to handle the login operation."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We made an example to show the relationship between auth provider methods and auth hooks. We used ",(0,o.kt)("inlineCode",{parentName:"p"},"useLogin")," hook in the example, but all auth hooks work the same way.")),(0,o.kt)("h2",{id:"auth-provider-examples"},"Auth Provider Examples"),(0,o.kt)(n.ZP,{mdxType:"AuthProviderExamplesLinks"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)(h,{mdxType:"Checklist"},(0,o.kt)(m,{id:"auth-provider-intro",mdxType:"ChecklistItem"},"I understood what is auth provider and how it works."),(0,o.kt)(m,{id:"auth-provider-intro-2",mdxType:"ChecklistItem"},"I learned that refine offers built-in auth provider examples.")))}v.isMDXComponent=!0}}]);