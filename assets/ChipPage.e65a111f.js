var K=Object.defineProperty;var d=(e,o)=>K(e,"name",{value:o,configurable:!0});import{c as N,t as A,q as U,r as V,s as E,v as a,w as D,y as s,K as g,d as u,m as B,n as F,A as f,e as H,ac as y,ae as $}from"./index.b7957beb.js";import{C as P}from"./ComponentInfo.e6ba9f4e.js";import{S as I}from"./copyText.458eb312.js";import"./Link.314b9cd9.js";import"./PaperCode.37f24fed.js";const S=A('<svg><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>',4,!0);var W=N(()=>S.cloneNode(!0),"Cancel");function Y(e){return V("MuiChip",e)}d(Y,"getChipUtilityClass");const l=U("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),j=E()({name:"MuiChip",propDefaults:({set:e})=>e({color:"default",disabled:!1,size:"medium",variant:"filled"}),selfPropNames:["avatar","children","classes","clickable","color","deleteIcon","disabled","icon","label","onDelete","size","variant"],utilityClass:Y,slotClasses:e=>({root:["root",e.variant,e.disabled&&"disabled",`size${a(e.size)}`,`color${a(e.color)}`,!!e.clickable&&"clickable",!!e.clickable&&`clickableColor${a(e.color)}`,!!e.onDelete&&"deletable",!!e.onDelete&&`deletableColor${a(e.color)}`,`${e.variant}${a(e.color)}`],label:["label",`label${a(e.size)}`],avatar:["avatar",`avatar${a(e.size)}`,`avatarColor${a(e.color)}`],icon:["icon",`icon${a(e.size)}`,`iconColor${a(e.color)}`],deleteIcon:["deleteIcon",`deleteIcon${a(e.size)}`,`deleteIconColor${a(e.color)}`,`deleteIconOutlinedColor${a(e.color)}`]})}),q=D("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:c}=e,{color:i,clickable:n,onDelete:b,size:p,variant:m}=c;return[{[`& .${l.avatar}`]:o.avatar},{[`& .${l.avatar}`]:o[`avatar${a(p)}`]},{[`& .${l.avatar}`]:o[`avatarColor${a(i)}`]},{[`& .${l.icon}`]:o.icon},{[`& .${l.icon}`]:o[`icon${a(p)}`]},{[`& .${l.icon}`]:o[`iconColor${a(i)}`]},{[`& .${l.deleteIcon}`]:o.deleteIcon},{[`& .${l.deleteIcon}`]:o[`deleteIcon${a(p)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconColor${a(i)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconOutlinedColor${a(i)}`]},o.root,o[`size${a(p)}`],o[`color${a(i)}`],n&&o.clickable,n&&i!=="default"&&o[`clickableColor${a(i)})`],b&&o.deletable,b&&i!=="default"&&o[`deletableColor${a(i)}`],o[m],m==="outlined"&&o[`outlined${a(i)}`]]}})(({theme:e,ownerState:o})=>{const c=s(e.palette.text.primary,.26);return{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.text.primary,backgroundColor:e.palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:e.palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${l.icon}`]:{color:e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6,...o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},...o.color!=="default"&&{color:"inherit"}},[`& .${l.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:c,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:s(c,.4)},...o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},...o.color!=="default"&&{color:s(e.palette[o.color].contrastText,.7),"&:hover, &:active":{color:e.palette[o.color].contrastText}}},...o.size==="small"&&{height:24},...o.color!=="default"&&{backgroundColor:e.palette[o.color].main,color:e.palette[o.color].contrastText},...o.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:s(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},...o.onDelete&&o.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:e.palette[o.color].dark}}}},({theme:e,ownerState:o})=>({...o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:s(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:s(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:e.shadows[1]}},...o.clickable&&o.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:e.palette[o.color].dark}}}),({theme:e,ownerState:o})=>({...o.variant==="outlined"&&{backgroundColor:"transparent",border:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:e.palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},...o.variant==="outlined"&&o.color!=="default"&&{color:e.palette[o.color].main,border:`1px solid ${s(e.palette[o.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:s(e.palette[o.color].main,e.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:s(e.palette[o.color].main,e.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:s(e.palette[o.color].main,.7),"&:hover, &:active":{color:e.palette[o.color].main}}}})),_=D("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:c}=e,{size:i}=c;return[o.label,o[`label${a(i)}`]]}})(({ownerState:e})=>({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",...e.size==="small"&&{paddingLeft:8,paddingRight:8}}));function h(e){return e.key==="Backspace"||e.key==="Delete"}d(h,"isDeleteKeyboardEvent");const C=j.component(d(function({allProps:o,classes:c,otherProps:i,props:n}){const b=H(i),p=d(t=>{t.stopPropagation(),n.onDelete?.()},"handleDeleteIconClick"),m=d(t=>{t.currentTarget===t.target&&h(t)&&t.preventDefault(),typeof i.onKeyDown=="function"&&i.onKeyDown(t)},"handleKeyDown"),R=d(t=>{t.currentTarget===t.target&&(n.onDelete&&h(t)?n.onDelete():t.key==="Escape"&&b.ref&&b.ref.blur()),typeof i.onKeyUp=="function"&&i.onKeyUp(t)},"handleKeyUp"),k=g(()=>n.clickable!==!1&&i.onClick?!0:n.clickable),v=g(()=>k()||n.onDelete?y:i.component||"div"),L=g(()=>v()===y?{component:i.component||"div",...n.onDelete&&{disableRipple:!0}}:{}),O=g(()=>{if(!n.onDelete)return;const t=$(()=>n.deleteIcon)();if(t&&t instanceof HTMLElement){const r=t.cloneNode(!0);r.setAttribute("class",f(r.getAttribute("class"),c.deleteIcon)),r.onclick=p}else return u(W,{get className(){return c.deleteIcon},onClick:p})}),M=g(()=>{const t=$(()=>n.avatar)();if(t&&t instanceof HTMLElement){const r=t.cloneNode(!0);return r.setAttribute("class",f(r.getAttribute("class"),c.avatar)),r}}),T=g(()=>{const t=$(()=>n.icon)();if(t&&t instanceof HTMLElement){const r=t.cloneNode(!0);return r.setAttribute("class",f(r.getAttribute("class"),c.icon)),r}});return u(q,B({get as(){return v()},get className(){return f(c.root,i.className)},get disabled(){return k()&&n.disabled?!0:void 0},get onClick(){return i.onClick},onKeyDown:m,onKeyUp:R,ref:b,ownerState:o},L,i,{get children(){return[F(()=>M()||T()),u(_,{get className(){return f(c.label)},ownerState:o,get children(){return n.label}}),O]}}))},"Chip"));function z(){return u(I,{direction:"row",spacing:1,get children(){return[u(C,{label:"Chip Filled"}),u(C,{label:"Chip Outlined",variant:"outlined"})]}})}d(z,"BasicChips");z.code=`import Chip from "@suid/material/Chip";
import Stack from "@suid/material/Stack";

export default function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
  );
}
`;function x(){const e=d(()=>{console.info("You clicked the delete icon.")},"handleDelete");return u(I,{direction:"row",spacing:1,get children(){return[u(C,{label:"Deletable",onDelete:e}),u(C,{label:"Deletable",variant:"outlined",onDelete:e})]}})}d(x,"DeletableChips");x.code=`import Chip from "@suid/material/Chip";
import Stack from "@suid/material/Stack";

export default function DeletableChips() {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Deletable" onDelete={handleDelete} />
      <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>
  );
}
`;function ee(){return u(P,{get name(){return C.name},docsName:"chips",examples:[z,x]})}d(ee,"ChipPage");export{ee as default};
