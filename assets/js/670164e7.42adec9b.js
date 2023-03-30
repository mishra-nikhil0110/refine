"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75777],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,o[1]=d;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={id:"swizzle",title:"2. Create Data Provider with Swizzle",tutorial:{prev:"tutorial/understanding-dataprovider/index",next:"tutorial/understanding-dataprovider/create-dataprovider"}},o=void 0,d={unversionedId:"tutorial/understanding-dataprovider/swizzle",id:"version-3.xx.xx/tutorial/understanding-dataprovider/swizzle",title:"2. Create Data Provider with Swizzle",description:"What is Swizzle?",source:"@site/versioned_docs/version-3.xx.xx/tutorial/2-understanding-dataprovider/1-swizzle.md",sourceDirName:"tutorial/2-understanding-dataprovider",slug:"/tutorial/understanding-dataprovider/swizzle",permalink:"/docs/3.xx.xx/tutorial/understanding-dataprovider/swizzle",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/2-understanding-dataprovider/1-swizzle.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680169059,formattedLastUpdatedAt:"Mar 30, 2023",sidebarPosition:1,frontMatter:{id:"swizzle",title:"2. Create Data Provider with Swizzle",tutorial:{prev:"tutorial/understanding-dataprovider/index",next:"tutorial/understanding-dataprovider/create-dataprovider"}}},s={},l=[{value:"What is Swizzle?",id:"what-is-swizzle",level:2},{value:"How to Use Swizzle for Data Provider?",id:"how-to-use-swizzle-for-data-provider",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=p("Checklist"),u=p("ChecklistItem"),m={toc:l};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-swizzle"},"What is Swizzle?"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli#swizzle"},(0,n.kt)("inlineCode",{parentName:"a"},"swizzle"))," is a command in ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,n.kt)("inlineCode",{parentName:"a"},"refine-cli"))," that allows you to customize the refine's supported components and data providers. It allows you to eject selected files from the ",(0,n.kt)("strong",{parentName:"p"},"refine")," packages and modify depending on your needs."),(0,n.kt)("p",null,"Instead of starting from scratch, you can use the ejected file code logic as a starting point and make changes to fit your specific needs."),(0,n.kt)("h2",{id:"how-to-use-swizzle-for-data-provider"},"How to Use Swizzle for Data Provider?"),(0,n.kt)("p",null,"In some cases, refine's built-in data providers are not fully complying with our API needs and you may want to edit the existing data provider logic. In this case, we will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"swizzle")," command to customize the data provider:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the ",(0,n.kt)("inlineCode",{parentName:"p"},"swizzle")," command in the project directory:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run refine swizzle\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the data provider package from the list of packages that support ",(0,n.kt)("inlineCode",{parentName:"p"},"swizzle"),". In this tutorial, we will use ",(0,n.kt)("inlineCode",{parentName:"p"},"@pankod/refine-simple-rest"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"? Which package do you want to swizzle?\n  Data Provider\n\u276f  @pankod/refine-simple-rest\n  UI Framework\n  @pankod/refine-antd\n")))),(0,n.kt)("p",null,"The necessary files for this package are copied to the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/rest-data-provider")," folder with ",(0,n.kt)("inlineCode",{parentName:"p"},"swizzle"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```bash\nSuccessfully swizzled Data Provider\n\nFiles created:\n- src/rest-data-provider/index.ts\n- src/rest-data-provider/utils/axios.ts\n- src/rest-data-provider/utils/generateFilter.ts\n- src/rest-data-provider/utils/generateSort.ts\n- src/rest-data-provider/utils/mapOperator.ts\n- src/rest-data-provider/utils/index.ts\n\nWarning:\nYou will also need to add axios to your project dependencies.\n\nUsage\n\n  \u256d App.tsx \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n  \u2502                                                          \u2502\n  \u2502   import { dataProvider } from "./rest-data-provider";   \u2502\n  \u2502                                                          \u2502\n  \u2502   const App = () => {                                    \u2502\n  \u2502       return (                                           \u2502\n  \u2502           <Refine                                        \u2502\n  \u2502               dataProvider={dataProvider}                \u2502\n  \u2502               /* ... */                                  \u2502\n  \u2502           />                                             \u2502\n  \u2502       );                                                 \u2502\n  \u2502   }                                                      \u2502\n  \u2502                                                          \u2502\n  \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n```\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"To use the generated data provider, we need to import it in the ",(0,n.kt)("inlineCode",{parentName:"li"},"App.tsx")," file and give it as a ",(0,n.kt)("inlineCode",{parentName:"li"},"dataProvider")," prop to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Refine")," component.")),(0,n.kt)("p",null,"Now that you have ejected all the data provider, you can modify and use it according to your API. You'll realize that using the swizzle for creating a data provider is much faster than writing a new data provider from scratch."),(0,n.kt)(c,{mdxType:"Checklist"},(0,n.kt)(u,{id:"data-provider-swizzle",mdxType:"ChecklistItem"},"I learned what is swizzle and how to use it.")))}f.isMDXComponent=!0}}]);