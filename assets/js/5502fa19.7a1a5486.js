"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),i=r(72389),l=r(67392),p=r(7094),u=r(12466);const s="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:i,defaultValue:d,values:m,groupId:h,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,p.U)(),[N,T]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,r=x.indexOf(t),n=y[r].value;n!==N&&(C(t),T(n),null!=h&&w(h,String(n)))},O=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},v)},y.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},20975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(65488),i=r(85162);const l={id:"create-project",title:"3. Create your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}},p=void 0,u={unversionedId:"tutorial/getting-started/mui/create-project",id:"version-3.xx.xx/tutorial/getting-started/mui/create-project",title:"3. Create your refine project",description:"Launch the refine CLI setup",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/mui/2-create-project.md",sourceDirName:"tutorial/1-getting-started/mui",slug:"/tutorial/getting-started/mui/create-project",permalink:"/docs/3.xx.xx/tutorial/getting-started/mui/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/mui/2-create-project.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683547880,formattedLastUpdatedAt:"May 8, 2023",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Create your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},s={},c=[{value:"Launch the refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your app",id:"viewing-a-preview-of-your-app",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=d("Checklist"),h=d("ChecklistItem"),v={toc:c};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"launch-the-refine-cli-setup"},"Launch the refine CLI setup"),(0,a.kt)("p",null,"The easiest way to create a new project is to use the ",(0,a.kt)("strong",{parentName:"p"},"refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Launch your terminal and type the following command using your preferred package manager:"),(0,a.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest -- -o refine-mui tutorial\n"))),(0,a.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create refine-app@latest -- -o refine-mui tutorial\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create refine-app -- -o refine-mui tutorial\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Only support yarn@1 version."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,a.kt)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-o refine-mui")," flag in the command above tells the CLI to install the project with the ",(0,a.kt)("inlineCode",{parentName:"p"},"refine-mui")," preset. This preset selects some options for you in accordance with this tutorial."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"We use a preset here to sync the tutorial content with the code. Outside of the tutorial, you can skip this flag and select your own options."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The CLI will ask if you agree to share your selection anonymously with the ",(0,a.kt)("strong",{parentName:"p"},"refine")," team. You can choose whatever you prefer."))),(0,a.kt)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey."),(0,a.kt)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Visual Studio Code and select the directory that was generated during your setup process.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,a.kt)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal."),(0,a.kt)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,a.kt)("p",null,"To preview your project as a web page while you work on it, the project must be running in development (dev) mode."),(0,a.kt)("h4",null,"Start the dev server"),(0,a.kt)("p",null,"To start the dev server, run the following command in your terminal:"),(0,a.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,a.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,a.kt)("p",null,"You should see confirmation in the terminal that the ",(0,a.kt)("strong",{parentName:"p"},"refine")," app is running in dev mode."),(0,a.kt)("h3",{id:"viewing-a-preview-of-your-app"},"Viewing a preview of your app"),(0,a.kt)("p",null,"Your project files contain all the code you need to run your website. To see a preview of your website in the browser:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet."),(0,a.kt)("p",{parentName:"li"},"(",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages"},"Next section")," will guide you through adding pages to your app.)"))),(0,a.kt)("p",null,"Here's what you should see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n    LightTheme,\n    CssBaseline,\n    GlobalStyles,\n    ThemeProvider,\n    RefineSnackbarProvider,\n    notificationProvider,\n} from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={LightTheme}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    Layout={Layout}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                />\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)(m,{mdxType:"Checklist"},(0,a.kt)(h,{id:"getting-started-mui",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,a.kt)(h,{id:"getting-started-mui-2",mdxType:"ChecklistItem"},"I run the dev server and previewed my app.")))}f.isMDXComponent=!0}}]);