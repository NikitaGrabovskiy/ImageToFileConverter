"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2648,89870],{612435:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(667294),s=i(614792),o=i(785893);function a({page:e,children:t}){let i=(0,n.useMemo)(()=>({logging:{viewType:"login"===e&&9||"businessLogin"===e&&267||void 0},pageType:e}),[e]);return(0,o.jsx)(n.Fragment,{children:(0,o.jsx)(s.Mi,{value:i,children:t})})}},420097:(e,t,i)=>{i.d(t,{Z:()=>k});var n=i(667294),s=i(545007),o=i(214877),a=i(658583),r=i(622541),l=i(353971),c=i(175324),h=i(239493),d=i(322079),u=i(614792),g=i(140017),p=i(96452),m=i(640258),b=i(897650),f=i(974371),_=i(602377),x=i(508218),w=i(516256),v=i(237856),y=i(340523),j=i(306775),P=i(5859),S=i(217058),A=i(623409),E=i(472980),T=i(149722),I=i(785893);function O(e,t,i){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class Z extends n.Component{constructor(...e){super(...e),O(this,"state",{modal:null}),O(this,"annotateOneTapStopwatch",e=>(0,j.M3)("google_autologin",e)),O(this,"abortOneTapStopwatch",e=>(0,j.RP)("google_autologin",e)),O(this,"stopOneTapStopwatch",()=>(0,j.PA)("google_autologin")),O(this,"trackAutologin",e=>(0,S.dy)({event:e,provider:"google"})),O(this,"deferredHandleOneTapResponse",e=>{setTimeout(()=>{this.handleOneTapResponse(e)},5e3)}),O(this,"handleOneTapResponse",e=>{let{autologinDisabled:t,login:i,viewer:n}=this.props;if(!e)return;let{credential:s,select_by:o}=e,a=(0,b.PL)(o),r="AUTO_LOGIN"===a;if(this.annotateOneTapStopwatch("autoLoginGoogleEnd"),this.stopOneTapStopwatch(),r&&t)return;r&&this.trackAutologin("pinterest_login_start");let{pageContext:l}=this.props;i({creds:{google_open_id_token:s,autologin:r},loggingOptions:{loggingData:{container:"google_one_tap_modal",page:l?.pageType,trigger:(0,b.mK)(a)},loginAttemptContextEvent:{event_type:7534,element:"SIGN_IN_WITH_GOOGLE_BUTTON"===a?12981:"ONE_TAP_PROMPT"===a?12982:null,aux_data:{signup_login_method:w.Z.GOOGLE_ONE_TAP,upsell_reason:r?"autologin_google":"google_one_tap",...n.isAuth?{login_state:n.isLimitedLogin?_.Z.LIMITED:_.Z.DEFAULT}:{}}}}}).then(()=>{let{nextUrl:e}=this.props;r&&this.trackAutologin("pinterest_login_success"),e?x.ZP.handleRedirect(e):x.ZP.handleRedirectWithFallbackWindowLocation(),r&&this.trackAutologin("end")},e=>{let{hide:t,handleLoginWithMfa:i}=this.props;if(r&&this.trackAutologin("pinterest_login_failure"),e?.api_error_code===p.xN){if("SIGN_IN_WITH_GOOGLE_BUTTON"===a)this.attemptSignup({googleOpenId:s});else{let e="business_login_page"===this.props.container;this.setState({modal:{type:"confirmSignup",step:e?r&&"staticSignupLogin"||"delayedSignupLoadingSpinner":"staticSignupLoginWithTOS",handleConfirmSignup:()=>this.attemptSignup({googleOpenId:s})}})}}else if(e?.api_error_code===p.Zn)i(s);else if(e?.api_error_code===p.an)this.setState({modal:{type:"accountSuspended"}});else{let e=this.props.i18n._('We couldn\u2019t log you in with that account. Try the Google button!', ' - ', ' -- ');(0,h.x)(e),t()}r&&this.trackAutologin("end")})}),O(this,"attemptSignup",({googleOpenId:e})=>{let{handleGdprRequiresAge:t,pageContext:i}=this.props,n=(0,m.Z)(e);t({options:{type:"google",google_open_id_token:e,first_name:n.given_name,last_name:n.family_name,image_url:n.picture},context:{container:"google_one_tap_modal",page:i?.pageType}}),(0,S.NC)("check_age_with_one_tap_from_one_tap_dweb")})}componentDidMount(){let{requestContext:e,webGoogleDisabled:t}=this.props;a.U2(r.e7)&&(0,S.My)(`pcons.google_autologin_disabled_cookie.login_page.${(0,v.M)()}`),t||a.U2(r.e7)&&e.isBot?this.abortOneTapStopwatch("disabled"):(this.setupGoogleOneTap(),e.isBot||(0,S.My)("unauth_web_container.google_one_tap_modal.tier1.other.shown"))}async setupGoogleOneTap(){let{googleSignInApi:e}=this.props;await e?.ensureInit("oneTap",this.deferredHandleOneTapResponse),this.trackAutologin("show_ui"),b.Fm()?.prompt(()=>{})}render(){let{requestContext:e,webGoogleDisabled:t,hide:i}=this.props,{modal:n}=this.state;if(e.isBot||t||!n)return null;switch(n.type){case"accountSuspended":return(0,I.jsx)(l.Z,{onClose:()=>this.setState({modal:null})});case"confirmSignup":return(0,I.jsx)(c.Z,{handleCancelClick:()=>this.setState({modal:null}),handleConfirmSignup:n.handleConfirmSignup,handleShowLogin:i,step:n.step});default:return null}}}function k({container:e,handleGdprRequiresAge:t,handleLoginWithMfa:i,nextUrl:a}){let r=(0,d.Z)(),{logContextEvent:l}=(0,o.v)(),c=(0,g.ZP)(),h=(0,s.I0)(),p=(0,T.Z)(),[m,b]=(0,n.useState)(!0),{checkExperiment:_}=(0,y.F)(),{anyEnabled:x}=_("web_google_disabled"),w=(0,P.B)(),v=(0,u.lO)(),{country:j}=w,S=(0,f.M)(),O=(0,E.Z)(),k=(0,A.Z)();if(!m||O)return null;let C=()=>b(!1);return(0,I.jsx)(Z,{autologinDisabled:"CH"===j,checkExperiment:_,container:e,dispatch:h,googleSignInApi:S,handleEmptyCredentials:C,handleGdprRequiresAge:e=>{C(),t(e)},handleLoginWithMfa:e=>{C(),i(e)},hide:C,i18n:c,logContextEvent:l,login:r,nextUrl:a,pageContext:v,requestContext:w,trackInteraction:k,viewer:p,webGoogleDisabled:x})}},473289:(e,t,i)=>{i.d(t,{Z:()=>I});var n=i(667294),s=i(616550),o=i(883119),a=i(612435),r=i(420097),l=i(29156),c=i(549629),h=i(106110),d=i(999586),u=i(876569),g=i(273523),p=i(454514),m=i(140017),b=i(406893),f=i(739670),_=i(486587),x=i(5859),w=i(702497),v=i(13848),y=i(624797),j=i(598228),P=i(531486),S=i(678379),A=i(785893);let E=`${j.C0}${w.Hm8}`,T=()=>g.Z+d.Z;function I({redirectToBusinessForSignup:e,isForLimitedLogin:t,attributionLabel:i}){(0,c.Q)({view_type:9});let d=(0,m.ZP)(),g=(0,s.TH)(),w=(0,y.mB)(g.search),j=(0,v.F9)(),[I,O]=(0,n.useState)({type:"login"}),[Z,k]=(0,n.useState)(!1),{isMobile:C}=(0,x.B)().userAgent,z=w.next&&(0,P.Z)(w.next)?w.next:"/",D=t||"true"!==w.board_invite?"login":"boardInvite",L=e=>{e&&j.showOneToast(({hideToast:t})=>(0,A.jsx)(p.ZP,{duration:f.Jl,onHide:t,text:e}))};(0,n.useEffect)(()=>{L((0,_.Z)(d,g))},[]);let M="signup"===I.type;return(0,n.useEffect)(()=>{e&&M&&(0,l.Z)(E,!1)},[e,M]),(0,A.jsx)(a.Z,{page:"login",children:(0,A.jsxs)(o.xu,{height:"100%",position:"absolute",top:!0,width:"100%",children:[(0,A.jsx)(o.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{overflowY:"hidden"}},left:!0,position:"absolute",right:!0,top:!0,children:(0,A.jsx)(S.default,{})}),(0,A.jsx)(o.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{background:"rgba(0, 0, 0, .5)"}},left:!0,position:"fixed",right:!0,top:!0}),Z?(0,A.jsx)(u.Z,{}):(0,A.jsxs)(n.Fragment,{children:[(0,A.jsxs)(o.xu,{dangerouslySetInlineStyle:{__style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},position:"absolute",children:[(0,A.jsx)(b.Z,{unsafeCSS:T()}),(0,A.jsx)(h.default,{attributionLabel:i,container:"login_page",handleShowingSignupWelcomeLoading:e=>{e!==Z&&k(e)},nextUrlParam:z,signupFlow:I,signupRedirectUrl:e?E:"",signupSource:D,toggleType:"SMALL_TOGGLE"})]}),!C&&(0,A.jsx)(o.xu,{"data-test-id":"login"===I.type?"simple-signup-button":"simple-login-button",left:!0,marginStart:6,marginTop:12,position:"absolute",top:!0,children:(0,A.jsx)(o.zx,{color:"white",fullWidth:!0,onClick:()=>{O("login"===I.type?{type:"signup"}:{type:"login"})},text:"login"===I.type?d._('Sign up', 'sign up for account toggle on homepage', 'sign up for account toggle on homepage'):d._('Log in', 'Label for log in button', 'Label for log in button')})}),(0,A.jsx)(r.Z,{container:"login_page",handleGdprRequiresAge:({options:e,context:t})=>{O({type:"socialSignupWithAge",registrationCredentials:{type:"google_one_tap",context:t,signupOptions:e}})},handleLoginWithMfa:e=>{O({type:"loginMfa",creds:{google_open_id_token:e}})},nextUrl:z})]})]})})}},214274:(e,t,i)=>{i.d(t,{Z:()=>n});let n='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",メイリオ,Meiryo,"ＭＳ Ｐゴシック",Arial,sans-serif'},378720:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(667294);let s=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{t(!0)},[]),e}},175324:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(667294),s=i(883119),o=i(587703),a=i(140017),r=i(494125),l=i(785893);function c({handleSignup:e,handleLogin:t}){let i=(0,a.ZP)(),[o,c]=(0,n.useState)(!1),h=(0,n.useRef)(null);return(0,r.Z)(()=>{let t;return h.current=window.setTimeout(()=>{t=window.requestAnimationFrame(()=>{c(!0)}),e()},2e3),()=>{h.current&&window.clearTimeout(h.current),t&&window.cancelAnimationFrame(t)}}),(0,l.jsxs)(s.kC,{alignItems:"center",direction:"column",flex:"grow",justifyContent:"center",children:[(0,l.jsx)(s.xu,{children:(0,l.jsx)(s.xv,{align:"center",size:"400",weight:"bold",children:o?i._('Finishing up...', 'Title of a dialog telling the user that an account is almost done being created.', 'Title of a dialog telling the user that an account is almost done being created.'):i._('Creating your account...', 'Title of a dialog telling the user that an account is being created.', 'Title of a dialog telling the user that an account is being created.')})}),(0,l.jsx)(s.xu,{paddingY:4,children:(0,l.jsx)(s.$j,{accessibilityLabel:i._('Account is being created', 'Accessibility label for account creation loading dialog', 'Accessibility label for account creation loading dialog'),show:!0})}),o?null:(0,l.jsx)(s.xu,{marginTop:2,children:(0,l.jsx)(s.xv,{align:"center",inline:!0,children:i._('Didn\u2019t mean to create a new account?', 'Description text telling the user that they can log in if they did not intend to create a new account', 'Description text telling the user that they can log in if they did not intend to create a new account')})}),o?null:(0,l.jsx)(s.xu,{children:(0,l.jsx)(s.xv,{align:"center",inline:!0,children:(0,l.jsx)(s.rU,{display:"inlineBlock",href:"/login",onClick:({event:e,dangerouslyDisableOnNavigation:i})=>{i(),h.current&&window.clearTimeout(h.current),e&&(e.preventDefault(),e.stopPropagation()),t()},underline:"hover",children:i._('Click here to log in.', 'Login button which will show the login modal and enable the user to log in', 'Login button which will show the login modal and enable the user to log in')})})})]})}var h=i(120726),d=i(610954);let u=({children:e})=>(0,l.jsx)(s.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(0, 0, 0, 0.6)"}},left:!0,opacity:1,position:"fixed",right:!0,top:!0,zIndex:new s.Ry(1e3),children:(0,l.jsx)(s.xu,{color:"default",direction:"column",display:"flex",margin:6,padding:7,position:"fixed",right:!0,rounding:2,top:!0,width:376,children:e})});function g({handleCancelClick:e,handleConfirmSignup:t,handleShowLogin:i,step:g}){let p=(0,a.ZP)(),[m,b]=(0,n.useState)(!1),f=(0,o.Z)(),_={view_type:10,view_parameter:3202};(0,r.Z)(()=>(f({event_type:120,view_parameter:_.view_parameter}),document.body&&(document.body.style.overflow="hidden"),()=>{document.body&&(document.body.style.overflow="")}));let x=()=>{f({..._,event_type:101,element:30}),i()};return(0,l.jsx)(u,{children:"delayedSignupLoadingSpinner"===g?(0,l.jsx)(c,{handleLogin:x,handleSignup:()=>{f({..._,event_type:101,element:31}),t()}}):(0,l.jsxs)(s.xu,{children:[m?(0,l.jsx)(d.Z,{}):null,(0,l.jsx)(s.xu,{display:"inlineBlock",marginEnd:2,marginTop:2,position:"absolute",right:!0,top:!0,children:(0,l.jsx)(s.hU,{accessibilityLabel:p._('Cancel', 'Button to close the signup/login modal', 'Button to close the signup/login modal'),icon:"cancel",iconColor:"gray",onClick:()=>{f({..._,event_type:101,element:73}),e()},size:"sm"})}),(0,l.jsx)(s.xv,{align:"start",size:"400",weight:"bold",children:p._('Continue to Pinterest', 'Title of a dialog telling enabling the user to continue with sign up or log in', 'Title of a dialog telling enabling the user to continue with sign up or log in')}),(0,l.jsx)(s.xu,{marginTop:2,children:(0,l.jsx)(s.xv,{align:"start",children:p._('Hmm, it looks like you don\'t have an account yet. Let\'s get started!', 'Description text of a dialog asking the user to sign up for a Pinterest account', 'Description text of a dialog asking the user to sign up for a Pinterest account')})}),(0,l.jsx)(s.xu,{marginTop:5,children:(0,l.jsx)(s.zx,{color:"red",fullWidth:!0,onClick:()=>{f({..._,event_type:101,element:31}),b(!0),t()},text:p._('Sign up', 'Text on a button which will create an account when clicked', 'Text on a button which will create an account when clicked')})}),(0,l.jsx)(s.xu,{marginTop:2,children:(0,l.jsx)(s.zx,{color:"gray",fullWidth:!0,onClick:x,text:p._('Log in using a different method', 'Text on a button which will take the user to login when clicked.', 'Text on a button which will take the user to login when clicked.')})}),"staticSignupLoginWithTOS"===g?(0,l.jsx)(s.xu,{marginEnd:4,marginStart:4,marginTop:4,children:(0,l.jsx)(h.Z,{})}):null]})})}},999586:(e,t,i)=>{i.d(t,{Z:()=>n});let n=`
.Tooltip_message:before, .Tooltip_message:after {
  border-style: solid;
  content: '';
  display: block;
  margin-top: -8px;
  position: absolute;
  right: 100%;
  top: 17px;
  width: 0;
}
.Tooltip_message:before {
  border-color: transparent rgba(0,0,0,0.48);
  border-width: 8px 10px 8px 0;
}
.Tooltip_message:after {
  border-color: transparent #fff;
  border-width: 8px 10px 8px 0;
  margin-right: -1px;
}
.Tooltip_mobileMessage:before, .Tooltip_message:after {
  border-style: solid;
  display: block;
  margin-top: -8px;
  position: absolute;
  right: 100%;
  top: 17px;
  width: 0;
}
.Tooltip_mobileMessage:before {
  border-color: transparent rgba(0,0,0,0.48);
  border-width: 8px 10px 8px 0;
}
.Tooltip_mobileMessage:after {
  border-color: transparent #fff;
  border-width: 8px 10px 8px 0;
  margin-right: -1px;
}
.Tooltip_wrapper {
  position: absolute;
  left: calc(100% + 12px);
  z-index: 1;
}
.Tooltip_mobileWrapper {
  margin-top: 7px;
  z-index: 1;
}

.TermsOfService__light a {
  color: rgba(255,255,255,0.9);
}
`},273523:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(214274);let s=`
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
ul {
  display: block;
}

audio,
canvas,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
}

html {
  font-size: 100%;
  text-size-adjust: none;
}

a:hover,
a:active {
  outline: 0;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

img {
  max-width: 100%;
  width: auto;
  height: auto;

  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}

#map_canvas img {
  max-width: none;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

button,
input,
select,
textarea {
  font-size: 100%;
  margin: 0;
  vertical-align: middle;
}
button,
input {
  overflow: visible;
  line-height: normal;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}
button,
input[type='button'],
input[type='reset'],
input[type='submit'] {
  cursor: pointer;
  -webkit-appearance: button;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
body {
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
figure {
  margin: 0;
}
html {
  background-color: #fff;
}

html, body {
  font-family: ${n.Z};
  color: rgb(33, 25, 34);
  font-size: 12px;
  height: 100%;
}

body {
  position: relative;
  overflow-y: overlay;
  overflow-x: hidden;
}

input::-ms-clear {
  display: none;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  list-style: none;
  padding: 0;
}

:focus {
  outline: #d1d1d1 auto 1px
}

button, input, select, textarea {
  font-family: ${n.Z};
  font-size: 100%;
  vertical-align: middle;
  margin: 0px;
}

.SkipToContent {
  display: none;
}
`},596227:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(883119),s=i(378720),o=i(883211),a=i(785893);function r({isFlexible:e,images:t}){return(0,s.Z)()&&(0,a.jsx)(n.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},left:!0,maxHeight:2500,overflow:"hidden",paddingX:5,paddingY:6,position:"absolute",right:!0,top:!0,children:(0,a.jsx)(n.Rk,{gutterWidth:16,items:t??o.Z,layout:e?"flexible":"basic",minCols:2,renderItem:({data:{height:e,url:t,width:i}})=>(0,a.jsx)(n.zd,{rounding:4,wash:!0,children:(0,a.jsx)(n.Ee,{alt:"pin-image",naturalHeight:e??1,naturalWidth:i??1,src:t??""})})})})}},883211:(e,t,i)=>{i.d(t,{Z:()=>n});let n=[{url:"https://i.pinimg.com/236x/b3/41/6e/b3416e2688aa4d20f846aeb8127e6b3b.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/23/ad/5f/23ad5fc40270120b22bea471fe3656aa.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/83/39/1e/83391e3103e17a46e2733b09bf154a06.jpg",width:236,height:156},{url:"https://i.pinimg.com/236x/87/f7/b5/87f7b55bc3de78ef95fd36fa3a237172.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/d3/49/07/d34907c96950574c15719219e0f0dd69.jpg",width:236,height:295},{url:"https://i.pinimg.com/236x/49/ad/71/49ad71817c829e8d86ca16fa6508b0c4.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/a8/7f/53/a87f53ea636966bf24cf279ed2fdc4dc.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/36/67/b4/3667b449f3cacaaeef3f68fc9cf609be.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/9d/4f/43/9d4f43222d4fc694a61f7635f2d42892.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/48/d9/f0/48d9f0a63ac5c08b1cf2608ceb4a884f.jpg",width:236,height:419},{url:"https://i.pinimg.com/236x/3e/08/94/3e0894b99543507463864c64c6b3af49.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/4b/a4/97/4ba49798105ddfc0bfd11a980f18590f.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/b9/e9/8f/b9e98fe7ff81c026b488997900eb25fa.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/96/e0/4a/96e04ac53becd9f522988fc27343ac6e.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/5a/f5/9e/5af59e46be8a92abd880031be67ce4cc.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/71/f2/e6/71f2e6a1a13223864dd833bc128f8e2f.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/db/b2/09/dbb2099909d25dd45d3df4950429312d.jpg",width:236,height:309},{url:"https://i.pinimg.com/236x/d7/f9/b0/d7f9b0f7dc0536e923026e6af91c61d5.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/4b/6e/36/4b6e36884909d421e250050db82d013b.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/0b/85/ca/0b85ca13cbf16fa3017164b9c4b65923.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/28/d9/35/28d935a8f25905a6989709b21241e4d2.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/94/e5/fb/94e5fb084bb73b1237a73fc83eb07b45.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/ec/c7/66/ecc766782029713523ae6a5bd8544045.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/1a/c5/72/1ac572b1643cf518ef06139eca46dd1d.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/d1/8f/f9/d18ff9eaec83c75b878eebb899604b8e.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/b3/41/6e/b3416e2688aa4d20f846aeb8127e6b3b.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/23/ad/5f/23ad5fc40270120b22bea471fe3656aa.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/8f/e5/32/8fe532eea42b7c8b14947a2ced8b127d.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/29/6d/a2/296da26a335fd7079e6355225c051cf3.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/cd/53/e3/cd53e3b9ad897d5c5588094f446cbc2a.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/18/54/21/1854212e113994080084b4666b23fcc5.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/cf/0c/45/cf0c451732bb352b3c96d1951ea632dd.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/d0/e9/ee/d0e9ee92a6398e6b31b1515c2ec6ab5e.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/8d/8c/86/8d8c86e41d810497a7b60c5a0e58a95f.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/57/0c/d6/570cd6ac36a208808edabf74682cca8d.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/bd/57/32/bd5732c8291d05e8982662a1ee043411.jpg",width:236,height:188},{url:"https://i.pinimg.com/236x/1b/10/5e/1b105ea0da81722178e23c5438fb68d7.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/ee/2d/d3/ee2dd31a93246fb72490c012b16eefca.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/81/8a/ca/818aca5d5303c60bff125a5acc322fc0.jpg",width:236,height:295},{url:"https://i.pinimg.com/236x/c6/bc/64/c6bc64acbaab2cca4f9166539ff36621.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/d7/38/27/d73827a583f46fbeaf282acc001eb733.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/2a/02/05/2a0205019cb0cb1ea0baa9b95eb78ab8.jpg",width:236,height:256},{url:"https://i.pinimg.com/236x/60/81/65/60816514dcfcbcab0df772dc78ca8ed1.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/0d/2f/fb/0d2ffbcdcc414765ef441752b423a6ad.jpg",width:236,height:353},{url:"https://i.pinimg.com/236x/d0/97/0b/d0970b1c57a50afa4d6951d8b0657715.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/7d/c5/99/7dc599bce4115d38ee5b91dcd8769543.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/70/0e/56/700e56a3bccb989ab88819ade445e86e.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/ff/73/ab/ff73ab3256bbcf8abce0febb98939e4f.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/e7/1b/ba/e71bbaca118e1ae09f01bcc45b58229f.jpg",width:236,height:185},{url:"https://i.pinimg.com/236x/37/af/bf/37afbf3c16baf0f70dc083b6c6ffecec.jpg",width:236,height:298},{url:"https://i.pinimg.com/236x/64/9d/1b/649d1b77d8b28995b2902b89001f912c.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/8f/e5/32/8fe532eea42b7c8b14947a2ced8b127d.jpg",width:236,height:354},{url:"https://i.pinimg.com/236x/fc/5f/44/fc5f44cd50535f378b1e09d11433c1a8.jpg",width:236,height:330},{url:"https://i.pinimg.com/236x/21/af/78/21af78021ad083377aa3e36ae6f09fc2.jpg",width:236,height:314},{url:"https://i.pinimg.com/236x/06/41/9c/06419c4e4165596f77d721d88665e4e7.jpg",width:236,height:157},{url:"https://i.pinimg.com/236x/2a/9e/80/2a9e80b4714ac32943ddec01399b5387.jpg",width:236,height:156},{url:"https://i.pinimg.com/236x/fc/5f/44/fc5f44cd50535f378b1e09d11433c1a8.jpg",width:236,height:330}]},205841:(e,t,i)=>{i.d(t,{qE:()=>r,u_:()=>l.ZP,FN:()=>c.ZP});var n=i(883119),s=i(785893);let o=(e,t)=>!!(e?.includes("images/user/default")&&t);function a({accessibilityLabel:e,name:t,outline:i,size:a,src:r,verified:l}){return(0,s.jsx)(n.qE,{accessibilityLabel:e,name:t,outline:i,size:a,src:o(r,t)?void 0:r,verified:l})}a.displayName="Avatar";let r=a;var l=i(930837),c=i(454514)},307772:(e,t,i)=>{function n(e,t,i){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,{Z3:()=>d,LU:()=>u,ZP:()=>g});let s=window.location.search.includes("debug_impressions=1")||document.cookie&&document.cookie.indexOf("debug_impressions=1")>-1,o={paused:"Pause",resumed:"Resume",stopped:"Flush",enter:"Enter viewport",exit:"Exit viewport"},a={},r={background:"#FF8A8A",transform:"scale(.98)"},l={init:e=>({transform:`scale(${a[e]?.8:.99})`,transition:"transform .2s ease-in-out",background:"#8E8E8E"}),[o.enter]:{background:"#A0DCC8",transform:"scale(.99)"},[o.exit]:r,[o.stopped]:r,[o.paused]:r,[o.resumed]:{background:"#0FA573",transform:"scale(.99)"}};class c{constructor(e){n(this,"setMutationObserver",e=>(this.mutationObserver=e,this)),n(this,"startMutationObserver",e=>{this.mutationObserver&&this.mutationObserver.observe(this.node,e)}),n(this,"stopMutationObserver",()=>{this.mutationObserver&&this.mutationObserver.disconnect()}),n(this,"handleIntersectionChange",e=>{let t=e.intersectionRatio>0||e.isIntersecting,i=Date.now();e.intersectionRatio>0&&!this.visibleEvents.has(1)&&this.visibleEvents.set(1,i),e.intersectionRatio>.5?this.visibleEvents.has(50)||this.visibleEvents.set(50,i):this.visibleEvents.has(50)&&!this.hiddenEvents.has(50)&&this.hiddenEvents.set(50,i),e.intersectionRatio>.8?this.visibleEvents.has(80)||this.visibleEvents.set(80,i):this.visibleEvents.has(80)&&!this.hiddenEvents.has(80)&&this.hiddenEvents.set(80,i),1!==e.intersectionRatio||this.visibleEvents.has(2)||this.visibleEvents.set(2,i),e.boundingClientRect.top<=143&&this.visibleEvents.has(1)&&!this.hiddenEvents.has(1)&&this.hiddenEvents.set(1,i),e.boundingClientRect.bottom<=143&&this.visibleEvents.has(2)&&!this.hiddenEvents.has(2)&&this.hiddenEvents.set(2,i),t&&!this.inViewport?(this.startTime=i,this._debug(o.enter,{startTime:i,node:this.node}),this.enterCallbacks.forEach(e=>e())):!t&&this.inViewport&&(this._debug(o.exit,!0),this.exitCallbacks.forEach(e=>e(this.toJSON()))),this.inViewport=t}),this.enterCallbacks=[],this.exitCallbacks=[],this.inViewport=!1,this.node=e,this.startTime=0,this.debugId="",this.visibleEvents=new Map,this.hiddenEvents=new Map}onEnterViewport(e){return this.enterCallbacks.push(e),this}onExitViewport(e){return this.exitCallbacks.push(e),this}setDebugId(e){return this.debugId=e,s&&Object.assign(this.node.style,l.init(e)),this}pause(){return this.inViewport&&(this._debug(o.paused,!0),this.exitCallbacks.forEach(e=>e(this.toJSON()))),this}resume(){if(this.inViewport){let e=Date.now();this._debug(o.resumed,{startTime:e}),this.startTime=e}return this}stop(e){return this.inViewport&&(this._debug(o.stopped,!0),this.exitCallbacks.forEach(t=>t(this.toJSON(e)))),this}toJSON(e=""){return{startTime:1e6*this.startTime,endTime:1e6*Date.now(),forcedExit:e,hiddenEvents:this.hiddenEvents,visibleEvents:this.visibleEvents}}toDebugJSON(){return{pinID:this.debugId,startTime:this.startTime,endTime:Date.now(),duration:`${(Date.now()-this.startTime)/1e3} seconds`}}_debug(e,t){if(s)switch(window.console.log(`📌 ${e} -- ${this.debugId}`),!0===t&&window.console.log(this.toDebugJSON()),"object"==typeof t&&window.console.log(t),l[e]&&Object.assign(this.node.style,l[e]),e){case o.flushed:case o.paused:case o.exit:a[this.debugId]=!0}}}function h(e,t,i){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let d=!0,u=!1;class g{constructor(){h(this,"_delegateChange",e=>{e.forEach(e=>{let t=this.activeImpressions.get(e.target);t&&t.handleIntersectionChange(e)})}),h(this,"_handleMutations",(e,t)=>{let i=this.mutationObservers.get(t);i&&i.offsetHeight<1&&i&&this.stop(i,"removed")}),this.activeImpressions=new Map,this.mutationObservers=new Map,this.bottomHeight=0,this.bottomObstructions=new Set,this.pausePriority=u,this.observer=new window.IntersectionObserver(this._delegateChange),window.Cypress&&!window.activeImpressions&&(window.activeImpressions=new Map),this.paused=!1,this.topHeight=0,this.topObstructions=new Set,this.inExperiment=!1}setExperimentStatus(e){this.inExperiment!==e&&(this.inExperiment=e)}stop(e,t=""){let i=this.activeImpressions.get(e);i&&(i.stop(t),this.mutationObservers.delete(i.mutationObserver),i.stopMutationObserver(),this.activeImpressions.delete(e),window.activeImpressions?.delete(e),this.observer.unobserve(e))}start(e){let t=this.activeImpressions.get(e);return t||(t=new c(e),this.activeImpressions.set(e,t),window.activeImpressions?.set(e,t),this.observer.observe(e),t.setMutationObserver(new window.MutationObserver((e,t)=>this._handleMutations(e,t))),this.mutationObservers.set(t.mutationObserver,e),t.startMutationObserver({subtree:!0,attributes:!0,attributeFilter:["style"]})),t}pause(e=d){this.paused||(Array.from(this.activeImpressions.values()).forEach(e=>e.pause()),this.paused=!0,this.pausePriority!==u||(this.pausePriority=e))}resume(e=d){(e!==u||this.pausePriority!==d)&&this.paused&&(Array.from(this.activeImpressions.values()).forEach(e=>e.resume()),this.paused=!1,this.pausePriority=u)}addObstruction(e,t){"top"===e?this.topObstructions.add(t):"bottom"===e&&this.bottomObstructions.add(t),this._calculateRootMargins()}removeObstruction(e,t){"top"===e?this.topObstructions.delete(t):"bottom"===e&&this.bottomObstructions.delete(t),this._calculateRootMargins()}updateObstructions(){this._calculateRootMargins()}_calculateRootMargins(){let e=Array.from(this.topObstructions).reduce((e,t)=>{let{bottom:i}=t.getBoundingClientRect();return i>e?i:e},0),t=window.innerHeight-Array.from(this.bottomObstructions).reduce((e,t)=>{let{top:i}=t.getBoundingClientRect();return i<e?i:e},window.innerHeight);if(e!==this.topHeight||t!==this.bottomHeight){let i={rootMargin:`${-e}px 0px ${-t}px`,threshold:[0,.5,.8,1]};this.observer.disconnect(),this.observer=new window.IntersectionObserver(this._delegateChange,i),Array.from(this.activeImpressions.values()).forEach(e=>this.observer.observe(e.node)),this.topHeight=e,this.bottomHeight=t}}}},30378:(e,t,i)=>{i.d(t,{Z:()=>n});let n=new(i(307772)).ZP},317540:(e,t,i)=>{i.d(t,{Z:()=>n});let n={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},486587:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(169346),s=i(624797);function o(e,t,i=""){if(!(t&&t.search))return"";let{message:a}=(0,s.mB)(t.search),r=(0,s.mB)(t.search).username||i,l="true"===(0,s.mB)(t.search).multiple_accounts;return(0,n.Z)({i18n:e,message:a,multipleAccounts:l,username:r})}},169346:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(883119),s=i(339001),o=i(739670),a=i(785893);function r(e,t,i){return(0,a.jsx)(n.xv,{align:i||"center",children:(0,s.nk)(e,{username:(0,a.jsx)(n.xv,{inline:!0,weight:"bold",children:t})})})}function l({i18n:e,message:t,multipleAccounts:i,username:n=""}){switch(t){case o.R:return e._('Your account has been deleted. We\'re sad to see you go', 'unauthLoginPage.accountDeletedToast.message', 'Confirmation message after a user has successfully deleted their account');case o.j2:if(i)return r(e._('An email has been sent with final steps to delete your account, {{username}} and its linked accounts', 'accountDeletedEmailToast.message.multipleAccounts', 'Confirmation message after a user has successfully requested multiple accounts deletion'),n);return r(e._('An email has been sent with final steps to delete your account, {{username}}', 'accountDeletedEmailToast.message.singleAccount', 'Confirmation message after a user has successfully requested a single account deletion'),n);case o.Di:return r(i?e._('The account, {{username}}, and its associated linked accounts have been deactivated', 'unauthLoginPage.deactivatedToast.message.multipleAccounts', 'Confirmation message after a user has successfully deactivated multiple accounts'):e._('The account, {{username}}, has been deactivated', 'unauthLoginPage.deactivatedToast.message.singleAccount', 'Confirmation message after a user has successfully deactivated a single account'),n);case o.aU:return r(e._('Success! You\'ve unlinked this business account. You are currently in {{username}}.', 'authHomeFeedPage.unlinkAccountToast.message', 'Confirmation message after a user has successfully unlinked business account'),n,"start");case o.pN:return r(e._('You\'ve switched into and are currently in the account {{username}}', 'accountSettings.switchAccountToAccountChanges', 'Confirmation message after a user has successfully switched accounts and got redirected to Account Changes'),n,"start");default:return""}}},237856:(e,t,i)=>{i.d(t,{H:()=>l,M:()=>r});var n=i(658583),s=i(622541),o=i(217058);let a=()=>!!n.U2(s.x3),r=()=>{let e=n.U2(s.yu);return e?Math.floor((new Date().getTime()-new Date(e).getTime())/864e5):-1},l=()=>(n.U2(s.e7)&&(0,o.My)(`pcons.non_google_autologin_disabled_cookie.${r()}`),a()||!!n.U2(s.e7))},14583:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(667294),s=i(340523),o=i(908734),a=i(785893);function r({children:e,fallback:t}){return(0,a.jsx)(n.Suspense,{fallback:t||null,children:e})}function l({children:e,fallback:t}){let{checkExperiment:i}=(0,s.F)();return i("web_throw_error_on_client_only_suspense").anyEnabled?(0,a.jsx)(n.Suspense,{fallback:t,children:(0,a.jsx)(o.Z,{children:e})}):(0,a.jsx)(r,{fallback:t,children:e})}},608516:(e,t,i)=>{i.d(t,{Z:()=>n});let n=i(14583).Z},233440:(e,t,i)=>{i.d(t,{Z:()=>n});let n=(0,i(301923).Z)({type:"session"})},552228:(e,t,i)=>{i.d(t,{C:()=>o});let n=[".at",".com.au",".ca",".ch",".cl",".de",".dk",".es",".fr",".co.uk",".ie",".it",".jp",".co.kr",".com.mx",".nz",".ph",".pt",".ru",".se"],s=new RegExp(/^(.+\.)?(pinterest|pinterdev)\.com$/),o=e=>s.test(e)||n.some(t=>e===`pinterest${t}`||e.endsWith(`.pinterest${t}`))},531486:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(552228);let s=e=>{if(e.startsWith("//"))return!1;if(e.startsWith("/"))return!0;if(e.startsWith("http://")||e.startsWith("https://"))try{let t=new URL(e);if(t.username)return!1;return(0,n.C)(t.host)}catch(e){}return!1}},678379:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var n=i(667294),s=i(545007),o=i(596227),a=i(883211),r=i(224796),l=i(731714),c=i(233440),h=i(217058);let d="sessionVisitedPages",u="sessionUnauthPins",g={logUrlAndFirstPinImageSig(e){if(l.Z.getItem(r.W3)===window.location.pathname)return;let t={path:window.location.pathname,ts:Date.now(),first_pin_image_signature:e||""};l.Z.prependItem(r._b,t,100),c.Z.prependItem(d,t,100),(0,h.My)("unauth.web.session.visited_pins."+(c.Z.getItem(d)||[]).length),l.Z.prependItem(r.MS,t,100);try{l.Z.setItem(r.W3,window.location.pathname)}catch(e){console.error(e)}},logLastVisitedBoardLandingPage(e){if(!e||!e.board)return;let t=l.Z.getItem(r.om);if(t){for(let i of t)if(i&&i.board_id===e.board.id)return}let i={ts:Date.now(),board_id:e.board.id,first_pin_id:e.id,first_pin_image_signature:e.image_signature};l.Z.prependItem(r.om,i,10)},logPinCTAClick(e){l.Z.prependItem(r._b,{path:e,ts:Date.now(),actions:[1]},100)},logUnauthPins(e,t=!0){if(e.length)try{l.Z.setItem(r.TJ,e),t&&c.Z.prependItem(u,e[0])}catch(e){console.error(e)}},getUnauthPins:()=>l.Z.getItem(r.TJ)||[],getUnauthSessionsPins:()=>c.Z.getItem(u)||[]};var p=i(913208),m=i(785893);function b(e,t,i){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let f=({dominant_color:e,height:t,type:i,url:n,width:s})=>({dominant_color:e,height:t,type:i,url:n,width:s});class _ extends n.PureComponent{constructor(...e){super(...e),b(this,"state",{insertedBestPinsImages:[],insertedTopicImages:[],pinImages:[],seoPinImage:void 0}),b(this,"insertExtraImages",e=>this.setState({...e})),b(this,"getSEOPinImageToInsert",()=>{let{inNux:e}=this.props;return e?this.getUnauthPinImages()[0]:void 0}),b(this,"getUnauthPinImages",(e=!1)=>{let t=e?g.getUnauthSessionsPins():g.getUnauthPins(),i=new Set;return t.filter(e=>e.images&&e.images["236x"]).map(e=>e.images["236x"]).filter(e=>{let t=i.has(e.url);return i.add(e.url),!t})}),b(this,"getBackgroundImages",()=>{let{insertedBestPinsImages:e,insertedTopicImages:t,pinImages:i,seoPinImage:n}=this.state,s=t.length+(n?1:0),o=[];return(o=(o=(o=(o=o.concat(n||[])).concat(e)).concat(t)).concat(i.slice(s))).map(e=>f(e))})}componentDidMount(){let{defaultPinImages:e}=this.props,t=this.getSEOPinImageToInsert(),i=[...t?[t]:[],...e||a.Z.map(({url:e,width:t,height:i})=>({url:e,width:t,height:i}))];this.setState({pinImages:i,seoPinImage:t})}componentDidUpdate(e){let{inNux:t,nuxSelectedInterestImages:i,nuxStep:n}=this.props,s=e.nuxSelectedInterestImages,{seoPinImage:o}=this.state;if(s&&i&&s!==i){let e=t&&i.length>s.length&&i[i.length-1].bestPinsImages||[],a=t&&"topic"===n&&0===e.length?i.filter(e=>!o||(0,p.lN)(e.url)!==(0,p.lN)(o.url)):[];this.insertExtraImages({insertedTopicImages:a,insertedBestPinsImages:e})}}render(){let{isFlexible:e}=this.props;return(0,m.jsx)(o.Z,{images:this.getBackgroundImages(),isFlexible:e})}}function x(e){let{nuxSelectedInterestImages:t,nuxProgress:i}=(0,s.v9)(({ui:e})=>e);return(0,m.jsx)(_,{...e,nuxSelectedInterestImages:t&&t.images,nuxStep:i&&i.step})}},913208:(e,t,i)=>{i.d(t,{HW:()=>a,lN:()=>r});var n=i(224796),s=i(731714);function o(e){let t=[];if(e){let i=Date.now()-72e5;for(let n of e)n.ts>=i&&("image_signature"in n&&"string"==typeof n.image_signature&&t.push(n.image_signature),"first_pin_image_signature"in n&&"string"==typeof n.first_pin_image_signature&&t.push(n.first_pin_image_signature))}return t}function a(){return{plpImages:o(s.Z.getItem(n.e9)||[]),blpImages:o(s.Z.getItem(n.om)||[])}}function r(e){return((e??"").split("/").pop()??"").replace(/(--.*|\.jpg)$/g,"")}},908734:(e,t,i)=>{i.d(t,{Z:()=>o,d:()=>s});let n="HIDDEN_ON_SERVER_ERROR",s=e=>e instanceof Object&&"message"in e&&e.message===n;function o({children:e}){if("undefined"==typeof window)throw Error(n);return e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/2648-82ef416f505aaf7f.mjs.map