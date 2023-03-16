"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40286],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),h=o,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={id:"antd-auth-page",title:"<AuthPage>",sidebar_label:"<AuthPage>",description:"<AuthPage> component from refine is an authentication page that can be used to login, register, forgot password, and update password.",swizzle:!0,source:"packages/antd/src/components/pages/auth/index.tsx"},i=void 0,s={unversionedId:"api-reference/antd/components/antd-auth-page",id:"api-reference/antd/components/antd-auth-page",title:"<AuthPage>",description:"<AuthPage> component from refine is an authentication page that can be used to login, register, forgot password, and update password.",source:"@site/docs/api-reference/antd/components/auth-page.md",sourceDirName:"api-reference/antd/components",slug:"/api-reference/antd/components/antd-auth-page",permalink:"/docs/api-reference/antd/components/antd-auth-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/auth-page.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678980510,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"antd-auth-page",title:"<AuthPage>",sidebar_label:"<AuthPage>",description:"<AuthPage> component from refine is an authentication page that can be used to login, register, forgot password, and update password.",swizzle:!0,source:"packages/antd/src/components/pages/auth/index.tsx"},sidebar:"someSidebar",previous:{title:"useModal",permalink:"/docs/api-reference/antd/hooks/ui/useModal"},next:{title:"Inferencer",permalink:"/docs/api-reference/antd/components/inferencer"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:2},{value:"Login",id:"login",level:3},{value:"Register",id:"register",level:3},{value:"ForgotPassword",id:"forgotpassword",level:3},{value:"UpdatePassword",id:"updatepassword",level:3},{value:"Props",id:"props",level:2},{value:"<code>providers</code>",id:"providers",level:3},{value:"<code>rememberMe</code>",id:"rememberme",level:3},{value:"<code>loginLink</code>",id:"loginlink",level:3},{value:"<code>registerLink</code>",id:"registerlink",level:3},{value:"<code>forgotPasswordLink</code>",id:"forgotpasswordlink",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>formProps</code>",id:"formprops",level:3},{value:"<code>renderContent</code>",id:"rendercontent",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Interface",id:"interface",level:3}],d=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const c={toc:l};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component from ",(0,o.kt)("strong",{parentName:"p"},"refine")," for ",(0,o.kt)("strong",{parentName:"p"},"Ant Design")," contains authentication pages that can be used to login, register, forgot password, and update password."),(0,o.kt)("p",null,"Before using ",(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component you need to add ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},"authProvider")," that will be used to handle authentication."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live  shared",live:!0,"":!0,shared:!0},'const { useNavigation: useNavigationShared, useLogout: useLogoutShared } =\n    RefineCore;\nconst {\n    Typography: { Title: SharedTitle },\n    Button,\n} = AntdCore;\n\nwindow.__refineAuthStatus = false;\n\nconst authProvider = {\n    login: () => {\n        window.__refineAuthStatus = true;\n        return {\n            success: true,\n            redirectTo: "/",\n        };\n    },\n    register: async () => {\n        return {\n            success: true,\n        };\n    },\n    forgotPassword: async () => {\n        return {\n            success: true,\n        };\n    },\n    updatePassword: async () => {\n        return {\n            success: true,\n        };\n    },\n    logout: async () => {\n        window.__refineAuthStatus = false;\n        return {\n            success: true,\n            redirectTo: "/",\n        };\n    },\n    check: async () => {\n        return {\n            authenticated: window.__refineAuthStatus ? true : false,\n            redirectTo: window.__refineAuthStatus ? undefined : "/login",\n        };\n    },\n    onError: async (error) => {\n        console.error(error);\n        return { error };\n    },\n    getPermissions: async () => null,\n    getIdentity: async () => null,\n};\n\nconst DashboardPage = () => {\n    const { mutate } = useLogoutShared();\n\n    return (\n        <div\n            style={{\n                width: "100%",\n                maxWidth: "400px",\n                margin: "0 auto",\n                textAlign: "center",\n            }}\n        >\n            <SharedTitle level={2}>Home Page</SharedTitle>\n            <br />\n            <button\n                onClick={() => {\n                    mutate();\n                }}\n            >\n                Logout\n            </button>\n        </div>\n    );\n};\n\nconst GoogleIcon = (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="24"\n        height="24"\n        viewBox="0 0 24 24"\n    >\n        <path\n            fill="#fff"\n            d="m23.7 12.3-.1-2.3H12.3v4.5h6.4a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.2 3.5-8.8Z M12.3 24c3.2 0 6-1 7.9-3l-3.9-3a7.2 7.2 0 0 1-10.8-3.7h-4v3c2 4 6 6.7 10.8 6.7Z M5.5 14.3a7 7 0 0 1 0-4.6v-3h-4a11.9 11.9 0 0 0 0 10.7l4-3.1Z M12.3 4.8c1.7 0 3.3.6 4.6 1.8L20.3 3A12 12 0 0 0 1.6 6.6l4 3.1c.9-2.8 3.5-5 6.7-5Z"\n        />\n    </svg>\n);\n\nconst GithubIcon = (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="24"\n        height="24"\n        viewBox="0 0 24 24"\n    >\n        <path\n            fill="#fff"\n            d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z"\n        />\n    </svg>\n);\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component can be used like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/login previewHeight=460px",live:!0,url:"http://localhost:3000/login",previewHeight:"460px"},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { AuthPage, Layout } from "@refinedev/antd";\nimport routerProvider, {\n    CatchAllNavigate,\n    NavigateToResource,\n} from "@refinedev/react-router-v6";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerProvider}\n                authProvider={authProvider}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Authenticated\n                                fallback={<CatchAllNavigate to="/login" />}\n                            >\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            </Authenticated>\n                        }\n                    >\n                        <Route index element={<DashboardPage />} />\n                    </Route>\n                    <Route\n                        element={\n                            <Authenticated fallback={<Outlet />}>\n                                <NavigateToResource />\n                            </Authenticated>\n                        }\n                    >\n                        {/* highlight-start */}\n                        <Route\n                            path="/login"\n                            element={<AuthPage type="login" />}\n                        />\n                        {/* highlight-end */}\n                    </Route>\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component has the following types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#login"},(0,o.kt)("inlineCode",{parentName:"a"},"login"))," - a type of login page and default type."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#register"},(0,o.kt)("inlineCode",{parentName:"a"},"register"))," - a type of registration page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#forgotpassword"},(0,o.kt)("inlineCode",{parentName:"a"},"forgotPassword"))," - a type of forgot password page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#updatepassword"},(0,o.kt)("inlineCode",{parentName:"a"},"updatePassword"))," - a type of update password page.")),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"login")," will be used as the default type of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component. The login page will be used to log in to the system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/login previewHeight=460px",live:!0,hideCode:!0,url:"http://localhost:3000/login",previewHeight:"460px"},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, {\n    CatchAllNavigate,\n    NavigateToResource,\n} from "@refinedev/react-router-v6";\n\nimport { AuthPage, Layout } from "@refinedev/antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerProvider}\n                authProvider={authProvider}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Authenticated\n                                fallback={<CatchAllNavigate to="/login" />}\n                            >\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            </Authenticated>\n                        }\n                    >\n                        <Route index element={<DashboardPage />} />\n                    </Route>\n                    <Route\n                        element={\n                            <Authenticated fallback={<Outlet />}>\n                                <NavigateToResource />\n                            </Authenticated>\n                        }\n                    >\n                        {/* highlight-next-line */}\n                        <Route path="/login" element={<AuthPage />} />\n                    </Route>\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("p",null,"After form submission, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/#login-"},(0,o.kt)("inlineCode",{parentName:"a"},"login"))," method of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // --\n    login: async ({ email, password, remember, providerName }) => {\n        // You can handle the login process according to your needs.\n\n        // If the process is successful.\n        return {\n            success: true,\n        };\n\n        return {\n            success: false,\n            error: {\n                name: "Login Error",\n                message: "Invalid email or password",\n            },\n        };\n    },\n    // --\n};\n')),(0,o.kt)("h3",{id:"register"},"Register"),(0,o.kt)("p",null,"The register page will be used to register new users. You can use the following props for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component when the type is ",(0,o.kt)("inlineCode",{parentName:"p"},'"register"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/register previewHeight=460px",live:!0,hideCode:!0,url:"http://localhost:3000/register",previewHeight:"460px"},'setInitialRoutes(["/register"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, {\n    CatchAllNavigate,\n    NavigateToResource,\n} from "@refinedev/react-router-v6";\n\nimport { AuthPage, Layout } from "@refinedev/antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerProvider}\n                authProvider={authProvider}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Authenticated\n                                fallback={<CatchAllNavigate to="/login" />}\n                            >\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            </Authenticated>\n                        }\n                    >\n                        <Route index element={<DashboardPage />} />\n                    </Route>\n                    <Route\n                        element={\n                            <Authenticated fallback={<Outlet />}>\n                                <NavigateToResource />\n                            </Authenticated>\n                        }\n                    >\n                        <Route path="/login" element={<AuthPage />} />\n                        {/* highlight-next-line */}\n                        <Route\n                            path="/register"\n                            element={<AuthPage type="register" />}\n                        />\n                    </Route>\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("p",null,"After form submission, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/#register"},(0,o.kt)("inlineCode",{parentName:"a"},"register"))," method of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // --\n    register: async ({ email, password, providerName }) => {\n        // You can handle the register process according to your needs.\n\n        // If the process is successful.\n        return {\n            success: true,\n        };\n\n        return {\n            success: false,\n            error: {\n                name: "Register Error",\n                message: "Invalid email or password",\n            },\n        };\n    },\n    // --\n};\n')),(0,o.kt)("h3",{id:"forgotpassword"},"ForgotPassword"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"forgotPassword")," type is a page that allows users to reset their passwords. You can use this page to reset your password."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/forgot-password",live:!0,hideCode:!0,url:"http://localhost:3000/forgot-password"},'setInitialRoutes(["/forgot-password"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, {\n    CatchAllNavigate,\n    NavigateToResource,\n} from "@refinedev/react-router-v6";\n\nimport { AuthPage, Layout } from "@refinedev/antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerProvider}\n                authProvider={authProvider}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Authenticated\n                                fallback={<CatchAllNavigate to="/login" />}\n                            >\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            </Authenticated>\n                        }\n                    >\n                        <Route index element={<DashboardPage />} />\n                    </Route>\n                    <Route\n                        element={\n                            <Authenticated fallback={<Outlet />}>\n                                <NavigateToResource />\n                            </Authenticated>\n                        }\n                    >\n                        <Route path="/login" element={<AuthPage />} />\n                        <Route\n                            path="/register"\n                            element={<AuthPage type="register" />}\n                        />\n                        {/* highlight-next-line */}\n                        <Route\n                            path="/forgot-password"\n                            element={<AuthPage type="forgotPassword" />}\n                        />\n                    </Route>\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("p",null,"After form submission, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/#forgotpassword"},(0,o.kt)("inlineCode",{parentName:"a"},"forgotPassword"))," method of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // --\n    forgotPassword: async ({ email }) => {\n        // You can handle the reset password process according to your needs.\n\n        // If the process is successful.\n        return {\n            success: true,\n        };\n\n        return {\n            success: false,\n            error: {\n                name: "Register Error",\n                message: "Invalid email",\n            },\n        };\n    },\n    // --\n};\n')),(0,o.kt)("h3",{id:"updatepassword"},"UpdatePassword"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"updatePassword")," type is the page used to update the password of the user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/update-password",live:!0,hideCode:!0,url:"http://localhost:3000/update-password"},'setInitialRoutes(["/update-password"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, Authenticated } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerProvider, {\n    CatchAllNavigate,\n    NavigateToResource,\n} from "@refinedev/react-router-v6";\n\nimport { AuthPage, Layout } from "@refinedev/antd";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { authProvider } from "./authProvider";\n\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerProvider}\n                authProvider={authProvider}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Authenticated\n                                fallback={<CatchAllNavigate to="/login" />}\n                            >\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            </Authenticated>\n                        }\n                    >\n                        <Route index element={<DashboardPage />} />\n                    </Route>\n                    <Route\n                        element={\n                            <Authenticated fallback={<Outlet />}>\n                                <NavigateToResource />\n                            </Authenticated>\n                        }\n                    >\n                        <Route path="/login" element={<AuthPage />} />\n                        <Route\n                            path="/register"\n                            element={<AuthPage type="register" />}\n                        />\n                        <Route\n                            path="/forgot-password"\n                            element={<AuthPage type="forgotPassword" />}\n                        />\n                        {/* highlight-next-line */}\n                        <Route\n                            path="/update-password"\n                            element={<AuthPage type="updatePassword" />}\n                        />\n                    </Route>\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("p",null,"After form submission, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/#updatepassword"},(0,o.kt)("inlineCode",{parentName:"a"},"updatePassword"))," method of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // --\n    updatePassword: async ({ password, confirmPassword }) => {\n        // You can handle the update password process according to your needs.\n\n        // If the process is successful.\n        return {\n            success: true,\n        };\n\n        return {\n            success: false,\n            error: {\n                name: "Login Error",\n                message: "Invalid email or password",\n            },\n        };\n    },\n    // --\n};\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"providers"},(0,o.kt)("inlineCode",{parentName:"h3"},"providers")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"providers")," property is only available for types ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"register"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"providers")," property defines the list of providers used to handle login authentication. ",(0,o.kt)("inlineCode",{parentName:"p"},"providers")," accepts an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," type. Check out the ",(0,o.kt)("a",{parentName:"p",href:"#interface"},"Interface")," section for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n    return (\n        <AuthPage\n            type="login"\n            providers={[\n                {\n                    name: "google",\n                    icon: GoogleIcon,\n                    label: "Sign in with Google",\n                },\n                {\n                    name: "github",\n                    icon: GithubIcon,\n                    label: "Sign in with GitHub",\n                },\n            ]}\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"rememberme"},(0,o.kt)("inlineCode",{parentName:"h3"},"rememberMe")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"rememberMe")," property is only available for type ",(0,o.kt)("inlineCode",{parentName:"p"},"login"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rememberMe")," property defines to render your own remember me component or you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," to don't render it."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You have to wrap your remember me component with ",(0,o.kt)("inlineCode",{parentName:"p"},"Form.Item")," component from ",(0,o.kt)("strong",{parentName:"p"},"antd")," and pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," prop to it then you can access its value from the ",(0,o.kt)("inlineCode",{parentName:"p"},"formProps")," ",(0,o.kt)("inlineCode",{parentName:"p"},"onFinish")," function with ",(0,o.kt)("inlineCode",{parentName:"p"},"formValues"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n    return (\n        <AuthPage\n            type="login"\n            // highlight-start\n            rememberMe={\n                <div\n                    style={{\n                        border: "1px dashed cornflowerblue",\n                        padding: 3,\n                    }}\n                >\n                    <Form.Item name="remember" valuePropName="checked" noStyle>\n                        <Checkbox>Custom remember me</Checkbox>\n                    </Form.Item>\n                </div>\n            }\n            // highlight-end\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"loginlink"},(0,o.kt)("inlineCode",{parentName:"h3"},"loginLink")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"loginLink")," property is only available for types ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"forgotPassword"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"loginLink")," property defines the link to the login page and also you can give a node to render. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},'"/login"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyRegisterPage = () => {\n    return (\n        <AuthPage\n            type="register"\n            // highlight-start\n            loginLink={\n                <div\n                    style={{\n                        border: "1px dashed cornflowerblue",\n                        padding: 3,\n                    }}\n                >\n                    <Link to="/login">Login</Link>\n                </div>\n            }\n            // highlight-end\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"registerlink"},(0,o.kt)("inlineCode",{parentName:"h3"},"registerLink")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"registerLink")," property is only available for type ",(0,o.kt)("inlineCode",{parentName:"p"},"login"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"registerLink")," property defines the link to the registration page and also you can give a node to render. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},'"/register"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n    return (\n        <AuthPage\n            type="login"\n            // highlight-start\n            registerLink={\n                <div\n                    style={{\n                        border: "1px dashed cornflowerblue",\n                        marginTop: 5,\n                        padding: 5,\n                    }}\n                >\n                    <Link to="/register">Register</Link>\n                </div>\n            }\n            // highlight-end\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"forgotpasswordlink"},(0,o.kt)("inlineCode",{parentName:"h3"},"forgotPasswordLink")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"forgotPasswordLink")," property is only available for type ",(0,o.kt)("inlineCode",{parentName:"p"},"login"),".")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"forgotPasswordLink")," property defines the link to the forgot password page and also you can give a node to render. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},'"/forgot-password"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n    return (\n        <AuthPage\n            type="login"\n            // highlight-start\n            forgotPasswordLink={\n                <div\n                    style={{\n                        border: "1px dashed cornflowerblue",\n                        marginTop: 5,\n                        padding: 5,\n                    }}\n                >\n                    <Link to="/forgot-password">Forgot Password</Link>\n                </div>\n            }\n            // highlight-end\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"wrapperprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")," uses for passing props to the wrapper component. In the example below you can see that the background color is changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n    return (\n        <AuthPage\n            type="login"\n            // highlight-start\n            wrapperProps={{\n                style: {\n                    background: "#331049",\n                },\n            }}\n            // highlight-end\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"contentprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"contentProps")," uses for passing props to the content component which is the card component. In the example below you can see that the title, header, and content styles are changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"contentProps"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n    return (\n        <AuthPage\n            type="login"\n            // highlight-start\n            contentProps={{\n                title: "Login",\n                headStyle: {\n                    background: "cornflowerblue",\n                    color: "white",\n                },\n                bodyStyle: {\n                    background: "#673ab742",\n                },\n            }}\n            // highlight-end\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"formprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"formProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"formProps")," uses for passing props to the form component. In the example below you can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialValues")," are changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"formProps")," and also the ",(0,o.kt)("inlineCode",{parentName:"p"},"onFinish")," function is changed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n    return (\n        <AuthPage\n            type="login"\n            // highlight-start\n            formProps={{\n                initialValues: {\n                    email: "demo@refine.dev",\n                    password: "demo",\n                },\n                onFinish: (formValues) =>\n                    alert(JSON.stringify(formValues, null, 2)),\n            }}\n            // highlight-end\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"rendercontent"},(0,o.kt)("inlineCode",{parentName:"h3"},"renderContent")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"renderContent")," uses to render the form content. You can use this property to render your own content or ",(0,o.kt)("inlineCode",{parentName:"p"},"renderContent")," gives you default content you can use to add some extra elements to the content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyLoginPage = () => {\n    return (\n        <AuthPage\n            type="login"\n            // highlight-start\n            renderContent={(content: React.ReactNode) => {\n                return (\n                    <div\n                        style={{\n                            display: "flex",\n                            flexDirection: "column",\n                            justifyContent: "center",\n                            alignItems: "center",\n                        }}\n                    >\n                        <h1 style={{ color: "white" }}>Extra Header</h1>\n                        {content}\n                        <h1 style={{ color: "white" }}>Extra Footer</h1>\n                    </div>\n                );\n            }}\n            // highlight-end\n        />\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(d,{module:"@refinedev/antd/AuthPage","formProps-type":"[`FormProps`](https://ant.design/components/form/#API)","wrapperProps-type":"[`WrapperProps`](https://ant.design/components/layout/#API)","contentProps-type":"[`CardProps`](https://ant.design/components/card/#API)","rememberMe-default":"[`<Checkbox>Remember me</Checkbox>`](/docs/api-reference/antd/components/antd-auth-page/#rememberme)",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface OAuthProvider {\n    name: string;\n    icon?: React.ReactNode;\n    label?: string;\n}\n")))}h.isMDXComponent=!0}}]);