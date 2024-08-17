"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[78432],{22724:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(667294),n=a(883119),i=a(785893);function o({color:e="red",duration:t,finalProgress:a,shape:o="pill"}){let[r,l]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e=setTimeout(()=>{l(!0)},0);return()=>{clearTimeout(e)}},[]);let u="pill"===o;return(0,i.jsx)(n.xu,{color:e,dangerouslySetInlineStyle:{__style:{transform:u?`translateX(${r?"-5px":"-100%"})`:`scaleX(${r?1:0})`,transformOrigin:"left",transitionDuration:`${t}ms`,transitionTimingFunction:"ease-in"}},height:u?8:6,rounding:u?"pill":2,width:`${a}%`})}},406893:(e,t,a)=>{a.d(t,{Z:()=>i}),a(441143);var s=a(785893);class n{static factory(e){return e instanceof n?e:new n(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function i(e){let{css:t,unsafeCSS:a,...i}=e,o=String(t||"")||a||"";return o?(0,s.jsx)("style",{...i,dangerouslySetInnerHTML:{__html:String(n.factory(o))}}):null}},286988:(e,t,a)=>{a.d(t,{Z:()=>n,v:()=>s});let s=()=>"undefined"!=typeof navigator&&"getInstalledRelatedApps"in navigator;async function n(){if(!s())return[];try{return await navigator.getInstalledRelatedApps()}catch(e){return[]}}},567453:(e,t,a)=>{a.d(t,{Z:()=>d});var s=a(667294),n=a(883119),i=a(239493),o=a(791434),r=a(140017),l=a(5859),u=a(785893);let p=({dismiss:e,errorMessage:t})=>{let a=(0,r.ZP)(),{isRTL:s}=(0,l.B)();return(0,u.jsx)(o.Z,{canClose:!1,hidden:!1,type:"error",children:(0,u.jsxs)(n.xu,{color:"default",dangerouslySetInlineStyle:{__style:{borderRadius:"6px"}},margin:"auto",width:380,zIndex:new n.Ry(2e3),children:[(0,u.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{fontSize:"20px",fontWeight:"bold",borderBottom:"1px solid #e7e7e7"}},padding:5,children:a._('Oops!', 'unauth.error.modal', 'Header for error modal')}),(0,u.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{color:"#333",fontSize:"14px",lineHeight:"21px"}},padding:5,children:t}),(0,u.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{float:s?"left":"right"}},padding:4,children:(0,u.jsx)(n.zx,{color:"red",onClick:()=>e(),size:"sm",text:a._('Okay', 'unauth.error.modal.okay', 'Button text for accepting that there was an error')})})]})})},d=({children:e})=>{let[t,a]=(0,s.useState)(null),n=(0,s.useRef)(null);return(0,i.o)(e=>{a(e),n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{a(null)},3e3)}),(0,s.useEffect)(()=>()=>{n.current&&clearTimeout(n.current)},[]),(0,u.jsxs)(s.Fragment,{children:[e,!!t&&(0,u.jsx)(p,{dismiss:()=>a(null),errorMessage:t})]})}},791434:(e,t,a)=>{a.d(t,{Z:()=>u});var s=a(667294),n=a(883119),i=a(278967),o=a(217058),r=a(785893);function l(e,t,a){var s;return(t="symbol"==typeof(s=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var s=a.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?s:String(s))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class u extends s.Component{constructor(...e){super(...e),l(this,"state",{hidden:this.props.hidden||!1}),l(this,"handleKeyDown",e=>{let{canClose:t,type:a}=this.props;"Escape"===e.key&&((0,o.My)(`unauth.authentication_modal.esc_key_click.NOT_NOW_BUTTON.${a}.${t?"can":"cant"}_close`),t&&((0,o.My)(`unauth.authentication_modal.esc_key_click.DISMISSED.${a}`),this.close())),e.stopPropagation()}),l(this,"close",()=>{let{onCloseClick:e,onHide:t}=this.props;e?e():(this.setState({hidden:!0}),t&&t())})}componentDidMount(){window.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){window.removeEventListener("keydown",this.handleKeyDown)}render(){let{hidden:e}=this.state,{canClose:t,children:a,type:s}=this.props;return e?null:(0,r.jsx)(n.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:"closeup"===s?"rgba(239, 239, 239, 0.96)":"rgba(0, 0, 0, 0.6)",cursor:"closeup"===s?"zoom-out":void 0}},left:!0,opacity:1,position:"fixed",right:!0,top:!0,zIndex:i.P,children:(0,r.jsx)("div",{"aria-label":"modal",onClick:()=>{(0,o.My)(`unauth.full_page_modal.${s}.empty_space_click`),t&&this.close()},role:"dialog",style:{WebkitOverflowScrolling:"touch",overflowY:"scroll",bottom:0,left:0,right:0,top:0,position:"fixed",display:"flex"},children:(0,r.jsx)("div",{"aria-label":"modal",onClick:e=>{e.stopPropagation()},onKeyDown:e=>{t&&"Escape"===e.key&&e.stopPropagation()},role:"dialog",style:{height:"100%",display:"flex",minHeight:"0px",position:"relative",opacity:1,borderRadius:"6px",margin:"0 auto"},children:a})})})}}},877457:(e,t,a)=>{a.d(t,{g:()=>o,t:()=>i});var s=a(667294);let n=(0,s.createContext)(null),i=n.Provider,o=()=>(0,s.useContext)(n)},205841:(e,t,a)=>{a.d(t,{qE:()=>r,u_:()=>l.ZP,FN:()=>u.ZP});var s=a(883119),n=a(785893);let i=(e,t)=>!!(e?.includes("images/user/default")&&t);function o({accessibilityLabel:e,name:t,outline:a,size:o,src:r,verified:l}){return(0,n.jsx)(s.qE,{accessibilityLabel:e,name:t,outline:a,size:o,src:i(r,t)?void 0:r,verified:l})}o.displayName="Avatar";let r=o;var l=a(930837),u=a(454514)},422210:(e,t,a)=>{a.d(t,{Z:()=>s});function s(e){if(!e)return!1;let t=new Date(e);return t.setDate(t.getDate()+28),new Date().getTime()<t.getTime()}},317540:(e,t,a)=>{a.d(t,{Z:()=>s});let s={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},794658:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(953565);function n(e,t){return new Promise((a,n)=>{if(document.querySelector(`script[src="${e}"]`)){let e=0;if("FACEBOOK"===t){if(window.FB)a();else{let t=setInterval(()=>{window.FB||20===e?(clearInterval(t),a()):(e+=1,(0,s.nP)(`mweb.loadScript.facebook.tries_${e}`,{sampleRate:.01}))},100)}}else if("GSI"===t){if(window.google)a();else{let t=setInterval(()=>{window.google||20===e?(clearInterval(t),a()):(e+=1,(0,s.nP)(`mweb.loadScript.gsi.tries_${e}`,{sampleRate:.01}))},100)}}else a()}else{let t=document.createElement("script");t.src=e,t.async=!0,t.addEventListener("load",()=>a()),t.addEventListener("error",n),document.getElementsByTagName("head")[0].appendChild(t)}})}},916963:(e,t,a)=>{a.d(t,{Z:()=>s});let s=({checkExperiment:e})=>{let t=[];return e("fdbr_teen_compliance").anyEnabled&&t.push("fdbr"),t}},96157:(e,t,a)=>{a.d(t,{Fw:()=>ey,ey:()=>eb,dt:()=>y,bo:()=>eu,oF:()=>eL,bW:()=>g,Lj:()=>O,AX:()=>c,Fy:()=>d,XE:()=>p,am:()=>o,pD:()=>h,OJ:()=>l,LO:()=>eO,f8:()=>P,z6:()=>W,Gl:()=>ew,Y8:()=>L,Y_:()=>S,lY:()=>x,N6:()=>T,Ur:()=>E,dK:()=>I,h3:()=>eU,PY:()=>U,QD:()=>N,or:()=>D,TI:()=>A,dm:()=>X,Ni:()=>v,H_:()=>C,Q8:()=>w,pV:()=>q,L6:()=>V,bb:()=>eD,b0:()=>b,jC:()=>ed,O7:()=>eS,LM:()=>ep,q_:()=>$,OK:()=>z,Ep:()=>K,mP:()=>F,hd:()=>k,HV:()=>R,C$:()=>M,dr:()=>et,mk:()=>eT,gT:()=>ee,Fr:()=>e_,Xn:()=>Z,Ou:()=>ek,l4:()=>Y,b_:()=>eE,J:()=>r,dZ:()=>u,Tw:()=>eg,FO:()=>B,re:()=>G,RU:()=>eP,Ui:()=>m,KY:()=>_,fY:()=>ef,uM:()=>em,x7:()=>ev,X$:()=>J,rk:()=>eC,cD:()=>ec,XU:()=>ex,wg:()=>f,dW:()=>eW,En:()=>Q,ej:()=>eN,OX:()=>ei,f1:()=>en,E0:()=>el,gf:()=>j,nU:()=>eF,mY:()=>eX,cY:()=>eI,$Y:()=>er,Zz:()=>H,$V:()=>eo,j8:()=>eh,Q0:()=>ea,tZ:()=>es,YW:()=>eA});var s=a(616550);let n=new RegExp(/^\/(?!(?:pin|categories|report|search|password|terms|discover|help|email|topics|explore|pw|login|signup|about|business|source|ideas|today|tv|shopping|videos|age-apeal|oauth)\/)[\w\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+\/(?!(?:following|followers|_tools|_created|_saved|tried))[\w\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+(?=\/|$)/),i=["/BingSiteAuth.xml","/about","/add-account","/ads","/ads.txt","/age_verification","/all","/app-ads.txt","/apple-app-site-association","/apple-app-site-association.p7m","/attribution_source","/bot.html","/branded-pins","/browserbutton","/buy-it","/careers","/categories","/close-account","/content-claiming","/convert-business","/convert-personal","/create-business","/create-linked-business","/create-personal","/creation-inspiration","/creative-studio","/creative-studio-outpainting","/creator-onboarding-landing","/csrf_error","/ct.html","/deactivate-account","/deed6a3ef3a44d41bb3ae2bad137db84.txt","/developers","/discover","/edit","/email_verification_error","/engagement","/explore","/favicon.ico","/fb.html","/flyup-instant-loading-indicator-app-shell.html","/following","/getWebPushKey","/google_gdn.html","/google_search.html","/googlef5dc42d6e03f6e61.html","/guidedsearch","/help","/holidays-celebrations","/homefeed","/idea-ads-tool","/idea-pin-builder","/ideas","/inbox","/install-shuffles","/invited","/jobs","/lens-search","/login","/logout","/manifest.json","/manifest.webapp","/me","/messages","/mobile","/notifications","/oauth","/app-factory-oauth","/appealed-pin","/oembed.json","/offline.html","/offsite","/opensearch.xml","/parent_contact_info","/parental-passcode","/pin-builder","/pin-creation-tool","/pin-editor","/pin_catalog","/pin_redirect","/pinterest-wellbeing","/pinterest-predicts","/pinterestlens","/pinterestlenstryon","/pinterestwellbeing","/policy","/product-catalogs","/public-beta","/quick-instant-loading-indicator-app-shell.html","/recently-viewed","/refresh_stored_accounts","/refresh_token","/report","/reports-and-violations","/request-data","/robots.txt","/safe-redirect","/search","/settings","/shopping","/signup","/socialmanager","/story-pin-builder","/story_feed","/sw-shell.html","/sw.html","/sw.js","/switch_account","/terms","/today","/topics","/transparent.html","/unauth-profile","/unlink","/upload-image","/upload-image-lens-history","/upload-lens-image","/upload-profile-image","/verified","/verify","/videos","/web-custom-svg","/web-mentorship","/welcome","/windows-app-web-link","/your-shop"],o=e=>n.test(e.pathname),r=(e,t)=>{let{pathname:a}=e;return o(e)&&a.match(t||"?")},l=e=>{let{pathname:t}=e;return!!(0,s.LX)(t,{path:"/:username/:boardId/:boardSectionId",exact:!0})&&!t.match(/^\/.+\/.+\/(_tools)/i)},u=(e,t)=>{let{pathname:a}=e;return l(e)&&a.match(t||"?")},p=e=>!!(0,s.LX)(e.pathname,{path:"/board/:id/edit",exact:!0}),d=e=>!!(0,s.LX)(e.pathname,{path:"/board/:id/edit/collaborators",exact:!0}),c=e=>!!(0,s.LX)(e.pathname,{path:"/board/:id/edit/add_collaborators",exact:!0}),h=e=>!!(0,s.LX)(e.pathname,{path:"/boardsection/:id/edit",exact:!0}),m=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/comments",exact:!0}),_=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/edit",exact:!0}),b=e=>!!(0,s.LX)(e.pathname,{path:"/conversation/:id",exact:!0}),g=e=>!!(0,s.LX)(e.pathname,{path:"/appealed-pin/",exact:!0}),f=e=>!!(0,s.LX)(e.pathname,{path:"/reports-and-violations/",exact:!0}),y=e=>e.pathname.startsWith("/age-appeal"),v=e=>e.pathname.startsWith("/business/"),x=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:userBizId/dashboard",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:userBizId/dashboard",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/dashboard",exact:!0}),I=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/hierarchy",exact:!0}),E=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/dashboard",exact:!0}),L=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:userBizId/asset-groups",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:userBizId/asset-groups",exact:!0}),w=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:userBizId/shared-tags",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:userBizId/shared-tags",exact:!0}),S=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:userBizId/brand-safety",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:userBizId/brand-safety",exact:!0}),P=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/employees/:userBizId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/employees/:userBizId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/partners/:partnerId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/partners/:partnerId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/shared/:sharedPartnerId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/shared/:sharedPartnerId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/ad-accounts/pending/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/pending/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/ad-accounts/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/profiles/:detailId/details",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/profiles/:detailId/details",exact:!0}),T=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/business_security",exact:!0}),X=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/managers",exact:!0}),A=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-hierarchy/:businessHierarchyId/"})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/"})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/"})||!!(0,s.LX)(e.pathname,"/business/business-manager"),N=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/invoice-management",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/invoice-management",exact:!0}),O=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/audiences",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/audiences",exact:!0}),C=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/security",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/security",exact:!0}),W=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/employees",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/employees",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/employees/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/employees/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/partners",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/partners",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/partners/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/partners/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/ad-accounts",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/ad-accounts/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/pending",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/cee-migration",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/history",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/history",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-access/:businessId/profiles",exact:!0})||!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/profiles",exact:!0}),D=e=>!!(0,s.LX)(e.pathname,{path:"/business/business-manager/:businessId/ad-accounts/cee-migration",exact:!0}),U=e=>e.pathname.startsWith("/business/invite/"),F=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/visual-search/",exact:!0}),k=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/visual-search/products/",exact:!0}),M=e=>"/"===e.pathname,R=e=>"/"===e.pathname||"/homefeed/"===e.pathname,Z=e=>e.pathname.startsWith("/login"),H=e=>!!(0,s.LX)(e.pathname,{path:"/today",exact:!0}),G=e=>e.pathname.startsWith("/password/reset")||!!(0,s.LX)(e.pathname,{path:"/pw/:username",exact:!0}),B=e=>e.pathname.startsWith("/secure/panic"),j=e=>e.pathname.startsWith("/signup"),z=e=>e.pathname.startsWith("/email/subscription"),$=e=>e.pathname.startsWith("/email/user_survey"),K=e=>e.pathname.startsWith("/email_verification_error"),Y=e=>e.pathname.startsWith("/notifications/"),V=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id",exact:!0}),q=e=>e.pathname.startsWith("/pin_redirect"),Q=e=>e.pathname.startsWith("/search"),J=e=>e.pathname.startsWith("/search/pins"),ee=e=>!!(0,s.LX)(e.pathname,{path:"/ideas",exact:!0}),et=e=>!!(0,s.LX)(e.pathname,{path:"/ideas/:interest/:id",exact:!0}),ea=e=>!!(0,s.LX)(e.pathname,{path:"/videos/:category/:id",exact:!0}),es=e=>!!(0,s.LX)(e.pathname,{path:"/videos/",exact:!0}),en=e=>!!(0,s.LX)(e.pathname,{path:"/shopping/",exact:!0}),ei=e=>!!(0,s.LX)(e.pathname,{path:"/shopping/:category/:id",exact:!0}),eo=e=>e.pathname.startsWith("/topics"),er=e=>e.pathname.startsWith("/today/article/")||e.pathname.startsWith("/today/best/")||e.pathname.startsWith("/today/trending/"),el=e=>e.pathname.startsWith("/today/shop/"),eu=e=>H(e)||er(e)||e.pathname.startsWith("/today/popular/"),ep=e=>/^\/discover\/article\/\S+\/?/i.test(e.pathname),ed=e=>e.pathname.startsWith("/pin/create/"),ec=e=>!!(0,s.LX)(e.pathname,{path:"/:username/",exact:!0})&&!i.includes(e.pathname.replace(/\/$/,"")),eh=e=>e.pathname.startsWith("/unauth-profile"),em=e=>e.pathname.startsWith("/pin/"),e_=e=>"#imgViewer"===e.hash,eb=e=>/invite_code/.test(e.search),eg=e=>/utm_pai/.test(e.search),ef=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id",exact:!1})&&(e.pathname.includes("/sent/")||e.pathname.includes("/feedback/")),ey=e=>eb(e)&&(ef(e)&&"pin"||o(e)&&"board"||ec(e)&&"profile")||null,ev=e=>e.pathname.includes("/repin/x"),ex=e=>!!(0,s.LX)(e.pathname,{path:"/pin/:id/repin"})&&!ev(e),eI=e=>e.pathname.startsWith("/_/storyboard"),eE=e=>e.pathname.startsWith("/oauth"),eL=e=>e.pathname.startsWith("/app-factory-oauth"),ew=e=>e.pathname.startsWith("/business/convert"),eS=e=>e.pathname.startsWith("/pin-editor"),eP=e=>e.pathname.startsWith("/pin-builder"),eT=e=>e.pathname.startsWith("/idea-ads-tool"),eX=e=>e.pathname.startsWith("/story-pin-builder")||e.pathname.startsWith("/idea-pin-builder")||e.pathname.startsWith("/pin-creation-tool")||eT(e),eA=e=>e.pathname.startsWith("/advertiser/quick-promote"),eN=e=>e.pathname.startsWith("/settings"),eO=e=>void 0!==e.pathname&&(e.pathname.startsWith("/business/business-access/")||e.pathname.startsWith("/business/business-manager/"))&&e.pathname.includes("/dashboard/"),eC=e=>void 0!==e.pathname&&e.pathname.startsWith("/tv/studio"),eW=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/schedule_call/"),eD=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/commerce-integrations/"),eU=e=>void 0!==e.pathname&&e.pathname.startsWith("/business/hub"),eF=e=>void 0!==e.pathname&&e.pathname.startsWith("/signup/sso-business-account/"),ek=e=>M(e)||V(e)||Y(e)||o(e)||Q(e)||eo(e)||H(e)||ec(e)||v(e)},974371:(e,t,a)=>{a.d(t,{M:()=>b,Z:()=>f});var s=a(667294),n=a(86785),i=a(342513),o=a(897650),r=a(11453),l=a(992083),u=a(340523),p=a(5859),d=a(217058),c=a(554786),h=a(149722),m=a(785893);let{Provider:_,useMaybeHook:b}=(0,i.Z)("GoogleSignInApi"),g=()=>{let e=(0,c.HG)(),{checkExperiment:t}=(0,u.F)();return t(e?"web_google_disabled":"mweb_google_disabled").anyEnabled};function f({children:e}){let t=(0,h.Z)(),{isAuth:a}=t,i=g(),b=function(){let e=(0,c.HG)(),{checkExperiment:t}=(0,u.F)(),{userAgent:{browserName:a,platform:s}}=(0,p.B)(),i=a??"";if("ios"===s||(0,n.G6)(i))return!0;switch(e?(0,n.vU)(i)?t("dweb_unauth_firefox_itp_support").group:t("dweb_unauth_remaining_itp_support").group:(0,n.vU)(i)?t("mweb_unauth_firefox_itp_support").group:t("mweb_unauth_remaining_itp_support").group){case"enabled":return!0;case"enabled_default":return;default:return!1}}(),f=(0,c.HG)(),{checkExperiment:y}=(0,u.F)(),{userAgent:v}=(0,p.B)(),x=(0,r.JZ)(f,y,v,a),I=(0,r.Qs)(t),E=I&&x?t.email:void 0,L=(0,s.useRef)(null),w=(0,s.useRef)(new Set),S=(0,s.useRef)(new Set),P=(0,s.useRef)(null),{language:T}=(0,p.B)(),X=f?"dweb":"mweb",A=(0,s.useRef)(!1),N=(0,s.useCallback)(()=>{if(A.current)return;A.current=!0;let e=!1,t=()=>{let t=(0,o.Fm)();t&&!e&&(e=!0,(0,l.Z)({type:"loadScript",status:"success"}),(0,l.Z)({type:"apiClient",valid:!!t}),P.current=t,(0,o.OY)({autoSelect:!I,itpSupport:b,isFedCMEnabled:(!a||I)&&x,loginHint:E},e=>{if((0,l.Z)({type:"response",valid:!!e}),e){if((0,d.My)(`${X}.google_sign_in.select_by.${e.select_by}`),"SIGN_IN_WITH_GOOGLE_BUTTON"===(0,o.PL)(e.select_by)){let t=Array.from(w.current),a=t[t.length-1],s=L.current;a?a(e):s&&s(e)}else L.current?.(e)}}),S.current.forEach(e=>{e()}),S.current.clear())};window.onGoogleLibraryLoad=()=>t(),(0,l.Z)({type:"loadScript",status:"start"}),(0,o.Px)(void 0,T).then(()=>{t()}).catch(()=>{})},[T,b,a,I,x,E,X]);(0,s.useEffect)(()=>{i?(w.current.clear(),S.current.clear()):N()},[i,N]);let O=(0,s.useRef)({ensureInit:(e,t)=>(N(),"button"===e?w.current.add(t):L.current=t,new Promise(e=>{P.current?e(void 0):S.current.add(e)})),removeButtonCallback:e=>{w.current.delete(e)}});return(0,m.jsx)(_,{value:O.current,children:e})}},897650:(e,t,a)=>{a.d(t,{Fm:()=>o,OY:()=>l,PL:()=>p,Px:()=>r,mK:()=>d,ru:()=>u});var s=a(794658),n=a(702497),i=a(217058);let o=()=>window?.google?.accounts?.id,r=(e,t)=>(0,s.Z)("https://accounts.google.com/gsi/client"+(t?`?hl=${t}`:""),e?.unsafe?null:"GSI"),l=({autoSelect:e,itpSupport:t,isFedCMEnabled:a,loginHint:s},i)=>{let r={auto_select:e??!1,client_id:n.v3o,callback:i,cancel_on_tap_outside:!1,context:"use",itp_support:t,use_fedcm_for_prompt:a,login_hint:s};o()?.initialize(r)},u=({buttonRef:e,isDesktop:t,locale:a,logo_alignment:s,onClick:n,onTouch:r})=>{let l=o();if(l&&e.current){let t=e.current.offsetWidth;l.renderButton(e.current,{locale:a,size:"large",shape:"pill",text:"continue_with",theme:"outline",width:t+"px",logo_alignment:s,click_listener:()=>{n&&n(),r&&r(),(0,i.EX)({event:"start",provider:"google"})}})}else(0,i.My)((t?"unauth_web":"unauth_mweb")+".gsi_button.not_initialized")},p=e=>["auto","fedcm_auto"].includes(e)?"AUTO_LOGIN":e.startsWith("btn")?"SIGN_IN_WITH_GOOGLE_BUTTON":"ONE_TAP_PROMPT",d=e=>{switch(e){case"SIGN_IN_WITH_GOOGLE_BUTTON":return"gsi_btn";case"ONE_TAP_PROMPT":return"onetap_btn";default:return"other"}}},11453:(e,t,a)=>{a.d(t,{JZ:()=>c,Qs:()=>d,jr:()=>h});var s=a(224796),n=a(86785),i=a(340523),o=a(5859),r=a(731714),l=a(554786);let u={auth_dweb_google_fedcm_onetap_modal:122,auth_mweb_google_fedcm_onetap_modal:122,dweb_google_chrome_fedcm_exempt_idp_autologin_delay:121,mweb_google_chrome_fedcm_exempt_idp_autologin_delay:121},p=(e,t,a,s)=>{if(e){if(a>=(u.auth_dweb_google_fedcm_onetap_modal||116)&&s&&t("auth_dweb_google_fedcm_onetap_modal").anyEnabled||a>=(u.dweb_google_chrome_fedcm_exempt_idp_autologin_delay||116)&&t("dweb_google_chrome_fedcm_exempt_idp_autologin_delay").anyEnabled)return!0}else if(a>=(u.auth_mweb_google_fedcm_onetap_modal||116)&&s&&t("auth_mweb_google_fedcm_onetap_modal").anyEnabled||a>=(u.mweb_google_chrome_fedcm_exempt_idp_autologin_delay||116)&&t("mweb_google_chrome_fedcm_exempt_idp_autologin_delay").anyEnabled)return!0;return!1},d=e=>e.isAuth&&e.socialNetwork&&e.socialNetwork.gplus&&e.socialNetwork.gplus.connected&&!r.Z.getItem(s.tr),c=(e,t,a,s)=>{let i=a.browserVersion?parseInt(a.browserVersion.split(".")[0],10):0;return(0,n.i7)(a.browserName??"")&&(e&&p(e,t,i,s)||!e&&"android"===a.platform&&p(e,t,i,s))},h=e=>{let t=(0,l.HG)(),{checkExperiment:a}=(0,i.F)(),{userAgent:s}=(0,o.B)();return d(e)&&c(t,a,s,e.isAuth)}},321725:(e,t,a)=>{a.d(t,{E_:()=>u,Eh:()=>i,du:()=>l,yV:()=>o});var s=a(621018),n=a(407053);let i=(e,t)=>{if("DEPRECATED_CHECK_EXISTS"===t)return"facebook_id"in e&&"facebook"||"google_open_id_token"in e&&"google"||"line_id_token"in e&&"line"||"sso_id_token"in e&&"sso"||"email";if("DEPRECATED_CHECK_TRUTHY"===t)return e.facebook_id?"facebook":e.google_open_id_token?"google":e.line_id_token?"line":e.sso_id_token?"sso":"email";return e.type},o=e=>{let t=i(e,"DEPRECATED_CHECK_TRUTHY");return"google"===t?"google_one_tap":t},r=(e="")=>e in s.i5,l=e=>n.rT.includes(e)||n.ZR.has(e)||r(e),u={GOOGLE:"g",FACEBOOK:"fb",PINTEREST:"p",APPLE:"apl",LINE:"ln",UNKNOWN:"unk",SSO:"sso"}},992083:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(306775),n=a(217058);let i=e=>(0,n.dy)({event:e,provider:"google"}),o=e=>(0,s.RP)("google_autologin",e),r=e=>(0,s.M3)("google_autologin",e),l=e=>{switch(e.type){case"loadScript":"start"===e.status?(i("start"),i("load_script_start"),r("autoLoginGoogleStart")):"success"===e.status?i("load_script_success"):i("load_script_failure");break;case"apiClient":e.valid?(i("initialize_library"),r("autoLoginGoogleInitEnd")):(o("noAccountFound"),i("global_object_not_found"));break;case"response":e.valid?(i("receive_credential_response_from_provider"),(0,n.EX)({event:"receive_credential_response_from_provider",provider:"google"})):(o("noResponse"),(0,n.EX)({event:"receive_no_credential_response_from_provider",provider:"google"}));break;case"autologin":"start"===e.status?(i("pinterest_login_start"),(0,n.NC)("press_google_one_tap_other"),(0,s.M3)("google_autologin","autoLoginGoogleEnd"),(0,s.PA)("google_autologin")):("success"===e.status?i("pinterest_login_success"):i("pinterest_login_failure"),i("end"));break;case"manualLoginAttempt":(0,n.NC)(e.fromConnectButton?"press_google_one_tap_button":"press_google_one_tap"),(0,s.PA)("google_autologin")}}},608516:(e,t,a)=>{a.d(t,{Z:()=>s});let s=a(14583).Z},241552:(e,t,a)=>{a.d(t,{l:()=>i,r:()=>o});var s=a(667294);let n=(0,s.createContext)(null),i=()=>(0,s.useContext)(n),o=n.Provider},344064:(e,t,a)=>{a.d(t,{o$:()=>s,ty:()=>n,vE:()=>i});let{Provider:s,MaybeConsumer:n,useMaybeHook:i}=(0,a(342513).Z)("inviteContext")},55202:(e,t,a)=>{a.d(t,{U:()=>o,Z:()=>r});var s=a(317540),n=a(785893);let i=()=>{},o=e=>{e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()};function r({allowClickAndDrag:e,allowEsc:t,allowMediaPlay:a,allowScroll:r,children:l}){let u=e=>{t&&e.keyCode===s.Z.ESCAPE||o(e)};return(0,n.jsx)("div",{onAbort:o,onAnimationEnd:o,onAnimationIteration:o,onAnimationStart:o,onBlur:i,onCanPlay:a?i:o,onCanPlayThrough:o,onChange:o,onClick:e?i:o,onCompositionEnd:o,onCompositionStart:o,onCompositionUpdate:o,onContextMenu:o,onCopy:o,onCut:o,onDoubleClick:o,onDurationChange:o,onEmptied:o,onEncrypted:o,onEnded:o,onError:o,onFocus:i,onInput:o,onInvalid:o,onKeyDown:u,onKeyPress:u,onKeyUp:u,onLoad:o,onLoadedData:o,onLoadedMetadata:o,onLoadStart:o,onMouseDown:o,onMouseEnter:o,onMouseLeave:o,onMouseMove:e?i:o,onMouseOut:o,onMouseOver:o,onMouseUp:e?i:o,onPaste:o,onPause:o,onPlay:o,onPlaying:o,onProgress:o,onRateChange:o,onScroll:r?i:o,onSeeked:o,onSeeking:o,onSelect:o,onStalled:o,onSubmit:o,onSuspend:o,onTimeUpdate:o,onTouchCancel:o,onTouchEnd:e?i:o,onTouchMove:e?i:o,onTouchStart:e?i:o,onTransitionEnd:o,onVolumeChange:o,onWaiting:o,onWheel:o,children:l})}},468653:(e,t,a)=>{a.d(t,{A:()=>d,Z:()=>p});var s=a(667294),n=a(224796),i=a(587703),o=a(525364),r=a(877457),l=a(241552),u=a(731714);function p(){let{trackConversionUpsellForContext:e}=(0,r.g)()||{},{trackConversionUpsellForContext:t}=(0,l.l)()||{},{viewType:a,viewParameter:s}=(0,o.SU)();return{trackConversionUpsell:({eventType:n,viewType:i,viewParameter:o,element:r,component:l,upsellReason:u,incrementUpsellReasonCounter:p})=>{let d=e||t;d&&d({eventType:n,viewType:i||a||202,viewParameter:o||s,element:r,component:l,upsellReason:u,incrementUpsellReasonCounter:p})}}}function d(){let e=(0,i.Z)(),t=(0,s.useRef)(null),a=()=>u.Z.getItem(n.w0)&&Number.isInteger(u.Z.getItem(n.w0))?u.Z.getItem(n.w0):0,o=()=>{u.Z.setItem(n.w0,a()+1)};return{trackConversionUpsellForContext:({eventType:s,viewType:i,viewParameter:r,element:l,component:p,upsellReason:d,incrementUpsellReasonCounter:c})=>{14688===s&&(u.Z.setItem(n.bg,d||""),t.current=p,!1!==c&&o()),e({event_type:s,view_type:i,view_parameter:r,element:l,component:t.current,aux_data:{upsell_reason:u.Z.getItem(n.bg)||null,upsell_view_count:a()}})}}}},472980:(e,t,a)=>{a.d(t,{D:()=>u,Z:()=>p});var s=a(667294),n=a(616550),i=a(624797),o=a(785893);let r=(0,s.createContext)(!1),l=()=>{let e=(0,n.TH)(),t=(0,n.k6)();return t.location.state?.isAppFactoryOAuth||((0,i.mB)(e.search).next??"").startsWith("/app-factory-oauth/")};function u({children:e}){let t=l(),[a,n]=(0,s.useState)(t);return(0,s.useEffect)(()=>{t&&n(!0)},[t]),(0,o.jsx)(r.Provider,{value:a,children:e})}function p(){return(0,s.useContext)(r)}},983983:(e,t,a)=>{a.d(t,{L1:()=>o,NW:()=>u,Rz:()=>p,WZ:()=>r,cI:()=>i,fe:()=>l,hu:()=>n});var s=a(883119);let n=64,i=80,o=22,r="HeaderContent",l=671,u=new s.Ry(l),p={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}},386008:(e,t,a)=>{a.d(t,{Tt:()=>d,cm:()=>p,kW:()=>l,kY:()=>c,mN:()=>u});var s=a(545007),n=a(342513),i=a(149722),o=a(785893);let{Provider:r,useHook:l}=(0,n.Z)("Users");function u(){let e=l();return t=>e[t]}function p(){let e=l();return(t,a=!1)=>{let s=Object.keys(e).find(a=>e[a].username===t);if(s||!a)return e[s??""]}}function d(){let{id:e}=(0,i.Z)();return l()[e??""]}function c({children:e}){let t=(0,s.v9)(({users:e})=>e,s.wU);return(0,o.jsx)(r,{value:t,children:e})}},773616:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(545007);let n=()=>(0,s.v9)(({session:{canUseNativeApp:e}})=>e)},669177:(e,t,a)=>{a.d(t,{G3:()=>p,Rp:()=>u,kp:()=>r});var s=a(188349),n=a(191313),i=a(573810);let o=14*s.F4,r=(e,t)=>{let a=function(){let e=Date.now(),t=Number((0,n.qn)("appUpsell"));return{currentTime:e,firstUpsellTime:Number((0,n.qn)("firstUpsellTime")),lastUpsellTime:t,showedAppUpsellCurrentSession:!!(0,i.qn)("showedAppUpsellCurrentSession")}}();return e?function(e,t,a){let{currentTime:s,firstUpsellTime:i,lastUpsellTime:r,showedAppUpsellCurrentSession:l}=e;return(a=a||o,!i||s<i+t)?!l:s-r>a&&((0,n.L_)("firstUpsellTime"),!0)}(a,s.F4):function(e,t){let{currentTime:a,lastUpsellTime:s}=e;return t=t||o,!s||a-s>t}(a,t)},l=e=>{let t=(e=e.toLowerCase()).match(/android\s([0-9\.]*)/i);return t?t[1]:void 0},u=({isBot:e,platform:t,userAgent:a})=>{try{return!e&&"android"===t&&7>parseFloat(l(a))}catch(e){return!1}},p=e=>(e.startsWith("zh")||e.startsWith("ar")?e:e.slice(0,2)).toUpperCase()},844998:(e,t,a)=>{a.d(t,{E:()=>o,S:()=>r});var s=a(667294),n=a(191313);let i="_loggingInNotHome",o=e=>{e?(0,n.Nh)(i,1):(0,n.L_)(i)},r=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{t(!0)},[]),e&&(0,n.qn)(i)}},170568:(e,t,a)=>{a.d(t,{Cp:()=>l,FK:()=>r,H5:()=>y,MI:()=>m,O0:()=>h,QZ:()=>o,W:()=>g,WF:()=>p,Wz:()=>v,a5:()=>d,dz:()=>b,e0:()=>c,e2:()=>i,iW:()=>f,n1:()=>n,rm:()=>u,xu:()=>_});var s=a(96157);let n=()=>({type:"DISMISS_UNAUTH_SAVE"}),i=()=>({type:"COMPLETE_UNAUTH_SAVE_ACTION"}),o=e=>({type:"SET_UNAUTH_SAVE_PIN_ID",payload:{unauthSavePinId:e}}),r=()=>({type:"HIDE_NAV_FOOTER"}),l=()=>({type:"SHOW_NAV_FOOTER"}),u=e=>({type:"SET_LOGIN_SIGNUP_FROM",payload:{from:e}}),p=()=>({type:"SHOW_REPIN_ANIMATION"}),d=()=>({type:"HIDE_REPIN_ANIMATION"}),c=e=>({type:"SET_NUM_SIGNUP_STEPS",payload:{steps:e}}),h=()=>({type:"SET_OWN_PROFILE_PINS_REFRESH"}),m=e=>({type:"SHOW_BIZ_NUX_HOMEFEED_LOADER",payload:e}),_=e=>({type:"SET_VIEWED_IMAGE",payload:{viewedImageSignature:e}}),b=e=>({type:"SET_VIEWED_SHARED_PINS",payload:{pins:e}}),g=()=>({type:"DISMISS_UNAUTH_APP_UPSELL"}),f=e=>e?{type:"LOGGED_OUT_USER_INFO_FOUND",payload:e}:{type:"LOGGED_OUT_USER_INFO_NOT_FOUND"},y=e=>({type:"UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX",payload:e}),v=(e,t)=>({type:"SET_LANDING_PAGE_TYPE",payload:e?(0,s.bo)(e)?"today":(0,s.dr)(e)?"ideas":t&&(0,s.dZ)(e,t)?"own_section":t&&(0,s.J)(e,t)?"own_board":(0,s.OJ)(e)?"section":(0,s.am)(e)?"board":(0,s.L6)(e)?"closeup":(0,s.C$)(e)?"home":(0,s.cD)(e)?"profile":(0,s.En)(e)?"search":(0,s.$V)(e)?"topic":"":""})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/78432-e1189393e7c42bf3.mjs.map