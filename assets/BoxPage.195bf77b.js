var m=Object.defineProperty;var o=(e,a)=>m(e,"name",{value:a,configurable:!0});import{i,d as t,B as n}from"./index.a57572d2.js";import{C as p}from"./ComponentInfo.62610f08.js";import"./Link.91992660.js";import"./copyText.868ec6e7.js";import"./PaperCode.8c0fecdb.js";function r(){const e=i();return t(n,{get sx(){return{width:300,height:300,backgroundColor:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.main,opacity:.9}}}})}o(r,"BoxSx");r.code=`import Box from "@suid/material/Box";
import useTheme from "@suid/material/styles/useTheme";

export default function BoxSx() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: theme.palette.primary.dark,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          opacity: 0.9,
        },
      }}
    />
  );
}
`;function d(){return t(p,{get name(){return n.name},docsApiName:"components/box",moreExamples:!1,examples:[{component:r,title:!1}]})}o(d,"BoxPage");export{d as default};
