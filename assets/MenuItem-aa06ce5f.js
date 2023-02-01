var _=Object.defineProperty;var a=(e,t)=>_(e,"name",{value:t,configurable:!0});import{L as J,r as O,o as X,y as E,z as K,C as G,E as A}from"./ListItemText-a46102d3.js";import{I as $,D as h,p as c,m as B,al as U,X as Z,c as v,am as R,O as V,P as W,R as F,Z as z,g as q,j as Q,J as S,_ as P,u as Y,w as ee}from"./ErrorPage-5efa7331.js";import{o as te}from"./ownerDocument-5bb7a871.js";import{P as se}from"./Paper-b94e5972.js";import{P as oe}from"./Popover-3632ba3a.js";const ne=$()({name:"MuiMenuList",selfPropNames:["autoFocus","autoFocusItem","children","disabledItemsFocusable","disableListWrap","variant"]});function D(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?void 0:e.firstChild}a(D,"nextItem");function N(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?void 0:e.lastChild}a(N,"previousItem");function H(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent??""),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.indexOf(t.keys.join(""))===0}a(H,"textCriteriaMatches");function I(e,t,o,n,i,s){let f=!1,u=i(e,t,t?o:!1);for(;u;){if(u===e.firstChild){if(f)return!1;f=!0}const p=n?!1:u.disabled||u.getAttribute("aria-disabled")==="true";if(!u.hasAttribute("tabindex")||!H(u,s)||p)u=i(e,u,o);else return u.focus(),!0}return!1}a(I,"moveFocus");const re=ne.defineComponent(a(function(t){const o=O(t),[,n]=h(t,["autoFocus","autoFocusItem","children","class","disabledItemsFocusable","disableListWrap","onKeyDown","variant"]),i=c({autoFocus:!1,autoFocusItem:!1,disabledItemsFocusable:!1,disableListWrap:!1,variant:"selectedMenu"},t),s={keys:[],repeating:!0,previousKeyMatched:!0,lastTime:0};B(()=>{i.autoFocus&&o.current.focus()},[i.autoFocus]);const f=a(r=>{const l=o.current,d=r.key,b=te(l).activeElement;if(d==="ArrowDown")r.preventDefault(),I(l,b,i.disableListWrap,i.disabledItemsFocusable,D);else if(d==="ArrowUp")r.preventDefault(),I(l,b,i.disableListWrap,i.disabledItemsFocusable,N);else if(d==="Home")r.preventDefault(),I(l,void 0,i.disableListWrap,i.disabledItemsFocusable,D);else if(d==="End")r.preventDefault(),I(l,void 0,i.disableListWrap,i.disabledItemsFocusable,N);else if(d.length===1){const C=d.toLowerCase(),y=performance.now();s.keys.length>0&&(y-s.lastTime>500?(s.keys=[],s.repeating=!0,s.previousKeyMatched=!0):s.repeating&&C!==s.keys[0]&&(s.repeating=!1)),s.lastTime=y,s.keys.push(C);const x=b&&!s.repeating&&H(b,s);s.previousKeyMatched&&(x||I(l,b,!1,i.disabledItemsFocusable,D,s))?r.preventDefault():s.previousKeyMatched=!1}typeof t.onKeyDown=="function"&&t.onKeyDown(r)},"handleKeyDown"),u=U(()=>t.children),p=a(()=>{let r=-1,l=0;for(const d of u())R(d)&&(d.props.disabled||(i.variant==="selectedMenu"&&d.props.selected||r===-1)&&(r=l)),l++;return r},"activeItemIndex"),g=Z(u,(r,l)=>R(r)?v(r.Component,c(r.props,{get autoFocus(){if(l()===p()&&i.autoFocusItem)return!0},get tabIndex(){if(r.props.tabIndex===void 0&&l()===p()&&i.variant)return 0}})):r);return v(J,c({role:"menu",ref:o,get class(){return t.class},onKeyDown:f,get tabIndex(){return i.autoFocus?0:-1}},n,{children:g}))},"MenuList"));function ie(e){return W("MuiMenu",e)}a(ie,"getMenuUtilityClass");V("MuiMenu",["root","paper","list"]);const T=$()({name:"MuiMenu",selfPropNames:["anchorEl","autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","open","PopoverClasses","transitionDuration","TransitionProps","variant"],utilityClass:ie,slotClasses:()=>({root:["root"],paper:["paper"],list:["list"]})}),ae={vertical:"top",horizontal:"right"},ue={vertical:"top",horizontal:"left"},le=F(oe,{skipProps:z.filter(e=>e!=="classes"),name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ce=F(se,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),de=F(re,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Me=T.defineComponent(a(function(t){const o=O(t),n=T.useThemeProps({props:t}),[,i]=h(n,["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"]),s=c({autoFocus:!0,disableAutoFocusItem:!1,MenuListProps:{},PaperProps:{},transitionDuration:"auto",variant:"selectedMenu"},n),[,f]=h(c(()=>n.TransitionProps||{}),["onEntering"]),u=q(),p=a(()=>u.direction==="rtl","isRtl"),g=c(s,{TransitionProps:f}),r=T.useClasses(g),l=a(()=>s.autoFocus&&!s.disableAutoFocusItem&&n.open,"autoFocusItem"),d=a(()=>{n.TransitionProps?.onEntering&&n.TransitionProps?.onEntering()},"handleEntering"),b=a(m=>{m.key==="Tab"&&(m.preventDefault(),n.onClose&&n.onClose(m,"tabKeyDown"))},"handleListKeyDown"),C=U(()=>n.children),y=a(()=>{let m=-1,L=0;for(const k of C())R(k)&&(k.props.disabled||(s.variant==="selectedMenu"&&k.props.selected||m===-1)&&(m=L)),L++;return m},"activeItemIndex"),x=c({component:ce},()=>s.PaperProps,{classes:c(()=>s.PaperProps.classes,{get root(){return r.paper}})}),j=c({onEntering:d},f);return v(le,c({get classes(){return n.PopoverClasses},get onClose(){return n.onClose},anchorOrigin:{vertical:"bottom",get horizontal(){return p()?"right":"left"}},get transformOrigin(){return p()?ae:ue},PaperProps:x,get class(){return r.root},get open(){return n.open},ref:o,get transitionDuration(){return s.transitionDuration},TransitionProps:j,ownerState:g},i,{get children(){return v(de,c({onKeyDown:b,get autoFocus(){return Q(()=>!!s.autoFocus)()&&(y()===-1||s.disableAutoFocusItem)},get autoFocusItem(){return l()},get variant(){return s.variant}},()=>s.MenuListProps,{get class(){return S(r.list,s.MenuListProps.class)},get children(){return C()}}))}}))},"Menu"));function pe(e){return W("MuiMenuItem",e)}a(pe,"getMenuItemUtilityClass");const M=V("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=$()({name:"MuiMenuItem",selfPropNames:["autoFocus","classes","dense","disabled","disableGutters","divider","selected"],utilityClass:pe,slotClasses:e=>({root:["root",e.dense&&"dense",e.disabled&&"disabled",!e.disableGutters&&"gutters",e.divider&&"divider",e.selected&&"selected"]})}),fe=F(X,{skipProps:z.filter(e=>e!=="classes"),name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})(({theme:e,ownerState:t})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap",...!t.disableGutters&&{paddingLeft:16,paddingRight:16},...t.divider&&{borderBottom:`1px solid ${e.palette.divider}`,backgroundClip:"padding-box"},"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${M.selected}`]:{backgroundColor:P(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${M.focusVisible}`]:{backgroundColor:P(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${M.selected}:hover`]:{backgroundColor:P(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:P(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${M.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`&.${M.disabled}`]:{opacity:e.palette.action.disabledOpacity},[`& + .${E.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${E.inset}`]:{marginLeft:52},[`& .${K.root}`]:{marginTop:0,marginBottom:0},[`& .${K.inset}`]:{paddingLeft:36},[`& .${G.root}`]:{minWidth:36},...!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},...t.dense&&{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${G.root} svg`]:{fontSize:"1.25rem"}}})),ye=w.defineComponent(a(function(t){const o=O(t),n=w.useThemeProps({props:t}),[,i]=h(n,["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"]),s=c({autoFocus:!1,component:"li",dense:!1,divider:!1,disableGutters:!1,role:"menuitem"},n),f=Y(A),u={get dense(){return s.dense||f.dense||!1},get disableGutters(){return s.disableGutters}};B(()=>{s.autoFocus&&(o.current?ee(()=>o.current.focus()):console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."))});const p=c(n,{get dense(){return u.dense},get divider(){return s.divider},get disableGutters(){return s.disableGutters}}),g=w.useClasses(n),r=a(()=>{if(!n.disabled)return n.tabIndex!==void 0?n.tabIndex:-1},"tabIndex");return v(A.Provider,{value:u,get children(){return v(fe,c({ref:o,get role(){return s.role},get tabIndex(){return r()},get component(){return s.component},get focusVisibleClassName(){return S(p.classes?.focusVisible,n.focusVisibleClassName)}},i,{ownerState:p,classes:g}))}})},"MenuItem"));export{ye as M,Me as a,re as b};
