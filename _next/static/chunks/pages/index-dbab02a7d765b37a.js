(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4368)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,s,i){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(2648).Z,o=s(7273).Z,r=i(s(7294)),n=s(1003),c=s(7795),a=s(4465),l=s(2692),d=s(8245),u=s(9246),h=s(227),m=s(3468);let v=new Set;function p(e,t,s,i){if(n.isLocalURL(t)){if(!i.bypassPrefetchedCheck){let o=void 0!==i.locale?i.locale:"locale"in e?e.locale:void 0,r=t+"%"+s+"%"+o;if(v.has(r))return;v.add(r)}Promise.resolve(e.prefetch(t,s,i)).catch(e=>{})}}function f(e){return"string"==typeof e?e:c.formatUrl(e)}let x=r.default.forwardRef(function(e,t){let s,i;let{href:c,as:v,children:x,prefetch:_,passHref:j,replace:g,shallow:b,scroll:y,locale:N,onClick:k,onMouseEnter:w,onTouchStart:P,legacyBehavior:T=!1}=e,D=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);s=x,T&&("string"==typeof s||"number"==typeof s)&&(s=r.default.createElement("a",null,s));let S=!1!==_,B=r.default.useContext(l.RouterContext),L=r.default.useContext(d.AppRouterContext),C=null!=B?B:L,R=!B,{href:M,as:E}=r.default.useMemo(()=>{if(!B){let e=f(c);return{href:e,as:v?f(v):e}}let[t,s]=n.resolveHref(B,c,!0);return{href:t,as:v?n.resolveHref(B,v):s||t}},[B,c,v]),O=r.default.useRef(M),H=r.default.useRef(E);T&&(i=r.default.Children.only(s));let I=T?i&&"object"==typeof i&&i.ref:t,[W,F,A]=u.useIntersection({rootMargin:"200px"}),U=r.default.useCallback(e=>{(H.current!==E||O.current!==M)&&(A(),H.current=E,O.current=M),W(e),I&&("function"==typeof I?I(e):"object"==typeof I&&(I.current=e))},[E,I,M,A,W]);r.default.useEffect(()=>{C&&F&&S&&p(C,M,E,{locale:N})},[E,M,F,N,S,null==B?void 0:B.locale,C]);let z={ref:U,onClick(e){T||"function"!=typeof k||k(e),T&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),C&&!e.defaultPrevented&&function(e,t,s,i,o,c,a,l,d,u){let{nodeName:h}=e.currentTarget,m="A"===h.toUpperCase();if(m&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!n.isLocalURL(s)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[o?"replace":"push"](s,i,{shallow:c,locale:l,scroll:a}):t[o?"replace":"push"](i||s,{forceOptimisticNavigation:!u})};d?r.default.startTransition(v):v()}(e,C,M,E,g,b,y,N,R,S)},onMouseEnter(e){T||"function"!=typeof w||w(e),T&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),C&&(S||!R)&&p(C,M,E,{locale:N,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){T||"function"!=typeof P||P(e),T&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),C&&(S||!R)&&p(C,M,E,{locale:N,priority:!0,bypassPrefetchedCheck:!0})}};if(!T||j||"a"===i.type&&!("href"in i.props)){let V=void 0!==N?N:null==B?void 0:B.locale,Z=(null==B?void 0:B.isLocaleDomain)&&h.getDomainLocale(E,V,null==B?void 0:B.locales,null==B?void 0:B.domainLocales);z.href=Z||m.addBasePath(a.addLocale(E,V,null==B?void 0:B.defaultLocale))}return T?r.default.cloneElement(i,z):r.default.createElement("a",Object.assign({},D,z),s)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:s,disabled:a}=e,l=a||!r,[d,u]=i.useState(!1),[h,m]=i.useState(null);i.useEffect(()=>{if(r){if(!l&&!d&&h&&h.tagName){let e=function(e,t,s){let{id:i,observer:o,elements:r}=function(e){let t;let s={root:e.root||null,margin:e.rootMargin||""},i=c.find(e=>e.root===s.root&&e.margin===s.margin);if(i&&(t=n.get(i)))return t;let o=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;t&&s&&t(s)})},e);return t={id:s,observer:r,elements:o},c.push(s),n.set(s,t),t}(s);return r.set(e,t),o.observe(e),function(){if(r.delete(e),o.unobserve(e),0===r.size){o.disconnect(),n.delete(i);let t=c.findIndex(e=>e.root===i.root&&e.margin===i.margin);t>-1&&c.splice(t,1)}}}(h,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:s});return e}}else if(!d){let i=o.requestIdleCallback(()=>u(!0));return()=>o.cancelIdleCallback(i)}},[h,l,s,t,d]);let v=i.useCallback(()=>{u(!1)},[]);return[m,d,v]};var i=s(7294),o=s(4686);let r="function"==typeof IntersectionObserver,n=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4368:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return L}});var i=s(5893),o=s(9008),r=s.n(o),n=s(1502),c=s.n(n);let a=[{label:"Products"},{label:"Services & Solutions"},{label:"Learn"},{label:"Blog"},{label:"Company"}];var l=s(8394),d=s.n(l),u=s(1664),h=s.n(u);let m=()=>{let e=()=>{};return(0,i.jsx)("div",{className:d().navbarContainer,children:(0,i.jsxs)("div",{className:d().navbarDiv,children:[(0,i.jsx)("div",{style:{marginTop:4,marginRight:180},children:(0,i.jsx)(h(),{href:"/",children:(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"logos/navbar-logo.svg",alt:"brushfam logo"})})})}),(0,i.jsxs)("div",{className:d().navbarNavigation,children:[(0,i.jsx)("ul",{className:d().ul,children:a&&a.map((e,t)=>(0,i.jsx)("li",{children:(0,i.jsx)(h(),{href:"/",children:e.label})},t.toString()))}),(0,i.jsx)("button",{type:"button",onClick:e,className:d().button,children:"Get in touch"})]})]})})};function v(){let e=()=>{};return(0,i.jsx)("section",{className:c().section,children:(0,i.jsxs)("div",{className:c().mainDiv,children:[(0,i.jsx)(m,{}),(0,i.jsxs)("div",{style:{marginBottom:24},children:[(0,i.jsx)("h1",{className:c().mainText,children:"Move faster"}),(0,i.jsx)("h1",{className:c().mainText,children:"using blockchain."}),(0,i.jsx)("h1",{className:c().mainText,children:"Brushfam is your gateway"})]}),(0,i.jsx)("p",{children:"Brushfam onboards businesses into Polkadot by creating the necessary development infrastructure, auditing, and giving advisory to the development teams. With Openbrush, Sol2ink and our suite of web3 products and services we make it easy to resolve real world problems using Polkadot tech."}),(0,i.jsx)("button",{type:"button",onClick:e,className:c().button,children:"Explore our Products"})]})})}var p=s(5755),f=s.n(p);let x=[{alt:"astar",src:"logos/astar-logo.svg",link:"https://astar.network/"},{alt:"artzero",src:"logos/artzero-logo.svg",link:"https://artzero.io/"},{alt:"web3foundation",src:"logos/w3f-logo.svg",link:"https://web3.foundation/"}];function _(){return(0,i.jsxs)("section",{className:f().section,children:[(0,i.jsx)("div",{className:f().centeredDiv,children:(0,i.jsx)("p",{className:f().titleText,children:"Top web3 projects trust Brushfam"})}),(0,i.jsx)("div",{className:f().centeredDiv,children:(0,i.jsx)("ul",{className:f().ul,children:x&&x.map((e,t)=>(0,i.jsx)("li",{children:(0,i.jsx)(h(),{href:e.link,children:(0,i.jsx)("img",{alt:e.alt,src:e.src})})},t.toString()))})}),(0,i.jsx)("div",{className:f().centeredDiv,children:(0,i.jsxs)("div",{className:f().portfolio,children:[(0,i.jsx)("img",{alt:"brushfam mini logo",src:"logos/brushfam-mini-logo.svg",className:f().brushfamMiniLogo}),(0,i.jsx)("p",{style:{marginRight:20,marginLeft:20},children:"is a portfolio company of"}),(0,i.jsx)(h(),{href:"https://727.ventures/",children:(0,i.jsx)("p",{style:{color:"white",fontSize:14,fontWeight:600},children:"727 Ventures"})})]})})]})}var j=s(9954),g=s.n(j);function b(){return(0,i.jsxs)("section",{className:g().section,children:[(0,i.jsx)("div",{className:g().centeredDiv,children:(0,i.jsx)("p",{className:g().titleText,children:"Infrastructure"})}),(0,i.jsx)("div",{className:g().centeredDiv,children:(0,i.jsx)("h1",{className:g().productsTitle,children:"Products"})}),(0,i.jsx)("div",{className:g().centeredDiv,children:(0,i.jsx)("p",{className:g().productsTitleDescription,children:"We are maintainers and experts in the most trusted and everyday-used by developers & businesses open-sourced infrastructure tools in the Polkadot ecosystem"})}),(0,i.jsxs)("div",{className:g().centeredRowDiv,children:[(0,i.jsxs)("div",{className:g().codeDiv,children:[(0,i.jsx)("img",{src:"/bar.svg"}),(0,i.jsx)("img",{src:"/code1.svg",className:g().codeImg}),(0,i.jsx)("img",{src:"/code2.svg",className:g().codeImg})]}),(0,i.jsxs)("div",{className:g().productsDiv,children:[(0,i.jsxs)("div",{className:g().product,children:[(0,i.jsxs)("div",{className:g().productLinkPart,children:[(0,i.jsx)("img",{src:"/logos/openbrush-logo.svg"}),(0,i.jsxs)("div",{className:g().productButtonPart,children:[(0,i.jsx)(h(),{href:"https://openbrush.io/",style:{marginRight:12},children:(0,i.jsx)("div",{className:g().siteLink,children:"Site"})}),(0,i.jsx)(h(),{href:"https://docs.openbrush.io/",children:(0,i.jsx)("div",{className:g().docsLink,children:"Docs"})})]})]}),(0,i.jsx)("p",{style:{marginTop:16},children:"OpenBrush is a library for smart contract development on ink! It provides standard contracts (based on PSP), as well as useful contracts and macros to help you build ink! smart contracts."})]}),(0,i.jsxs)("div",{className:g().product,children:[(0,i.jsxs)("div",{className:g().productLinkPart,children:[(0,i.jsx)("img",{src:"/logos/sol2Ink-logo.svg"}),(0,i.jsxs)("div",{className:g().productButtonPart,children:[(0,i.jsx)(h(),{href:"https://github.com/727-Ventures/sol2ink",style:{marginRight:12},children:(0,i.jsx)("div",{className:g().siteLink,children:"Site"})}),(0,i.jsx)(h(),{href:"https://github.com/727-Ventures/sol2ink",children:(0,i.jsx)("div",{className:g().docsLink,children:"Docs"})})]})]}),(0,i.jsx)("p",{style:{marginTop:16},children:"Is a tool for easy migration from Solidity to Ink! and Rust helps projects and teams migrate their smart contracts from popular Solidity to Polkadot`s ink!."})]}),(0,i.jsxs)("div",{className:g().product,children:[(0,i.jsxs)("div",{className:g().productLinkPart,children:[(0,i.jsx)("img",{src:"/logos/typechain-logo.svg"}),(0,i.jsxs)("div",{className:g().productButtonPart,children:[(0,i.jsx)(h(),{href:"https://github.com/727-Ventures/typechain-polkadot",style:{marginRight:12},children:(0,i.jsx)("div",{className:g().siteLink,children:"Site"})}),(0,i.jsx)(h(),{href:"https://github.com/727-Ventures/typechain-polkadot",children:(0,i.jsx)("div",{className:g().docsLink,children:"Docs"})})]})]}),(0,i.jsx)("p",{style:{marginTop:16},children:"Was created to improve developers’ experience with deployment & integration testing of ink! smart contracts."})]})]})]})]})}var y=s(9519),N=s.n(y);function k(){let e=()=>{};return(0,i.jsx)("section",{className:N().section,children:(0,i.jsxs)("div",{className:N().mainDiv,children:[(0,i.jsx)("p",{className:N().textTitle,children:"Services & Solutions"}),(0,i.jsx)("h1",{className:N().textHeader,children:"Our expertise will empower your business"}),(0,i.jsxs)("div",{style:{marginBottom:40},children:[(0,i.jsx)("p",{className:N().serviceTitle,children:"For those onboarding from Ethereum:"}),(0,i.jsxs)("div",{className:N().block1,children:[(0,i.jsxs)("div",{className:N().serviceHeader,children:[(0,i.jsx)("img",{src:"icons/search-icon.svg"}),(0,i.jsx)("p",{children:"Onboard in Polkadot"})]}),(0,i.jsx)("p",{children:"Looking for opportunities to grow your business ? Web3 might be just the one you are looking for, either to expand to new market, increase revenue by creating a brand-new economy inside or just resolve the business problems that couldn’t be resolved before."}),(0,i.jsx)("p",{style:{marginBottom:24},children:"Brushfam is ready to identify your needs, brainstorm a solution, do R&D, create a roadmap and build the product. Gradually we will teach your internal team and transform the process ownership to you. Or we can stay as your support hand on the advisory subscription."}),(0,i.jsx)("button",{type:"button",onClick:e,className:N().button,children:"Read more"})]})]}),(0,i.jsx)("p",{className:N().serviceTitle,children:"For Polkadot native companies:"}),(0,i.jsxs)("div",{className:N().twoServices,children:[(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:N().block2,children:[(0,i.jsxs)("div",{className:N().serviceHeader,children:[(0,i.jsx)("img",{src:"icons/comment-icon.svg"}),(0,i.jsx)("p",{children:"Ink! Advisory subscription"})]}),(0,i.jsx)("p",{children:"Get access to the team that created Openbrush, sol2ink, typechain and leads WASM ink! ecosystem."}),(0,i.jsx)("p",{style:{marginBottom:24},children:"Move faster and with optimal expenses. With our top tech specialists providing constant mentorship, reviewing PRs, and helping hire new team members you will avoid architecture mistakes, time lost and sometimes fatal vulnerabilities."}),(0,i.jsx)("button",{type:"button",onClick:e,className:N().button,children:"Read more"})]})}),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:N().block3,children:[(0,i.jsxs)("div",{className:N().serviceHeader,children:[(0,i.jsx)("img",{src:"icons/search-icon.svg"}),(0,i.jsx)("p",{children:"Security Audits"})]}),(0,i.jsx)("p",{style:{marginBottom:24},children:"An ink! smart contract audit performed by our specialists provides the independent estimation of the code generated to implement the smart contract’s terms."}),(0,i.jsx)("button",{type:"button",onClick:e,className:N().button,children:"Read more"})]})})]}),(0,i.jsxs)("div",{className:N().twoServices,children:[(0,i.jsxs)("div",{style:{marginBottom:40},children:[(0,i.jsx)("p",{className:N().serviceTitle,children:"For VC/angel investors:"}),(0,i.jsxs)("div",{className:N().block4,children:[(0,i.jsxs)("div",{className:N().serviceHeader,children:[(0,i.jsx)("img",{src:"icons/comment-icon.svg"}),(0,i.jsx)("p",{children:"Investment tech diligence"})]}),(0,i.jsx)("p",{children:"Not every great idea will be converted into a working company. With Brushfam we want to make sure the ideas you are investing your money in, are possible to be implemented and the startup’s team knows how to do it."}),(0,i.jsx)("p",{style:{marginBottom:24},children:"We will be analyze startup’s documents, code, talk to engineers responsible gathering all needed information. All of this combined with the wide-range experience our team has will give us enough data to come up with a conclusion on the technical plausibility of the idea and our impression of the team’s ability to have it implemented."}),(0,i.jsx)("button",{type:"button",onClick:e,className:N().button,children:"Read more"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:N().serviceTitle,children:"For those onboarding from Ethereum:"}),(0,i.jsxs)("div",{className:N().block5,children:[(0,i.jsxs)("div",{className:N().serviceHeader,children:[(0,i.jsx)("img",{src:"icons/comment-icon.svg"}),(0,i.jsx)("p",{children:"Onboard in Polkadot"})]}),(0,i.jsx)("p",{children:"Looking to grow your total addressable market or upgrade your tech?"}),(0,i.jsx)("p",{style:{marginBottom:24},children:"With Sol2ink, being the automatic transpiler tool, the process of code transforming from solidity to ink! is just one click away."}),(0,i.jsx)("button",{type:"button",onClick:e,className:N().button,children:"Read more"})]})]})]})]})})}var w=s(3275),P=s.n(w);function T(){return(0,i.jsxs)("div",{className:P().letsBuildDiv,children:[(0,i.jsx)("p",{className:P().letsBuildText,children:"Let’s build a"}),(0,i.jsx)("p",{className:P().letsBuildText,children:"better version of"}),(0,i.jsx)("p",{className:P().letsBuildText,children:"the world together"})]})}var D=s(3794),S=s.n(D);let B=()=>(0,i.jsxs)("section",{className:S().footerSection,children:[(0,i.jsxs)("div",{className:S().footerDiv,children:[(0,i.jsxs)("div",{className:S().footerSocial,children:[(0,i.jsx)("img",{className:S().brushfamLogo,src:"/logos/brushfam-logo.svg"}),(0,i.jsxs)("div",{className:S().socialDiv,children:[(0,i.jsx)("a",{href:"https://www.linkedin.com/company/727-ventures-vs/",children:(0,i.jsx)("img",{src:"icons/in.svg"})}),(0,i.jsx)("a",{href:"https://instagram.com/727_ventures?igshid=ZmVmZTY5ZGE=",children:(0,i.jsx)("img",{src:"icons/inst.svg"})}),(0,i.jsx)("a",{href:"https://twitter.com/Brushfam_io",children:(0,i.jsx)("img",{src:"icons/twitter.svg"})}),(0,i.jsx)("a",{href:"https://t.me/openbrush",children:(0,i.jsx)("img",{src:"icons/telegram.svg"})}),(0,i.jsx)("a",{href:"https://discord.gg/EARg6RCThP",children:(0,i.jsx)("img",{src:"icons/discord.svg"})}),(0,i.jsx)("a",{href:"https://medium.com/727-ventures",children:(0,i.jsx)("img",{src:"icons/medium.svg"})}),(0,i.jsx)("a",{href:"mailto:contact@727.ventures",children:(0,i.jsx)("img",{src:"icons/mail.svg"})})]})]}),(0,i.jsxs)("div",{className:S().footerNavigation,children:[(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Products"})}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Services & Solutions"})}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Learn"})}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Blog"})}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Company"})}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Contact us"})})]})]}),(0,i.jsx)("div",{className:S().footerTextDiv,children:(0,i.jsx)("p",{className:S().footerText,children:"Brushfam \xa92022. All rights reserved."})})]});function L(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r(),{children:(0,i.jsx)("title",{children:"Brushfam"})}),(0,i.jsx)(v,{}),(0,i.jsx)(_,{}),(0,i.jsx)(b,{}),(0,i.jsx)(k,{}),(0,i.jsx)(T,{}),(0,i.jsx)(B,{})]})}},3794:function(e){e.exports={footerSection:"Footer_footerSection__m5WLg",footerDiv:"Footer_footerDiv__t_Dv7",socialDiv:"Footer_socialDiv__UE6fa",footerSocial:"Footer_footerSocial__Cu_l5",footerNavigation:"Footer_footerNavigation__9iPDx",footerTextDiv:"Footer_footerTextDiv__sDSl3",brushfamLogo:"Footer_brushfamLogo__HVFf8"}},1502:function(e){e.exports={section:"Home_section__taYTg",mainDiv:"Home_mainDiv__3h_xB",button:"Home_button__Zs7A2",mainText:"Home_mainText__XzvCX"}},3275:function(e){e.exports={letsBuildDiv:"LetsBuild_letsBuildDiv__UHHuH",letsBuildText:"LetsBuild_letsBuildText__MNct1"}},8394:function(e){e.exports={navbarContainer:"Navbar_navbarContainer__lZ5Uk",navbarDiv:"Navbar_navbarDiv__DL2TY",navbarNavigation:"Navbar_navbarNavigation__EeG5G",ul:"Navbar_ul__npKaE",button:"Navbar_button__yvu3z"}},9954:function(e){e.exports={section:"Products_section__pxb6a",centeredDiv:"Products_centeredDiv__DmQZo",titleText:"Products_titleText__SuALR",productsTitle:"Products_productsTitle__pMdTi",productsTitleDescription:"Products_productsTitleDescription__1uEed",centeredRowDiv:"Products_centeredRowDiv__UlJ93",codeDiv:"Products_codeDiv__gw1U0",productsDiv:"Products_productsDiv__ivA0Q",codeImg:"Products_codeImg__t7e8m",product:"Products_product__UVg6O",productLinkPart:"Products_productLinkPart__Pyehd",productButtonPart:"Products_productButtonPart__iZwc2",siteLink:"Products_siteLink__f_KbB",docsLink:"Products_docsLink__ctfQr"}},9519:function(e){e.exports={section:"Services_section__Teu_Q",mainDiv:"Services_mainDiv__bQ0Te",textTitle:"Services_textTitle__2T6T4",textHeader:"Services_textHeader__XQev9",serviceTitle:"Services_serviceTitle__o2BUM",service:"Services_service__k_XFm",block1:"Services_block1__qP8lV",block2:"Services_block2__H0Jib",block3:"Services_block3___FIHs",block4:"Services_block4__oRz32",block5:"Services_block5__f5ZLe",serviceHeader:"Services_serviceHeader__YlDxe",button:"Services_button__Rqg_j",twoServices:"Services_twoServices__QOQdU",serviceBlock:"Services_serviceBlock__MSh8K"}},5755:function(e){e.exports={section:"Web3Projects_section__sB_cQ",centeredDiv:"Web3Projects_centeredDiv__oALWm",titleText:"Web3Projects_titleText__S1Mq8",ul:"Web3Projects_ul___Jg6k",portfolio:"Web3Projects_portfolio__5RzgC","brushfam-mini-logo":"Web3Projects_brushfam-mini-logo__aBrCg"}},9008:function(e,t,s){e.exports=s(3121)},1664:function(e,t,s){e.exports=s(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);