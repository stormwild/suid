var b=Object.defineProperty;var c=(t,e)=>b(t,"name",{value:e,configurable:!0});import{S as k}from"./SwitchBase.f0ed51e0.js";import{q as w,r as v,s as $,v as i,w as n,y as h,U as S,R as f,m as d,ab as x,d as s,A as y}from"./index.bf44a517.js";function C(t){return v("MuiSwitch",t)}c(C,"getSwitchUtilityClass");const o=w("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),z=$()({name:"MuiSwitch",selfPropNames:["checkedIcon","classes","color","disabled","icon","size","value"],propDefaults:({set:t})=>t({color:"primary",size:"medium"}),utilityClass:C,slotClasses:t=>({root:["root",!!t.edge&&`edge${i(t.edge)}`,`size${i(t.size)}`],switchBase:["switchBase",`color${i(t.color)}`,!!t.checked&&"checked",!!t.disabled&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]})}),R=n("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,a.edge&&e[`edge${i(a.edge)}`],e[`size${i(a.size)}`]]}})(({ownerState:t})=>({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},...t.edge==="start"&&{marginLeft:-8},...t.edge==="end"&&{marginRight:-8},...t.size==="small"&&{width:40,height:24,padding:7,[`& .${o.thumb}`]:{width:16,height:16},[`& .${o.switchBase}`]:{padding:4,[`&.${o.checked}`]:{transform:"translateX(16px)"}}}})),B=n(k,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.switchBase,{[`& .${o.input}`]:e.input},a.color!=="default"&&e[`color${i(a.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300],transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${o.checked}`]:{transform:"translateX(20px)"},[`&.${o.disabled}`]:{color:t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]},[`&.${o.checked} + .${o.track}`]:{opacity:.5},[`&.${o.disabled} + .${o.track}`]:{opacity:t.palette.mode==="light"?.12:.2},[`& .${o.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:e})=>({"&:hover":{backgroundColor:h(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},...e.color!=="default"&&{[`&.${o.checked}`]:{color:t.palette[e.color].main,"&:hover":{backgroundColor:h(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.disabled}`]:{color:t.palette.mode==="light"?S(t.palette[e.color].main,.62):f(t.palette[e.color].main,.55)}},[`&.${o.checked} + .${o.track}`]:{backgroundColor:t.palette[e.color].main}}})),M=n("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,e)=>e.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.palette.mode==="light"?t.palette.common.black:t.palette.common.white,opacity:t.palette.mode==="light"?.38:.3})),I=n("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,e)=>e.thumb})(({theme:t})=>({boxShadow:t.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),A=z.component(c(function({allProps:e,props:a,classes:r,otherProps:l}){const u=c(()=>s(I,{get className(){return r.thumb},ownerState:e}),"icon"),p=d(r,{get root(){return r.switchBase}}),[,g]=x(l,["sx"]),m=d(g,{get checkedIcon(){return a.checkedIcon||u},get disabled(){return a.disabled},get icon(){return a.icon||u},get value(){return a.value}});return s(R,{get className(){return y(r.root,l.className)},get sx(){return l.sx},ownerState:e,get children(){return[s(B,d({type:"checkbox",ownerState:e},m,{classes:p})),s(M,{get className(){return r.track},ownerState:e})]}})},"Switch"));export{A as S};
