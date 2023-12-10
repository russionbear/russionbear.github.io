import{a as y}from"./backend-1e23b029.js";import{d as D,e as m,o as _,h as g,w as l,f as i,t as h,u as T,m as x,i as w,n as M,r as d,v as U,l as $,b as V,a as F,g as H,F as L}from"./index-095ee474.js";import{_ as B,a as b}from"./localAxios-f87130d1.js";const S={class:"card-container"},j={class:"card-msg",text:""},A=D({__name:"ChatInfo",props:{chatInfo:null,hideButton:{type:Boolean,default:!1}},emits:["enter"],setup(o,{emit:p}){return(v,t)=>{const n=m("el-button"),f=m("el-card");return _(),g(f,{class:"box-card",shadow:"hover"},{default:l(()=>[i("div",S,[i("span",null,h(o.chatInfo.sourcename),1),i("span",j,h(o.chatInfo.msg),1),i("time",null,h(T(x)(o.chatInfo.createTime*1e3).format("MM/DD HH:mm")),1),o.hideButton?M("",!0):(_(),g(n,{key:0,type:"primary",onClick:t[0]||(t[0]=s=>p("enter",o.chatInfo))},{default:l(()=>[w("enter")]),_:1}))])]),_:1})}}});const E=B(A,[["__scopeId","data-v-ce091e9d"]]),q={class:"container"},z=D({__name:"ChatDialog",setup(o,{expose:p}){const v=d(!1),t=U(),n=d(""),f=d(""),s=d(""),C=d(!1),r=$([...Array(10).keys()].map(a=>{const e=new y;return e.targetname="notename",e.createTime=new Date().getDate(),e.msg="content",e}));p({visible:C,refresh:(a,e)=>{console.log(a,e),n.value=a,f.value=e,b.getDialogMsg(t.userid,e,x().add(-6,"month").unix(),0).then(I=>{r.splice(0,r.length,...I.data.map(c=>({...c,targetname:c.targetid==t.userid?t.username:n.value,sourcename:c.sourceid==t.userid?t.username:n.value}))),console.log("message",r)})}});const k=()=>{if(s.value.length==0||v.value)return;const a=new y;a.sourceid=t.userid,a.targetid=f.value,a.sourcename=t.username,a.targetname=n.value,a.msg=s.value,a.createTime=x().unix(),b.send(a).then(e=>{console.log(e),e.data!="0"&&(a.targetname=n.value,r.push(a),s.value="")}).finally(()=>{v.value=!1})};return(a,e)=>{const I=m("el-input"),c=m("el-scrollbar"),N=m("el-dialog");return _(),g(N,{modelValue:C.value,"onUpdate:modelValue":e[1]||(e[1]=u=>C.value=u),"show-close":!1,width:"60%"},{header:l(()=>[w(h(n.value),1)]),footer:l(()=>[V(I,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=u=>s.value=u),placeholder:"search for article",clearable:"",onChange:k},null,8,["modelValue"])]),default:l(()=>[V(c,{height:"480px"},{default:l(()=>[i("div",q,[(_(!0),F(L,null,H(r,u=>(_(),g(E,{"hide-button":!0,"chat-info":u},null,8,["chat-info"]))),256))])]),_:1})]),_:1},8,["modelValue"])}}});const P=B(z,[["__scopeId","data-v-a1f8cb81"]]);export{P as C,E as a};