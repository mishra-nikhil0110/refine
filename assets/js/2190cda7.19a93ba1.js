"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75641],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90231:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const i={},a=void 0,c={unversionedId:"api-reference/mui/hooks/useAutocomplete/crud-live-preview",id:"api-reference/mui/hooks/useAutocomplete/crud-live-preview",title:"crud-live-preview",description:"",source:"@site/docs/api-reference/mui/hooks/useAutocomplete/crud-live-preview.md",sourceDirName:"api-reference/mui/hooks/useAutocomplete",slug:"/api-reference/mui/hooks/useAutocomplete/crud-live-preview",permalink:"/docs/api-reference/mui/hooks/useAutocomplete/crud-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/hooks/useAutocomplete/crud-live-preview.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681285145,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{}},l={},u=[],p={toc:u};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=400px",live:!0,url:"http://localhost:3000",previewHeight:"400px"},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport { Create, useAutocomplete } from "@refinedev/mui";\nimport { Box, Autocomplete, TextField } from "@mui/material";\nimport { useForm } from "@refinedev/react-hook-form";\nimport { Controller } from "react-hook-form";\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\nconst PostCreate: React.FC = () => {\n    const {\n        saveButtonProps,\n        refineCore: { formLoading, queryResult },\n        register,\n        control,\n        formState: { errors },\n    } = useForm<IPost, HttpError, IPost & { category: ICategory }>();\n\n    const { autocompleteProps } = useAutocomplete<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>\n            <Box component="form">\n                <Controller\n                    control={control}\n                    name="category"\n                    rules={{ required: "This field is required" }}\n                    render={({ field }) => (\n                        <Autocomplete\n                            //highlight-next-line\n                            {...autocompleteProps}\n                            {...field}\n                            onChange={(_, value) => {\n                                field.onChange(value);\n                            }}\n                            getOptionLabel={({ title }) => title}\n                            isOptionEqualToValue={(option, value) =>\n                                value === undefined || option?.id?.toString() === (value?.id ?? value)?.toString()\n                            }\n                            placeholder="Select a category"\n                            renderInput={(params) => (\n                                <TextField\n                                    {...params}\n                                    label="Category"\n                                    margin="normal"\n                                    variant="outlined"\n                                    error={!!errors.category}\n                                    helperText={errors.category?.message}\n                                    required\n                                />\n                            )}\n                        />\n                    )}\n                />\n            </Box>\n        </Create>\n    );\n};\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            create: PostCreate,\n        },\n    ],\n});\nrender(<RefineMuiDemo />);\n')))}s.isMDXComponent=!0}}]);