var a=Object.defineProperty;var t=(n,s)=>a(n,"name",{value:s,configurable:!0});import{A as r}from"./Alert.62685dd3.js";import{C as c}from"./ComponentInfo.72be1033.js";import{S as o}from"./copyText.b3bf44ff.js";import{d as e}from"./index.8cdc9133.js";import"./Link.793ded38.js";import"./PaperCode.1c7a2989.js";function i(){return e(o,{sx:{width:"100%"},spacing:2,get children(){return[e(r,{severity:"error",children:"This is an error alert \u2014 check it out!"}),e(r,{severity:"warning",children:"This is a warning alert \u2014 check it out!"}),e(r,{severity:"info",children:"This is an info alert \u2014 check it out!"}),e(r,{severity:"success",children:"This is a success alert \u2014 check it out!"})]}})}t(i,"BasicAlerts");i.code=`import Alert from "@suid/material/Alert";
import Stack from "@suid/material/Stack";

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">This is an error alert \u2014 check it out!</Alert>
      <Alert severity="warning">This is a warning alert \u2014 check it out!</Alert>
      <Alert severity="info">This is an info alert \u2014 check it out!</Alert>
      <Alert severity="success">This is a success alert \u2014 check it out!</Alert>
    </Stack>
  );
}
`;function d(){return e(c,{get name(){return r.name},examples:[i]})}t(d,"AlertPage");export{d as default};
