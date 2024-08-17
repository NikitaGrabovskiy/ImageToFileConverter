"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[24793,27795],{906712:(e,i,l)=>{var n,a,t,o;l.r(i),l.d(i,{default:()=>r});let s={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CollectionPreviewModule_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"gridTitle",storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[n],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryPinMetadataField",kind:"LinkedField",name:"metadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"pinTitle",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PinJoin",kind:"LinkedField",name:"pinJoin",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"visualAnnotation",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"VaseAnnotations_pin"},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"descriptionHtml",storageKey:null},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:o=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null}],storageKey:'images(spec:"236x")'},{alias:"imageSpec_474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:o,storageKey:'images(spec:"474x")'},{alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},{alias:null,args:null,concreteType:"ImageDimensions",kind:"LinkedField",name:"imageMediumSizePixels",plural:!1,selections:[a,t],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"dominantColor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"seoUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"altText",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"autoAltText",storageKey:null},{args:null,kind:"FragmentSpread",name:"SeoPageMetadataText_pin"}],type:"Pin",abstractKey:null};s.hash="e25646cc8011a06c71f6792408b4b047";let r=s},564684:(e,i,l)=>{l.r(i),l.d(i,{default:()=>a});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SeeMoreButton_pin",selections:[{args:null,kind:"FragmentSpread",name:"VaseSection_pin"}],type:"Pin",abstractKey:null};n.hash="8d0233fe1acbc77ec2b5a1754e0a6e36";let a=n},168266:(e,i,l)=>{l.r(i),l.d(i,{default:()=>a});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"SeoPageMetadataText_pin",selections:[{args:null,kind:"FragmentSpread",name:"SeeMoreButton_pin"}],type:"Pin",abstractKey:null};n.hash="8f9d12b0eee9d408e23c20c11af28777";let a=n},980536:(e,i,l)=>{l.r(i),l.d(i,{default:()=>d});var n=l(667294),a=l(883119),t=l(844683),o=l(30378),s=l(55202),r=l(785893);function d({_dangerouslyDisableScrollBoundaryContainer:e,accessibilityModalLabel:i,align:l,allowClickAndDrag:d,allowMediaPlay:c,allowScroll:u,children:p,closeOnOutsideClick:m,footer:g,heading:h,onDismiss:y,role:x,size:_,subHeading:f}){return(0,n.useEffect)(()=>(o.Z.pause(),function(){o.Z.resume()}),[]),(0,r.jsx)(a.mh,{zIndex:t.b7,children:(0,r.jsx)(s.Z,{allowClickAndDrag:d,allowEsc:!0,allowMediaPlay:c,allowScroll:u,children:(0,r.jsx)(a.u_,{_dangerouslyDisableScrollBoundaryContainer:e,accessibilityModalLabel:i,align:l,closeOnOutsideClick:m,footer:g,heading:h,onDismiss:()=>{o.Z.resume(),y()},padding:"none",role:x,size:_,subHeading:f,children:p})})})}},443171:(e,i,l)=>{l.r(i),l.d(i,{default:()=>T});var n,a=l(667294),t=l(545007),o=l(167912),s=l(883119),r=l(980536),d=l(140017),c=l(5859),u=l(757640),p=l(608516),m=l(623409),g=l(163471),h=l(554786),y=l(696534),x=l(930837),_=l(119936),f=l(785893);function S({showFullScreenInfo:e,isOpen:i,interstitialUpsellDismissed:l,children:n}){let a=(0,d.ZP)(),t=(0,h.HG)(),o=(0,h.Wb)();return o||t?(0,f.jsx)(x.ZP,{accessibilityModalLabel:"",closeOnOutsideClick:!1,isOpen:e&&!o,mobileHideCloseIcon:!0,mobileIsFullscreen:!0,onDismiss:()=>{},children:(0,f.jsx)(s.xu,{color:(0,y.Yc)()?"dark":"default",dangerouslySetInlineStyle:{__style:{border:(0,y.Yc)()?void 0:"1px solid #efefef",transition:"transform 0.3s ease-out",WebkitOverflowScrolling:"touch"}},height:"100%",left:!0,maxHeight:"100%",overflow:"auto",position:"fixed",top:!0,width:t?"100vw":"100%",zIndex:new s.Ry(1),children:(0,f.jsx)(s.xu,{bottom:!0,left:!0,marginTop:l?0:12,overflow:"scroll",padding:5,position:"fixed",right:!0,top:!0,children:n})})}):(0,f.jsx)(_.default,{accessibilityModalLabel:a._('Close', 'Close modal window', 'Close modal window'),isOpen:i,mobileAccessibilityCloseIconLabel:a._('Close', 'Close modal window', 'Close modal window'),onDismiss:()=>{},children:n})}let w=(0,a.lazy)(()=>l.e(99631).then(l.bind(l,499631))),P=void 0!==n?n:n=l(564684);function k({dedupeVisualAnnotations:e,iconColor:i,size:l,isMainPin:n,isAuth:o,pinCreditPrefix:u,onClickTitleOrDomain:y,pinId:x,renderOnlyHiddenSEOContent:_=!1,graphqlRef:P,shoppingKlpUrls:k}){let v=(0,d.ZP)(),j=(0,m.Z)(),{isBot:b}=(0,c.B)(),{unauthInterstitialDismissed:T}=(0,t.v9)(({session:e})=>e),[C,A]=(0,a.useState)(!1),D=(0,h.HG)(),I=(0,h.Wb)(),F=(0,g.Z)(),K=!I&&!o,M=P?{type:"graphqlRef",data:P}:{type:"deprecated",data:x},z=(0,f.jsxs)(s.xu,{dangerouslySetInlineStyle:K?{__style:{paddingTop:0,paddingBottom:30}}:void 0,padding:5,children:[(0,f.jsx)(s.xu,{color:"default","data-test-id":"close-seo-vase-see-more-button",left:!0,padding:4,position:"absolute",top:!0,children:(0,f.jsx)(s.hU,{accessibilityLabel:v._('Cancel', 'close modal icon', 'close modal icon'),icon:"cancel",iconColor:"gray",onClick:()=>{j({action:"dismiss",item:"close-see-more-button",within:"seo-vase"}),A(!1),n&&j({action:"click",item:"see-more-main-pin-button",within:"seo-vase"})},size:"sm"})}),(0,f.jsx)(s.xu,{marginBottom:K?0:8,children:(0,f.jsx)(s.xv,{align:K?"start":"center",size:"400",weight:K?void 0:"bold",children:K?null:v._('More information', 'more information label', 'more information label')})}),(0,f.jsx)(p.Z,{children:(0,f.jsx)(w,{dedupeVisualAnnotations:e,onClickTitleOrDomain:y,pinCreditPrefix:u,pinId:x,pinKey:M,shoppingKlpUrls:k})})]});return _?(0,f.jsx)(s.xu,{display:"none",children:z}):(0,f.jsxs)(s.xu,{dangerouslySetInlineStyle:{__style:{float:"right"}},"data-test-id":"SeoVaseSeeMoreButton",right:!0,children:[(0,f.jsx)(s.hU,{accessibilityLabel:v._('See more', 'more information icon', 'more information icon'),icon:"ellipsis",iconColor:i??"gray",onClick:({event:i})=>{i.stopPropagation(),n?j({action:"click",item:"see-more-main-pin-button",within:"seo-vase"}):j({action:"click",item:"see-more-related-pin-button",within:"seo-vase"}),I||o?(A(!0),n&&j({action:"click",item:"see-more-main-pin-button",within:"seo-vase"})):F({pinId:x||"",location:n?"main-pin-more-information":"non-main-pin-more-information",vaseSection:(0,f.jsx)(p.Z,{children:(0,f.jsx)(w,{dedupeVisualAnnotations:e,onClickTitleOrDomain:y,pinCreditPrefix:u,pinId:x,pinKey:M,shoppingKlpUrls:k})})})},size:l||"md"}),b&&!D?(0,f.jsx)(s.xu,{display:C?"flex":"none",children:z}):(0,f.jsx)(S,{interstitialUpsellDismissed:!!T,isOpen:C&&!I,showFullScreenInfo:C,children:z}),I&&C&&(0,f.jsx)(r.default,{accessibilityModalLabel:"test",onDismiss:()=>{},children:z})]})}function v(e){let i=(0,o.useFragment)(P,e.graphqlRef);return(0,f.jsx)(k,{dedupeVisualAnnotations:e.dedupeVisualAnnotations,graphqlRef:i,iconColor:e.iconColor,isAuth:e.isAuth,isMainPin:e.isMainPin,onClickTitleOrDomain:e.onClickTitleOrDomain,pinCreditPrefix:e.pinCreditPrefix,pinId:e.pinId,renderOnlyHiddenSEOContent:e.renderOnlyHiddenSEOContent,shoppingKlpUrls:e.shoppingKlpUrls,size:e.size})}function j(e){return(0,f.jsx)(k,{dedupeVisualAnnotations:e.dedupeVisualAnnotations,iconColor:e.iconColor,isAuth:e.isAuth,isMainPin:e.isMainPin,onClickTitleOrDomain:e.onClickTitleOrDomain,pinCreditPrefix:e.pinCreditPrefix,pinId:e.pinId,renderOnlyHiddenSEOContent:e.renderOnlyHiddenSEOContent,shoppingKlpUrls:e.shoppingKlpUrls,size:e.size})}function b(e){return(0,u.Z)({name:"PinResource",options:{id:e.pinId,field_set_key:"unauth_ssr_lazy_load"}}),(0,f.jsx)(j,{...e})}function T(e){return e.graphqlRef?(0,f.jsx)(v,{...e}):e.lazyLoadAnnotations?(0,f.jsx)(b,{...e}):(0,f.jsx)(j,{...e})}},736423:(e,i,l)=>{l.d(i,{Z:()=>c});var n,a=l(167912),t=l(883119),o=l(567344),s=l(443171),r=l(785893);let d=void 0!==n?n:n=l(168266);function c({dedupeVisualAnnotations:e,description:i,gridTitle:l,pinId:n,richMetadataTitle:c,richSummaryDisplayName:u,storyPinDataId:p,storyPinDataMetadataPinTitle:m,title:g,queryRef:h}){let y=(0,a.useFragment)(d,h);return(0,r.jsxs)(t.xu,{display:"flex",marginBottom:-1,paddingX:2,children:[(0,r.jsx)(t.xu,{flex:"grow",maxHeight:32,minHeight:12,overflow:"hidden",width:142,children:(0,r.jsx)(t.xv,{lineClamp:2,size:"100",weight:"bold",children:(0,o.fs)({pinTitle:g,gridTitle:l,richSummaryDisplayName:u,richMetadataTitle:c,storyPinDataId:p,storyPinDataMetadataPinTitle:m})||i})}),(0,r.jsx)(t.xu,{children:(0,r.jsx)(s.default,{dedupeVisualAnnotations:e,graphqlRef:y,pinId:n,size:"sm"})})]})}},21102:(e,i,l)=>{l.d(i,{Z:()=>a});var n=l(667294);function a(){let e=(0,n.useRef)(new Map),i=(0,n.useRef)(new Set);return({pinId:l,visualAnnotations:n})=>{let a=e.current.get(l);if(a)return a;let t=i.current,o=n.filter(e=>!t.has(e));return e.current.set(l,o),o.forEach(e=>{t.add(e)}),o}}},778672:(e,i,l)=>{l.d(i,{Z:()=>w});var n,a=l(667294),t=l(167912),o=l(883119),s=l(214877),r=l(215245),d=l(140017),c=l(567344),u=l(5859),p=l(623409),m=l(554786),g=l(736423),h=l(10630),y=l(785893);let x={15113:"COLLECTION_PREVIEW_MODULE",15118:"CURATED_EVENTS_MODULE",15119:"UNAUTH_HISTORY_MODULE",15120:"UNAUTH_HISTORY_RECS_MODULE"},_=e=>x[e],f=void 0!==n?n:n=l(906712),S=({isLastPin:e,lastPinUrl:i,graphqlRef:l,onNavigateToPinCloseup:n,key:r,isMasonry:u=!1,useVase:x=!1,viewType:_,componentType:S})=>{let w,P;let k=(0,d.ZP)(),v=(0,m.ml)(),j=(0,m.HG)(),b=(0,p.Z)(),[T,C]=(0,a.useState)(!1),{logContextEvent:A}=(0,s.v)(),D=v?140:236,I=v?208:300,F=(0,t.useFragment)(f,l);if(!F)return null;let K=(e,i)=>{A({event_type:101,component:S,view_type:_,element:e?179:12367}),b({action:"click",item:e?"collection-preview-see-more":"collection-preview-pin-rep",within:"collection-preview-module"}),i&&i()},M=(0,c.Ly)({pinTitle:F.title,gridTitle:F.gridTitle,richSummaryDisplayName:F.richSummary?.displayName,richMetadataTitle:F.richMetadata?.title,storyPinDataId:F.storyPinDataId,storyPinDataMetadataPinTitle:F.storyPinData?.metadata?.pinTitle,pinJoinVisualAnnotation:F.pinJoin?.visualAnnotation}),z=(0,c.rw)(F.description??"",F.descriptionHtml||"",F.pinJoin?.visualAnnotation,F.altText||"",F.autoAltText||""),L=F.imageSpec_474x||F.imageSpec_236x,O=x?F.pinJoin?.visualAnnotation??[]:[],U=e?i:(0,c.bN)({pinId:F.entityId,seoUrl:F.seoUrl});return w=u?0:j?2:1,P=u?0:j?2:1,(0,y.jsxs)(o.xu,{"data-test-id":"collection-preview-pin-rep","data-test-pin-id":F.entityId,marginEnd:w,marginStart:P,maxWidth:D,children:[(0,y.jsx)(o.xu,{"data-test-id":"collection-preview-pin-image",height:I,overflow:"hidden",rounding:4,width:D,children:(0,y.jsx)(o.Tg,{href:U,onMouseEnter:()=>C(!0),onMouseLeave:()=>C(!1),onTap:()=>K(e,n),tapStyle:"none",children:(0,y.jsx)(o.zd,{height:I,rounding:4,width:D,children:(0,y.jsx)(o.Ee,{alt:z,color:F.dominantColor||"",fit:"cover",naturalHeight:L?.height??F.imageMediumSizePixels?.height??I,naturalWidth:L?.width??F.imageMediumSizePixels?.width??D,src:L?.url??F.imageMediumUrl??"",children:(T||e)&&(0,y.jsx)(o.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(17, 17, 17, 0.4)"}},left:!0,position:"absolute",right:!0,top:!0,children:(0,y.jsx)(o.xu,{alignItems:"center",bottom:!0,display:"flex",justifyContent:"center",left:!0,paddingX:2,position:"absolute",right:!0,top:!0,children:e?(0,y.jsx)(o.zx,{color:"gray",size:"lg",text:k._('See more', 'collection-preview.see_more.button', 'Button text for collection preview pins module that links to more content')}):(0,y.jsx)(o.xv,{align:"center",color:"light",size:"400",weight:"bold",children:k._('Open', 'collection-preview.open_pin_in_same_tab', 'Text on hover of a pin leading to opening this pin in the same tab. This is for users who don\'t have an account on Pinterest.')})})})})})})}),!e&&(0,y.jsxs)(o.xu,{children:[O.length>0&&(0,y.jsx)(o.xu,{marginTop:2,overflow:"hidden",paddingX:2,width:D,children:(0,y.jsx)(h.ZP,{dedupeVisualAnnotations:null,graphqlRef:F,mode:"inlineWithScrollArrows",pinId:F.entityId})}),j&&(0,y.jsx)(o.Tg,{href:U,onTap:()=>{b({action:"click",item:"collection-preview-pin-title",within:"collection-preview-module"})},tapStyle:"none",children:(0,y.jsx)(o.xu,{paddingX:j?2:1,paddingY:2,children:(0,y.jsx)(o.X6,{accessibilityLevel:3,lineClamp:j?1:2,size:j?"200":"100",children:M})})}),!j&&(0,y.jsx)(o.iP,{fullWidth:!1,onTap:()=>{b({action:"click",item:"collection-preview-pin-title",within:"collection-preview-module"})},tapStyle:"none",children:(0,y.jsx)(o.xu,{paddingX:j?2:1,paddingY:2,children:(0,y.jsx)(g.Z,{dedupeVisualAnnotations:null,description:F.description,gridTitle:F.gridTitle??void 0,pinId:F.entityId,queryRef:F,richMetadataTitle:F.richMetadata?.title,richSummaryDisplayName:F.richSummary?.displayName,storyPinDataId:F.storyPinDataId,storyPinDataMetadataPinTitle:F.storyPinData?.metadata?.pinTitle,title:F.title})})})]})]},r)},w=({pinsRef:e,lastPinUrl:i="",onNavigateToPinCloseup:l,viewType:n,componentType:a=15113})=>{let t=(0,m.ml)(),s=(0,m.HG)(),{isBot:d}=(0,u.B)();if(!e||!e.length)return null;let c=15118===a,p=_(a);return t||15119!==a&&15120!==a?(0,y.jsx)(o.xu,{"data-test-id":`collection-preview-module-${p}`,marginEnd:"auto",marginStart:"auto",children:(0,y.jsx)(o.kC,{alignItems:"stretch",direction:"row",justifyContent:t?"start":"center",overflow:s?"hidden":"scrollX",children:e.map((o,s)=>(0,y.jsx)(S,{componentType:a,graphqlRef:o,isLastPin:!!i&&s===e.length-1,isMasonry:!1,lastPinUrl:i,onNavigateToPinCloseup:l,useVase:d||c&&!t,viewType:n},o.entityId))})}):(0,y.jsx)(o.xu,{"data-test-id":`collection-preview-module-masonry-${p}`,margin:"auto",width:"100%",children:(0,y.jsx)(r.default,{columnWidth:236,gutterWidth:16,items:e,minCols:2,renderItem:({data:t,itemIdx:o})=>(0,y.jsx)(S,{componentType:a,graphqlRef:t,isLastPin:!!i&&o===e.length-1,isMasonry:!0,lastPinUrl:i,onNavigateToPinCloseup:l,useVase:!1,viewType:n},t.entityId)})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/24793-54d2ded6c1c8b92b.mjs.map