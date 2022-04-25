var y=Object.defineProperty;var i=(e,n)=>y(e,"name",{value:n,configurable:!0});import{ts as l,Node as T}from"https://esm.sh/ts-morph@^14.0.0";import{a2 as I}from"./index.a47904f5.js";function s(e){const n=e.getParentWhileKind(l.SyntaxKind.QualifiedName);if(n)return n;const t=e.getParentWhileKind(l.SyntaxKind.TypeReference);if(t)return t;const a=e.getParentWhileKind(l.SyntaxKind.PropertyAccessExpression);return a||e}i(s,"getParentExpr");function h(e,n){const t=e.getImportDeclaration("react"),a=[],r=i(m=>{const o=m.getText();(!n||n.includes(o))&&a.push({name:o,node:m})},"push");if(t){const m=t.getNamespaceImport(),o=t.getNamedImports();for(const c of o){const d=c.getFirstChildByKind(l.SyntaxKind.Identifier);if(d)for(const p of d.findReferencesAsNodes())p!==d&&T.isIdentifier(p)&&r(p)}if(m)for(const c of m.findReferencesAsNodes()){if(c.getFirstAncestorByKind(l.SyntaxKind.NamespaceImport))continue;const p=s(c)?.getLastChildByKind(l.SyntaxKind.Identifier);p&&r(p)}}return a}i(h,"findReactObjects");function G(e){const n=e.getImportDeclarations(),t={};for(const a of n){const r=a.getModuleSpecifier().getLiteralText();if(!t[r])t[r]=a;else{const m=t[r].getNamedImports().map(o=>o.getText());for(const o of a.getNamedImports()){const c=o.getText();m.includes(c)||t[r].addNamedImport(c)}a.remove()}}}i(G,"groupImports");function F(e){const n=e.getImportDeclarations();for(const a of n)a.getModuleSpecifier().getLiteralText()==="prop-types"&&a.remove();const t=e.getChildrenOfKind(l.SyntaxKind.ExpressionStatement);for(const a of t)a.getFirstChildByKind(l.SyntaxKind.BinaryExpression)?.getFirstChildByKind(l.SyntaxKind.PropertyAccessExpression)?.getLastChildByKind(l.SyntaxKind.Identifier)?.getText()==="propTypes"&&a.remove()}i(F,"removePropTypes");function V(e){const n=e.getImportDeclarations();for(const t of n)t.getModuleSpecifier().getLiteralText()==="react"&&t.remove()}i(V,"removeReactImports");function b(e){for(const n of e.getImportDeclarations()){const t=n.getModuleSpecifier();t.getLiteralText().startsWith("@mui/")&&t.setLiteralValue(t.getLiteralText().replace(/^@mui/,"@suid"))}}i(b,"renameMuiImports");function E(e,n,t){const a=s(e);t?("namespaceImport"in t?a.replaceWithText(`${t.namespaceImport}.${n}`):"namespaceNamedImport"in t?a.replaceWithText(`${t.namespaceNamedImport}.${n}`):"namedImport"in t&&a.replaceWithText(`${n}`),e.getSourceFile().addImportDeclaration({moduleSpecifier:t.moduleSpecifier,..."namespaceImport"in t&&{namespaceImport:t.namespaceImport},..."namespaceNamedImport"in t&&{namespaceImport:t.namespaceNamedImport},..."namedImport"in t&&{namedImports:[t.namedImport]}})):a.replaceWithText(n)}i(E,"renameExpr");function K(e){E(e,"Context",{moduleSpecifier:"solid-js",namedImport:"Context"})}i(K,"replaceReactContext");function C(e){E(e,"createContext",{moduleSpecifier:"solid-js",namedImport:"createContext"})}i(C,"replaceReactCreateContext");function R(e){E(e,"ElementType",{moduleSpecifier:"@suid/types",namespaceImport:"ST"})}i(R,"replaceReactElementType");function A(e){const n=e.getText();E(e,n,{moduleSpecifier:"@suid/types",namespaceImport:"ST"})}i(A,"replaceReactEventHandlers");function g(e,n,t){const a=e;a.__replacePatterns||(a.__replacePatterns={}),a.__replacePatterns[n]=t}i(g,"addReplacePattern");const L=`__EMPTY__${Date.now()}`;function B(e){const n=e.getFirstAncestorByKind(l.SyntaxKind.JsxElement);g(e.getSourceFile(),L,""),n?.set({name:L})}i(B,"replaceReactFragment");const{factory:f}=l,M={a:"HTMLAnchorElement",abbr:"HTMLElement",address:"HTMLElement",area:"HTMLAreaElement",article:"HTMLElement",aside:"HTMLElement",audio:"HTMLAudioElement",b:"HTMLElement",base:"HTMLBaseElement",bdi:"HTMLElement",bdo:"HTMLElement",big:"HTMLElement",blockquote:"HTMLElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLElement",cite:"HTMLElement",code:"HTMLElement",col:"HTMLTableColElement",colgroup:"HTMLTableColElement",data:"HTMLElement",datalist:"HTMLDataListElement",dd:"HTMLElement",del:"HTMLElement",details:"HTMLDetailsElement",dfn:"HTMLElement",dialog:"HTMLElement",div:"HTMLDivElement",dl:"HTMLDListElement",dt:"HTMLElement",em:"HTMLElement",embed:"HTMLEmbedElement",fieldset:"HTMLFieldSetElement",figcaption:"HTMLElement",figure:"HTMLElement",footer:"HTMLElement",form:"HTMLFormElement",h1:"HTMLHeadingElement",h2:"HTMLHeadingElement",h3:"HTMLHeadingElement",h4:"HTMLHeadingElement",h5:"HTMLHeadingElement",h6:"HTMLHeadingElement",head:"HTMLHeadElement",header:"HTMLElement",hgroup:"HTMLElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",i:"HTMLElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",ins:"HTMLModElement",kbd:"HTMLElement",keygen:"HTMLElement",label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",main:"HTMLElement",map:"HTMLMapElement",mark:"HTMLElement",menu:"HTMLElement",menuitem:"HTMLElement",meta:"HTMLMetaElement",meter:"HTMLElement",nav:"HTMLElement",noindex:"HTMLElement",noscript:"HTMLElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLElement",p:"HTMLParagraphElement",param:"HTMLParamElement",picture:"HTMLElement",pre:"HTMLPreElement",progress:"HTMLProgressElement",q:"HTMLQuoteElement",rp:"HTMLElement",rt:"HTMLElement",ruby:"HTMLElement",s:"HTMLElement",samp:"HTMLElement",script:"HTMLElement",section:"HTMLElement",select:"HTMLSelectElement",small:"HTMLElement",source:"HTMLSourceElement",span:"HTMLSpanElement",strong:"HTMLElement",style:"HTMLStyleElement",sub:"HTMLElement",summary:"HTMLElement",sup:"HTMLElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",td:"HTMLTableDataCellElement",textarea:"HTMLTextAreaElement",tfoot:"HTMLTableSectionElement",th:"HTMLTableHeaderCellElement",thead:"HTMLTableSectionElement",time:"HTMLElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",u:"HTMLElement",ul:"HTMLUListElement",var:"HTMLElement",video:"HTMLVideoElement",wbr:"HTMLElement",svg:"SVGSVGElement",animate:"SVGAnimateElement",animateMotion:"SVGAnimateMotionElement",animateTransform:"SVGAnimateTransformElement",circle:"SVGCircleElement",clipPath:"SVGClipPathElement",defs:"SVGDefsElement",desc:"SVGDescElement",ellipse:"SVGEllipseElement",feBlend:"SVGFEBlendElement",feColorMatrix:"SVGFEColorMatrixElement",feComponentTransfer:"SVGFEComponentTransferElement",feComposite:"SVGFECompositeElement",feConvolveMatrix:"SVGFEConvolveMatrixElement",feDiffuseLighting:"SVGFEDiffuseLightingElement",feDisplacementMap:"SVGFEDisplacementMapElement",feDistantLight:"SVGFEDistantLightElement",feFlood:"SVGFEFloodElement",feFuncA:"SVGFEFuncAElement",feFuncB:"SVGFEFuncBElement",feFuncG:"SVGFEFuncGElement",feFuncR:"SVGFEFuncRElement",feGaussianBlur:"SVGFEGaussianBlurElement",feImage:"SVGFEImageElement",feMerge:"SVGFEMergeElement",feMergeNode:"SVGFEMergeNodeElement",feMorphology:"SVGFEMorphologyElement",feOffset:"SVGFEOffsetElement",fePointLight:"SVGFEPointLightElement",feSpecularLighting:"SVGFESpecularLightingElement",feSpotLight:"SVGFESpotLightElement",feTile:"SVGFETileElement",feTurbulence:"SVGFETurbulenceElement",filter:"SVGFilterElement",foreignObject:"SVGForeignObjectElement",g:"SVGGElement",image:"SVGImageElement",line:"SVGLineElement",linearGradient:"SVGLinearGradientElement",marker:"SVGMarkerElement",mask:"SVGMaskElement",metadata:"SVGMetadataElement",path:"SVGPathElement",pattern:"SVGPatternElement",polygon:"SVGPolygonElement",polyline:"SVGPolylineElement",radialGradient:"SVGRadialGradientElement",rect:"SVGRectElement",stop:"SVGStopElement",switch:"SVGSwitchElement",symbol:"SVGSymbolElement",text:"SVGTextElement",textPath:"SVGTextPathElement",tspan:"SVGTSpanElement",use:"SVGUseElement",view:"SVGViewElement"};function P(e){for(const n in M)if(M[n]===e)return n}i(P,"findTag");function v(e){const n=s(e),a=n?.getParentIfKind(l.SyntaxKind.TypeReference)?.getLastChildByKind(l.SyntaxKind.TypeReference);if(a){const r=a.getLastChildByKind(l.SyntaxKind.Identifier)?.getText(),m=r?P(r):null;if(m)a.transform(()=>f.createLiteralTypeNode(f.createStringLiteral(m)));else{const o=I(e.getText().replace(/HTMLAttributes$/,""));o.length&&a.transform(()=>f.createLiteralTypeNode(f.createStringLiteral(o)))}n?.replaceWithText("ST.PropsOf"),e.getSourceFile().addImportDeclaration({namespaceImport:"ST",moduleSpecifier:"@suid/types"})}}i(v,"replaceReactHTMLAttributes");const u=`__REMOVE__${Date.now()}`;function N(e){const n=s(e),t=n.getParentIfKind(l.SyntaxKind.CallExpression);if(t){const a=t.getArguments();for(let r=1;r<a.length;++r)t.removeArgument(1);g(e.getSourceFile(),u,""),n.replaceWithText(u)}}i(N,"replaceReactMemo");function D(e){E(e,"Element",{moduleSpecifier:"solid-js",namespaceNamedImport:"JSX"})}i(D,"replaceReactNode");function _(e){E(e,"Ref",{moduleSpecifier:"@suid/types",namespaceImport:"ST"})}i(_,"replaceReactRef");const S=`__REMOVE__${Date.now()}`;function W(e){const n=s(e),t=n.getParentIfKind(l.SyntaxKind.CallExpression);if(t){const a=t.getArguments();for(let r=1;r<a.length;++r)t.removeArgument(1);g(e.getSourceFile(),S,""),n.replaceWithText(S)}}i(W,"replaceReactUseCallback");function j(e){E(e,"useContext",{moduleSpecifier:"solid-js",namedImport:"useContext"})}i(j,"replaceReactUseContext");function O(e){const n=s(e),t=n.getParentIfKind(l.SyntaxKind.CallExpression);let a="createEffect";if(t){const[r,m]=t.getArguments();let o="";if((T.isFunctionExpression(r)||T.isArrowFunction(r))&&(o=r.getReturnType().getText()),o.startsWith("() =>"))return;T.isArrayLiteralExpression(m)&&!m.getElements().length&&(a="onMount"),t.removeArgument(m)}n.replaceWithText(a),e.getSourceFile().addImportDeclaration({namedImports:[a],moduleSpecifier:"solid-js"})}i(O,"replaceReactUseEffect");const H=`__CALLFUNCTION__${Date.now()}`;function x(e,n=!1){const t=e.getText();g(e.getSourceFile(),H,"()"),e.rename(`${t}${H}`),n&&e.replaceWithText(t)}i(x,"renameGetterVarToCall");function k(e){const n=s(e),t=n.getFirstAncestorByKind(l.SyntaxKind.CallExpression);if(t){const a=t.getFirstAncestorByKind(l.SyntaxKind.VariableDeclaration);if(a){const m=a.getFirstChildByKind(l.SyntaxKind.Identifier);m&&x(m,!0)}t.getArguments().length>1&&t.removeArgument(1)}n.replaceWithText("createMemo"),e.getSourceFile().addImportDeclaration({namedImports:["createMemo"],moduleSpecifier:"solid-js"})}i(k,"replaceReactUseMemo");function $(e){const n=s(e),a=n.getFirstAncestorByKind(l.SyntaxKind.CallExpression)?.getFirstAncestorByKind(l.SyntaxKind.VariableDeclaration);if(a){const r=a.getFirstDescendantByKind(l.SyntaxKind.ArrayBindingPattern);if(r){const o=r.getFirstDescendantByKind(l.SyntaxKind.BindingElement)?.getFirstDescendantByKind(l.SyntaxKind.Identifier);o&&x(o,!0)}}n.replaceWithText("createSignal"),e.getSourceFile().addImportDeclaration({namedImports:["createSignal"],moduleSpecifier:"solid-js"})}i($,"replaceReactUseState");const w={Fragment:B,Context:K,createContext:C,ElementType:R,memo:N,ReactNode:D,Ref:_,useCallback:W,useContext:j,useState:$,useMemo:k,useEffect:O};function Q(e){const n=h(e);for(const t of n){if(t.node.wasForgotten())continue;let a=w[t.name];a||(t.name.endsWith("EventHandler")?a=A:t.name.endsWith("HTMLAttributes")&&(a=v)),a?.(t.node)}b(e),V(e),F(e),G(e)}i(Q,"transformReactSource");export{Q as default};
