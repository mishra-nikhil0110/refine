"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social.png",hide_table_of_contents:!1},o=void 0,p={permalink:"/blog/typescript-omit-utility-type",source:"@site/blog/2022-10-03-typescript-omit.md",title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",date:"2022-10-03T00:00:00.000Z",formattedDate:"October 3, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:3.505,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social.png",hide_table_of_contents:!1},prevItem:{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine"},nextItem:{title:"How to use React Fragments?",permalink:"/blog/how-react-fragments-is-works"},relatedPosts:[{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:7.305,date:"2022-09-12T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.53,date:"2022-09-30T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.985,date:"2022-10-10T00:00:00.000Z"}],authorPosts:[{title:"Setting Up the Invoicer App",permalink:"/blog/refine-react-invoice-generator-2",formattedDate:"April 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.615,date:"2023-04-11T00:00:00.000Z"},{title:"Adding CRUD Pages",permalink:"/blog/refine-react-invoice-generator-3",formattedDate:"April 12, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:27.265,date:"2023-04-12T00:00:00.000Z"},{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying",formattedDate:"August 28, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.82,date:"2022-08-28T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"TypeScript <code>Omit&lt;Type, Keys&gt;</code> Example",id:"typescript-omittype-keys-example",level:2},{value:"TypeScript <code>Omit&lt;&gt;</code> with Interface",id:"typescript-omit-with-interface",level:2},{value:"When to Avoid",id:"when-to-avoid",level:2},{value:"Conclusion",id:"conclusion",level:2}],m=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var c;const u={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this article, we discuss object type transformations in TypeScript using ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>"),". This is the second part of the series titled ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/blog/typescript-pick-utility-type/"},"TypeScript Utility Type Series"),"."),(0,i.kt)("p",null,"In the previous post, we went through an example where we derived a ",(0,i.kt)("inlineCode",{parentName:"p"},"GuestUser")," type by picking a few properties from the base type, ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser"),", with ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>"),". We hinted that if the number of properties to be picked are more than those being discarded, picking becomes less convenient. In that case, we should prefer using ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>"),"."),(0,i.kt)("p",null,"In this post, we will consider an example of ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>")," by creating a type for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscriber")," entity."),(0,i.kt)("p",null,"Step we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#typescript-omittype-keys-example"},"TypeScript Omit Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#typescript-omit-with-interface"},"TypeScript Omit with Interface")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#when-to-avoid"},"When to Avoid"))),(0,i.kt)("h2",{id:"typescript-omittype-keys-example"},"TypeScript ",(0,i.kt)("inlineCode",{parentName:"h2"},"Omit<Type, Keys>")," Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>"),", like ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>"),", takes a base type as the first argument. It takes an union type of the keys to be omitted as the second argument and returns the derived type that excludes those properties."),(0,i.kt)("p",null,"Looking back at the ERD, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscriber")," entity has all the same properties as ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser")," - except ",(0,i.kt)("inlineCode",{parentName:"p"},"roles"),":"),(0,i.kt)("div",{class:"img-container","align-items":"center"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/ts-omit-visualize.png",alt:"TypeScript Omit Type"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Deriving a ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscriber")," type from the ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser")," plainly requires us to omit only the ",(0,i.kt)("inlineCode",{parentName:"p"},"roles")," property, as opposed to picking all the rest:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type SuperbUser = {\n  userId: number,\n  macAddress: string,\n  username: string,\n  email: string,\n  password: string,\n  firstName: string,\n  lastName: string,\n  roles: ('Admin' | 'Editor' | 'Author')[]\n};\n\ntype Subscriber = Omit<SuperbUser, 'roles'>;\n")),(0,i.kt)("p",null,"So, in this case, TypeScript ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>")," offers us convenience over ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>"),". We can now create a subscriber object that has ",(0,i.kt)("inlineCode",{parentName:"p"},"roles")," property removed from its fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\',\n  password: \'12345678\',\n  firstName: \'Abdullah\',\n  lastName: \'Numan\'\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,i.kt)("p",null,"Notice, if we navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriber.roles")," it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("p",null,"Now, let's try adding ",(0,i.kt)("inlineCode",{parentName:"p"},"roles")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriber"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"subscriber.roles = ['Reader', 'Commenter']; // Property 'roles' does not exist on type 'Subscriber'.\n\nconsole.log(subscriber.roles); // [\"Reader\", \"Commenter\"]\n")),(0,i.kt)("p",null,"And TypeScript grunts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// Property 'roles' does not exist on type 'Subscriber'.\n")),(0,i.kt)("p",null,"If we look at ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log(subscriber.roles);")," though, we can see that our assignment actually sets the property and value of ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriber.roles"),". TypeScript only yells at us at development, but doesn't help us with this in runtime. JavaScript sets the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe.roles"),"."),(0,i.kt)("p",null,"So, caution there, as it is an important distinction that TypeScript is applying omit at development, not JavaScript. TypeScript does not check for any consequence of the written code ",(0,i.kt)("strong",{parentName:"p"},"after")," it is compiled to JavaScript. So, it is crucial to leverage TypeScript linter suggestions to strictly check omit while developing."),(0,i.kt)("hr",null),(0,i.kt)(m,{title:"Backend devs love this React framework!",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"typescript-omit-with-interface"},"TypeScript ",(0,i.kt)("inlineCode",{parentName:"h2"},"Omit<>")," with Interface"),(0,i.kt)("p",null,"Like it was in ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>"),", we can use an interface for ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser")," and the results will be the same:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: (\'Admin\' | \'Editor\' | \'Author\')[]\n};\n\ntype Subscriber = Omit<SuperbUser, \'roles\'>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\',\n  password: \'12345678\',\n  firstName: \'Abdullah\',\n  lastName: \'Numan\'\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,i.kt)("h2",{id:"when-to-avoid"},"When to Avoid"),(0,i.kt)("p",null,"As with ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>"),", the second argument to Typescript Omit also takes a union of keys. So, if we need to omit any other property, we can add them to the second argument with the pipe operator ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type Subscriber = Omit<SuperbUser, 'roles' | 'firstName' | ...>;\n")),(0,i.kt)("p",null,"We should avoid using ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>")," and prefer ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>")," when we have more properties to omit than to pick."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we delved into ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>")," with an example of deriving a type for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscriber")," entity by omitting a property from our base type, ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser"),". We saw that ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>")," is the opposite equivalent of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>")," and is more convenient when we want to pick more properties and omit less from a base type."),(0,i.kt)("p",null,"In the next article, we'll cover object type transformations using ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial<Type>"),"."))}d.isMDXComponent=!0}}]);