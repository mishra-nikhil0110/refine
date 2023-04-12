"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16810],{3905:(t,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>m});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=r.createContext({}),u=function(t){var e=r.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},s=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=u(o),m=n,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return o?r.createElement(y,a(a({ref:e},s),{},{components:o})):r.createElement(y,a({ref:e},s))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,a=new Array(i);a[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,a[1]=p;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},34286:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={id:"store-your-repository",title:"5. Storing your repository online",tutorial:{prev:"tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"tutorial/getting-started/deploy-project"}},a=void 0,p={unversionedId:"tutorial/getting-started/store-your-repository",id:"tutorial/getting-started/store-your-repository",title:"5. Storing your repository online",description:"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so.",source:"@site/docs/tutorial/1-getting-started/4-store-your-repository.md",sourceDirName:"tutorial/1-getting-started",slug:"/tutorial/getting-started/store-your-repository",permalink:"/docs/tutorial/getting-started/store-your-repository",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/4-store-your-repository.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681285145,formattedLastUpdatedAt:"Apr 12, 2023",sidebarPosition:4,frontMatter:{id:"store-your-repository",title:"5. Storing your repository online",tutorial:{prev:"tutorial/getting-started/{preferredUI}/generate-crud-pages",next:"tutorial/getting-started/deploy-project"}}},l={},u=[{value:"Create a repository on GitHub",id:"create-a-repository-on-github",level:2},{value:"Commit your local code to GitHub",id:"commit-your-local-code-to-github",level:2},{value:"See your project on GitHub",id:"see-your-project-on-github",level:2}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},c=s("Checklist"),d=s("ChecklistItem"),m={toc:u};function y(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we will use GitHub to store and manage our repository, and to connect to a web host. If you prefer to use a different online git provider, feel free to do so."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you are already proficient in git, and have your own preferred workflow, you can create a new GitHub repository for your project using your method of choice. Once you have done so, you can move on to the next page: ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/deploy-project"},'"Deploy your app to the Web"'),".")),(0,n.kt)("h2",{id:"create-a-repository-on-github"},"Create a repository on GitHub"),(0,n.kt)("p",null,"To create a repository on GitHub, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and log in with your account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click the plus icon in the top right corner of the page and select "New repository".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a name for your repository and a brief description (optional).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose whether you want your repository to be public or private.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "Create repository".'))),(0,n.kt)("p",null,"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/create-a-repo"},"GitHub documentation")," if you want to learn more and see more detailed instructions and options."),(0,n.kt)("h2",{id:"commit-your-local-code-to-github"},"Commit your local code to GitHub"),(0,n.kt)("p",null,"After you have created a repository on GitHub, you will need to commit your local code to the repository. This will allow you to store and manage your project's code on GitHub."),(0,n.kt)("p",null,"To commit your code to GitHub, you will need to use git commands in the terminal. If you are not familiar with git, you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs"},"git documentation")," or follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to your project directory in the terminal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Initialize git by running the command ",(0,n.kt)("inlineCode",{parentName:"p"},"git init -b main"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Connect your local repository to the remote repository on GitHub by running the command ",(0,n.kt)("inlineCode",{parentName:"p"},"git remote add origin <url>"),", where ",(0,n.kt)("inlineCode",{parentName:"p"},"<url>")," is the URL of your GitHub repository.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add your changes to the staging area by running the command ",(0,n.kt)("inlineCode",{parentName:"p"},"git add ."),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Commit your changes by running the command ",(0,n.kt)("inlineCode",{parentName:"p"},'git commit -m "Initial commit"'),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Push your changes to GitHub by running the command ",(0,n.kt)("inlineCode",{parentName:"p"},"git push -u origin master"),"."))),(0,n.kt)("p",null,"For more detailed instructions and options, you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git"},"GitHub documentation"),"."),(0,n.kt)("h2",{id:"see-your-project-on-github"},"See your project on GitHub"),(0,n.kt)("p",null,"To confirm that your project has been successfully stored on GitHub, go to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub.com")," and navigate to your list of repositories. Select the new repository you created, and verify that it contains your project files."),(0,n.kt)(c,{mdxType:"Checklist"},(0,n.kt)(d,{id:"store-your-repo",mdxType:"ChecklistItem"},"I have created a repository on GitHub."),(0,n.kt)(d,{id:"store-your-repo-2",mdxType:"ChecklistItem"},"I have uploaded my project to GitHub.")))}y.isMDXComponent=!0}}]);