"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86151],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=o.createContext({}),m=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(i),h=r,g=u["".concat(c,".").concat(h)]||u[h]||s[h]||n;return i?o.createElement(g,a(a({ref:t},p),{},{components:i})):o.createElement(g,a({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var m=2;m<n;m++)a[m]=i[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},63038:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var o=i(87462),r=(i(67294),i(3905));i(34466),i(32661),i(29975);const n={title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["JavaScript","csv","import","React"],image:"/img/placeholder.png",hide_table_of_contents:!1},a=void 0,l={permalink:"/blog/how-to-import-csv",source:"@site/blog/2022-01-18-csv-import.md",title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"csv",permalink:"/blog/tags/csv"},{label:"import",permalink:"/blog/tags/import"},{label:"React",permalink:"/blog/tags/react"}],readingTime:4.28,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["JavaScript","csv","import","React"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design"},nextItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},relatedPosts:[{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.935,date:"2021-12-27T00:00:00.000Z"},{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload",formattedDate:"December 22, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:3.575,date:"2021-12-22T00:00:00.000Z"}],authorPosts:[{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.935,date:"2021-12-27T00:00:00.000Z"},{title:"Web3 with Refine",permalink:"/blog/web3-with-refine",formattedDate:"December 13, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:1.72,date:"2021-12-13T00:00:00.000Z"},{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload",formattedDate:"December 22, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:3.575,date:"2021-12-22T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[],p={toc:m};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide, we will learn how to import any CSV file received from the user with React. Our application will consist of two parts. We will create a form for the user to select a file. Next, we will do some operations with JavaScript to be able to view this CSV file. Let's start with our example."))}s.isMDXComponent=!0},34466:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/console-2aac2e898926cd619fe88d1de84bd9ea.gif"},29975:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/importing-17b343cfe8b906ee324a202f174f0101.gif"},32661:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/overview-c1b22c821b8949f83453f2d4c2f896d6.gif"}}]);