(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9299:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,7970,23)),Promise.resolve().then(i.bind(i,1122)),Promise.resolve().then(i.bind(i,6907)),Promise.resolve().then(i.bind(i,1217)),Promise.resolve().then(i.bind(i,8141)),Promise.resolve().then(i.bind(i,3075)),Promise.resolve().then(i.t.bind(i,6253,23)),Promise.resolve().then(i.t.bind(i,6277,23)),Promise.resolve().then(i.t.bind(i,9550,23)),Promise.resolve().then(i.t.bind(i,358,23)),Promise.resolve().then(i.t.bind(i,4215,23)),Promise.resolve().then(i.t.bind(i,8436,23))},9527:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var s=i(5155);i(2115),i(8436);let n=e=>{let{position:t="right",type:i="solid",length:n="100%"}=e;return(0,s.jsx)("div",{className:"line",style:{width:"string"==typeof n?n:"".concat(n,"%")},children:(0,s.jsx)("div",{className:"circle ".concat("right"===t?"right":"left"," ").concat("hollow"===i?"hollow":"solid")})})}},1122:(e,t,i)=>{"use strict";i.d(t,{default:()=>a});var s=i(5155),n=i(2115);let a=()=>{let[e,t]=(0,n.useState)({x:0,y:0}),i=()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}},a=e=>{try{let s=i()?e.touches[0].pageX:e.pageX,n=i()?e.touches[0].pageY:e.pageY;t({x:s-50,y:n-50})}catch(e){}};(0,n.useEffect)(()=>{let e=e=>a(e),t=e=>a(e);return document.addEventListener("mousemove",e),document.addEventListener("touchmove",t),()=>{document.removeEventListener("mousemove",e),document.removeEventListener("touchmove",t)}},[]);let r={position:"absolute",left:"".concat(e.x-100,"px"),top:"".concat(e.y-100,"px"),width:"300px",height:"300px",opacity:"20%",background:"conic-gradient(from 180deg at 50% 50%,rgb(0, 255, 204) 0deg,rgb(0, 26, 255) 60deg,rgb(174, 0, 255)",borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"};return(0,s.jsx)("div",{style:r})}},6907:(e,t,i)=>{"use strict";i.d(t,{default:()=>r});var s=i(5155);i(5088);var n=i(2115),a=i(9527);let r=()=>{let[e,t]=(0,n.useState)("");return(0,n.useEffect)(()=>{let e=()=>{let e=document.querySelectorAll("section"),i="";e.forEach(e=>{let t=e.getBoundingClientRect();t.top<=window.innerHeight/2&&t.bottom>0&&(i=e.id)}),t(i)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,s.jsx)("nav",{children:(0,s.jsx)("ul",{children:[{section:"about",label:"About",link:"#about"},{section:"timeline",label:"Work",link:"#timeline"},{section:"project",label:"Projects",link:"#project"}].map(t=>{let{section:i,label:n,link:r}=t;return(0,s.jsxs)("li",{className:"nav-item ".concat(e===i?"active":""),children:[(0,s.jsx)(a.A,{position:"left",type:"solid",length:"100%"}),(0,s.jsx)("a",{href:r,children:n})]},i)})})})}},1217:(e,t,i)=>{"use strict";i.d(t,{default:()=>r});var s=i(5155),n=i(2115);i(358);let a=e=>{let{role:t,duration:i,description:n,skill:a}=e;return(0,s.jsxs)("div",{className:"timeline-item",children:[(0,s.jsx)("h3",{className:"role",children:t}),(0,s.jsx)("p",{className:"duration",children:i}),(0,s.jsx)("p",{className:"description",children:n}),(0,s.jsx)("div",{className:"skills",children:a&&a.length>0?a.map((e,t)=>(0,s.jsx)("span",{className:"skill",children:e},t)):(0,s.jsx)("p",{})})]})};i(8056),i(9527);let r=()=>{let e=[{category:"development",role:"Software System - Taxi User Simulation",duration:"2023",description:"Java model of a transportation service following AGILE development and software architecture principles. Using an object-oriented approach, the system tracked 100s of different routes of users, taxis, and bikes with extensible features such as cancellation and shared rides affecting movement.",skill:["Java","AGILE Development","Object-Oriented Design"]},{category:"data",role:"Data Visualizations - Lobbyist API",duration:"2024",description:"Integrated multiple datasets on Chicago lobbyist contributions to visualize and analyze trends. Accessing JSON endpoints with Python, over +10 visual models were made for the identification of significant actions and political campaigns.",skill:["Python","Data Visualizations","JSON","Public Awareness"]},{category:"design",role:"UI/UX - E-commerce Website",duration:"2022",description:"Designed the UI/UX for a modern e-commerce platform with a focus on user experience, accessibility, and a mobile-first approach.",skill:["UI/UX Design","Figma","Wireframing","Prototyping"]}],[t,i]=(0,n.useState)("all"),r="all"===t?e:e.filter(e=>e.category===t);return(0,s.jsxs)("div",{className:"projects",children:[(0,s.jsx)("div",{className:"tabs",children:["all","development","design","data Analysis"].map(e=>(0,s.jsxs)("button",{className:t===e?"active":"",onClick:()=>i(e),children:[e.charAt(0).toUpperCase()+e.slice(1)," "]},e))}),(0,s.jsx)("div",{className:"tab-content",children:r.map((e,t)=>(0,s.jsx)("div",{className:"timeline_item",children:(0,s.jsx)("div",{className:"timeline_entry",children:(0,s.jsx)(a,{...e})})},t))})]})}},6277:()=>{},6253:()=>{},8436:()=>{},5088:()=>{},8056:()=>{},9550:()=>{},4215:()=>{},358:()=>{},8141:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});let s={src:"/mlhbui//_next/static/media/external-link.a9f0b1bc.svg",height:48,width:48,blurWidth:0,blurHeight:0}},3075:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});let s={src:"/mlhbui//_next/static/media/profile.a0bd735c.png",height:4032,width:3024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAUVBMVEV6i3xWaXqDWEWNhnlGUFdjWlt4XltxUk6Din9UTEpvdHNCPTVfJxRlSEaeYEViMiBWbWI7MT4/ODJyS0ESHhxXTkVVSE1iPjmMZ1hKNzVQbIHH/yTOAAAAF3RSTlMBfP37Fv7+/iSy+6b26ab9benR9m3R/e9S8GwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicNcFbAkAgFEDBU6p7E0Iv2f9CfZmBs90VjM/9Newj2HCxDRFbSFP8c+DiukQHqPL7ADo/Aaja0LjKAAAAAElFTkSuQmCC",blurWidth:6,blurHeight:8}}},e=>{var t=t=>e(e.s=t);e.O(0,[182,970,441,517,358],()=>t(9299)),_N_E=e.O()}]);