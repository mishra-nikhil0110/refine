"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41438],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||n;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var r=a(87462),o=(a(67294),a(3905)),n=a(94725),i=a(69695),l=a(79781);const s={title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",slug:"how-to-multipart-file-upload-with-react-hook-form",authors:"melih",tags:["refine","react","react-hook-form","multipart-upload","form-data","file-upload"],image:"/img/blog/2022-03-29-react-hook-form-upload/social.jpg",hide_table_of_contents:!1},p=void 0,m={permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",source:"@site/blog/2022-03-29-react-hook-form-upload.md",title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",date:"2022-03-29T00:00:00.000Z",formattedDate:"March 29, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"react-hook-form",permalink:"/blog/tags/react-hook-form"},{label:"multipart-upload",permalink:"/blog/tags/multipart-upload"},{label:"form-data",permalink:"/blog/tags/form-data"},{label:"file-upload",permalink:"/blog/tags/file-upload"}],readingTime:7.615,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",slug:"how-to-multipart-file-upload-with-react-hook-form",authors:"melih",tags:["refine","react","react-hook-form","multipart-upload","form-data","file-upload"],image:"/img/blog/2022-03-29-react-hook-form-upload/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Top React Component Libraries and Frameworks Every Developer Should Know",permalink:"/blog/top-react-component-libraries-and-frameworks-every-developer-should-know"},nextItem:{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",permalink:"/blog/awesome-react-windows95-ui-with-refine"},relatedPosts:[{title:"Simple Web Application Example with Refine",permalink:"/blog/simple-web-application-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:9.89,date:"2021-10-04T00:00:00.000Z"},{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 26, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.235,date:"2022-10-26T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.15,date:"2022-09-09T00:00:00.000Z"}],authorPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.205,date:"2022-02-22T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.925,date:"2022-03-01T00:00:00.000Z"},{title:"Refine vs React-Admin Which is Better for Your Project?",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.575,date:"2021-11-26T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Create Express Server",id:"create-express-server",level:2},{value:"Create React Project",id:"create-react-project",level:2},{value:"Multipart File Upload with React Hook Form",id:"multipart-file-upload-with-react-hook-form",level:2},{value:"Are You Looking React Web Framework?",id:"are-you-looking-react-web-framework",level:2},{value:"How to Multipart File Upload with Refine and React Hook Form?",id:"how-to-multipart-file-upload-with-refine-and-react-hook-form",level:2},{value:"Refine Multipart Upload Live CodeSandbox Example",id:"refine-multipart-upload-live-codesandbox-example",level:2}],u={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"Refine Example Overview"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"In this example, we will learn how to upload files with ",(0,o.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"React Hook Form"),", which is very preferred for managing forms with React. We will use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," to upload a file and we will upload a file of type multipart/form-data."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We will examine step by step how to use the Multipart file upload process, which is generally used to upload an image or file to a server, with React Hook Form. Let's first create a simple ",(0,o.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"express")," server to upload the files. Then, let's upload our files to this server with the React Hook form. Let's start!"),(0,o.kt)("h2",{id:"create-express-server"},"Create Express Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i express\n")),(0,o.kt)("p",null,"Then, let's install the cors package necessary to allow file upload to the server, and the express-fileupload package to manage the paths of the downloaded files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i cors express-fileupload\n")),(0,o.kt)("p",null,"We have completed our installations to create a simple server. This server will indicate that the file has been uploaded successfully or failed, in response to a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," call to an endpoint that we have specified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import express from "express";\nimport fileupload from "express-fileupload";\nimport cors from "cors";\n\nconst app = express();\n\napp.use(\n    fileupload({\n        createParentPath: true,\n    }),\n);\n\napp.use(cors());\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\napp.post("/upload-file", async (req, res) => {\n    try {\n        if (!req.files) {\n            res.send({\n                status: "failed",\n                message: "No file uploaded",\n            });\n        } else {\n            let file = req.files.file;\n\n            console.log(req.files);\n\n            file.mv("./uploads/" + file.name);\n\n            res.send({\n                status: "success",\n                message: "File is uploaded",\n                data: {\n                    name: file.name,\n                    mimetype: file.mimetype,\n                    size: file.size,\n                },\n            });\n        }\n    } catch (err) {\n        res.status(500).send(err);\n    }\n});\n\nconst port = process.env.PORT || 5000;\n\napp.listen(port, () => console.log(`Server started on port ${port}`));\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:n.Z,alt:"Express Server"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"We created a server with Express. As you can see, we have successfully started our server, now we have an endpoint to handle requests to this port. Now let's create a React project and send our files to this server with React Hook Form."),(0,o.kt)("h2",{id:"create-react-project"},"Create React Project"),(0,o.kt)("p",null,"Let's create a react project with ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," and then install the necessary packages for our project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app react-hook-form-multipart-upload\n")),(0,o.kt)("p",null,"After your project is ready, let's go to our project directory and install the React Hook Form package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd react-hook-form-multipart-upload\nnpm install react-hook-form\n\nnpm run start\n")),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"banner-container"},(0,o.kt)("div",{className:"banner-header"},"Stop wasting your time copy/pasting your table code all over your application!"),(0,o.kt)("p",null,"Meet the headless, React-based solution to build sleek ",(0,o.kt)("strong",{parentName:"p"},"CRUD")," applications. With refine, you can be confident that your codebase will always stay clean and boilerplate-free."),(0,o.kt)("p",null,"Try ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine")," to rapidly build your next ",(0,o.kt)("strong",{parentName:"p"},"CRUD")," project, whether it's an admin panel, dashboard, internal tool or storefront."),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://github.com/pankod/refine"},(0,o.kt)("img",{src:"/img/generic_banner.png",alt:"refine blog logo"}))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," is an open-source, React-based framework for building CRUD applications without constraints. It\u2019s headless by design and seamlessly works with ",(0,o.kt)("strong",{parentName:"p"},"any custom design")," or ",(0,o.kt)("strong",{parentName:"p"},"UI framework")," you favor. For convenience, it ships with ready-made integrations for ",(0,o.kt)("strong",{parentName:"p"},"Ant Design System, Material UI and Mantine UI"),"."),(0,o.kt)("p",null,"It can ",(0,o.kt)("strong",{parentName:"p"},"speed up your development time up to 3X")," without compromising freedom on styling, customization and project workflow."),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"multipart-file-upload-with-react-hook-form"},"Multipart File Upload with React Hook Form"),(0,o.kt)("p",null,"We created our React project and installed our react hook form package. Now let's create a form and manage it with the react hook form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React from "react";\n//highlight-next-line\nimport { useForm } from "react-hook-form";\n\nfunction App() {\n    //highlight-next-line\n    const { register, handleSubmit } = useForm();\n\n    const onSubmit = () => {};\n\n    return (\n        //highlight-start\n        <div className="App">\n            <form onSubmit={handleSubmit(onSubmit)}>\n                <input type="file" {...register("file")} />\n\n                <input type="submit" />\n            </form>\n        </div>\n        //highlight-end\n    );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"To manage our form and its elements, we defined the register and handleSubmit methods from the react hook form. Now, let's upload the file selected in our onSubmit method to our server by placing it in the formData."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React from "react";\nimport { useForm } from "react-hook-form";\n\nfunction App() {\n    const { register, handleSubmit } = useForm();\n\n    const onSubmit = async (data) => {\n        //highlight-start\n        const formData = new FormData();\n        formData.append("file", data.file[0]);\n\n        const res = await fetch("http://localhost:5000/upload-file", {\n            method: "POST",\n            body: formData,\n        }).then((res) => res.json());\n        alert(JSON.stringify(`${res.message}, status: ${res.status}`));\n        //highlight-end\n    };\n\n    return (\n        <div className="App">\n            <form onSubmit={handleSubmit(onSubmit)}>\n                <input type="file" {...register("file")} />\n\n                <input type="submit" />\n            </form>\n        </div>\n    );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"Our project is ready! With React Hook Form, we can now send the selected file to our server in ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," type. Let's test it!"),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"multipart/form-data file upload"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"are-you-looking-react-web-framework"},"Are You Looking React Web Framework?"),(0,o.kt)("p",null,"A React-based framework for building internal tools, rapidly. ",(0,o.kt)("strong",{parentName:"p"},"refine")," offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to admin panels, B2B applications and dashboards."),(0,o.kt)("p",null,"\ud83d\udd25 ",(0,o.kt)("strong",{parentName:"p"},"Headless")," : Works with any UI framework"),(0,o.kt)("p",null,"\u2699\ufe0f Zero-configuration: One-line setup with superplate. It takes less than a minute to start a project."),(0,o.kt)("p",null,"\ud83d\udce6 Out-of-the-box : Routing, networking, authentication, state management, i18n and UI."),(0,o.kt)("p",null,"\ud83d\udd0c Backend Agnostic : Connects to any custom backend. Built-in support for REST API, Strapi, NestJs CRUD, Hasura, Nhost, Airtable, Medusa, Supabase, Appwrite and Altogic."),(0,o.kt)("p",null,"\ud83d\udcdd Native Typescript Core : You can always opt-out for plain JavaScript."),(0,o.kt)("p",null,"\ud83d\udc1c Enterprise UI : Works seamlessly with Ant Design System. (Support for multiple UI frameworks is on the Roadmap)"),(0,o.kt)("p",null,"\ud83d\udcdd Boilerplate-free Code : Keeps your codebase clean and readable."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/getting-started/overview/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"refine")," documentation for more information. \u2192")),(0,o.kt)("h2",{id:"how-to-multipart-file-upload-with-refine-and-react-hook-form"},"How to Multipart File Upload with Refine and React Hook Form?"),(0,o.kt)("p",null,"It allows you to manage your forms and send data to your server with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"refine-react-hook-form adapter")," it publishes with its ",(0,o.kt)("strong",{parentName:"p"},"refine")," ",(0,o.kt)("strong",{parentName:"p"},"headless")," feature. With this adapter, you can use all the features of the React Hook Form in harmony with ",(0,o.kt)("strong",{parentName:"p"},"refine"),". You can also perform ",(0,o.kt)("inlineCode",{parentName:"p"},"Multipart File Upload(multipart/form-data)")," operation very easily using this adapter."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the refine-react-hook-form adapter documentation for detailed information. \u2192")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/reactHookForm/useForm"},"View Source")),(0,o.kt)("p",null,"You can manage your form very easily with the ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-react-hook-form adapter"),". The data created in the form will be automatically saved to the database with the ",(0,o.kt)("strong",{parentName:"p"},"refine")," ",(0,o.kt)("inlineCode",{parentName:"p"},"onFinish")," method."),(0,o.kt)("p",null,"This is a basic ",(0,o.kt)("inlineCode",{parentName:"p"},"CMS")," app that was created with ",(0,o.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,o.kt)("strong",{parentName:"p"},"headless")," feature. You may quickly build records and save them to your database using ",(0,o.kt)("strong",{parentName:"p"},"refine"),". We'll look at the CreatePost page of this step. We'll create a record in the form and manage it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-react-hook-form")," adapter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/CreatePost"',title:'"src/pages/CreatePost"'},'import { useState } from "react";\n//highlight-next-line\nimport { useForm } from "@pankod/refine-react-hook-form";\nimport { useSelect, useApiUrl } from "@pankod/refine-core";\n\nimport axios from "axios";\n\nexport const PostCreate: React.FC = () => {\n    const [isUploading, setIsUploading] = useState<boolean>(false);\n\n    //highlight-start\n    const {\n        refineCore: { onFinish, formLoading },\n        register,\n        handleSubmit,\n        formState: { errors },\n        setValue,\n    } = useForm();\n    //highlight-end\n\n    //highlight-next-line\n    const apiURL = useApiUrl();\n\n    const { options } = useSelect({\n        resource: "categories",\n    });\n\n    //highlight-start\n    const onSubmitFile = async () => {\n        setIsUploading(true);\n        const inputFile = document.getElementById(\n            "fileInput",\n        ) as HTMLInputElement;\n\n        const formData = new FormData();\n        formData.append("file", inputFile?.files?.item(0) as File);\n\n        const res = await axios.post<{ url: string }>(\n            `${apiURL}/media/upload`,\n            formData,\n            {\n                withCredentials: false,\n                headers: {\n                    "Access-Control-Allow-Origin": "*",\n                },\n            },\n        );\n\n        setValue("thumbnail", res.data.url);\n        setIsUploading(false);\n    };\n    //highlight-end\n\n    return (\n        //highlight-next-line\n        <form onSubmit={handleSubmit(onFinish)}>\n            <label>Title: </label>\n            <input {...register("title", { required: true })} />\n            {errors.title && <span>This field is required</span>}\n            <br />\n            <label>Status: </label>\n            <select {...register("status")}>\n                <option value="published">published</option>\n                <option value="draft">draft</option>\n                <option value="rejected">rejected</option>\n            </select>\n            <br />\n            <label>Category: </label>\n            <select\n                defaultValue={""}\n                {...register("category.id", { required: true })}\n            >\n                <option value={""} disabled>\n                    Please select\n                </option>\n                {options?.map((category) => (\n                    <option key={category.value} value={category.value}>\n                        {category.label}\n                    </option>\n                ))}\n            </select>\n            {errors.category && <span>This field is required</span>}\n            <br />\n            <label>Content: </label>\n            <br />\n            <textarea\n                {...register("content", { required: true })}\n                rows={10}\n                cols={50}\n            />\n            {errors.content && <span>This field is required</span>}\n            <br />\n            <br />\n            //highlight-start\n            <label>Image: </label>\n            <input id="fileInput" type="file" onChange={onSubmitFile} />\n            <input\n                type="hidden"\n                {...register("thumbnail", { required: true })}\n            />\n            {errors.thumbnail && <span>This field is required</span>}\n            //highlight-end\n            <br />\n            <br />\n            <input type="submit" disabled={isUploading} value="Submit" />\n            {formLoading && <p>Loading</p>}\n        </form>\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"Refine Example Overview"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"As you can see, we have easily saved both our data such as title, category, status and an image in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," to our database using the ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-react-hook-form")," adapter. We've only shown how to utilize the Multipart File Upload feature for our example in this tutorial. For examine ",(0,o.kt)("strong",{parentName:"p"},"refine")," CMS example, checkout the live codeSandbox below."),(0,o.kt)("h2",{id:"refine-multipart-upload-live-codesandbox-example"},"Refine Multipart Upload Live CodeSandbox Example"),(0,o.kt)("iframe",{src:"https://stackblitz.com/github/refinedev/refine/tree/master/examples/form/reactHookForm/useForm/?embed=1&view=preview&theme=dark&preset=node&ctl=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-react-hook-form-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}h.isMDXComponent=!0},69695:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image_upload-0c630903a68aaea553c45e0a5edee7b2.gif"},79781:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/overview-d0c43ca3825d57962aeaea17e6dc43d3.gif"},94725:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/server_start-d04a67c476fba3ae647ceb15df2dee83.gif"}}]);