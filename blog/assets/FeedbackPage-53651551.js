import{d as I,u as P,c as U,r as N,o as A,e as L,a2 as v,f as c,g as C,i as a,w as n,z as w,j as i,F as M,l as T,h as z,E as h,U as D,s as $,x as j,m as q,a3 as H,a4 as J,p as R,q as G,H as K,J as O,_ as Q}from"./index-31ea285c.js";/* empty css               *//* empty css                   *//* empty css                *//* empty css                  *//* empty css                   */import{c as _}from"./Cos-0001a053.js";import{f as x}from"./Feedback-313a8f0e.js";const W=l=>(K("data-v-bd46571d"),l=l(),O(),l),X={class:"container"},Y=W(()=>w("span",null,"确定提交？",-1)),Z={class:"dialog-footer"},ee=I({__name:"FeedbackPage",setup(l){const g=P(),o=U({text:"",showConfirm:!1}),k=(r,e,d)=>{_.createFileMeta(void 0,void 0,void 0,void 0,void 0,d[0].size).then(s=>{if(!s)throw new Error("create file meta failed");_.uploadFile(s,d[0]).catch(f=>{h.error("上传失败"),_.deleteFile(s)}).then(()=>{e({url:D.cosUrlPrefix+"/"+s,desc:"图片描述"})})})},b=()=>{x.putFeedback(o.text).then(r=>{h.success("提交成功"),o.showConfirm=!1,o.text="",m()})},p=N([]),m=()=>{x.listFeedback().then(r=>{p.value=r.content})},u=()=>{g.switchPage([])};return A(()=>{u()}),L(()=>{u(),m()}),(r,e)=>{const d=v("v-md-editor"),s=$,f=j,E=q,F=H,V=v("v-md-preview"),B=J,S=R,y=G;return c(),C("div",X,[a(d,{onSave:e[0]||(e[0]=t=>o.showConfirm=!0),onUploadImage:k,modelValue:o.text,"onUpdate:modelValue":e[1]||(e[1]=t=>o.text=t),height:"500px","disabled-menus":[]},null,8,["modelValue"]),a(f,{modelValue:o.showConfirm,"onUpdate:modelValue":e[3]||(e[3]=t=>o.showConfirm=t),title:"Conform",width:"500","align-center":""},{footer:n(()=>[w("div",Z,[a(s,{onClick:e[2]||(e[2]=t=>o.showConfirm=!1)},{default:n(()=>[i("Cancel")]),_:1}),a(s,{type:"primary",onClick:b},{default:n(()=>[i(" Confirm ")]),_:1})])]),default:n(()=>[Y]),_:1},8,["modelValue"]),a(F,null,{default:n(()=>[a(E,null,{default:n(()=>[i("历史反馈")]),_:1})]),_:1}),(c(!0),C(M,null,T(p.value,t=>(c(),z(y,{key:t.id},{default:n(()=>[a(S,{span:20},{default:n(()=>[a(B,null,{default:n(()=>[a(V,{text:"create at "+t.createTime+`
`+t.content},null,8,["text"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])}}});const ce=Q(ee,[["__scopeId","data-v-bd46571d"]]);export{ce as default};
