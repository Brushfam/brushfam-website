(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[497],{3522:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/security-audits",function(){return s(2266)}])},4553:function(e,t,s){"use strict";s.d(t,{Z:function(){return h}});var i=s(5893),o=s(9890),r=s.n(o),c=s(7294),a=s(2097),n=s.n(a),l=s(1664),d=s.n(l);let p=()=>(0,i.jsxs)("div",{className:n().socialWrapper,children:[(0,i.jsxs)(d(),{href:"https://twitter.com/Brushfam_io",className:n().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/twitter-contact.svg"}),(0,i.jsx)("p",{children:"Twitter"})]}),(0,i.jsxs)(d(),{href:"https://discord.gg/9FRETSPmp9",className:n().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/discord-contact.svg"}),(0,i.jsx)("p",{children:"Discord"})]}),(0,i.jsxs)(d(),{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",className:n().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/element-contact.svg"}),(0,i.jsx)("p",{children:"Element"})]}),(0,i.jsxs)(d(),{href:"https://medium.com/brushfam",className:n().socialButton,style:{marginRight:0},children:[(0,i.jsx)("img",{src:"/icons/contact-form/medium-contact.svg"}),(0,i.jsx)("p",{children:"Medium"})]})]}),u=()=>(0,i.jsxs)("div",{className:n().socialWrapperMobile,children:[(0,i.jsx)("div",{className:n().socialBlock,style:{border:"none",paddingTop:0},children:(0,i.jsxs)(d(),{href:"https://twitter.com/Brushfam_io",className:n().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/twitter-contact.svg",style:{width:20,height:17,marginLeft:10}}),(0,i.jsx)("p",{children:"Twitter"})]})}),(0,i.jsx)("div",{className:n().socialBlock,children:(0,i.jsxs)(d(),{href:"https://discord.gg/9FRETSPmp9",className:n().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/discord-contact.svg",style:{width:24,height:17,marginLeft:6}}),(0,i.jsx)("p",{children:"Discord"})]})}),(0,i.jsx)("div",{className:n().socialBlock,children:(0,i.jsxs)(d(),{href:"https://medium.com/727-ventures",className:n().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/medium-contact.svg",style:{width:30,height:17}}),(0,i.jsx)("p",{children:"Medium"})]})}),(0,i.jsx)("div",{className:n().socialBlock,style:{paddingBottom:0},children:(0,i.jsxs)(d(),{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",className:n().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/element-contact.svg",style:{width:17,height:17,marginLeft:13}}),(0,i.jsx)("p",{children:"Element"})]})})]}),m=e=>/^[A-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z0-9]+$/i.test(e);function h(){let[e,t]=(0,c.useState)(""),[s,o]=(0,c.useState)(""),[a,n]=(0,c.useState)(!1),[l,d]=(0,c.useState)(!1),[h,x]=(0,c.useState)(!1),_=()=>{let c=async t=>{if(t.preventDefault(),d(!0),!e||!s||!m(e)){document.getElementById("get-in-touch").scrollIntoView();return}x(!0),console.log("Sending"),await l({email:e,message:s})},l=async e=>{fetch("/api/contact",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>{console.log("Response received"),200===e.status&&(console.log("Response succeeded!"),n(!0),t(""),o(""))})},p=()=>(0,i.jsx)("button",{type:"submit",onClick:e=>{c(e)},className:r().button,children:"Apply"});return h?a?(0,i.jsx)("p",{className:r().submittedText,children:"Submitted!"}):(0,i.jsx)("p",{className:r().submittedText,children:"Submitting..."}):(0,i.jsx)(p,{})};return(0,i.jsx)("section",{className:r().section,id:"get-in-touch",children:(0,i.jsxs)("div",{className:r().contactDiv,children:[(0,i.jsxs)("div",{className:r().topDiv,children:[(0,i.jsx)("p",{className:r().headerText,children:"Get in touch"}),(0,i.jsx)("p",{className:r().descriptionText,children:"Work with tech experts to win the battle"}),(0,i.jsx)(p,{})]}),(0,i.jsxs)("form",{method:"post",id:"form",className:r().formDiv,children:[(0,i.jsx)("label",{htmlFor:"email",className:r().label,style:!l||a||e&&m(e)?{}:{color:"#CD0C0C"},children:"Email"}),(0,i.jsx)("input",{type:"text",name:"email",placeholder:"johnsmith@gmail.com",onChange:e=>{t(e.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!l||a||e||m(e)?r().input:r().inputError}),(0,i.jsx)("label",{htmlFor:"message",className:r().label,style:!l||a||s?{}:{color:"#CD0C0C"},children:"Your Message"}),(0,i.jsx)("input",{type:"text",name:"message",placeholder:"What do you wanna say to us",onChange:e=>{o(e.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!l||a||s?r().input:r().inputError}),(0,i.jsx)("div",{className:r().buttonWrapper,children:(0,i.jsx)(_,{})})]}),(0,i.jsx)(u,{})]})})}},2266:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return D}});var i=s(5893),o=s(2103),r=s(4553),c=s(2604),a=s(9234),n=s.n(a);function l(){let e=()=>{document.getElementById("get-in-touch").scrollIntoView()};return(0,i.jsxs)("section",{className:n().section,children:[(0,i.jsx)("p",{className:n().titleText,children:"Services & Solutions"}),(0,i.jsx)("h1",{className:n().headerText,children:"Security audits"}),(0,i.jsx)("p",{className:n().descriptionText,children:"An ink! smart contract audit performed by our specialists provides the independent estimation of the code generated to implement the smart contract’s terms. "}),(0,i.jsx)("button",{type:"button",className:n().button,onClick:e,children:"Connect with our experts"})]})}var d=s(6953),p=s.n(d);function u(){return(0,i.jsxs)("section",{className:p().section,children:[(0,i.jsx)("p",{className:p().titleText,children:"Why does your project need an audit?"}),(0,i.jsx)("div",{className:p().auditBlock,children:(0,i.jsx)("p",{children:"Because it’s an essential step for every product before launch to be sure the users, their data, and assets are fully protected."})})]})}var m=s(237),h=s.n(m);function x(){return(0,i.jsx)("section",{className:h().section,children:(0,i.jsxs)("div",{className:h().servicesWrapper,children:[(0,i.jsx)("p",{className:h().headerText,children:"We review, you benefit"}),(0,i.jsxs)("div",{className:h().row,children:[(0,i.jsxs)("div",{className:h().block1,children:[(0,i.jsx)("p",{className:h().blockTitle,children:"Get a review from the experts"}),(0,i.jsx)("p",{children:"Experienced team who participated in ink! development and created breakthrough infrastructure products will scrupulously review your code and find all the possible problems."})]}),(0,i.jsxs)("div",{className:h().block2,children:[(0,i.jsx)("p",{className:h().blockTitle,children:"Gain extra trust"}),(0,i.jsx)("p",{children:"Audited projects are more trusted by users, investors, and potential partners."})]}),(0,i.jsxs)("div",{className:h().block3,children:[(0,i.jsx)("p",{className:h().blockTitle,children:"Implementation support"}),(0,i.jsx)("p",{children:"Our team will accompany you during the implementation of all recommendations, so you will have strong support after the audit process."})]})]}),(0,i.jsxs)("div",{className:h().row,children:[(0,i.jsxs)("div",{className:h().block4,children:[(0,i.jsx)("p",{className:h().blockTitle,children:"Avoid unexpected costs"}),(0,i.jsx)("p",{children:"Smart contract audit during the development phase will protect you from huge money and reputation losses after the launch. Solving code problems in the early stage is cheaper and faster than after the launch. A flawless reputation is vital."})]}),(0,i.jsxs)("div",{className:h().block5,children:[(0,i.jsx)("p",{className:h().blockTitle,children:"Detailed report"}),(0,i.jsx)("p",{children:"After the audit process, you will receive a detailed report covering all the issues, a detailed summary, solving and implementing guidance"})]})]})]})})}var _=s(198),j=s.n(_);function f(){return(0,i.jsxs)("section",{className:j().section,children:[(0,i.jsx)("p",{className:j().headerText,children:"The process of ink! smart contracts audits"}),(0,i.jsx)("img",{src:"/audit-process.svg",className:j().auditProcessImg}),(0,i.jsx)("img",{src:"/audit-process-mobile.svg",className:j().auditProcessMobileImg})]})}var v=s(473),g=s(5983),b=s.n(g),N=s(9008),T=s.n(N),k=s(7294),y=s(542),w=s(1634),B=s.n(w);let S=[{logo:"/reports/artzero-report.svg",link:"https://artzero.io/",header:"ArtZero",description:"Number 1 Ink!-based NFT Marketplace on Aleph Zero and Astar Blockchains.",file:"/reports/Brushfam-audit-for-ArtZero.pdf"},{logo:"/reports/panorama-swap-report.svg",link:"https://panoramaswap.com/",header:"Panorama Swap",description:"Decentralized exchange built on Aleph Zero"}];var C=s(1664),R=s.n(C);function A(){return(0,i.jsxs)("div",{className:B().section,children:[(0,i.jsx)("p",{className:B().titleText,children:"Audit reports"}),(0,i.jsx)("p",{className:B().descriptionText,children:"Reports are published by the customers approval"}),(0,i.jsx)("div",{className:B().reportBlock,children:S&&S.map((e,t)=>(0,i.jsxs)("div",{className:B().report,children:[(0,i.jsx)("div",{className:B().reportTop,children:(0,i.jsx)(R(),{href:e.link,children:(0,i.jsx)("img",{src:e.logo,alt:e.header})})}),(0,i.jsxs)("div",{className:B().reportBottom,children:[(0,i.jsx)("p",{style:{fontWeight:600,fontSize:20,marginBottom:8},children:e.header}),(0,i.jsx)("p",{style:{fontWeight:400,fontSize:12},children:e.description}),e.file?(0,i.jsx)("a",{href:e.file,download:!0,className:B().reportButton,children:"Get report"}):(0,i.jsx)("div",{className:B().disabledReportButton,children:"In progress"})]})]},t.toString()))})]})}function D(){return(0,k.useEffect)(()=>{y.ZP.pageview(window.location.pathname+window.location.search)},[]),(0,i.jsxs)("div",{className:b().securityProperty,children:[(0,i.jsx)(T(),{children:(0,i.jsx)("title",{children:"Security audits"})}),(0,i.jsx)(o.Z,{}),(0,i.jsx)(v.N,{}),(0,i.jsx)(l,{}),(0,i.jsx)(u,{}),(0,i.jsx)(x,{}),(0,i.jsx)(f,{}),(0,i.jsx)(A,{}),(0,i.jsx)(r.Z,{}),(0,i.jsx)(c.Z,{})]})}},9890:function(e){e.exports={section:"Contact_section__GJyie",contactDiv:"Contact_contactDiv__6fpu9",topDiv:"Contact_topDiv__uV0cz",headerText:"Contact_headerText__KR_zY",descriptionText:"Contact_descriptionText__mI6Vx",formDiv:"Contact_formDiv__6Ubey",formDivMobile:"Contact_formDivMobile__7H7a7",label:"Contact_label__nzSGY",inputError:"Contact_inputError__NBn_B",input:"Contact_input__4yA7f",button:"Contact_button__FqCCm",buttonWrapper:"Contact_buttonWrapper__sKqTF",submittedText:"Contact_submittedText__OUPse"}},2097:function(e){e.exports={socialWrapper:"SocialMedia_socialWrapper__cmQlw",socialWrapperMobile:"SocialMedia_socialWrapperMobile__ARC6m",socialButton:"SocialMedia_socialButton__VM8Ht",socialBlock:"SocialMedia_socialBlock__F4r6s"}},6953:function(e){e.exports={section:"Audit_section__C3tfB",titleText:"Audit_titleText__UJJ5k",auditBlock:"Audit_auditBlock__dgXZ6"}},1634:function(e){e.exports={section:"OurReports_section__jft_A",titleText:"OurReports_titleText__r6gR4",descriptionText:"OurReports_descriptionText__5pCyW",reportBlock:"OurReports_reportBlock__qi_Il",report:"OurReports_report__Ppa1b",reportTop:"OurReports_reportTop__n3acy",reportBottom:"OurReports_reportBottom__QiUnu",reportButton:"OurReports_reportButton__DwQ4V",disabledReportButton:"OurReports_disabledReportButton__DonRm"}},198:function(e){e.exports={section:"Process_section__4axTR",headerText:"Process_headerText__IQUCK",auditProcessImg:"Process_auditProcessImg__4FLkW",auditProcessMobileImg:"Process_auditProcessMobileImg__D9geb"}},237:function(e){e.exports={section:"Services_section__e1hSY",servicesWrapper:"Services_servicesWrapper__4x24h",titleText:"Services_titleText__K4YoQ",headerText:"Services_headerText__YoW4v",row:"Services_row__jQDm5",block1:"Services_block1__N4RGV",block2:"Services_block2__Z3B_8",block3:"Services_block3__N9KvC",block4:"Services_block4__cejdu",block5:"Services_block5__qx_Em",blockTitle:"Services_blockTitle___TirT"}},9234:function(e){e.exports={section:"TitleSection_section__qnA6r",titleText:"TitleSection_titleText__kKCWE",headerText:"TitleSection_headerText__r0nA0",descriptionText:"TitleSection_descriptionText__TNAK9",button:"TitleSection_button__MbpKu"}}},function(e){e.O(0,[996,542,929,774,888,179],function(){return e(e.s=3522)}),_N_E=e.O()}]);