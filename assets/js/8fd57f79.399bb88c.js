"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",slug:"how-to-access-control-with-nestjs",authors:"yildiray",tags:["nestjs","authorization","accesscontrol","refine"],image:"/img/placeholder.png",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/how-to-access-control-with-nestjs",source:"@site/blog/2022-02-21-build-low-code-customizable-and-authorization-ready-accesscontrol-admin-panel-with-nestjs.md",title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",date:"2022-02-21T00:00:00.000Z",formattedDate:"February 21, 2022",tags:[{label:"nestjs",permalink:"/blog/tags/nestjs"},{label:"authorization",permalink:"/blog/tags/authorization"},{label:"accesscontrol",permalink:"/blog/tags/accesscontrol"},{label:"refine",permalink:"/blog/tags/refine"}],readingTime:3.19,hasTruncateMarker:!0,authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],frontMatter:{title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",description:"Build authorization ready admin panel with NestJS.",slug:"how-to-access-control-with-nestjs",authors:"yildiray",tags:["nestjs","authorization","accesscontrol","refine"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Build internal tools using Low-Code with Refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine"},nextItem:{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework"},relatedPosts:[{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:17.68,date:"2022-09-27T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.8,date:"2022-02-21T00:00:00.000Z"},{title:"Simple Web Application Example with Refine",permalink:"/blog/simple-web-application-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:9.89,date:"2021-10-04T00:00:00.000Z"}],authorPosts:[{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs",formattedDate:"October 4, 2021",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:4.06,date:"2021-10-04T00:00:00.000Z"},{title:"Best Open-Source Headless CMS to Try for Your Next Application",permalink:"/blog/open-source-headless-cms",formattedDate:"May 5, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.545,date:"2022-05-05T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},p=[{value:"Intro",id:"intro",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Using AccessControl in API",id:"using-accesscontrol-in-api",level:2},{value:"Using AccessControl in refine (dashboard)",id:"using-accesscontrol-in-refine-dashboard",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/blog/customizable-admin-panel-with-nestjs"},"previous blog post"),", we used ",(0,r.kt)("a",{parentName:"p",href:"https://nestjs.com"},"nestjs")," with an api and ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev"},"refine")," in the admin panel. In this blog, let's add ",(0,r.kt)("strong",{parentName:"p"},"authorization")," to both api and admin panel."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"All the steps described are in this ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app"},"repo"),".")),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/refine/build-fast-and-customizable-admin-panel-with-nestjs-291"},"previous blog post"),", we used ",(0,r.kt)("a",{parentName:"p",href:"https://nestjs.com"},"nestjs")," with an api and ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev"},"refine")," in the admin panel. In this blog, let's add ",(0,r.kt)("strong",{parentName:"p"},"authorization")," to both api and admin panel."),(0,r.kt)("h2",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"Let's have two roles in this system, they are ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"editor"),". In the API we prepared, we had two crud processes that we categorized as ",(0,r.kt)("inlineCode",{parentName:"p"},"companies")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jobs"),"."),(0,r.kt)("p",null,"In this scenario; ",(0,r.kt)("inlineCode",{parentName:"p"},"editor")," can only list companies, not any deletion or additions. Have the authority to list and create job postings. Let ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," have authorization for all transactions."),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"I used ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/crud"},"nestjsx-crud")," in the api we prepared. This library makes ",(0,r.kt)("inlineCode",{parentName:"p"},"CRUD")," operations very easy. However, there is no support on the authorization side. That's why I made use of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onury/accesscontrol"},"accesscontrol")," library, which can be easily integrated with both ",(0,r.kt)("inlineCode",{parentName:"p"},"nestjs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"refine"),". "),(0,r.kt)("h2",{id:"using-accesscontrol-in-api"},"Using AccessControl in API"),(0,r.kt)("p",null,"In the first step, let's install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nestjsx/nest-access-control"},"nestjs-access-control")," in our project for ",(0,r.kt)("inlineCode",{parentName:"p"},"accesscontrol")," integration to the api."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install nest-access-control\n")),(0,r.kt)("p",null,"I'm specifying a role as the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessControl")," supports. According to our scenario, this should be as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// app.roles.ts\n\nimport { RolesBuilder } from 'nest-access-control';\n\nexport enum AppRoles {\n  ADMIN = 'ADMIN',\n  EDITOR = 'EDITOR',\n}\n\nexport const roles: RolesBuilder = new RolesBuilder();\n\nroles\n  // editor\n  .grant(AppRoles.EDITOR)\n  .create('jobs')\n  .update('jobs')\n  // admin\n  .grant(AppRoles.ADMIN)\n  .extend(AppRoles.EDITOR)\n  .create(['companies'])\n  .update(['companies'])\n  .delete(['companies', 'jobs']);\n")),(0,r.kt)("p",null,"Now I import ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessControlModule"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  // app.module.ts\n\n  import { roles } from './app.roles';\n\n    @Module({\n      imports: [\n        ...\n        AccessControlModule.forRoles(roles)\n      ],\n      controllers: [...],\n      providers: [...],\n    })\n    export class AppModule {}\n")),(0,r.kt)("p",null,"After determining the roles and privileges, we add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ACGuard")," class to the controller ",(0,r.kt)("inlineCode",{parentName:"p"},"UseGuards"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ACGuard } from 'nest-access-control';\n\n...\n@UseGuards(JwtAuthGuard, ACGuard)\n@Controller('companies')\nexport class CompanyController implements CrudController<CompanyEntity> {}\n...\n")),(0,r.kt)("p",null,"Now we define resource and action for methods using ",(0,r.kt)("inlineCode",{parentName:"p"},"UseRoles")," decorator. For example, we ",(0,r.kt)("strong",{parentName:"p"},"override")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"companies")," resource and the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," action as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ACGuard, UseRoles } from 'nest-access-control';\n\n...\n@UseGuards(JwtAuthGuard, ACGuard)\n@Controller('companies')\nexport class CompanyController implements CrudController<CompanyEntity> {\n  constructor(public service: CompanyService) {}\n\n  get base(): CrudController<CompanyEntity> {\n    return this;\n  }\n\n  @Override()\n  @UseRoles({\n    resource: 'companies',\n    action: 'create',\n  })\n  createOne(\n    @ParsedRequest() req: CrudRequest,\n    @ParsedBody() dto: CompanyCreateDto,\n  ) {\n    return this.base.createOneBase(req, <CompanyEntity>dto);\n  }\n...\n")),(0,r.kt)("p",null,"Similarly, we add this decorator for other methods."),(0,r.kt)("p",null,"After these operations, we complete the authorization process on the API side. Now we will do the authorization to the admin panel that we created with ",(0,r.kt)("inlineCode",{parentName:"p"},"refine"),"."),(0,r.kt)("h2",{id:"using-accesscontrol-in-refine-dashboard"},"Using AccessControl in refine (dashboard)"),(0,r.kt)("p",null,"refine; It supports many authorization tools, very flexible. What we need to do; Defining an ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),' is implemented only one asynchronous method named "can" to be used to control whether the requested access is granted. This method takes ',(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," with parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// App.tsx\n\n<Refine\n  ...\n  accessControlProvider={{\n    can: async ({ resource, action }) => {\n      let can: boolean = false;\n      const stringifyUser = localStorage.getItem('refine-user');\n      if (stringifyUser) {\n        const { roles } = JSON.parse(stringifyUser);\n\n        roles.forEach((role: string) => {\n          switch (action) {\n            case 'list':\n            case 'show':\n              can = ac.can(role).read(resource).granted;\n              break;\n            case 'create':\n              can = ac.can(role).create(resource).granted;\n              break;\n            case 'edit':\n              can = ac.can(role).update(resource).granted;\n              break;\n            case 'delete':\n              can = ac.can(role).delete(resource).granted;\n              break;\n          }\n        });\n      }\n      return Promise.resolve({ can });\n    },\n  }}\n/>****\n")),(0,r.kt)("p",null,"Now let me explain a little bit of this code I wrote. First we need the role of the logged in user. We saved it to local storage during login.\nThen we match the refine ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," with the accessControl's actions and check its authorization with the ",(0,r.kt)("inlineCode",{parentName:"p"},"granted")," method. I also resolve the returned result."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"As a result, we have done the authorization on both the ui (dashboard) side and the api side."))}d.isMDXComponent=!0}}]);