"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[34722],{11109:(e,t,o)=>{o.d(t,{Z:()=>n});let n=e=>Math.floor(new Date(e).getTime()/1e3)},742424:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(785893);let i=(0,n.jsx)("svg",{height:"40px",version:"1.1",viewBox:"0 0 40 40",width:"40px",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:(0,n.jsx)("path",{d:"M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z",fill:"#FFFFFF",fillRule:"nonzero",id:""})})})},516256:(e,t,o)=>{o.d(t,{Z:()=>n});let n={EMAIL:1,FACEBOOK:2,GPLUS:3,GOOGLE_ONE_TAP:4,SMARTLOCK:5,MULTIFACTOR:6,SWITCH_ACCOUNT:7,LINE:8,SSO:9}},43342:(e,t,o)=>{o.d(t,{Z:()=>h});var n=o(224796),i=o(658583),l=o(622541),a=o(191313),s=o(702497),r=o(624797),c=o(337478);let d="undefined"!=typeof window,_=d?`${window.location.origin}/oauth/line/redirect`:"",u=({origin:e,data:t})=>t&&e===window.location.origin?String(t):null,p=({url:e,key:t})=>{if(!e.startsWith(window.location.origin)||t!==n.MM)return null;let o=(0,a.qn)(n.MM);return(0,a.L_)(n.MM),o};function h(e,t){let o;if(!d){t.error?.({message:"Window is undefined"});return}let n=function(e=5){let t="abcdefghijklmnopqrstuvwxyz1234567890";return Array(e).fill("").map(()=>t[Math.floor(Math.random()*t.length)]).join("")}(10),a=async e=>{if(!e.isTrusted)return;let s=e instanceof MessageEvent?u(e):p(e),d=(0,r.mB)(s);if(d.state&&d.code&&d.state===n){t.fetching?.(),o&&!o.closed&&o.close();try{let e=await fetch("/oauth/line/verify",{headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-csrftoken":`${String(i.U2(l.fS))}`},method:"POST",body:(0,c.Z)({code:d.code,redirect_uri:_})}),{id_token:o,access_token:n}=await e.json();o&&n?t.success({line_id_token:o,line_access_token:n}):t.error?.({message:"No tokens returned"})}catch(e){t.error?.(e)}finally{o&&!o.closed&&o.close(),window.removeEventListener("message",a),window.removeEventListener("storage",a),t.complete?.()}}};window.addEventListener("message",a),window.addEventListener("storage",a),o=window.open(`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${s.zal}&redirect_uri=${encodeURIComponent(_)}&state=${n}&ui_locales=${e}&scope=profile%20openid%20email`,"_blank")}},776427:(e,t,o)=>{o.d(t,{GH:()=>r,JF:()=>f,Jb:()=>p,MI:()=>g,_V:()=>c,sl:()=>_,we:()=>u});var n=o(11109),i=o(372085),l=o(794658),a=o(990822),s=o(217058);let r="274266067164",c=()=>["public_profile","email","user_friends"],d=["picture.type(large)","id","first_name","last_name","email","gender"],_=e=>{e&&(0,s.dy)({event:"load_script_success",provider:"facebook"}),"undefined"!=typeof window&&window.FB?(e&&(0,s.dy)({event:"initialize_library",provider:"facebook"}),window.FB.init({appId:r,status:!0,xfbml:!0,version:"v2.7"})):e?(0,s.dy)({event:"global_object_not_found",provider:"facebook"}):(0,s.My)("pcons.non_autologin.fb.global_object_not_found")},u=(e,t)=>(t&&(0,s.dy)({event:"load_script_start",provider:"facebook"}),(0,l.Z)((0,a.Z)(e),"FACEBOOK").then(()=>_(t))),p=()=>new Promise(e=>{"undefined"!=typeof window&&window.FB&&window.FB.getLoginStatus(e)}),h=({userID:e,accessToken:t,data:{birthday:o,email:i,first_name:l,gender:a,last_name:s,picture:r}})=>({type:"facebook",facebook_id:e,facebook_token:t,birthday:o?(0,n.Z)(o):void 0,email:i,first_name:l,gender:a,image_url:r&&!r.data.is_silhouette?r.data.url:void 0,last_name:s});async function g(e){let t=(await (0,i.Z)({url:"/v3/facebook/profile_data/",method:"POST",data:{access_token:e,pii_safe_birthday:!0,fields:d}})).resource_response.data||{};return(0,s.My)(t?"pcons.facebook_user.non_empty_user_data_returned":"pcons.facebook_user.empty_user_data_returned"),{access_token:e,birthday:t.birthday,email:t.email,first_name:t.first_name,gender:t.gender,id:t.id,last_name:t.last_name,picture:t.picture}}let m=(e,t)=>new Promise((o,n)=>{if("connected"!==e.status){n({status:e.status||"unknown"});return}let{userID:i,accessToken:l}=e.authResponse;g(l).then(e=>{o({creds:{facebook_id:i,facebook_token:l,facebook_autologin:t?.autologin||!1},signupOptions:h({userID:i,accessToken:l,data:e})})},n)}),f=()=>new Promise(e=>{window.FB.login(e,{scope:c().join(",")})}).then(e=>m(e))},990822:(e,t,o)=>{o.d(t,{Z:()=>i});let n=e=>{let t=e.replace(/-/g,"_");if(t.startsWith("es"))return"es_LA";if(t.startsWith("ar"))return"ar_AR";switch(t){case"de":return"de_DE";case"fr":return"fr_FR";case"it":return"it_IT";case"ja":return"ja_JP";case"nl":return"nl_NL";case"tr":return"tr_TR";case"en_AU":return"en_US";default:return t}},i=e=>`//connect.facebook.net/${n(e)}/sdk.js`},336054:(e,t,o)=>{o.d(t,{Z:()=>n});function n(e){return e.search&&e.search.startsWith("?next=")?e.search.split("?next=")[1]:null}},908738:(e,t,o)=>{o.d(t,{Z:()=>x,u:()=>f});var n=o(667294),i=o(616550),l=o(883119),a=o(29156),s=o(742424),r=o(454514),c=o(140017),d=o(191313),_=o(217058),u=o(623409),p=o(13848),h=o(336054),g=o(27460),m=o(785893);let f="web_siwa_redirect_path",b="id_token=";function x(){let e=(0,c.ZP)(),t=(0,i.TH)(),o=(0,g.f)(),x=(0,i.k6)(),{showToast:y}=(0,p.F9)(),[v,w]=(0,n.useState)(!1),k=(0,u.Z)(),P=t.hash.indexOf(b),A=P>=0?t.hash.substring(P+b.length):null,j=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let n=async n=>{(0,_.My)("in_app_oauth.login.siwa.returned_with_token"),w(!0),o({apple_token:n},x,t.pathname,{noImmediateRedirect:!0},{event_type:7534,view_type:10}).then(()=>{w(!1),(0,_.My)("in_app_oauth.login.siwa.login_success");let e=(0,d.qn)(f);(0,d.L_)(f),(0,a.Z)(e||"/")}).catch(()=>{w(!1),(0,_.My)("in_app_oauth.login.siwa.login_failure"),y(({hideToast:t})=>(0,m.jsx)(r.ZP,{onHide:t,text:e._('Oops! You do not have an account connected with Apple. Please try another method.', 'mweb.unauth.oauth_apple_login.login_failure_toast', 'Toast to alert user they failed to login with Apple'),type:"error"}))})};j.current!==A&&A&&n(A),j.current=A},[x,e,A,t,o,y]),v?(0,m.jsx)(l.$j,{accessibilityLabel:e._('Loading...', 'Loading', 'Loading'),show:!0}):(0,m.jsx)(l.iP,{onTap:()=>{k({action:"click",item:"apple-connect-button"});let e=t.state?.next||(0,h.Z)(t),o=e?decodeURIComponent(e):null;(0,d.Nh)(f,o),(0,a.Z)(`https://appleid.apple.com/auth/authorize?client_id=com.pinterest.signinwithapple&redirect_uri=${encodeURIComponent(window.location.origin.toString()+"/oauth/login")}&response_type=${encodeURIComponent("code id_token")}&response_mode=fragment`)},children:(0,m.jsxs)(l.xu,{alignItems:"center",color:"dark",display:"flex",height:40,paddingX:2,paddingY:1,rounding:"pill",width:"100%",children:[(0,m.jsx)(l.xu,{marginStart:-3,marginTop:-2,children:s.Z}),(0,m.jsx)(l.xu,{marginEnd:"auto",marginStart:"auto",children:(0,m.jsx)(l.xv,{color:"light",weight:"bold",children:e._('Continue with Apple', 'mweb.unauth.oauth_apple_login.login_button', 'Text on button allowing users to login with their Apple account')})})]})})}},323721:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(667294),i=o(883119),l=o(930837),a=o(140017),s=o(217058),r=o(785893);function c({onDismiss:e}){let t=(0,a.ZP)();(0,n.useEffect)(()=>{(0,s.My)("unauth_mweb.login_rate_limited.view")},[]);let o=t._('Oops! Too many login attempts', 'LoginRateLimitedModal.Modal.Heading', 'Modal heading for user who have tried to login too many times');return(0,r.jsxs)(l.ZP,{accessibilityModalLabel:o,heading:(0,r.jsxs)(i.xu,{"data-test-id":"login-rate-limited-header",children:[(0,r.jsx)(i.xu,{display:"flex",justifyContent:"center",padding:6,children:(0,r.jsx)(i.JO,{accessibilityLabel:t._('Pinterest logo', 'Accessibility label for Pinterest icon', 'Accessibility label for Pinterest icon'),color:"brandPrimary",icon:"pinterest",size:40})}),(0,r.jsx)(i.X6,{accessibilityLevel:1,align:"center",size:"500",children:o})]}),isOpen:!0,onDismiss:e,children:[(0,r.jsx)(i.xu,{"data-test-id":"login-rate-limited-text",marginBottom:8,marginTop:4,paddingX:12,children:(0,r.jsx)(i.xv,{align:"center",children:t._('You have reached the maximum number of login attempts. Try again in 30 minutes.', 'LoginRateLimitedModal.Modal.Heading', 'Modal heading for user who have tried to login too many times')})}),(0,r.jsx)(i.xu,{"data-test-id":"login-rate-limited-footer",marginBottom:8,paddingX:12,children:(0,r.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:e,text:t._('Okay', 'LoginRateLimitedModal.Modal.OkButton', 'Okay button used to close modal')})})]})}},717473:(e,t,o)=>{o.d(t,{Z:()=>W});var n=o(667294),i=o(545007),l=o(616550),a=o(883119),s=o(197059),r=o(587703),c=o(399404),d=o(454514),_=o(140017),u=o(96452),p=o(602377),h=o(321725),g=o(516256),m=o(340523),f=o(5859),b=o(217058),x=o(623409),y=o(468653),v=o(13848),w=o(149722),k=o(407996),P=o(490166),A=o(908738),j=o(776427),C=o(963773),z=o(785893);let S="rgb(0, 116, 232)";function L(e){let t=(0,n.useRef)(null),o=(0,_.ZP)(),{locale:i}=(0,f.B)(),{checkExperiment:l}=(0,m.F)(),{anyEnabled:s}=l("mweb_facebook_disabled"),[r,c]=(0,n.useState)(!1),[d,u]=(0,n.useState)(!1);(0,n.useEffect)(()=>{s||(t.current&&(t.current.style.backgroundColor=S),(async()=>{await (0,j.we)(i),c(!0)})(),(0,b.My)("pcons.facebook_connect_button_renderd"))},[i,s]);let p=()=>{(0,b.EX)({event:"start",provider:"facebook"}),e.onTouch(),s?u(!0):r&&(async()=>{try{let{creds:t,signupOptions:o}=await (0,j.JF)();e.onConnectSuccess(t,o)}catch(t){e.onConnectError()}})()};return(0,z.jsxs)(a.xu,{"data-test-id":"FacebookConnectContainer",position:"relative",width:"100%",children:[(0,z.jsx)(()=>(0,z.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},left:!0,position:"absolute",right:!0,rounding:5,top:!0,children:(0,z.jsx)("div",{className:"fb-login-button","data-auth-type":e.isRerequest?"rerequest":void 0,"data-auto-logout-link":"false","data-button-type":"continue_with","data-layout":"rounded","data-max-rows":"1","data-scope":(0,j._V)().join(","),"data-show-faces":"false","data-size":"large","data-use-continue-as":l("mweb_unauth_remove_fb_autologin_and_personalization").anyEnabled?void 0:"true","data-width":"100%"})}),{}),(0,z.jsx)(a.iP,{"data-test-id":"FacebookConnectButton",fullWidth:!0,onTap:()=>p(),children:(0,z.jsx)(a.xu,{ref:t,height:40,paddingX:3,rounding:"pill",width:"100%",children:(0,z.jsxs)(a.kC,{alignItems:"center",height:"100%",justifyContent:"center",width:"100%",children:[(0,z.jsx)(()=>{let e=(0,n.useRef)(null),t="facebook";return(0,n.useEffect)(()=>{if(e.current){let o=e.current.children||[],n=Array.prototype.find.call(o,e=>e.ariaLabel===t);n&&(n.style.color=S)}}),(0,z.jsx)(a.xu,{ref:e,color:"light",dangerouslySetInlineStyle:{__style:{paddingTop:"5px",paddingLeft:"3px",paddingRight:"2px"}},marginEnd:1,rounding:"circle",children:(0,z.jsx)(a.JO,{accessibilityLabel:o._('facebook', 'accessible label for facebook icon', 'accessible label for facebook icon'),icon:t,size:19})})},{}),(0,z.jsx)(a.xv,{color:"light",size:"300",weight:"bold",children:o._('Continue with Facebook', 'Login page button', 'Login page button')})]})})}),d&&(0,z.jsx)(C.Z,{onDismiss:()=>u(!1),type:"facebook"})]})}var Z=o(43342);function E(e){let t=(0,_.ZP)(),{locale:o}=(0,f.B)();return(0,z.jsx)(a.iP,{fullWidth:!0,onTap:()=>{e.onTouch(),(0,Z.Z)(o,{success:t=>"line_id_token"in t?e.onConnectSuccess(t,{...t,type:"line"}):null,error:e.onConnectError})},children:(0,z.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#00C300"}},"data-test-id":"LineConnectContainer",height:40,paddingX:3,rounding:"pill",children:(0,z.jsxs)(a.kC,{alignItems:"center",height:"100%",justifyContent:"center",children:[(0,z.jsx)(a.xu,{height:32,width:32,children:(0,z.jsx)(a.Ee,{alt:t._('line', 'accessible label for line icon', 'accessible label for line icon'),naturalHeight:32,naturalWidth:32,src:"https://s.pinimg.com/webapp/btn_base-a34b3f23.png"})}),(0,z.jsx)(a.xv,{color:"light",size:"300",weight:"bold",children:t._('Continue with LINE', 'Login page button', 'Login page button')})]})})})}var O=o(323721),B=o(913870),T=o(310822),M=o(27460),F=o(615208),R=o(170568),U=o(96157),I=o(90647);function N({app_upsell_type:e}){let t=(0,_.ZP)(),o=(0,l.TH)(),{userAgent:{platform:n}}=(0,f.B)(),i=(0,x.Z)(),{trackConversionUpsell:s}=(0,y.Z)(),{pathname:r}=o;return(0,z.jsx)(a.xu,{"data-test-id":"continue-app-button",marginBottom:2,children:(0,z.jsx)(I.Z,{app_upsell_type:e??"unauth-signup-modal",componentType:13858,children:({handleOpenApp:l})=>(0,z.jsx)(a.zx,{color:"red",fullWidth:!0,onClick:()=>{s({element:10308,eventType:14689}),i({action:"click",item:"handle-open-app-button",within:"homepage_top_module"===e?"homepage-top-section":"homepage-bottom-section"}),r&&l({deepLinkUri:"/"===r?"/":(0,U.cD)(o)&&("ios"===n||"ipad"===n)?"user"+r:r.substr(1)})},text:t._('Get Pinterest App', 'unauth.modal.get_app.button_text', 'App download button text')})})})}var D=o(706196),H=o(431489);function W({apple:e,facebook:t,fbConnectHandler:o,footer:j,from:C,google:S,isBusiness:Z,isRerequest:U,line:I,next:W="/",noImmediateRedirect:$,disableFBSignup:Y,onFacebookTouch:X,onLoginTouch:K,onSignupTouch:G,showAppInstallButton:J,showEmailButton:q,showTextDivider:V,viewParameter:Q,app_upsell_type:ee,attributionLabel:et}){let eo=(0,l.k6)(),en=(0,l.TH)(),{country:ei}=(0,f.B)(),el=(0,_.ZP)(),{showToast:ea}=(0,v.F9)(),es=(0,r.Z)(),er=(0,x.Z)(),ec=(0,i.I0)(),ed=(0,M.f)(),e_=(0,H.U)(),{flush:eu}=(0,m.F)(),ep=(0,F.m)(),eh=(0,s.Z)(),{isAuth:eg,isLimitedLogin:em}=(0,w.Z)(),{checkExperiment:ef}=(0,m.F)(),[eb,ex]=(0,n.useState)(null),[ey,ev]=(0,n.useState)(!1),[ew,ek]=(0,n.useState)("default"),{trackConversionUpsell:eP}=(0,y.Z)(),eA="facebook"===ew&&5e3||"google"===ew&&4e3||void 0;(0,n.useEffect)(()=>{e_&&(j&&e_.preload?.(D.ke("login.js")),q&&e_.preload?.(D.ke("signup.js")))},[]);let ej=eg?{login_state:em?p.Z.LIMITED:p.Z.DEFAULT}:Object.freeze({}),eC=e=>{es({view_type:10,view_parameter:Q,element:e,event_type:102,aux_data:ej})},ez=e=>{eP({viewType:10,viewParameter:Q,eventType:14689,element:e})},eS=(e,t)=>{let o,n;switch(t){case"facebook":o=3205,n=g.Z.FACEBOOK;break;case"google":o=3204,n=g.Z.GPLUS;break;case"line":o=3556,n=g.Z.LINE}return{event_type:e,view_type:10,view_parameter:o,element:n===g.Z.GPLUS?12981:void 0,aux_data:{...ej,signup_login_method:n,upsell_reason:et}}},eL=(e,t,o,n)=>{ex(null);let i=()=>ea(({hideToast:e})=>(0,z.jsx)(d.ZP,{onHide:e,text:t&&t.api_error_code&&t.message?t.message:el._('Sorry, we can\'t log you in.', 'Error message when user having trouble login in.', 'Error message when user having trouble login in.')}));if(t){if((0,b.My)(`unauth_mweb.login_error.api_error_code.${String(t.api_error_code)}`),[u.xN,u.lg,u.Pv].includes(t.api_error_code??-1)){if("facebook"===o.type&&ef("mweb_unauth_remove_fb_signup_iteration").anyEnabled){Y?.();return}(0,b.Rp)({event:"start",provider:n}),"facebook"!==o.type||o.email?(()=>{(0,b.My)("unauth_mweb.facebook_signup_attempt"),o.gender||(0,b.My)("unauth_mweb.facebook_signup_attempt.nogender");let{birthday:e}=o;if(void 0===e||!(0,c.Z)(e)){eu(),eo.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:"facebook"===o.type?{...o,email_source_site:h.E_.FACEBOOK}:o,progressBarAnimationDuration:eA,attributionLabel:et}});return}ex("signup"),ek(n);let t="facebook"===o.type?{...o,email_source_site:h.E_.FACEBOOK,birthday_source_site:h.E_.FACEBOOK,birthday:e}:{...o,birthday:e};(0,b.Rp)({event:"signup_api_call_start",provider:n}),ep(t,{signupAttemptContextEvent:eS(7537,n)}).then(()=>{(0,b.NC)("signup_via_login_buttons"),(0,b.Rp)({event:"signup_api_call_success",provider:n}),["facebook","google"].includes(n)&&eh(W||"/"),ex(null)},e=>{(0,b.Rp)({event:"signup_api_call_failure",provider:n}),"line"===o.type&&(e.api_error_code===u.iZ?eo.push({pathname:"/signup/line-email-collect/",state:{signupOptions:o,attributionLabel:et}}):e.api_error_code===u.NF&&eo.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:o,attributionLabel:et}})),ea(({hideToast:t})=>(0,z.jsx)(d.ZP,{onHide:t,text:e.api_error_code&&e.message?e.message:el._('Sorry! Something went wrong on our end.', 'Error logging on', 'Error logging on')})),ex(null)})})():(eo.push({pathname:"/signup/fbemailcollect/",state:{signupOptions:o,attributionLabel:et}}),(0,b.My)("unauth_mweb.reg_via_fb.has_email_perm.false"))}else u.ik.includes(t.api_error_code)&&ev(!0);i()}else(0,b.My)("unauth_mweb.login.unexpected_error"),i()},eZ=e=>(t,n)=>{let i="google"===e?"gsi_btn":"other",l=en.state?.switch_account==="true"?{isSwitchAccount:!0,trigger:i}:{noImmediateRedirect:$,trigger:i};"facebook"===e&&(o?.("success"),(0,b.EX)({event:"receive_credential_response_from_provider",provider:e})),(0,b.NC)(e+"_login_success"),ed(t,eo,W,l,eS(7534,e)).catch(o=>{eL(t,o,n,e)}),ex("login"),ek(e)},eE=({event:e})=>{e.stopPropagation(),e.preventDefault(),K?.(),C&&ec((0,R.rm)(C)),er({action:"click",item:"login-button"}),eC(30),(0,b.My)(`unauth_mweb.login_buttons.footer.${j?.type||"button"}`),(0,b.NC)("press_login"),eP({eventType:14689,element:30,viewType:10,viewParameter:Q}),eP({eventType:14688,component:14213,upsellReason:et,incrementUpsellReasonCounter:!1}),eo.push({pathname:Z?"/business/login/":"/login/",search:en.search,state:{next:W,attributionLabel:et}})};return(0,z.jsxs)(a.xu,{"data-test-id":"LoginButtonsContainer",marginEnd:"auto",marginStart:"auto",marginTop:Z?-5:0,maxWidth:400,children:[ey&&(0,z.jsx)(O.Z,{onDismiss:()=>ev(!1)}),V&&(0,z.jsx)(a.xu,{marginBottom:3,marginTop:3,children:(0,z.jsx)(a.xv,{align:"center",size:"100",weight:"bold",children:el._('OR', 'Separator for email login button and social login button', 'Separator for email login button and social login button')})}),(0,z.jsx)(a.xu,{marginBottom:6,children:(0,z.jsxs)(n.Fragment,{children:[J&&(0,z.jsx)(N,{app_upsell_type:ee}),q&&(0,z.jsx)(a.xu,{"data-test-id":"continue-email-button",marginBottom:Z?-2:2,children:(0,z.jsx)(a.zx,{color:J?"gray":"red",fullWidth:!0,onClick:({event:e})=>{e&&(e.stopPropagation(),e.preventDefault()),(0,b.NC)("press_email_signup"),(0,b.Rp)({event:"start",provider:"email"}),er({action:"click",item:"email-signup-button"}),G?.(),C&&ec((0,R.rm)(C)),ez(13506),eC(31),eP({eventType:14688,component:14215,upsellReason:et,incrementUpsellReasonCounter:!1}),eo.push({pathname:Z?"/business/signup/step1/":"/signup/step1/",search:en.search,state:{next:W,attributionLabel:et}})},text:Z?el._('Create account', 'Button text for creating a business account', 'Button text for creating a business account'):el._('Continue with email', 'Sign up button', 'Sign up button')})}),t&&(0,z.jsx)(a.xu,{"data-test-id":"facebook-connect-button",marginBottom:2,children:(0,z.jsx)(L,{isRerequest:U??!1,onConnectError:()=>{o?.("error"),(0,b.EX)({event:"receive_no_credential_response_from_provider",provider:"facebook"}),ea(({hideToast:e})=>(0,z.jsx)(d.ZP,{onHide:e,text:el._('Unable to connect to Facebook', 'Error logging on with Facebook', 'Error logging on with Facebook')}))},onConnectSuccess:eZ("facebook"),onTouch:()=>{X?.(),ez(13505),er({action:"click",item:"facebook-connect-button"}),eC(68)}})}),S&&(0,z.jsx)(a.xu,{"data-test-id":"google-connect-button",marginBottom:2,children:(0,z.jsx)(B.Z,{onGoogleConnectSuccess:eZ("google"),onTouch:()=>{ez(13504)}})}),I&&"JP"===ei&&(0,z.jsx)(a.xu,{"data-test-id":"line-connect-button",marginBottom:2,children:(0,z.jsx)(E,{onConnectError:()=>ea(({hideToast:e})=>(0,z.jsx)(d.ZP,{onHide:e,text:el._('Unable to connect to Line', 'Error logging on with Line', 'Error logging on with Line')})),onConnectSuccess:eZ("line"),onTouch:()=>{ez(13507),eC(12277),er({action:"click",item:"line-connect-button"})}})}),e&&(0,z.jsx)(a.xu,{"data-test-id":"apple-connect-button",marginBottom:2,children:(0,z.jsx)(A.Z,{})})]})}),j&&("member_link"===j.type?(0,z.jsx)(a.xu,{"data-test-id":"login-member",marginTop:-4,children:(0,z.jsx)(P.Z,{onTouch:e=>eE({event:e}),pressState:"none",children:(0,z.jsx)(a.xu,{marginBottom:j.increasedSpaceBelow?-1:-2,paddingY:j.noPadding?0:4,children:(0,z.jsx)(a.xv,{align:"center",color:j.textColorIsLight?"light":"default",size:"200",weight:"bold",children:el._('Already a member? Log in', 'Link on mobile web sign up modal to direct unauth users to the login page', 'Link on mobile web sign up modal to direct unauth users to the login page')})})})}):(0,z.jsx)(a.xu,{"data-test-id":"login-button",marginBottom:5,children:(0,z.jsx)(a.zx,{color:"transparent",fullWidth:!0,onClick:eE,text:el._('Log in', 'Login page button', 'Login page button')})})),eb&&("signup"===eb?(0,z.jsx)(T.Z,{progressBarAnimationDuration:eA}):(0,z.jsx)(k.Z,{}))]})}},627457:(e,t,o)=>{o.d(t,{Z:()=>p});var n=o(883119),i=o(587703),l=o(525364),a=o(696534),s=o(140017),r=o(339001),c=o(340523),d=o(702497),_=o(623409),u=o(785893);function p({isMobileHomepage:e,isBusiness:t=!1,alignText:o="center",isSignupStep:p=!1}){let h=(0,s.ZP)(),g=(0,i.Z)(),m=(0,_.Z)(),{checkExperiment:f}=(0,c.F)(),{viewType:b,viewParameter:x}=(0,l.SU)(),y=(0,a.vs)(),v=e?"default":"subtle";!y&&e&&(v="inverse");let w=(0,u.jsx)(n.xu,{"data-test-id":"business-tos",display:"inlineBlock",children:(0,u.jsx)(n.xv,{color:v,inline:!0,size:"100",weight:"bold",children:(0,u.jsx)(n.rU,{display:"inlineBlock",href:t?d.V$B:d.U5h,onClick:()=>{m({action:"click",item:"business-tos"}),b&&g({view_type:b,view_parameter:x,element:8012,event_type:102})},target:"blank",underline:"hover",children:t?h._('Business Terms of Service', 'termOfService.link.termsOfService.business', 'Mobile web business terms of service link for partners'):h._('Terms of Service', 'termOfService.link.termsOfService.pinner', 'Mobile web terms of service link')})})},"termsOfService"),k=(0,u.jsx)(n.xu,{"data-test-id":"privacy",display:"inlineBlock",children:(0,u.jsx)(n.xv,{color:v,inline:!0,size:"100",weight:"bold",children:(0,u.jsx)(n.rU,{display:"inlineBlock",href:d.R_9,onClick:()=>{m({action:"click",item:"privacy-policy"}),b&&g({view_type:b,view_parameter:x,element:8004,event_type:102})},target:"blank",underline:"hover",children:h._('Privacy Policy', 'termOfService.link.privacyPolicy', 'Mobile web privacy policy link')})})},"privacyPolicy");return(0,u.jsx)(n.xu,{alignItems:"left"===o?"start":"center",alignSelf:"center","data-test-id":"business-terms-of-service",direction:"row",display:"flex",justifyContent:"center",paddingX:4,wrap:!0,children:(0,u.jsx)(n.xv,{align:"left"===o?"start":"center",color:v,inline:!0,overflow:"normal",size:"100",children:p&&f("fdbr_teen_compliance").anyEnabled?(0,r.nk)(h._('By continuing, you agree to Pinterest\'s {{ termsOfService }} and acknowledge you\'ve read our {{ privacyPolicy }}. If you\'re a Florida user under 18 years old, you also opt in to the processing of your personal information. To opt out, you can {{deleteYourAccount}}.', 'termOfService.text.floridaCompliance', 'Agreement to legal texts for new users termsOfService:Link to Terms of service privacyPolicy:Link to the Privacy Policy deleteYourAccount:Link to the Delete yout account article'),{termsOfService:w,privacyPolicy:k,deleteYourAccount:(0,u.jsx)(n.xu,{"data-test-id":"deleteYourAccount",display:"inlineBlock",children:(0,u.jsx)(n.xv,{color:v,inline:!0,size:"100",weight:"bold",children:(0,u.jsx)(n.rU,{display:"inlineBlock",href:d.QA0,target:"blank",underline:"hover",children:h._('delete your account', 'termOfService.link.deleteYourAccount', 'Link to delete your account')},"deleteYourAccount")})},"deleteYourAccount")}):(0,r.nk)(h._('By continuing, you agree to Pinterest\'s {{ termsOfService }} and acknowledge you\'ve read our {{ privacyPolicy }}. {{ noticeAtCollection }}.', 'termOfService.text.default', 'Agreement to legal texts for new users termsOfService:Link to Terms of service privacyPolicy:Link to the Privacy Policy noticeAtCollection:Link to the Notice at collection article'),{termsOfService:w,privacyPolicy:k,noticeAtCollection:(0,u.jsx)(n.xu,{"data-test-id":"noticeAtCollection",display:"inlineBlock",children:(0,u.jsx)(n.xv,{color:v,inline:!0,size:"100",weight:"bold",children:(0,u.jsx)(n.rU,{display:"inlineBlock",href:d.cvl,onClick:()=>{m({action:"click",item:"notice-at-collection"})},target:"blank",underline:"hover",children:h._('Notice at collection', 'Mobile web notice at collection link', 'termOfService.link.noticeAtCollection')})})},"noticeAtCollection")})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/34722-531524c2e41976fa.mjs.map