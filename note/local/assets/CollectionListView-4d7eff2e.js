import{d as x,e as m,o as r,h as b,w as u,f as _,t as f,b as p,i as v,v as k,r as I,l as w,s as V,a as C,F as $,g as B,x as L,u as z,k as N}from"./index-095ee474.js";import{_ as y,C as h}from"./localAxios-f87130d1.js";import{C as S}from"./backend-1e23b029.js";import{i as D}from"./generalConfig-4c4c12a0.js";const E={class:"card-container"},F=x({__name:"CollectionInfo",props:{collection:null},emits:["delete","enter"],setup(s,{emit:l}){return(a,n)=>{const t=m("el-button"),c=m("el-card");return r(),b(c,{class:"box-card",shadow:"hover"},{default:u(()=>[_("div",E,[_("span",null,f(s.collection.notename),1),_("time",null,f(s.collection.username),1),p(t,{type:"primary",size:"small",onClick:n[0]||(n[0]=d=>l("enter",s.collection))},{default:u(()=>[v("enter")]),_:1}),p(t,{size:"small",onClick:n[1]||(n[1]=d=>l("delete",s.collection))},{default:u(()=>[v("delete")]),_:1})])]),_:1})}}});const A=y(F,[["__scopeId","data-v-b537f607"]]),M=x({__name:"CollectionListView",setup(s){const l=N(),a=k(),n=I(!1),t=w([...Array(0).keys()].map(e=>{const o=new S;return o.userid="userid",o.notename="sdfs;dfsd;f",o.username="username",o}));V(()=>{if(a.token==null){l.push("/visit/login");return}n.value||(n.value=!0,h.getCollection(a.userid,0).then(e=>{console.log(e.data),t.splice(0,t.length,...e.data)}))});const c=e=>{l.push(`/visit/article?/${e.username}/${e.bookname}/${e.notename}`)},d=e=>{h.deleteOne(e.noteid,a.userid).then(o=>{if(o.data=="1"){let i=t.findIndex(g=>g.noteid==e.noteid);i!==-1&&t.splice(i,1)}})};return(e,o)=>(r(),C("div",{class:"container",style:L({width:z(D)?"100%":"50%"})},[(r(!0),C($,null,B(t,i=>(r(),b(A,{onDelete:d,onEnter:c,collection:i},null,8,["collection"]))),256))],4))}});const U=y(M,[["__scopeId","data-v-83b01cba"]]);export{U as default};