var p=Object.defineProperty;var a=(e,r)=>p(e,"name",{value:r,configurable:!0});import{f as b}from"./formControlState.798b6d8d.js";import{u as g}from"./useFormControl.16e9d810.js";import{r as C,s as F,v as y,w as L,x as u,m as d,d as i,E as q,p as k,S as v}from"./index.b0b0be32.js";function M(e){return F("MuiFormLabel",e)}a(M,"getFormLabelUtilityClasses");const s=C("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),c=y()({name:"MuiFormLabel",propDefaults:({set:e})=>e({component:"label"}),selfPropNames:["children","classes","color","disabled","error","filled","focused","required"],autoCallUseClasses:!1,utilityClass:M,slotClasses:e=>({root:["root",`color${L(e.color)}`,!!e.disabled&&"disabled",!!e.error&&"error",!!e.filled&&"filled",!!e.focused&&"focused",!!e.required&&"required"],asterisk:["asterisk",!!e.error&&"error"]})}),$=u("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},r)=>({...r.root,...e.color==="secondary"&&r.colorSecondary,...e.filled&&r.filled})})(({theme:e,ownerState:r})=>({color:e.palette.text.secondary,...e.typography.body1,lineHeight:"1.4375em",padding:0,position:"relative",[`&.${s.focused}`]:{color:e.palette[r.color].main},[`&.${s.disabled}`]:{color:e.palette.text.disabled},[`&.${s.error}`]:{color:e.palette.error.main}})),x=u("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,r)=>r.asterisk})(({theme:e})=>({[`&.${s.error}`]:{color:e.palette.error.main}})),z=c.component(a(function({allProps:r,otherProps:l,props:m}){const f=g(),o=b({props:r,muiFormControl:f,states:["color","required","focused","disabled","error","filled"]}),t=d(r,{get color(){return o.color||"primary"},get disabled(){return o.disabled},get error(){return o.error},get filled(){return o.filled},get focused(){return o.focused},get required(){return o.required}}),n=c.useClasses(t);return i($,d(l,{get as(){return l.component},ownerState:t,get class(){return q(n.root,l.class)},get children(){return[k(()=>m.children),i(v,{get when(){return o.required},get children(){return i(x,{ownerState:t,"aria-hidden":!0,get class(){return n.asterisk},get children(){return["\u2009","*"]}})}})]}}))},"FormLabel"));export{z as F,s as f};
