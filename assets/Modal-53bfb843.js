import{aD as K,r as o,u as f,j as n,c as d,D as Ce,b as L,H as Ee,aJ as W,F as _,ar as Be,y as ke,aK as De}from"./index-aeac18f4.js";import{A as Ae,j as Fe,u as Oe,e as He,M as Ie,B as be,l as xe}from"./AbstractModalHeader-0dac5ded.js";var p;function z(e){if((!p&&p!==0||e)&&K){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),p=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return p}const J=o.forwardRef(({className:e,bsPrefix:t,as:s="div",...r},l)=>(t=f(t,"modal-body"),n.jsx(s,{ref:l,className:d(e,t),...r})));J.displayName="ModalBody";const Ue=J,q=o.forwardRef(({bsPrefix:e,className:t,contentClassName:s,centered:r,size:l,fullscreen:i,children:w,scrollable:R,...v},N)=>{e=f(e,"modal");const m=`${e}-dialog`,c=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return n.jsx("div",{...v,ref:N,className:d(m,t,l&&`${e}-${l}`,r&&`${m}-centered`,R&&`${m}-scrollable`,i&&c),children:n.jsx("div",{className:d(`${e}-content`,s),children:w})})});q.displayName="ModalDialog";const G=q,Q=o.forwardRef(({className:e,bsPrefix:t,as:s="div",...r},l)=>(t=f(t,"modal-footer"),n.jsx(s,{ref:l,className:d(e,t),...r})));Q.displayName="ModalFooter";const Le=Q,V=o.forwardRef(({bsPrefix:e,className:t,closeLabel:s="Close",closeButton:r=!1,...l},i)=>(e=f(e,"modal-header"),n.jsx(Ae,{ref:i,...l,className:d(t,e),closeLabel:s,closeButton:r})));V.displayName="ModalHeader";const We=V,ze=Fe("h4"),X=o.forwardRef(({className:e,bsPrefix:t,as:s=ze,...r},l)=>(t=f(t,"modal-title"),n.jsx(s,{ref:l,className:d(e,t),...r})));X.displayName="ModalTitle";const Ke=X;function _e(e){return n.jsx(_,{...e,timeout:null})}function Je(e){return n.jsx(_,{...e,timeout:null})}const Y=o.forwardRef(({bsPrefix:e,className:t,style:s,dialogClassName:r,contentClassName:l,children:i,dialogAs:w=G,"aria-labelledby":R,"aria-describedby":v,"aria-label":N,show:m=!1,animation:c=!0,backdrop:h=!0,keyboard:Z=!0,onEscapeKeyDown:$,onShow:P,onHide:y,container:ee,autoFocus:ae=!0,enforceFocus:te=!0,restoreFocus:oe=!0,restoreFocusOptions:ne,onEntered:le,onExit:C,onExiting:se,onEnter:E,onEntering:B,onExited:k,backdropClassName:D,manager:A,...re},de)=>{const[ie,ce]=o.useState({}),[ue,F]=o.useState(!1),S=o.useRef(!1),j=o.useRef(!1),g=o.useRef(null),[M,fe]=Oe(),me=Ce(de,fe),O=L(y),ge=Ee();e=f(e,"modal");const Me=o.useMemo(()=>({onHide:O}),[O]);function H(){return A||xe({isRTL:ge})}function I(a){if(!K)return;const u=H().getScrollbarWidth()>0,U=a.scrollHeight>ke(a).documentElement.clientHeight;ce({paddingRight:u&&!U?z():void 0,paddingLeft:!u&&U?z():void 0})}const T=L(()=>{M&&I(M.dialog)});He(()=>{W(window,"resize",T),g.current==null||g.current()});const he=()=>{S.current=!0},ye=a=>{S.current&&M&&a.target===M.dialog&&(j.current=!0),S.current=!1},b=()=>{F(!0),g.current=De(M.dialog,()=>{F(!1)})},pe=a=>{a.target===a.currentTarget&&b()},we=a=>{if(h==="static"){pe(a);return}if(j.current||a.target!==a.currentTarget){j.current=!1;return}y==null||y()},Re=a=>{Z?$==null||$(a):(a.preventDefault(),h==="static"&&b())},ve=(a,u)=>{a&&I(a),E==null||E(a,u)},Ne=a=>{g.current==null||g.current(),C==null||C(a)},Se=(a,u)=>{B==null||B(a,u),Be(window,"resize",T)},je=a=>{a&&(a.style.display=""),k==null||k(a),W(window,"resize",T)},Te=o.useCallback(a=>n.jsx("div",{...a,className:d(`${e}-backdrop`,D,!c&&"show")}),[c,D,e]),x={...s,...ie};x.display="block";const $e=a=>n.jsx("div",{role:"dialog",...a,style:x,className:d(t,e,ue&&`${e}-static`,!c&&"show"),onClick:h?we:void 0,onMouseUp:ye,"aria-label":N,"aria-labelledby":R,"aria-describedby":v,children:n.jsx(w,{...re,onMouseDown:he,className:r,contentClassName:l,children:i})});return n.jsx(Ie.Provider,{value:Me,children:n.jsx(be,{show:m,ref:me,backdrop:h,container:ee,keyboard:!0,autoFocus:ae,enforceFocus:te,restoreFocus:oe,restoreFocusOptions:ne,onEscapeKeyDown:Re,onShow:P,onHide:y,onEnter:ve,onEntering:Se,onEntered:le,onExit:Ne,onExiting:se,onExited:je,manager:H(),transition:c?_e:void 0,backdropTransition:c?Je:void 0,renderBackdrop:Te,renderDialog:$e})})});Y.displayName="Modal";const Qe=Object.assign(Y,{Body:Ue,Header:We,Title:Ke,Footer:Le,Dialog:G,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{Qe as M};
