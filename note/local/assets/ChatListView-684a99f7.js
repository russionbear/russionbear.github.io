import{C as m,a as d}from"./ChatDialog-3574f87b.js";import{a as _}from"./backend-1e23b029.js";import{d as g,v as p,l as f,s as h,m as v,r as C,a as i,F as y,g as k,b as w,u,x,k as V,o as n,h as b}from"./index-095ee474.js";import{i as L}from"./generalConfig-4c4c12a0.js";import{a as B,_ as D}from"./localAxios-f87130d1.js";const R=g({__name:"ChatListView",setup(T){const l=V(),t=p(),o=f([...Array(0).keys()].map(e=>{const s=new _;return s.createTime=new Date().getDate(),s.sourcename="sourcename",s.targetname="targetname",s.msg="msg",s}));h(()=>{if(t.token==null){l.push("/visit/login");return}B.getRecentRevMsg(t.userid,v().add(-6,"month").unix(),0).then(e=>{o.splice(0,o.length,...e.data.sort((s,r)=>s.createTime-r.createTime).map(s=>{let r=s;return r.sourceid==t.userid?(r.sourcename=t.username,r.targetname=r.username):(r.targetname=t.username,r.sourcename=r.username),r}))})});const a=C(null),c=e=>{console.log("hi"),a.value!=null&&(a.value.visible=!0,console.log(e),a.value.refresh(e.sourceid==t.userid?e.targetname:e.sourcename,e.sourceid==t.userid?e.targetid:e.sourceid),console.log("hi",e.sourceid==t.userid))};return(e,s)=>(n(),i("div",{class:"container",style:x({width:u(L)?"100%":"50%"})},[(n(!0),i(y,null,k(o,r=>(n(),b(d,{onEnter:c,"chat-info":r},null,8,["chat-info"]))),256)),w(m,{userid:u(t).userid,ref_key:"chat_dialog_ref",ref:a},null,8,["userid"])],4))}});const z=D(R,[["__scopeId","data-v-ac4b2111"]]);export{z as default};