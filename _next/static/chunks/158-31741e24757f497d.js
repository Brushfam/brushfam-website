(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{9869:function(s,e,i){"use strict";i.d(e,{Z:function(){return d}});var t=i(5893),a=i(4060),o=i.n(a),r=i(7294),n=i(1664),l=i.n(n);let c=s=>/^[A-Z0-9.!#$%&'*+\-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z0-9]+$/i.test(s);function d(){let[s,e]=(0,r.useState)(""),[i,a]=(0,r.useState)(""),[n,d]=(0,r.useState)(!1),[m,h]=(0,r.useState)(!1),[v,x]=(0,r.useState)(!1),p=r=>{let{formName:l}=r,m=async e=>{if(e.preventDefault(),h(!0),!s||!i||!c(s)){document.getElementById(l).scrollIntoView();return}x(!0),console.log("Sending"),await p({email:s,message:i})},p=async s=>{fetch("/api/contact",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(s)}).then(s=>{console.log("Response received"),200===s.status&&(console.log("Response succeeded!"),d(!0),e(""),a(""))})},u=()=>(0,t.jsx)("button",{type:"submit",onClick:s=>{m(s)},className:o().button,children:"Apply"});return v?n?(0,t.jsx)("p",{className:o().submittedText,children:"Submitted!"}):(0,t.jsx)("p",{className:o().submittedText,children:"Submitting..."}):(0,t.jsx)(u,{})},u=()=>(0,t.jsxs)("div",{className:o().socialWrapper,children:[(0,t.jsxs)("div",{className:o().socialRow,children:[(0,t.jsx)(l(),{href:"https://twitter.com/Brushfam_io",children:(0,t.jsxs)("div",{className:o().socialButton,children:[(0,t.jsx)("img",{src:"/icons/twitter-social-icon.svg"}),(0,t.jsx)("p",{children:"Twitter"})]})}),(0,t.jsx)(l(),{href:"https://medium.com/727-ventures",children:(0,t.jsxs)("div",{className:o().socialButton,children:[(0,t.jsx)("img",{src:"/icons/medium-social-icon.svg"}),(0,t.jsx)("p",{children:"Medium"})]})})]}),(0,t.jsxs)("div",{className:o().socialRow,children:[(0,t.jsx)(l(),{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",children:(0,t.jsxs)("div",{className:o().socialButton,children:[(0,t.jsx)("img",{src:"/icons/element-social-icon.svg"}),(0,t.jsx)("p",{children:"Element"})]})}),(0,t.jsx)(l(),{href:"https://discord.gg/EARg6RCThP",children:(0,t.jsxs)("div",{className:o().socialButton,children:[(0,t.jsx)("img",{src:"/icons/discord-social-icon.svg"}),(0,t.jsx)("p",{children:"Discord"})]})})]})]});return(0,t.jsxs)("section",{className:o().section,id:"get-in-touch",children:[(0,t.jsxs)("div",{className:o().contactDiv,children:[(0,t.jsxs)("div",{className:o().leftDiv,children:[(0,t.jsx)("p",{className:o().headerText,children:"Get in touch"}),(0,t.jsx)("p",{className:o().descriptionText,children:"Work with tech experts to win the battle"}),(0,t.jsx)(u,{})]}),(0,t.jsxs)("form",{method:"post",id:"form",className:o().formDiv,children:[(0,t.jsx)("label",{htmlFor:"email",className:o().label,style:!m||n||s&&c(s)?{}:{color:"#CD0C0C"},children:"Email"}),(0,t.jsx)("input",{type:"email",name:"email",placeholder:"johnsmith@gmail.com",onChange:s=>{e(s.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!m||n||s||c(s)?o().input:o().inputError}),(0,t.jsx)("label",{htmlFor:"message",className:o().label,style:!m||n||i?{}:{color:"#CD0C0C"},children:"Your Message"}),(0,t.jsx)("input",{type:"text",name:"message",placeholder:"What do you wanna say to us",onChange:s=>{a(s.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!m||n||i?o().input:o().inputError}),(0,t.jsx)(p,{formName:"form"})]})]}),(0,t.jsxs)("div",{className:o().contactDivMobileWrapper,children:[(0,t.jsx)("p",{className:o().headerText,children:"Get in touch"}),(0,t.jsx)("p",{className:o().descriptionText,children:"Work with tech experts to win the battle"}),(0,t.jsx)("div",{className:o().contactDivMobile,children:(0,t.jsxs)("form",{method:"post",id:"mobileForm",className:o().formDiv,children:[(0,t.jsx)("label",{htmlFor:"email",className:o().label,style:!m||n||s&&c(s)?{}:{color:"#CD0C0C"},children:"Email"}),(0,t.jsx)("input",{type:"email",name:"email",placeholder:"johnsmith@gmail.com",onChange:s=>{e(s.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!m||n||s||c(s)?o().input:o().inputError}),(0,t.jsx)("label",{htmlFor:"message",className:o().label,style:!m||n||i?{}:{color:"#CD0C0C"},children:"Your Message"}),(0,t.jsx)("input",{type:"text",name:"message",placeholder:"What do you wanna say to us",onChange:s=>{a(s.target.value)},autoComplete:"off",autoCorrect:"off",spellCheck:"false",className:!m||n||i?o().input:o().inputError}),(0,t.jsx)(p,{formName:"mobileForm"})]})}),(0,t.jsx)(u,{})]})]})}},2604:function(s,e,i){"use strict";i.d(e,{Z:function(){return h}});var t=i(5893),a=i(3794),o=i.n(a),r=i(1664),n=i.n(r);let l=[{label:"OpenBrush",link:"https://openbrush.io/"},{label:"Sol2ink",link:"https://github.com/727-Ventures/sol2ink"},{label:"Typechain",link:"https://github.com/727-Ventures/typechain-polkadot"}],c=[{label:"Web3 onboard",link:"/onboard-to-web3"},{label:"Advisory subscription",link:"/advisory-subscription"},{label:"Security audits",link:"/security-audits"},{label:"Investment Diligence",link:"/investment-diligence"}],d=[{label:"Community Discord",link:"https://discord.gg/EARg6RCThP"},{label:"Community Element",link:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"},{label:"Community Medium",link:"https://medium.com/727-ventures"},{label:"Docs",link:"https://docs.openbrush.io/"}],m=()=>(0,t.jsxs)("section",{className:o().footerSection,children:[(0,t.jsxs)("div",{className:o().footerDiv,children:[(0,t.jsxs)("div",{className:o().footerSocial,children:[(0,t.jsx)("img",{className:o().brushfamLogo,src:"logos/brushfam-logo.svg"}),(0,t.jsxs)("div",{className:o().socialDiv,children:[(0,t.jsx)("a",{href:"https://www.linkedin.com/company/727-ventures-vs/",children:(0,t.jsx)("img",{src:"icons/in.svg"})}),(0,t.jsx)("a",{href:"https://instagram.com/727_ventures?igshid=ZmVmZTY5ZGE=",children:(0,t.jsx)("img",{src:"icons/inst.svg"})}),(0,t.jsx)("a",{href:"https://twitter.com/Brushfam_io",children:(0,t.jsx)("img",{src:"icons/twitter.svg"})}),(0,t.jsx)("a",{href:"https://t.me/openbrush",children:(0,t.jsx)("img",{src:"icons/telegram.svg"})}),(0,t.jsx)("a",{href:"https://discord.gg/EARg6RCThP",children:(0,t.jsx)("img",{src:"icons/discord.svg"})}),(0,t.jsx)("a",{href:"https://medium.com/727-ventures",children:(0,t.jsx)("img",{src:"icons/medium.svg"})}),(0,t.jsx)("a",{href:"mailto:contact@727.ventures",children:(0,t.jsx)("img",{src:"icons/mail.svg"})})]}),(0,t.jsxs)("div",{className:o().socialDivMobile,style:{marginBottom:37},children:[(0,t.jsx)("a",{href:"https://discord.gg/EARg6RCThP",children:(0,t.jsx)("img",{src:"icons/discord-mobile.svg"})}),(0,t.jsx)("a",{href:"https://twitter.com/Brushfam_io",children:(0,t.jsx)("img",{src:"icons/twitter-mobile.svg"})}),(0,t.jsx)("a",{href:"mailto:contact@727.ventures",children:(0,t.jsx)("img",{src:"icons/mail-mobile.svg"})})]}),(0,t.jsxs)("div",{className:o().socialDivMobile,children:[(0,t.jsx)("a",{href:"https://medium.com/727-ventures",children:(0,t.jsx)("img",{src:"icons/medium-mobile.svg"})}),(0,t.jsx)("a",{href:"https://t.me/openbrush",children:(0,t.jsx)("img",{src:"icons/telegram-mobile.svg"})}),(0,t.jsx)("a",{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",children:(0,t.jsx)("img",{src:"icons/element-mobile.svg"})})]})]}),(0,t.jsxs)("div",{className:o().footerNavigation,children:[(0,t.jsxs)("div",{className:o().itemsColumn,children:[(0,t.jsx)("p",{className:o().itemsTitle,children:"Products"}),l&&l.map((s,e)=>(0,t.jsx)("p",{className:o().item,children:(0,t.jsx)(n(),{href:s.link,children:s.label})},e.toString()))]}),(0,t.jsxs)("div",{className:o().itemsColumn,children:[(0,t.jsx)("p",{className:o().itemsTitle,children:"Services & Solutions"}),c&&c.map((s,e)=>(0,t.jsx)("p",{className:o().item,children:(0,t.jsx)(n(),{href:s.link,children:s.label})},e.toString()))]}),(0,t.jsxs)("div",{className:o().itemsColumn,children:[(0,t.jsx)("p",{className:o().itemsTitle,children:"Learn"}),d&&d.map((s,e)=>(0,t.jsx)("p",{className:o().item,children:(0,t.jsx)(n(),{href:s.link,children:s.label})},e.toString()))]}),(0,t.jsxs)("div",{className:o().itemsColumnLast,children:[(0,t.jsx)("p",{className:o().itemsTitle,children:"Contact us"}),(0,t.jsx)("p",{className:o().item,children:"contact@727.ventures"})]})]})]}),(0,t.jsx)("div",{className:o().footerLastText,children:(0,t.jsx)("p",{children:"Brushfam \xa92022. All rights reserved."})})]});var h=m},473:function(s,e,i){"use strict";i.d(e,{N:function(){return c}});var t=i(5893),a=i(1411),o=i.n(a),r=i(1664),n=i.n(r),l=i(7294);let c=()=>{let[s,e]=(0,l.useState)(!1);function i(){}function a(){e(!s);let i=document.getElementById("navbar-bottom");s?i.style.visibility="visible":i.style.visibility="hidden"}let[r,c]=(0,l.useState)(!1),[d,m]=(0,l.useState)(""),[h,v]=(0,l.useState)(!1),[x,p]=(0,l.useState)(!1),[u,j]=(0,l.useState)(!1),[g,b]=(0,l.useState)(!1);function _(s){let e=document.getElementById(s),i=document.getElementById(d);d===s?r?(e.style.transform="rotate(0deg)",e.style.transition="transform 0.2s linear",c(!r)):(e.style.transform="rotate(180deg)",e.style.transition="transform 0.2s linear",c(!r)):r?(i.style.transform="rotate(0deg)",i.style.transition="transform 0.2s linear",e.style.transform="rotate(180deg)",e.style.transition="transform 0.2s linear"):(e.style.transform="rotate(180deg)",e.style.transition="transform 0.2s linear",c(!r)),m(s)}return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:o().navbarMobile,id:"navbar-bottom",children:[(0,t.jsx)(n(),{href:"/",children:(0,t.jsx)("img",{src:"/logos/brushfam-mini-logo.svg"})}),(0,t.jsx)("img",{src:"/navbar-button.svg",className:o().navbarMenuButton,onClick:a})]}),s?(0,t.jsxs)("div",{className:o().navbarContainer,children:[(0,t.jsx)("img",{src:"/exit-button.svg",className:o().exitButton,onClick:a}),(0,t.jsx)(n(),{href:"/",style:{marginLeft:16,marginBottom:43},children:(0,t.jsx)("img",{src:"/logos/brushfam-logo.svg",style:{maxWidth:230}})}),(0,t.jsxs)("div",{className:o().item,children:[(0,t.jsxs)("button",{id:"button1",type:"button",className:o().button,onClick:function(){v(!h),p(!1),j(!1),b(!1),_("arrow1")},children:["Products",(0,t.jsx)("img",{id:"arrow1",src:"/arrow.svg",className:o().arrow})]}),h?(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://openbrush.io/",className:o().link,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-openbrush.svg"}),(0,t.jsx)("p",{children:"OpenBrush"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://github.com/727-Ventures/sol2ink",className:o().link,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-sol2Ink.svg"}),(0,t.jsx)("p",{children:"Sol2ink"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://github.com/727-Ventures/typechain-polkadot",className:o().link,style:{marginBottom:0},children:[(0,t.jsx)("img",{src:"/nav-icons/nav-typechain.svg"}),(0,t.jsx)("p",{children:"Typechain"})]})})]}):(0,t.jsx)(t.Fragment,{})]}),(0,t.jsxs)("div",{className:o().item,children:[(0,t.jsxs)("button",{type:"button",className:o().button,onClick:function(){v(!1),p(!x),j(!1),b(!1),_("arrow2")},children:["Services & Solutions",(0,t.jsx)("img",{id:"arrow2",src:"/arrow.svg",className:o().arrow})]}),x?(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/onboard-to-web3",className:o().link,onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-web3.svg",style:{width:15}}),(0,t.jsx)("p",{children:"Web3 onboard"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/advisory-subscription",className:o().link,onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-advisory.svg",style:{width:15}}),(0,t.jsx)("p",{children:"Advisory subscription"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"security-audits",className:o().link,onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-audits.svg",style:{width:15}}),(0,t.jsx)("p",{children:"Security audits"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"/investment-diligence",className:o().link,onClick:i,style:{marginBottom:0},children:[(0,t.jsx)("img",{src:"/nav-icons/nav-investment.svg",style:{width:18,marginRight:7}}),(0,t.jsx)("p",{children:"Investment Diligence"})]})})]}):(0,t.jsx)(t.Fragment,{})]}),(0,t.jsxs)("div",{className:o().item,children:[(0,t.jsxs)("button",{type:"button",className:o().button,onClick:function(){v(!1),p(!1),j(!u),b(!1),_("arrow3")},children:["Learn",(0,t.jsx)("img",{id:"arrow3",src:"/arrow.svg",className:o().arrow})]}),u?(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://discord.gg/EARg6RCThP",className:o().link,onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-discord.svg"}),(0,t.jsx)("p",{children:"Community Discord"})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n(),{href:"https://docs.openbrush.io/",className:o().link,style:{marginBottom:0},onClick:i,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-docs.svg",style:{paddingLeft:5,paddingRight:4}}),(0,t.jsx)("p",{children:"Docs"})]})})]}):(0,t.jsx)(t.Fragment,{})]}),(0,t.jsxs)("div",{className:o().item,children:[(0,t.jsxs)("button",{type:"button",className:o().button,onClick:function(){v(!1),p(!1),j(!1),b(!g),_("arrow4")},children:["Company",(0,t.jsx)("img",{id:"arrow4",src:"/arrow.svg",className:o().arrow})]}),g?(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/about-us",className:o().link,onClick:i,children:(0,t.jsx)("p",{children:"About us"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"/hiring",className:o().link,onClick:i,style:{marginBottom:0},children:(0,t.jsx)("p",{children:"Hiring"})})})]}):(0,t.jsx)(t.Fragment,{})]}),(0,t.jsxs)("div",{className:o().social,children:[(0,t.jsx)(n(),{href:"https://t.me/openbrush",style:{marginRight:38},children:(0,t.jsx)("img",{src:"/icons/telegram-mobile.svg"})}),(0,t.jsx)(n(),{href:"https://instagram.com/727_ventures?igshid=ZmVmZTY5ZGE=",style:{marginRight:38},children:(0,t.jsx)("img",{src:"/icons/inst-mobile.svg"})}),(0,t.jsx)(n(),{href:"https://twitter.com/Brushfam_io",style:{marginRight:38},children:(0,t.jsx)("img",{src:"/icons/twitter-mobile.svg"})}),(0,t.jsx)(n(),{href:"mailto:contact@727.ventures",children:(0,t.jsx)("img",{src:"/icons/mail-mobile.svg"})})]})]}):(0,t.jsx)("div",{})]})}},1001:function(s,e,i){"use strict";i.d(e,{Z:function(){return c}});var t=i(5893),a=i(8394),o=i.n(a),r=i(1664),n=i.n(r);let l=()=>{let s=()=>{document.getElementById("get-in-touch").scrollIntoView()};return(0,t.jsx)("div",{className:o().navbarContainer,id:"navbar",children:(0,t.jsx)("div",{className:o().mainDiv,children:(0,t.jsxs)("div",{className:o().navbarDiv,children:[(0,t.jsx)("div",{className:o().logoDiv,children:(0,t.jsx)(n(),{href:"/",children:(0,t.jsx)("div",{children:(0,t.jsx)("img",{src:"logos/navbar-logo.svg",alt:"brushfam logo"})})})}),(0,t.jsxs)("div",{className:o().navbarNavigation,children:[(0,t.jsxs)("div",{className:o().menu,children:[(0,t.jsx)("div",{className:o().dropdown,children:(0,t.jsxs)("div",{className:o().navTitle,children:[(0,t.jsx)("p",{className:o().navTitleText,children:"Products"}),(0,t.jsxs)("div",{className:o().dropdownContentHeader,children:[(0,t.jsx)("div",{className:o().borderBlock3,style:{height:404}}),(0,t.jsx)("div",{className:o().borderBlock1})]}),(0,t.jsxs)("div",{className:o().dropdownContent,style:{width:400},children:[(0,t.jsx)(n(),{href:"https://openbrush.io/",children:(0,t.jsxs)("div",{className:o().dropDownItem,children:[(0,t.jsx)("div",{className:o().borderBlock2}),(0,t.jsxs)("div",{className:o().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-openbrush.svg"}),(0,t.jsx)("p",{className:o().dropdownTitle,children:"OpenBrush"})]}),(0,t.jsx)("p",{className:o().description,children:"OpenBrush is a library for smart contract development on ink! It provides standard contracts (based on PSP), as well as useful contracts and macros to help you build ink! smart contracts."})]})}),(0,t.jsx)(n(),{href:"https://github.com/727-Ventures/sol2ink",children:(0,t.jsxs)("div",{className:o().dropDownItem,children:[(0,t.jsxs)("div",{className:o().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-sol2Ink.svg"}),(0,t.jsx)("p",{className:o().dropdownTitle,children:"Sol2ink"})]}),(0,t.jsx)("p",{className:o().description,children:"Is a tool for easy migration from Solidity to Ink! and Rust helps projects and teams migrate their smart contracts from popular Solidity to Polkadot's ink!."})]})}),(0,t.jsx)(n(),{href:"https://github.com/727-Ventures/typechain-polkadot",children:(0,t.jsxs)("div",{className:o().dropDownLastItem,children:[(0,t.jsxs)("div",{className:o().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-typechain.svg"}),(0,t.jsx)("p",{className:o().dropdownTitle,children:"Typechain"})]}),(0,t.jsx)("p",{className:o().description,children:"Was created to improve developers’ experience with deployment & integration testing of ink! smart contracts."})]})})]}),(0,t.jsx)("div",{className:o().testBlock,style:{width:294}})]})}),(0,t.jsx)("div",{className:o().dropdown,children:(0,t.jsxs)("div",{className:o().navTitle,children:[(0,t.jsx)("p",{className:o().navTitleText,children:"Services & Solutions"}),(0,t.jsxs)("div",{className:o().dropdownContentHeader,children:[(0,t.jsx)("div",{className:o().borderBlock3,style:{height:321}}),(0,t.jsx)("div",{className:o().borderBlock1})]}),(0,t.jsxs)("div",{className:o().dropdownContent,style:{width:262},children:[(0,t.jsx)(n(),{href:"/onboard-to-web3",children:(0,t.jsxs)("div",{className:o().dropDownItem,children:[(0,t.jsx)("div",{className:o().borderBlock2}),(0,t.jsxs)("div",{className:o().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-web3.svg",style:{width:15}}),(0,t.jsx)("p",{className:o().dropdownTitle,children:"Web3 onboard"})]})]})}),(0,t.jsx)(n(),{href:"/advisory-subscription",children:(0,t.jsx)("div",{className:o().dropDownItem,children:(0,t.jsxs)("div",{className:o().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-advisory.svg",style:{width:15}}),(0,t.jsx)("p",{className:o().dropdownTitle,children:"Advisory subscription"})]})})}),(0,t.jsx)(n(),{href:"/security-audits",children:(0,t.jsx)("div",{className:o().dropDownItem,children:(0,t.jsxs)("div",{className:o().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-audits.svg",style:{width:15}}),(0,t.jsx)("p",{className:o().dropdownTitle,children:"Security audits"})]})})}),(0,t.jsx)(n(),{href:"/investment-diligence",children:(0,t.jsx)("div",{className:o().dropDownLastItem,children:(0,t.jsxs)("div",{className:o().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-investment.svg",style:{width:18,marginRight:7}}),(0,t.jsx)("p",{className:o().dropdownTitle,children:"Investment Diligence"})]})})})]}),(0,t.jsx)("div",{className:o().testBlock,style:{width:76}})]})}),(0,t.jsx)("div",{className:o().dropdown,children:(0,t.jsxs)("div",{className:o().navTitle,children:[(0,t.jsx)("p",{className:o().navTitleText,children:"Learn"}),(0,t.jsxs)("div",{className:o().dropdownContentHeader,children:[(0,t.jsx)("div",{className:o().borderBlock3,style:{height:196}}),(0,t.jsx)("div",{className:o().borderBlock1})]}),(0,t.jsxs)("div",{className:o().dropdownContent,style:{width:253},children:[(0,t.jsx)(n(),{href:"https://discord.gg/EARg6RCThP",children:(0,t.jsxs)("div",{className:o().dropDownItem,children:[(0,t.jsx)("div",{className:o().borderBlock2}),(0,t.jsxs)("div",{className:o().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-discord.svg"}),(0,t.jsx)("p",{className:o().dropdownTitle,children:"Community Discord"})]})]})}),(0,t.jsx)(n(),{href:"https://docs.openbrush.io/",children:(0,t.jsx)("div",{className:o().dropDownLastItem,children:(0,t.jsxs)("div",{className:o().dropDownItemHeader,children:[(0,t.jsx)("img",{src:"/nav-icons/nav-docs.svg",style:{paddingLeft:4,paddingRight:4}}),(0,t.jsx)("p",{className:o().dropdownTitle,children:"Docs"})]})})})]}),(0,t.jsx)("div",{className:o().testBlock,style:{width:170}})]})}),(0,t.jsx)("div",{className:o().dropdown,children:(0,t.jsxs)("div",{className:o().navTitle,children:[(0,t.jsx)("p",{className:o().navTitleText,children:"Company"}),(0,t.jsxs)("div",{className:o().dropdownContentHeader,children:[(0,t.jsx)("div",{className:o().borderBlock3,style:{height:288}}),(0,t.jsx)("div",{className:o().borderBlock1})]}),(0,t.jsxs)("div",{className:o().dropdownContent,style:{width:367},children:[(0,t.jsx)(n(),{href:"/about-us",children:(0,t.jsxs)("div",{className:o().dropDownItem,children:[(0,t.jsx)("div",{className:o().borderBlock2}),(0,t.jsx)("div",{className:o().dropDownItemHeader,children:(0,t.jsx)("p",{className:o().dropdownTitle,children:"About us"})}),(0,t.jsx)("p",{className:o().description,children:"Brushfam is an ink! smart contracts expert and provides audits, tech advisory, and onboards businesses to Polkadot"})]})}),(0,t.jsx)(n(),{href:"/hiring",children:(0,t.jsxs)("div",{className:o().dropDownLastItem,children:[(0,t.jsx)("div",{className:o().dropDownItemHeader,children:(0,t.jsx)("p",{className:o().dropdownTitle,children:"Hiring"})}),(0,t.jsx)("p",{className:o().description,children:"Our team is known for its contribution to the Polkadot ecosystem. Our visionary attitude helps us think boldly and embrace technological challenges."})]})})]}),(0,t.jsx)("div",{className:o().testBlock,style:{width:253}})]})})]}),(0,t.jsx)("button",{type:"button",onClick:s,className:o().button,children:"Get in touch"})]})]})})})};var c=l},4060:function(s){s.exports={section:"Contact_section__inwCX",contactDiv:"Contact_contactDiv__MzSu7",contactDivMobileWrapper:"Contact_contactDivMobileWrapper__oFfH8",contactDivMobile:"Contact_contactDivMobile__n7B49",leftDiv:"Contact_leftDiv___ALFT",headerText:"Contact_headerText__739Ct",descriptionText:"Contact_descriptionText__7sj6Q",socialWrapper:"Contact_socialWrapper__iJ_pJ",socialRow:"Contact_socialRow__gQYV3",socialButton:"Contact_socialButton__sYQaB",formDiv:"Contact_formDiv__mdTy3",formDivMobile:"Contact_formDivMobile__PC4IQ",label:"Contact_label__OevUX",inputError:"Contact_inputError__kLzVe",input:"Contact_input__fWz9j",button:"Contact_button__9tubA",submittedText:"Contact_submittedText__a6X4W"}},3794:function(s){s.exports={footerSection:"Footer_footerSection__m5WLg",footerDiv:"Footer_footerDiv__t_Dv7",socialDiv:"Footer_socialDiv__UE6fa",footerSocial:"Footer_footerSocial__Cu_l5",socialDivMobile:"Footer_socialDivMobile__SZV9M",footerLastText:"Footer_footerLastText__MQoHo",brushfamLogo:"Footer_brushfamLogo__HVFf8",footerNavigation:"Footer_footerNavigation__9iPDx",itemsColumn:"Footer_itemsColumn__oMNZO",itemsColumnLast:"Footer_itemsColumnLast__8vuya",itemsTitle:"Footer_itemsTitle__pZUzf",itemsTitleLast:"Footer_itemsTitleLast__WLOdi",item:"Footer_item__ikrg0",products:"Footer_products__9m8nC",services:"Footer_services__x5nQ9",learn:"Footer_learn__7ADHP",company:"Footer_company__qvPtP",contactUs:"Footer_contactUs__7g7K8"}},1411:function(s){s.exports={navbarMobile:"MobileNavbar_navbarMobile__tNTXG",navbarContainer:"MobileNavbar_navbarContainer__6Ux_H",navbarMenuButton:"MobileNavbar_navbarMenuButton__G1l3N",button:"MobileNavbar_button___DGzd",item:"MobileNavbar_item__Ng4H_",link:"MobileNavbar_link__UAm_k",exitButton:"MobileNavbar_exitButton__yHbrd",arrow:"MobileNavbar_arrow__QahXo",social:"MobileNavbar_social___kuPB"}},8394:function(s){s.exports={navbarContainer:"Navbar_navbarContainer__lZ5Uk",mainDiv:"Navbar_mainDiv__2HSTP",logoDiv:"Navbar_logoDiv__JkuCm",navbarDiv:"Navbar_navbarDiv__DL2TY",navbarNavigation:"Navbar_navbarNavigation__EeG5G",button:"Navbar_button__yvu3z",menu:"Navbar_menu__66zmq",dropdown:"Navbar_dropdown__ZMVPB",dropdownTitle:"Navbar_dropdownTitle__vcJGb",navTitleText:"Navbar_navTitleText__9FZWt",dropdownContent:"Navbar_dropdownContent__AjQyH",dropdownContentHeader:"Navbar_dropdownContentHeader__BFl3j",testBlock:"Navbar_testBlock__siPAd",blog:"Navbar_blog__2wuAT",navTitle:"Navbar_navTitle__uLb4Q",description:"Navbar_description__tDaFB",dropDownItem:"Navbar_dropDownItem__2hqGg",dropDownLastItem:"Navbar_dropDownLastItem__7S3v_",dropDownItemHeader:"Navbar_dropDownItemHeader__LZI0B",borderBlock1:"Navbar_borderBlock1__UtUmp",borderBlock2:"Navbar_borderBlock2__XxwWO",borderBlock3:"Navbar_borderBlock3__BHV6C",ul:"Navbar_ul__npKaE"}},5983:function(s){s.exports={mainProperty:"bg_mainProperty__u_5H8",aboutUsProperty:"bg_aboutUsProperty__mRDNX",advisoryProperty:"bg_advisoryProperty__iJ6B6",investmentProperty:"bg_investmentProperty___Atkb",onboardProperty:"bg_onboardProperty__wl4G9",securityProperty:"bg_securityProperty__M1Iaj"}}}]);