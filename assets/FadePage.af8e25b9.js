var m=Object.defineProperty;var t=(n,r)=>m(n,"name",{value:r,configurable:!0});import{a as s,d as e,B as o,F as i,u as c,P as l}from"./index.6d1e395d.js";import{C as d}from"./ComponentInfo.599502bc.js";import{F as p}from"./FormControlLabel.00a3b7aa.js";import{S as h}from"./Switch.72c8ba31.js";import"./Link.6b86d802.js";import"./copyText.3b8efda4.js";import"./PaperCode.862f7f59.js";import"./formControlState.3c4db122.js";import"./useFormControl.da8711b9.js";import"./SwitchBase.8cc5e5ff.js";import"./useControlled.2483d4f0.js";function u(){const n=c();return e(l,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(u,"Icon");function a(){const[n,r]=s(!1);return e(o,{sx:{height:180},get children(){return[e(p,{get control(){return e(h,{get checked(){return n()},onChange:()=>r(!n())})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return e(i,{get in(){return n()},get children(){return e(u,{})}})}})]}})}t(a,"SimpleFade");a.code=`import Box from "@suid/material/Box";
import Fade from "@suid/material/Fade";
import FormControlLabel from "@suid/material/FormControlLabel";
import Paper from "@suid/material/Paper";
import Switch from "@suid/material/Switch";
import useTheme from "@suid/material/styles/useTheme";
import { createSignal } from "solid-js";

export function Icon() {
  const theme = useTheme();

  return (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ width: 100, height: 100 }}>
        <Box
          component="polygon"
          sx={{
            fill: theme.palette.common.white,
            stroke: theme.palette.divider,
            strokeWidth: "1",
          }}
          points="0,100 50,00, 100,100"
        />
      </Box>
    </Paper>
  );
}
export default function SimpleFade() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={
          <Switch checked={checked()} onChange={() => setChecked(!checked())} />
        }
        label="Show"
      />

      <Box sx={{ display: "flex" }}>
        <Fade in={checked()}>
          <Icon />
        </Fade>
      </Box>
    </Box>
  );
}
`;function y(){return e(d,{get name(){return i.name},docsName:"transitions",examples:[{bgcolor:"contrasted",component:a}]})}t(y,"FadePage");export{y as default};
