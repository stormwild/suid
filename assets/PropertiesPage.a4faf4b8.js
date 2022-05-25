var a=Object.defineProperty;var n=(t,m)=>a(t,"name",{value:m,configurable:!0});import{C as s}from"./ComponentInfo.894fff2d.js";import{u as i,d as e,B as o}from"./index.f602409d.js";import{S as p}from"./copyText.b50803cd.js";import"./Link.1afd586a.js";import"./PaperCode.56a1402e.js";function r(){const t=i();return e(p,{direction:"row",get sx(){return{[`.${o}`]:{bgcolor:t.palette.background.paper,boxShadow:t.shadows[1],width:50,height:50,mx:1}}},get children(){return[e(o,{}),e(o,{sx:{mt:3}}),e(o,{mt:3}),e(o,{marginTop:3})]}})}n(r,"BoxSysProps");r.code=`import Box from "@suid/material/Box";
import Stack from "@suid/material/Stack";
import useTheme from "@suid/material/styles/useTheme";

export default function BoxSysProps() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        [\`.\${Box}\`]: {
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          width: 50,
          height: 50,
          mx: 1,
        },
      }}
    >
      <Box />
      <Box sx={{ mt: 3 }} />
      <Box mt={3} />
      <Box marginTop={3} />
    </Stack>
  );
}
`;function f(){return e(s,{importInfo:!1,name:"Properties",docsApiName:"system/properties",moreExamples:!1,examples:[{title:"Box example",bgcolor:"contrasted",component:r}]})}n(f,"PropertiesPage");export{f as default};
