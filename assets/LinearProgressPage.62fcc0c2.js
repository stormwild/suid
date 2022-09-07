var I=Object.defineProperty;var s=(r,e)=>I(r,"name",{value:e,configurable:!0});import{r as k,s as M,v as q,w as i,aq as D,x as d,i as R,a as c,f as h,d as t,m as E,O as N,N as z,E as O,S as p,e as T,b as U,B as C}from"./index.a57572d2.js";import{C as A}from"./ComponentInfo.62610f08.js";import"./Link.91992660.js";import"./copyText.868ec6e7.js";import"./PaperCode.8c0fecdb.js";function V(r){return M("MuiLinearProgress",r)}s(V,"getLinearProgressUtilityClass");k("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const j=q()({name:"MuiLinearProgress",propDefaults:({set:r})=>r({color:"primary",variant:"indeterminate"}),selfPropNames:["classes","color","value","valueBuffer","variant"],utilityClass:V,slotClasses:r=>({root:["root",`color${i(r.color)}`,r.variant],dashed:["dashed",`dashedColor${i(r.color)}`],bar1:["bar",`barColor${i(r.color)}`,(r.variant==="indeterminate"||r.variant==="query")&&"bar1Indeterminate",r.variant==="determinate"&&"bar1Determinate",r.variant==="buffer"&&"bar1Buffer"],bar2:["bar",r.variant!=="buffer"&&`barColor${i(r.color)}`,r.variant==="buffer"&&`color${i(r.color)}`,(r.variant==="indeterminate"||r.variant==="query")&&"bar2Indeterminate",r.variant==="buffer"&&"bar2Buffer"]})}),m=4,u=D(),g=s((r,e)=>e==="inherit"?"currentColor":r.palette.mode==="light"?N(r.palette[e].main,.62):z(r.palette[e].main,.5),"getColorShade"),X=d("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${i(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:g(e,r.color),...r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},...r.variant==="buffer"&&{backgroundColor:"transparent"},...r.variant==="query"&&{transform:"rotate(180deg)"}})),F=d("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${i(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=g(e,r.color);return{position:"absolute",marginTop:0,height:"100%",width:"100%",...r.color==="inherit"&&{opacity:.3},backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"}},{[`@keyframes buffer-${u}`]:{0:{opacity:1,backgroundPosition:"0 -23px"},60:{opacity:0,backgroundPosition:"0 -23px"},100:{opacity:1,backgroundPosition:"-200px -23px"}},animation:`buffer-${u} 3s infinite linear`}),_=d("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${i(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":e.palette[r.color].main,...r.variant==="determinate"&&{transition:`transform .${m}s linear`},...r.variant==="buffer"&&{zIndex:1,transition:`transform .${m}s linear`}}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&{[`@keyframes indeterminate1-${u}`]:{0:{left:"-35%",right:"100%"},60:{left:"100%",right:"-90%"},100:{left:"100%",right:"-90%"}},width:"auto",animation:`indeterminate1-${u} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}),G=d("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${i(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",...r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":e.palette[r.color].main},...r.color==="inherit"&&{opacity:.3},...r.variant==="buffer"&&{backgroundColor:g(e,r.color),transition:`transform .${m}s linear`}}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&{[`@keyframes indeterminate2-${u}`]:{0:{left:"-200%",right:"100%"},60:{left:"107%",right:"-8%"},100:{left:"107%",right:"-8%"}},width:"auto",animation:`indeterminate2-${u} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}),b=j.component(s(function({allProps:e,classes:a,otherProps:l,props:n}){const v=R(),f=T(l),[y,B]=c({}),[$,L]=c({});return h(()=>{if((n.variant==="determinate"||n.variant==="buffer")&&n.value!==void 0){f.ref.ariaValueNow=Math.round(n.value).toString(),f.ref.ariaValueMin="0",f.ref.ariaValueMax="100";let o=n.value-100;v.direction==="rtl"&&(o=-o),B({transform:`translateX(${o}%)`})}}),h(()=>{if(n.variant==="buffer"&&n.valueBuffer!==void 0){let o=(n.valueBuffer||0)-100;v.direction==="rtl"&&(o=-o),L({transform:`translateX(${o}%)`})}}),t(X,E({role:"progressbar"},l,{ref:f,get class(){return O(a.root,l.class)},ownerState:e,get children(){return[t(p,{get when(){return n.variant==="buffer"},get children(){return t(F,{get class(){return a.dashed},ownerState:e})}}),t(_,{get class(){return a.bar1},ownerState:e,get style(){return y()}}),t(p,{get when(){return n.variant!=="determinate"},get children(){return t(G,{get class(){return a.bar2},ownerState:e,get style(){return $()}})}})]}}))},"LinearProgress"));function x(){const[r,e]=c(0),a=setInterval(()=>{e(l=>{if(l===100)return 0;const n=Math.random()*10;return Math.min(l+n,100)})},500);return U(()=>clearInterval(a)),t(C,{sx:{width:"100%"},get children(){return t(b,{variant:"determinate",get value(){return r()}})}})}s(x,"DeterminateExample");x.code=`import Box from "@suid/material/Box";
import LinearProgress from "@suid/material/LinearProgress";
import { createSignal, onCleanup } from "solid-js";

export default function DeterminateExample() {
  const [progress, setProgress] = createSignal(0);

  const timer = setInterval(() => {
    setProgress((oldProgress) => {
      if (oldProgress === 100) {
        return 0;
      }
      const diff = Math.random() * 10;
      return Math.min(oldProgress + diff, 100);
    });
  }, 500);

  onCleanup(() => clearInterval(timer));

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress variant="determinate" value={progress()} />
    </Box>
  );
}
`;function P(){return t(C,{sx:{width:"100%"},get children(){return t(b,{})}})}s(P,"IndeterminateExample");P.code=`import Box from "@suid/material/Box";
import LinearProgress from "@suid/material/LinearProgress";

export default function IndeterminateExample() {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress />
    </Box>
  );
}
`;function Z(){return t(A,{get name(){return b.name},docsName:"progress",examples:[P,x]})}s(Z,"LinearProgressPage");export{Z as default};
