import{d as y,e as u,o as l,h as s,w as o,f as a,t as n,b as v,i,n as m,y as M}from"./index-1956f8a2.js";import{_ as x}from"./localAxios-b17f8d20.js";const C={class:"card-container"},E={class:"card-dsc"},k=y({__name:"EditModelInfo",props:{editModel:null,canEdit:{type:Boolean,default:!1}},emits:["delete","edit"],setup(e,{emit:c}){const r=e,p=()=>{r.editModel.value!=null&&(navigator.clipboard.writeText(r.editModel.value),M({type:"success",message:"Copy to clipboard"}))};return(b,t)=>{const d=u("el-button"),_=u("el-card");return l(),s(_,{class:"box-card",shadow:"hover"},{default:o(()=>[a("div",C,[a("span",null,n(e.editModel.name),1),a("span",E,n(e.editModel.dsc),1),a("time",null,n(e.editModel.username),1),v(d,{type:"primary",size:"small",onClick:p},{default:o(()=>[i("copy")]),_:1}),e.canEdit?(l(),s(d,{key:0,type:"primary",size:"small",onClick:t[0]||(t[0]=f=>c("edit",e.editModel))},{default:o(()=>[i("edit")]),_:1})):m("",!0),e.canEdit?(l(),s(d,{key:1,size:"small",onClick:t[1]||(t[1]=f=>c("delete",e.editModel))},{default:o(()=>[i("delete")]),_:1})):m("",!0)])]),_:1})}}});const h=x(k,[["__scopeId","data-v-83162ca2"]]);export{h as E};
