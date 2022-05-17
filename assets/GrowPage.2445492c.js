var c=Object.defineProperty;var t=(n,r)=>c(n,"name",{value:r,configurable:!0});import{G as i}from"./Grow.e980ec98.js";import{C as h}from"./ComponentInfo.78e47354.js";import{a as p,d as e,B as o,m as d,u,P as g}from"./index.efcf56ee.js";import{F as f}from"./FormControlLabel.3b819ee2.js";import{S as x}from"./Switch.506883a4.js";import"./Link.9b674151.js";import"./copyText.dc715738.js";import"./PaperCode.4c722102.js";import"./formControlState.f4e894f3.js";import"./useFormControl.f4f8ee8f.js";import"./SwitchBase.7800997f.js";import"./useControlled.be703a13.js";function a(){const n=u();return e(g,{sx:{m:1},elevation:4,get children(){return e(o,{component:"svg",sx:{width:100,height:100},get children(){return e(o,{component:"polygon",get sx(){return{fill:n.palette.common.white,stroke:n.palette.divider,strokeWidth:"1"}},points:"0,100 50,00, 100,100"})}})}})}t(a,"Icon");function m(){const[n,r]=p(!1),s=t(()=>{r(l=>!l)},"handleChange");return e(o,{sx:{height:180},get children(){return[e(f,{get control(){return e(x,{get checked(){return n()},onChange:s})},label:"Show"}),e(o,{sx:{display:"flex"},get children(){return[e(i,{get in(){return n()},get children(){return e(a,{})}}),e(i,d({get in(){return n()},style:{transformOrigin:"0 0 0"}},()=>n()?{timeout:1e3}:{},{get children(){return e(a,{})}}))]}})]}})}t(m,"SimpleGrow");m.code=`import { useTheme } from "@suid/material";
import Box from "@suid/material/Box";
import FormControlLabel from "@suid/material/FormControlLabel";
import Grow from "@suid/material/Grow";
import Paper from "@suid/material/Paper";
import Switch from "@suid/material/Switch";
import { createSignal } from "solid-js";

function Icon() {
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

export default function SimpleGrow() {
  const [checked, setChecked] = createSignal(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked()} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: "flex" }}>
        <Grow in={checked()}>
          <Icon />
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked()}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked() ? { timeout: 1000 } : {})}
        >
          <Icon />
        </Grow>
      </Box>
    </Box>
  );
}
`;function T(){return e(h,{get name(){return i.name},docsName:"transitions",examples:[m]})}t(T,"GrowPage");export{T as default};
