"use strict";(self.webpackChunkkoronfol=self.webpackChunkkoronfol||[]).push([[695],{6695:(e,i,t)=>{t.r(i),t.d(i,{default:()=>g});var n=t(2791);const s="style_navbar__vB8qE",a="style_navbar__logo__n0bG5",r="style_navbar__links__3ZwJK",l="style_menu__S5D7E";var c=t(3240),o=t(2736),d=t(3791),h=t(7689);const x="style_nav__OJWbz",u="style_hamburger__RSz5C",j="style_wrapper__F6xCD",m="style_container__apkql",_={duration:1,ease:[.76,0,.24,1]},v={initial:{height:0},enter:{height:"110vh",transition:_},exit:{height:0,transition:_}},y={initial:{y:"100%",opacity:0},enter:e=>({y:0,opacity:1,transition:{duration:1,ease:[.76,0,.24,1],delay:e[0]}}),exit:e=>({y:"100%",opacity:0,transition:{duration:.7,ease:[.76,0,.24,1],delay:e[1]}})};var f=t(1087);const p={body:"style_body__HmYwS"};var E=t(184);function b(e){let{links:i}=e;const t=e=>{let i=[];return e.split("").forEach(((t,n)=>{i.push((0,E.jsx)(o.E.span,{custom:[.02*n,.01*(e.length-n)],variants:y,initial:"initial",animate:"enter",exit:"exit",children:t},t+n))})),i};return(0,E.jsx)("div",{className:p.body,children:i.map(((e,i)=>{const{title:n,href:s}=e;return(0,E.jsx)(f.rU,{to:s,children:(0,E.jsx)(o.E.p,{children:t(n)})},"l_".concat(i))}))})}const w={footer:"style_footer__yVlt2"};function k(){return(0,E.jsx)("div",{className:w.footer,children:(0,E.jsxs)("ul",{children:[(0,E.jsxs)(o.E.li,{custom:[.3,0],variants:y,initial:"initial",animate:"enter",exit:"exit",children:[(0,E.jsx)("span",{children:"KRONFOL - "})," REAL ESTATE Company"]}),(0,E.jsxs)(o.E.li,{custom:[.3,0],variants:y,initial:"initial",animate:"enter",exit:"exit",children:[(0,E.jsx)("span",{children:"Location: "})," Beirut, Lebanon"]}),(0,E.jsx)(o.E.li,{custom:[.3,0],variants:y,initial:"initial",animate:"enter",exit:"exit",children:(0,E.jsx)(f.rU,{to:"/privacy",children:"Privacy Policy"})}),(0,E.jsx)(o.E.li,{custom:[.3,0],variants:y,initial:"initial",animate:"enter",exit:"exit",children:(0,E.jsx)(f.rU,{to:"/terms",children:"Terms & Conditions"})}),(0,E.jsxs)(o.E.li,{custom:[.3,0],variants:y,initial:"initial",animate:"enter",exit:"exit",children:[(0,E.jsx)("span",{children:"Developed By "})," Cairo Studio"]})]})})}const N=[{title:"Home",href:"/"},{title:"Projects",href:"/projects"},{title:"About",href:"/about"},{title:"Contact",href:"/contact"}];function C(e){let{setNavOpen:i}=e;return(0,E.jsx)(o.E.div,{initial:"initial",animate:"enter",exit:"exit",variants:v,className:x,children:(0,E.jsxs)("div",{className:j,children:[(0,E.jsx)("div",{className:u,onClick:()=>i(!1),children:"X"}),(0,E.jsxs)("div",{className:m,children:[(0,E.jsx)(b,{links:N}),(0,E.jsx)(k,{})]})]})})}const g=()=>{const[e,i]=(0,n.useState)(window.pageYOffset),[t,x]=(0,n.useState)(!0),u=(0,c._)(),[j,m]=(0,n.useState)(!1),_=(0,h.TH)(),v=(0,n.useCallback)((()=>{m((e=>!e))}),[m]);return(0,n.useEffect)((()=>{m(!1)}),[_.pathname,m]),(0,n.useEffect)((()=>{const t=()=>{const t=window.pageYOffset;window.innerWidth>768?x(e>t||t<10):x(!0),i(t)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)}),[e,t]),(0,n.useEffect)((()=>{u.start({y:t?0:-80})}),[u,t]),(0,E.jsxs)(o.E.nav,{className:s,animate:u,transition:{ease:"easeOut"},children:[(0,E.jsx)("div",{className:a,children:(0,E.jsx)("h1",{children:"K"})}),(0,E.jsx)("div",{className:r,children:(0,E.jsxs)("ul",{children:[(0,E.jsx)("li",{children:"About"}),(0,E.jsx)("li",{children:"Projects"}),(0,E.jsx)("li",{children:"Contact"})]})}),(0,E.jsx)("div",{className:l,onClick:v,children:(0,E.jsx)("span",{children:"menu"})}),(0,E.jsx)(d.M,{mode:"wait",children:j&&(0,E.jsx)(C,{setNavOpen:m})})]})}}}]);
//# sourceMappingURL=695.85833b14.chunk.js.map