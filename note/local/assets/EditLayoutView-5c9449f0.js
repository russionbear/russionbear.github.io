import{d as w,v as E,c as I,r as C,s as N,a as m,b as o,w as n,F as f,k as B,e as a,o as r,f as _,g as R,h as p,i as c,t as T,u as i,V as h,E as L}from"./index-095ee474.js";import{S as D}from"./SearchDialog-e3114272.js";import{S as U,N as A,_ as F}from"./localAxios-f87130d1.js";import"./backend-1e23b029.js";import"./NoteInfo-690b88df.js";import"./generalConfig-4c4c12a0.js";const O={class:"container"},z={class:"header"},M={class:"body"},j=w({__name:"EditLayoutView",setup(q){const g=B(),e=E(),v=I(()=>L.filter(t=>t.title!=null)),s=C(null),b=()=>{s.value!=null&&(s.value.visible=!0)};return N(()=>{if(e.token==null){g.push("/visit/login");return}U.getAllByName(e.userid).then(t=>{e.storages.splice(0,e.storages.length,...t.data),t.data.length!=0&&(e.current_storage=t.data[0].bookname,A.getAll(e.username,e.storages[0].bookname).then(u=>{e.notelist.splice(0,e.notelist.length,...u.data),t.data.length!=0&&(e.current_notename=t.data[0].notename)}))})}),(t,u)=>{const d=a("el-menu-item"),k=a("el-menu"),x=a("el-button"),y=a("router-view"),V=a("el-backtop"),S=a("el-scrollbar");return r(),m(f,null,[o(S,null,{default:n(()=>[_("div",O,[_("div",z,[o(k,{class:"el-menu-demo nav_menu","background-color":"#545c64",mode:"horizontal",router:!0,"text-color":"#fff","active-text-color":"#ffd04b"},{default:n(()=>[(r(!0),m(f,null,R(i(v),l=>(r(),p(d,{index:l.path,key:l.path},{default:n(()=>[c(T(l.title),1)]),_:2},1032,["index"]))),128)),(r(),p(d,{index:i(h)[0].path,key:i(h)[0].path},{default:n(()=>[c("toVisit ")]),_:1},8,["index"]))]),_:1}),o(x,{type:"primary",text:"",onClick:b},{default:n(()=>[c("search")]),_:1})]),_("div",M,[o(y)])]),o(V,{bottom:100,target:".el-scrollbar__wrap"})]),_:1}),o(D,{ref_key:"search_dialog_ref",ref:s},null,512)],64)}}});const W=F(j,[["__scopeId","data-v-638d895f"]]);export{W as default};
