import{d as k,f as i,g as _,z as e,i as t,w as o,j as a,t as n,F as u,l as x,h as v,m as g,ai as h,aj as y,_ as z}from"./index-31ea285c.js";/* empty css               *//* empty css                  *//* empty css                */const I={class:"works-info-view"},V={class:"row"},B={class:"col"},E={class:"row",style:{width:"50%","justify-content":"flex-end","flex-wrap":"nowrap"}},N={class:"row"},T={class:"col"},W=k({__name:"WorksInfoView",props:{works:{}},emits:["click-works"],setup(d,{emit:m}){const s=d,p=m;return(b,c)=>{const r=g,w=h,f=y;return i(),_("div",I,[e("div",V,[e("div",B,[t(r,{onClick:c[0]||(c[0]=l=>p("click-works",s.works)),size:"large",style:{"min-width":"300px"}},{default:o(()=>[a(n(s.works.fileName),1)]),_:1})]),e("div",E,[t(r,{size:"small",class:"text"},{default:o(()=>[a(n(s.works.updateTime),1)]),_:1}),t(w,{style:{"margin-right":"5px","margin-left":"15px"},size:"small",src:s.works.userInfo.avatar},null,8,["src"]),t(r,{class:"text",size:"small"},{default:o(()=>[a(n(s.works.userInfo.username),1)]),_:1})])]),e("div",N,[e("div",T,[t(r,{class:"text"},{default:o(()=>[a(n(s.works.content.split(`
`)[0].substring(0,128)+"..."),1)]),_:1})]),e("div",null,[(i(!0),_(u,null,x(s.works.tags,l=>(i(),v(f,{size:"small",key:l},{default:o(()=>[a(n(l),1)]),_:2},1024))),128))])])])}}});const D=z(W,[["__scopeId","data-v-9e1f8b5d"]]);export{D as W};