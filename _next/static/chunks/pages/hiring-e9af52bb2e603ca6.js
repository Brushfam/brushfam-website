(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{3139:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hiring",function(){return s(1197)}])},4553:function(t,e,s){"use strict";s.d(e,{Z:function(){return p}});var i=s(5893),c=s(9890),n=s.n(c),o=s(7294),a=s(2097),r=s.n(a),l=s(1664),m=s.n(l);let d=()=>(0,i.jsxs)("div",{className:r().socialWrapper,children:[(0,i.jsxs)(m(),{href:"https://twitter.com/Brushfam_io",className:r().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/twitter-contact.svg"}),(0,i.jsx)("p",{children:"Twitter"})]}),(0,i.jsxs)(m(),{href:"https://discord.gg/9FRETSPmp9",className:r().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/discord-contact.svg"}),(0,i.jsx)("p",{children:"Discord"})]}),(0,i.jsxs)(m(),{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",className:r().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/element-contact.svg"}),(0,i.jsx)("p",{children:"Element"})]}),(0,i.jsxs)(m(),{href:"https://medium.com/brushfam",className:r().socialButton,style:{marginRight:0},children:[(0,i.jsx)("img",{src:"/icons/contact-form/medium-contact.svg"}),(0,i.jsx)("p",{children:"Medium"})]})]}),h=()=>(0,i.jsxs)("div",{className:r().socialWrapperMobile,children:[(0,i.jsx)("div",{className:r().socialBlock,style:{border:"none",paddingTop:0},children:(0,i.jsxs)(m(),{href:"https://twitter.com/Brushfam_io",className:r().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/twitter-contact.svg",style:{width:20,height:17,marginLeft:10}}),(0,i.jsx)("p",{children:"Twitter"})]})}),(0,i.jsx)("div",{className:r().socialBlock,children:(0,i.jsxs)(m(),{href:"https://discord.gg/9FRETSPmp9",className:r().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/discord-contact.svg",style:{width:24,height:17,marginLeft:6}}),(0,i.jsx)("p",{children:"Discord"})]})}),(0,i.jsx)("div",{className:r().socialBlock,children:(0,i.jsxs)(m(),{href:"https://medium.com/727-ventures",className:r().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/medium-contact.svg",style:{width:30,height:17}}),(0,i.jsx)("p",{children:"Medium"})]})}),(0,i.jsx)("div",{className:r().socialBlock,style:{paddingBottom:0},children:(0,i.jsxs)(m(),{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",className:r().socialButton,children:[(0,i.jsx)("img",{src:"/icons/contact-form/element-contact.svg",style:{width:17,height:17,marginLeft:13}}),(0,i.jsx)("p",{children:"Element"})]})})]}),u=t=>/^[A-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z0-9]+$/i.test(t);function p(){let[t,e]=(0,o.useState)(""),[s,c]=(0,o.useState)(""),[a,r]=(0,o.useState)(!1),[l,m]=(0,o.useState)(!1),[p,x]=(0,o.useState)(!1),_=()=>{let o=async e=>{if(e.preventDefault(),m(!0),!t||!s||!u(t)){document.getElementById("get-in-touch").scrollIntoView();return}x(!0),console.log("Sending"),await l({email:t,message:s})},l=async t=>{fetch("/api/contact",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>{console.log("Response received"),200===t.status&&(console.log("Response succeeded!"),r(!0),e(""),c(""))})},d=()=>(0,i.jsx)("button",{type:"submit",onClick:t=>{o(t)},className:n().button,children:"Apply"});return p?a?(0,i.jsx)("p",{className:n().submittedText,children:"Submitted!"}):(0,i.jsx)("p",{className:n().submittedText,children:"Submitting..."}):(0,i.jsx)(d,{})};return(0,i.jsx)("section",{className:n().section,id:"get-in-touch",children:(0,i.jsxs)("div",{className:n().contactDiv,children:[(0,i.jsxs)("div",{className:n().topDiv,children:[(0,i.jsx)("p",{className:n().headerText,children:"Get in touch"}),(0,i.jsx)("p",{className:n().descriptionText,children:"Work with tech experts to win the battle"}),(0,i.jsx)(d,{})]}),(0,i.jsxs)("form",{method:"post",id:"form",className:n().formDiv,children:[(0,i.jsx)("label",{htmlFor:"email",className:n().label,style:!l||a||t&&u(t)?{}:{color:"#CD0C0C"},children:"Email"}),(0,i.jsx)("input",{type:"text",name:"email",placeholder:"johnsmith@gmail.com",onChange:t=>{e(t.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!l||a||t||u(t)?n().input:n().inputError}),(0,i.jsx)("label",{htmlFor:"message",className:n().label,style:!l||a||s?{}:{color:"#CD0C0C"},children:"Your Message"}),(0,i.jsx)("input",{type:"text",name:"message",placeholder:"What do you wanna say to us",onChange:t=>{c(t.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!l||a||s?n().input:n().inputError}),(0,i.jsx)("div",{className:n().buttonWrapper,children:(0,i.jsx)(_,{})})]}),(0,i.jsx)(h,{})]})})}},1197:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return x}});var i=s(5893),c=s(2103),n=s(4553),o=s(2604),a=s(230),r=s.n(a);function l(){return(0,i.jsxs)("section",{className:r().section,children:[(0,i.jsx)("p",{className:r().titleText,children:"Vacancies"}),(0,i.jsx)("p",{className:r().headerText,children:"We’re hiring"}),(0,i.jsxs)("div",{className:r().hiringBlock,children:[(0,i.jsx)("p",{className:r().noVacanciesTitle,children:"Currently, No Open Vacancies"}),(0,i.jsx)("p",{children:"We appreciate your interest in joining our team. At this time, we do not have any open vacancies. Please check back later for future opportunities. Thank you for considering us as your potential employer."})]})]})}s(1664);var m=s(473),d=s(5983),h=s.n(d),u=s(9008),p=s.n(u);function x(){return(0,i.jsxs)("div",{className:h().aboutUsProperty,children:[(0,i.jsx)(p(),{children:(0,i.jsx)("title",{children:"Hiring"})}),(0,i.jsx)(c.Z,{}),(0,i.jsx)(m.N,{}),(0,i.jsx)(l,{}),(0,i.jsx)(n.Z,{}),(0,i.jsx)(o.Z,{})]})}},9890:function(t){t.exports={section:"Contact_section__GJyie",contactDiv:"Contact_contactDiv__6fpu9",topDiv:"Contact_topDiv__uV0cz",headerText:"Contact_headerText__KR_zY",descriptionText:"Contact_descriptionText__mI6Vx",formDiv:"Contact_formDiv__6Ubey",formDivMobile:"Contact_formDivMobile__7H7a7",label:"Contact_label__nzSGY",inputError:"Contact_inputError__NBn_B",input:"Contact_input__4yA7f",button:"Contact_button__FqCCm",buttonWrapper:"Contact_buttonWrapper__sKqTF",submittedText:"Contact_submittedText__OUPse"}},2097:function(t){t.exports={socialWrapper:"SocialMedia_socialWrapper__cmQlw",socialWrapperMobile:"SocialMedia_socialWrapperMobile__ARC6m",socialButton:"SocialMedia_socialButton__VM8Ht",socialBlock:"SocialMedia_socialBlock__F4r6s"}},230:function(t){t.exports={section:"Hiring_section__46veF",titleText:"Hiring_titleText__yrlWR",headerText:"Hiring_headerText__qwuyW",hiringBlock:"Hiring_hiringBlock___lciM",noVacanciesTitle:"Hiring_noVacanciesTitle__sje_S"}}},function(t){t.O(0,[996,929,774,888,179],function(){return t(t.s=3139)}),_N_E=t.O()}]);