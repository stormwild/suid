var S=Object.defineProperty;var c=(o,i)=>S(o,"name",{value:i,configurable:!0});import{a as r,o as T,d as t,Q as w,_ as n,T as a,n as b,G as s,S as d,R as f,B as V,h as P,U as A,M as O}from"./index.9496b0d8.js";import{A as B}from"./Alert.f0950a44.js";import{C as D}from"./CircularProgress.8248939c.js";import{g as k}from"./getDependencyName.2f93439d.js";const L=`import * as React from "react"
import Button from "@mui/material/Button"

export default function Counter(props: any) {
  const [value, setValue] = React.useState(0);
  const { label = 'Increment', ...otherProps } = props;
  const propsAndValue = { ...props, value };
  const onClick = () => setValue(value + 1);

  React.useEffect(() => {
    console.log("Value: " + propsAndValue.value);
  }, [value]);

  return <div {...otherProps}>
    Value: {value}
    <Button onClick={onClick}>{label}</Button>
  </div>
}
`,_="react2solid-input-code";function N(){if(location.hash.length>1)try{return window.atob(location.hash.slice(1))}catch(o){console.error(o)}}c(N,"decodeHash");function W(){const o=localStorage.getItem(_),[i,v]=r(!1),[y,x]=r(!1),[m,p]=r(!1),l=N()??(o?.length?o:L),[h,C]=r(l),[R,E]=r(""),g=w(()=>n(()=>import("./CodeEditor.8c575da2.js").then(function(e){return e.C}),["assets/CodeEditor.8c575da2.js","assets/CodeEditor.f3e9adee.css","assets/index.9496b0d8.js","assets/useControlled.339ee1d8.js"]));return T(()=>{setTimeout(()=>{location.hash=window.btoa(l)})}),[t(a,{component:"h1",variant:"h4",sx:{mt:1},children:"React to Solid"}),t(a,{variant:"body1",sx:{mt:2},children:"Transform your MUI React code to SUID SolidJS."}),t(B,{severity:"info",sx:{mt:2},get children(){return["You can also transform your code from the console: npx"," ",b(()=>k("@suid/codemod"))]}}),t(s,{container:!0,spacing:2,get children(){return[t(s,{item:!0,xs:12,xl:6,get children(){return[t(a,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Input React code"}),t(d,{get when(){return!i()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"react.tsx",defaultValue:l,onReady:()=>v(!0),onChange:e=>{location.hash=window.btoa(e),localStorage.setItem(_,e),C(e)}})]}}),t(s,{item:!0,xs:12,xl:6,get children(){return[t(a,{component:"h3",variant:"h6",sx:{mt:2,mb:1},children:"Output SolidJS code"}),t(d,{get when(){return!y()},get children(){return t(f,{variant:"rectangular",height:400})}}),t(g,{fileName:"solid.tsx",get value(){return R()},onReady:()=>x(!0)})]}}),t(s,{item:!0,xs:12,get children(){return t(V,{sx:{textAlign:"center",my:2},get children(){return t(P,{variant:"outlined",sx:{p:2,minWidth:150},fullWidth:!0,size:"large",get className(){return m()?A.disabled:""},onMouseEnter:()=>{n(()=>import("./applyTransforms.6ffecc24.js"),[]),n(()=>import("./transformReactSource.b12a083c.js"),["assets/transformReactSource.b12a083c.js","assets/index.9496b0d8.js"])},onClick:async()=>{let e=h();p(!0);try{const u=await n(()=>import("./applyTransforms.6ffecc24.js"),[]),I=await n(()=>import("./transformReactSource.b12a083c.js"),["assets/transformReactSource.b12a083c.js","assets/index.9496b0d8.js"]);e=u.default(h(),[I.default])}catch(u){console.error(u)}finally{setTimeout(()=>{E(e),p(!1)},500)}},get children(){return t(d,{get when(){return m()},fallback:"Transform",get children(){return["Transforming",t(D,{sx:{width:40,opacity:.8,position:"absolute"}})]}})}})}})}})]}}),t(O,{sx:{mt:2}})]}c(W,"ReactToSolidPage");export{W as default};
