(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{4553:function(s,e,i){"use strict";i.d(e,{Z:function(){return x}});var t=i(5893),a=i(9890),r=i.n(a),o=i(7294),n=i(2097),l=i.n(n),c=i(1664),d=i.n(c);let m=()=>(0,t.jsxs)("div",{className:l().socialWrapper,children:[(0,t.jsxs)(d(),{href:"https://twitter.com/Brushfam_io",className:l().socialButton,children:[(0,t.jsx)("img",{src:"/icons/contact-form/twitter-contact.svg"}),(0,t.jsx)("p",{children:"Twitter"})]}),(0,t.jsxs)(d(),{href:"https://discord.gg/9FRETSPmp9",className:l().socialButton,children:[(0,t.jsx)("img",{src:"/icons/contact-form/discord-contact.svg"}),(0,t.jsx)("p",{children:"Discord"})]}),(0,t.jsxs)(d(),{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",className:l().socialButton,children:[(0,t.jsx)("img",{src:"/icons/contact-form/element-contact.svg"}),(0,t.jsx)("p",{children:"Element"})]}),(0,t.jsxs)(d(),{href:"https://medium.com/brushfam",className:l().socialButton,style:{marginRight:0},children:[(0,t.jsx)("img",{src:"/icons/contact-form/medium-contact.svg"}),(0,t.jsx)("p",{children:"Medium"})]})]}),h=()=>(0,t.jsxs)("div",{className:l().socialWrapperMobile,children:[(0,t.jsx)("div",{className:l().socialBlock,style:{border:"none",paddingTop:0},children:(0,t.jsxs)(d(),{href:"https://twitter.com/Brushfam_io",className:l().socialButton,children:[(0,t.jsx)("img",{src:"/icons/contact-form/twitter-contact.svg",style:{width:20,height:17,marginLeft:10}}),(0,t.jsx)("p",{children:"Twitter"})]})}),(0,t.jsx)("div",{className:l().socialBlock,children:(0,t.jsxs)(d(),{href:"https://discord.gg/9FRETSPmp9",className:l().socialButton,children:[(0,t.jsx)("img",{src:"/icons/contact-form/discord-contact.svg",style:{width:24,height:17,marginLeft:6}}),(0,t.jsx)("p",{children:"Discord"})]})}),(0,t.jsx)("div",{className:l().socialBlock,children:(0,t.jsxs)(d(),{href:"https://medium.com/727-ventures",className:l().socialButton,children:[(0,t.jsx)("img",{src:"/icons/contact-form/medium-contact.svg",style:{width:30,height:17}}),(0,t.jsx)("p",{children:"Medium"})]})}),(0,t.jsx)("div",{className:l().socialBlock,style:{paddingBottom:0},children:(0,t.jsxs)(d(),{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",className:l().socialButton,children:[(0,t.jsx)("img",{src:"/icons/contact-form/element-contact.svg",style:{width:17,height:17,marginLeft:13}}),(0,t.jsx)("p",{children:"Element"})]})})]}),v=s=>/^[A-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z0-9]+$/i.test(s);function x(){let[s,e]=(0,o.useState)(""),[i,a]=(0,o.useState)(""),[n,l]=(0,o.useState)(!1),[c,d]=(0,o.useState)(!1),[x,p]=(0,o.useState)(!1),j=()=>{let o=async e=>{if(e.preventDefault(),d(!0),!s||!i||!v(s)){document.getElementById("get-in-touch").scrollIntoView();return}p(!0),console.log("Sending"),await c({email:s,message:i})},c=async s=>{fetch("/api/contact",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(s)}).then(s=>{console.log("Response received"),200===s.status&&(console.log("Response succeeded!"),l(!0),e(""),a(""))})},m=()=>(0,t.jsx)("button",{type:"submit",onClick:s=>{o(s)},className:r().button,children:"Apply"});return x?n?(0,t.jsx)("p",{className:r().submittedText,children:"Submitted!"}):(0,t.jsx)("p",{className:r().submittedText,children:"Submitting..."}):(0,t.jsx)(m,{})};return(0,t.jsx)("section",{className:r().section,id:"get-in-touch",children:(0,t.jsxs)("div",{className:r().contactDiv,children:[(0,t.jsxs)("div",{className:r().topDiv,children:[(0,t.jsx)("p",{className:r().headerText,children:"Get in touch"}),(0,t.jsx)("p",{className:r().descriptionText,children:"Work with tech experts to win the battle"}),(0,t.jsx)(m,{})]}),(0,t.jsxs)("form",{method:"post",id:"form",className:r().formDiv,children:[(0,t.jsx)("label",{htmlFor:"email",className:r().label,style:!c||n||s&&v(s)?{}:{color:"#CD0C0C"},children:"Email"}),(0,t.jsx)("input",{type:"text",name:"email",placeholder:"johnsmith@gmail.com",onChange:s=>{e(s.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!c||n||s||v(s)?r().input:r().inputError}),(0,t.jsx)("label",{htmlFor:"message",className:r().label,style:!c||n||i?{}:{color:"#CD0C0C"},children:"Your Message"}),(0,t.jsx)("input",{type:"text",name:"message",placeholder:"What do you wanna say to us",onChange:s=>{a(s.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!c||n||i?r().input:r().inputError}),(0,t.jsx)("div",{className:r().buttonWrapper,children:(0,t.jsx)(j,{})})]}),(0,t.jsx)(h,{})]})})}},2604:function(s,e,i){"use strict";i.d(e,{Z:function(){return h}});var t=i(5893),a=i(3794),r=i.n(a),o=i(1664),n=i.n(o);let l=[{label:"OpenBrush",link:"https://openbrush.io/"},{label:"Sol2ink",link:"https://github.com/Brushfam/sol2ink"},{label:"Typechain",link:"https://github.com/Brushfam/typechain-polkadot"}],c=[{label:"Web3 onboard",link:"/onboard-to-web3"},{label:"Advisory subscription",link:"/advisory-subscription"},{label:"Security audits",link:"/security-audits"},{label:"Polkadot onboard",link:"/polkadot-onboard"},{label:"Investment Diligence",link:"/investment-diligence"}],d=[{label:"Community Discord",link:"https://discord.gg/9FRETSPmp9"},{label:"Community Element",link:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"},{label:"Community Medium",link:"https://medium.com/727-ventures"}],m=()=>(0,t.jsxs)("section",{className:r().footerSection,children:[(0,t.jsxs)("div",{className:r().footerDiv,children:[(0,t.jsxs)("div",{className:r().footerSocial,children:[(0,t.jsx)("img",{className:r().brushfamLogo,src:"logos/brushfam-logo.svg"}),(0,t.jsxs)("div",{className:r().socialDiv,children:[(0,t.jsx)("a",{href:"https://instagram.com/727_ventures?igshid=ZmVmZTY5ZGE=",children:(0,t.jsx)("img",{src:"icons/inst.svg"})}),(0,t.jsx)("a",{href:"https://twitter.com/Brushfam_io",children:(0,t.jsx)("img",{src:"icons/twitter.svg"})}),(0,t.jsx)("a",{href:"https://t.me/openbrush",children:(0,t.jsx)("img",{src:"icons/telegram.svg"})}),(0,t.jsx)("a",{href:"https://discord.gg/9FRETSPmp9",children:(0,t.jsx)("img",{src:"icons/discord.svg"})}),(0,t.jsx)("a",{href:"https://medium.com/brushfam",children:(0,t.jsx)("img",{src:"icons/medium.svg"})}),(0,t.jsx)("a",{href:"mailto:contact@727.ventures",children:(0,t.jsx)("img",{src:"icons/mail.svg"})})]}),(0,t.jsxs)("div",{className:r().socialDivMobile,style:{marginBottom:37},children:[(0,t.jsx)("a",{href:"https://discord.gg/9FRETSPmp9",children:(0,t.jsx)("img",{src:"icons/discord-mobile.svg"})}),(0,t.jsx)("a",{href:"https://twitter.com/Brushfam_io",children:(0,t.jsx)("img",{src:"icons/twitter-mobile.svg"})}),(0,t.jsx)("a",{href:"mailto:contact@727.ventures",children:(0,t.jsx)("img",{src:"icons/mail-mobile.svg"})})]}),(0,t.jsxs)("div",{className:r().socialDivMobile,children:[(0,t.jsx)("a",{href:"https://medium.com/727-ventures",children:(0,t.jsx)("img",{src:"icons/medium-mobile.svg"})}),(0,t.jsx)("a",{href:"https://t.me/openbrush",children:(0,t.jsx)("img",{src:"icons/telegram-mobile.svg"})}),(0,t.jsx)("a",{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",children:(0,t.jsx)("img",{src:"icons/element-mobile.svg"})})]})]}),(0,t.jsxs)("div",{className:r().footerNavigation,children:[(0,t.jsxs)("div",{className:r().itemsColumn,children:[(0,t.jsx)("p",{className:r().itemsTitle,children:"Products"}),l&&l.map((s,e)=>(0,t.jsx)("p",{className:r().item,children:(0,t.jsx)(n(),{href:s.link,children:s.label})},e.toString()))]}),(0,t.jsxs)("div",{className:r().itemsColumn,children:[(0,t.jsx)("p",{className:r().itemsTitle,children:"Services & Solutions"}),c&&c.map((s,e)=>(0,t.jsx)("p",{className:r().item,children:(0,t.jsx)(n(),{href:s.link,children:s.label})},e.toString()))]}),(0,t.jsxs)("div",{className:r().itemsColumn,children:[(0,t.jsx)("p",{className:r().itemsTitle,children:"Learn"}),d&&d.map((s,e)=>(0,t.jsx)("p",{className:r().item,children:(0,t.jsx)(n(),{href:s.link,children:s.label})},e.toString()))]}),(0,t.jsxs)("div",{className:r().itemsColumnLast,children:[(0,t.jsx)("p",{className:r().itemsTitle,children:"Contact us"}),(0,t.jsx)("p",{className:r().item,children:"contact@727.ventures"})]})]})]}),(0,t.jsxs)("div",{className:r().footerLastText,children:[(0,t.jsx)(n(),{href:"/privacy-policy",children:(0,t.jsx)("p",{children:"Privacy Policy"})}),(0,t.jsx)("p",{children:"Brushfam \xa92022. All rights reserved."})]})]});var h=m},473:function(s,e,i){"use strict";i.d(e,{N:function(){return c}});var t=i(5893),a=i(1411),r=i.n(a),o=i(1664),n=i.n(o),l=i(7294);let c=()=>{let[s,e]=(0,l.useState)(!1);function i(){}function a(){e(!s);let i=document.getElementById("navbar-bottom");s?i.style.visibility="visible":i.style.visibility="hidden"}let[o,c]=(0,l.useState)(!1),[d,m]=(0,l.useState)(""),[h,v]=(0,l.useState)(!1),[x,p]=(0,l.useState)(!1),[j,u]=(0,l.useState)(!1),[g,b]=(0,l.useState)(!1);function _(s){let e=document.getElementById(s),i=document.getElementById(d);d===s?o?(e.style.transform="rotate(0deg)",e.style.transition="transform 0.2s linear",c(!o)):(e.style.transform="rotate(180deg)",e.style.transition="transform 0.2s linear",c(!o)):o?(i.style.transform="rotate(0deg)",i.style.transition="transform 0.2s linear",e.style.transform="rotate(180deg)",e.style.transition="transform 0.2s linear"):(e.style.transform="rotate(180deg)",e.style.transition="transform 0.2s linear",c(!o)),m(s)}return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:r().navbarMobile,id:"navbar-bottom",children:[(0,t.jsx)(n(),{href:"/",children:(0,t.jsx)("img",{src:"/logos/brushfam-mobile-logo.svg"})}),(0,t.jsx)("img",{src:"/mobile-navbar-button.svg",className:r().navbarMenuButton,onClick:a})]}),s?(0,t.jsxs)("div",{className:r().navbarContainer,children:[(0,t.jsx)("img",{src:"/exit-button.svg",className:r().exitButton,onClick:a}),(0,t.jsx)(n(),{href:"/",style:{marginLeft:16,marginBottom:43},children:(0,t.jsx)("img",{src:"/logos/brushfam-logo.svg",style:{maxWidth:230}})}),(0,t.jsxs)("div",{className:r().item,children:[(0,t.jsxs)("button",{id:"button1",type:"button",className:r().button,onClick:function(){v(!h),p(!1),u(!1),b(!1),_("arrow1")},children:["Products",(0,t.jsx)("img",{id:"arrow1",src:"/arrow.svg",className:r().arrow})]}),h?(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://openbrush.io/",className:r().link,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-openbrush.svg"}),(0,t.jsx)("p",{children:"OpenBrush"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://github.com/727-Ventures/sol2ink",className:r().link,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-sol2Ink.svg"}),(0,t.jsx)("p",{children:"Sol2ink"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://github.com/727-Ventures/typechain-polkadot",className:r().link,style:{marginBottom:0},children:[(0,t.jsx)("img",{src:"/nav-icons/nav-typechain.svg"}),(0,t.jsx)("p",{children:"Typechain"})]})})]}):(0,t.jsx)(t.Fragment,{})]}),(0,t.jsxs)("div",{className:r().item,children:[(0,t.jsxs)("button",{type:"button",className:r().button,onClick:function(){v(!1),p(!x),u(!1),b(!1),_("arrow2")},children:["Services & Solutions",(0,t.jsx)("img",{id:"arrow2",src:"/arrow.svg",className:r().arrow})]}),x?(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/advisory-subscription",className:r().link,onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-advisory.svg",style:{width:15}}),(0,t.jsx)("p",{children:"Advisory subscription"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"security-audits",className:r().link,onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-audit.svg",style:{width:15}}),(0,t.jsx)("p",{children:"Security audits"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/onboard-to-web3",className:r().link,onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-web3.svg",style:{width:18,marginRight:7}}),(0,t.jsx)("p",{children:"Web3 onboard"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/polkadot-onboard",className:r().link,onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-polkadot.svg",style:{width:15}}),(0,t.jsx)("p",{children:"Polkadot onboard"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/investment-diligence",className:r().link,onClick:i,style:{marginBottom:0},children:[(0,t.jsx)("img",{src:"/nav-icons/nav-investment.svg",style:{width:15}}),(0,t.jsx)("p",{children:"Investment Diligence"})]})})]}):(0,t.jsx)(t.Fragment,{})]}),(0,t.jsxs)("div",{className:r().item,children:[(0,t.jsxs)("button",{type:"button",className:r().button,onClick:function(){v(!1),p(!1),u(!j),b(!1),_("arrow3")},children:["Learn",(0,t.jsx)("img",{id:"arrow3",src:"/arrow.svg",className:r().arrow})]}),j?(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://discord.gg/9FRETSPmp9",className:r().link,onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-discord.svg"}),(0,t.jsx)("p",{children:"Community Discord"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://learn.brushfam.io/",target:"_blank",className:r().link,style:{marginBottom:0},onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-docs.svg",style:{paddingLeft:5,paddingRight:4}}),(0,t.jsx)("p",{children:"Docs"})]})})]}):(0,t.jsx)(t.Fragment,{})]}),(0,t.jsxs)("div",{className:r().item,children:[(0,t.jsxs)("button",{type:"button",className:r().button,onClick:function(){v(!1),p(!1),u(!1),b(!g),_("arrow4")},children:["Company",(0,t.jsx)("img",{id:"arrow4",src:"/arrow.svg",className:r().arrow})]}),g?(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/about-us",className:r().link,onClick:i,children:(0,t.jsx)("p",{children:"About us"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/hiring",className:r().link,onClick:i,style:{marginBottom:0},children:(0,t.jsx)("p",{children:"Hiring"})})})]}):(0,t.jsx)(t.Fragment,{})]}),(0,t.jsxs)("div",{className:r().social,children:[(0,t.jsx)(n(),{href:"https://t.me/openbrush",style:{marginRight:38},children:(0,t.jsx)("img",{src:"/icons/telegram-mobile.svg"})}),(0,t.jsx)(n(),{href:"https://instagram.com/727_ventures?igshid=ZmVmZTY5ZGE=",style:{marginRight:38},children:(0,t.jsx)("img",{src:"/icons/inst-mobile.svg"})}),(0,t.jsx)(n(),{href:"https://twitter.com/Brushfam_io",style:{marginRight:38},children:(0,t.jsx)("img",{src:"/icons/twitter-mobile.svg"})}),(0,t.jsx)(n(),{href:"mailto:contact@727.ventures",children:(0,t.jsx)("img",{src:"/icons/mail-mobile.svg"})})]})]}):(0,t.jsx)("div",{})]})}},2103:function(s,e,i){"use strict";var t=i(5893),a=i(8394),r=i.n(a),o=i(1664),n=i.n(o);let l=()=>{let s=()=>{document.getElementById("get-in-touch").scrollIntoView()};return(0,t.jsx)("div",{className:r().navbarContainer,id:"navbar",children:(0,t.jsxs)("div",{className:r().navbarDiv,children:[(0,t.jsx)("div",{className:r().logoDiv,children:(0,t.jsx)(n(),{href:"/",children:(0,t.jsx)("div",{children:(0,t.jsx)("img",{src:"logos/navbar-logo.svg",alt:"brushfam logo"})})})}),(0,t.jsxs)("div",{className:r().navbarNavigation,children:[(0,t.jsxs)("div",{className:r().menu,children:[(0,t.jsx)("div",{className:r().dropdown,children:(0,t.jsxs)("div",{className:r().navTitle,children:[(0,t.jsx)("p",{className:r().navTitleText,children:"Products"}),(0,t.jsxs)("div",{className:r().dropdownContentHeader,children:[(0,t.jsx)("div",{className:r().borderBlock3,style:{height:404}}),(0,t.jsx)("div",{className:r().borderBlock1})]}),(0,t.jsxs)("div",{className:r().dropdownContent,style:{width:400},children:[(0,t.jsx)(n(),{href:"https://openbrush.io/",children:(0,t.jsxs)("div",{className:r().dropDownItem,children:[(0,t.jsx)("div",{className:r().borderBlock2}),(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-openbrush.svg"}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"OpenBrush"})]}),(0,t.jsx)("p",{className:r().description,children:"OpenBrush is a library for smart contract development on ink! It provides standard contracts (based on PSP), as well as useful contracts and macros to help you build ink! smart contracts."})]})}),(0,t.jsx)(n(),{href:"https://github.com/Brushfam/sol2ink",children:(0,t.jsxs)("div",{className:r().dropDownItem,children:[(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-sol2Ink.svg"}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"Sol2ink"})]}),(0,t.jsx)("p",{className:r().description,children:"Is a tool for easy migration from Solidity to Ink! and Rust helps projects and teams migrate their smart contracts from popular Solidity to Polkadot's ink!."})]})}),(0,t.jsx)(n(),{href:"https://github.com/Brushfam/typechain-polkadot",children:(0,t.jsxs)("div",{className:r().dropDownLastItem,children:[(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-typechain.svg"}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"Typechain"})]}),(0,t.jsx)("p",{className:r().description,children:"Was created to improve developers’ experience with deployment & integration testing of ink! smart contracts."})]})})]}),(0,t.jsx)("div",{className:r().helperBlock,style:{width:292}})]})}),(0,t.jsx)("div",{className:r().dropdown,children:(0,t.jsxs)("div",{className:r().navTitle,children:[(0,t.jsx)("p",{className:r().navTitleText,children:"Services & Solutions"}),(0,t.jsxs)("div",{className:r().dropdownContentHeader,children:[(0,t.jsx)("div",{className:r().borderBlock3,style:{height:384}}),(0,t.jsx)("div",{className:r().borderBlock1})]}),(0,t.jsxs)("div",{className:r().dropdownContent,style:{width:262},children:[(0,t.jsx)(n(),{href:"/advisory-subscription",children:(0,t.jsxs)("div",{className:r().dropDownItem,children:[(0,t.jsx)("div",{className:r().borderBlock2}),(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-advisory.svg",style:{width:15}}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"Advisory subscription"})]})]})}),(0,t.jsx)(n(),{href:"/security-audits",children:(0,t.jsx)("div",{className:r().dropDownItem,children:(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-audit.svg",style:{width:15}}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"Security audits"})]})})}),(0,t.jsx)(n(),{href:"/onboard-to-web3",children:(0,t.jsx)("div",{className:r().dropDownItem,children:(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-web3.svg",style:{width:18,marginRight:7}}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"Web3 onboard"})]})})}),(0,t.jsx)(n(),{href:"/polkadot-onboard",children:(0,t.jsx)("div",{className:r().dropDownItem,children:(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-polkadot.svg",style:{width:15}}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"Polkadot onboard"})]})})}),(0,t.jsx)(n(),{href:"/investment-diligence",children:(0,t.jsx)("div",{className:r().dropDownLastItem,children:(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-investment.svg",style:{width:15}}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"Investment Diligence"})]})})})]}),(0,t.jsx)("div",{className:r().helperBlock,style:{width:74}})]})}),(0,t.jsx)("div",{className:r().dropdown,children:(0,t.jsxs)("div",{className:r().navTitle,children:[(0,t.jsx)("p",{className:r().navTitleText,children:"Learn"}),(0,t.jsxs)("div",{className:r().dropdownContentHeader,children:[(0,t.jsx)("div",{className:r().borderBlock3,style:{height:195}}),(0,t.jsx)("div",{className:r().borderBlock1})]}),(0,t.jsxs)("div",{className:r().dropdownContent,style:{width:253},children:[(0,t.jsx)(n(),{href:"https://discord.gg/9FRETSPmp9",children:(0,t.jsxs)("div",{className:r().dropDownItem,children:[(0,t.jsx)("div",{className:r().borderBlock2}),(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-discord.svg"}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"Community Discord"})]})]})}),(0,t.jsx)(n(),{href:"https://learn.brushfam.io/",target:"_blank",children:(0,t.jsx)("div",{className:r().dropDownLastItem,children:(0,t.jsxs)("div",{className:r().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-docs.svg",style:{paddingLeft:4,paddingRight:4}}),(0,t.jsx)("p",{className:r().dropdownTitle,children:"Docs"})]})})})]}),(0,t.jsx)("div",{className:r().helperBlock,style:{width:169}})]})}),(0,t.jsx)("div",{className:r().dropdown,children:(0,t.jsxs)("div",{className:r().navTitle,children:[(0,t.jsx)("p",{className:r().navTitleText,children:"Company"}),(0,t.jsxs)("div",{className:r().dropdownContentHeader,children:[(0,t.jsx)("div",{className:r().borderBlock3,style:{height:288}}),(0,t.jsx)("div",{className:r().borderBlock1})]}),(0,t.jsxs)("div",{className:r().dropdownContent,style:{width:367},children:[(0,t.jsx)(n(),{href:"/about-us",children:(0,t.jsxs)("div",{className:r().dropDownItem,children:[(0,t.jsx)("div",{className:r().borderBlock2}),(0,t.jsx)("div",{className:r().dropDownItemHeader,children:(0,t.jsx)("p",{className:r().dropdownTitle,children:"About us"})}),(0,t.jsx)("p",{className:r().description,children:"Brushfam is an ink! smart contracts expert and provides audits, tech advisory, and onboards businesses to Polkadot"})]})}),(0,t.jsx)(n(),{href:"/hiring",children:(0,t.jsxs)("div",{className:r().dropDownLastItem,children:[(0,t.jsx)("div",{className:r().dropDownItemHeader,children:(0,t.jsx)("p",{className:r().dropdownTitle,children:"Hiring"})}),(0,t.jsx)("p",{className:r().description,children:"Our team is known for its contribution to the Polkadot ecosystem. Our visionary attitude helps us think boldly and embrace technological challenges."})]})})]}),(0,t.jsx)("div",{className:r().helperBlock,style:{width:250}})]})})]}),(0,t.jsx)("button",{type:"button",onClick:s,className:r().button,children:"Get in touch"})]})]})})};e.Z=l},9890:function(s){s.exports={section:"Contact_section__GJyie",contactDiv:"Contact_contactDiv__6fpu9",topDiv:"Contact_topDiv__uV0cz",headerText:"Contact_headerText__KR_zY",descriptionText:"Contact_descriptionText__mI6Vx",formDiv:"Contact_formDiv__6Ubey",formDivMobile:"Contact_formDivMobile__7H7a7",label:"Contact_label__nzSGY",inputError:"Contact_inputError__NBn_B",input:"Contact_input__4yA7f",button:"Contact_button__FqCCm",buttonWrapper:"Contact_buttonWrapper__sKqTF",submittedText:"Contact_submittedText__OUPse"}},2097:function(s){s.exports={socialWrapper:"SocialMedia_socialWrapper__cmQlw",socialWrapperMobile:"SocialMedia_socialWrapperMobile__ARC6m",socialButton:"SocialMedia_socialButton__VM8Ht",socialBlock:"SocialMedia_socialBlock__F4r6s"}},3794:function(s){s.exports={footerSection:"Footer_footerSection__m5WLg",footerDiv:"Footer_footerDiv__t_Dv7",socialDiv:"Footer_socialDiv__UE6fa",footerSocial:"Footer_footerSocial__Cu_l5",socialDivMobile:"Footer_socialDivMobile__SZV9M",footerLastText:"Footer_footerLastText__MQoHo",brushfamLogo:"Footer_brushfamLogo__HVFf8",footerNavigation:"Footer_footerNavigation__9iPDx",itemsColumn:"Footer_itemsColumn__oMNZO",itemsColumnLast:"Footer_itemsColumnLast__8vuya",itemsTitle:"Footer_itemsTitle__pZUzf",itemsTitleLast:"Footer_itemsTitleLast__WLOdi",item:"Footer_item__ikrg0"}},1411:function(s){s.exports={navbarMobile:"MobileNavbar_navbarMobile__tNTXG",navbarContainer:"MobileNavbar_navbarContainer__6Ux_H",navbarMenuButton:"MobileNavbar_navbarMenuButton__G1l3N",button:"MobileNavbar_button___DGzd",item:"MobileNavbar_item__Ng4H_",link:"MobileNavbar_link__UAm_k",exitButton:"MobileNavbar_exitButton__yHbrd",arrow:"MobileNavbar_arrow__QahXo",social:"MobileNavbar_social___kuPB"}},8394:function(s){s.exports={navbarContainer:"Navbar_navbarContainer__lZ5Uk",navbarDiv:"Navbar_navbarDiv__DL2TY",logoDiv:"Navbar_logoDiv__JkuCm",navbarNavigation:"Navbar_navbarNavigation__EeG5G",button:"Navbar_button__yvu3z",menu:"Navbar_menu__66zmq",dropdown:"Navbar_dropdown__ZMVPB",dropdownTitle:"Navbar_dropdownTitle__vcJGb",navTitleText:"Navbar_navTitleText__9FZWt",dropdownContent:"Navbar_dropdownContent__AjQyH",dropdownContentHeader:"Navbar_dropdownContentHeader__BFl3j",helperBlock:"Navbar_helperBlock__neeKL",blog:"Navbar_blog__2wuAT",navTitle:"Navbar_navTitle__uLb4Q",description:"Navbar_description__tDaFB",dropDownItem:"Navbar_dropDownItem__2hqGg",dropDownLastItem:"Navbar_dropDownLastItem__7S3v_",dropDownItemHeader:"Navbar_dropDownItemHeader__LZI0B",borderBlock1:"Navbar_borderBlock1__UtUmp",borderBlock2:"Navbar_borderBlock2__XxwWO",borderBlock3:"Navbar_borderBlock3__BHV6C"}},5983:function(s){s.exports={mainProperty:"bg_mainProperty__u_5H8",aboutUsProperty:"bg_aboutUsProperty__mRDNX",advisoryProperty:"bg_advisoryProperty__iJ6B6",investmentProperty:"bg_investmentProperty___Atkb",onboardProperty:"bg_onboardProperty__wl4G9",polkadotOnboardProperty:"bg_polkadotOnboardProperty__Q7Dx9",securityProperty:"bg_securityProperty__M1Iaj"}}}]);