import{d as k,c as g,r as w,a as u,b as e,w as o,F as d,e as t,o as a,f as s,g as E,h as p,i as _,t as S,u as l,E as m,V as T}from"./index-095ee474.js";import{S as B}from"./SearchDialog-e3114272.js";import{_ as C}from"./localAxios-f87130d1.js";import"./backend-1e23b029.js";import"./NoteInfo-690b88df.js";import"./generalConfig-4c4c12a0.js";const I={class:"container"},L={class:"header"},R={class:"body"},D=k({__name:"VisitLayoutView",setup(N){const f=g(()=>T.filter(c=>c.title!=null)),n=w(null),h=()=>{n.value!=null&&(n.value.visible=!0)};return(c,F)=>{const i=t("el-menu-item"),v=t("el-menu"),b=t("el-button"),x=t("router-view"),y=t("el-backtop"),V=t("el-scrollbar");return a(),u(d,null,[e(V,null,{default:o(()=>[s("div",I,[s("div",L,[e(v,{class:"el-menu-demo nav_menu","background-color":"#545c64",mode:"horizontal",router:!0,"text-color":"#fff","active-text-color":"#ffd04b"},{default:o(()=>[(a(!0),u(d,null,E(l(f),r=>(a(),p(i,{index:r.path,key:r.path},{default:o(()=>[_(S(r.title),1)]),_:2},1032,["index"]))),128)),(a(),p(i,{index:l(m)[0].path,key:l(m)[0].path},{default:o(()=>[_("toEdit ")]),_:1},8,["index"]))]),_:1}),e(b,{type:"primary",text:"",onClick:h},{default:o(()=>[_("search")]),_:1})]),s("div",R,[e(x)])]),e(y,{bottom:100,target:".el-scrollbar__wrap"})]),_:1}),e(B,{ref_key:"search_dialog_ref",ref:n},null,512)],64)}}});const G=C(D,[["__scopeId","data-v-7b0c89e6"]]);export{G as default};
