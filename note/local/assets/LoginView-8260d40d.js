import{I as V}from"./dataFormat-beb63422.js";import{U as _,_ as U}from"./localAxios-f87130d1.js";import{U as h}from"./backend-1e23b029.js";import{d as C,r as L,v as N,l as B,a as E,f as b,t as F,u as A,b as a,w as o,k as O,e as u,o as R,i as f,y as c}from"./index-095ee474.js";const $={class:"bg"},D={class:"container"},G=C({__name:"LoginView",setup(H){const g=L("username"),w=O(),n=N(),e=B({username:"",email:"",password:""}),v="/static/public/public/login/cover.png",y=()=>{for(let l of e.username)if(V.indexOf(l)!=-1){c({type:"info",message:"非法字符+/? %#$=空格"});return}_.check(e.username,e.password,null).then(l=>{l.data!=null&&l.data!=null&&(n.userid=l.data.userid,n.username=l.data.username,n.password=e.password,n.email=e.email,n.token="token",localStorage.setItem("userid",l.data.userid),localStorage.setItem("username",l.data.username),localStorage.setItem("password",e.password),localStorage.setItem("email",e.email),localStorage.setItem("token","token"),w.push("/visit"))})},I=()=>{_.check(null,e.password,e.email).then(l=>{l.data!=null&&l.data!=null&&(n.userid=l.data.userid,n.username=l.data.username,n.password=e.password,n.email=e.email,n.token="token",localStorage.setIterm("userid",l.data.userid),localStorage.setItem("username",l.data.username),localStorage.setItem("password",e.password),localStorage.setItem("email",e.email),localStorage.setItem("token","token"),w.push("/visit"))})},k=()=>{for(let t of e.username)if(V.indexOf(t)!=-1){c({type:"info",message:"非法字符+/? %#$=空格"});return}const l=new h;l.email=e.email,l.password=e.password,l.username=e.username,l.role="",_.registerUser(l).then(t=>{t.data=="1"&&c({type:"success",message:"success"})})};return(l,t)=>{const S=u("el-image"),r=u("el-input"),m=u("el-form-item"),d=u("el-button"),i=u("el-form"),p=u("el-tab-pane"),x=u("el-tabs");return R(),E("div",$,[b("span",null,F(A(n).token!=null?"logined":""),1),b("div",D,[a(S,{class:"image",src:v,fit:"cover"}),a(x,{modelValue:g.value,"onUpdate:modelValue":t[7]||(t[7]=s=>g.value=s)},{default:o(()=>[a(p,{label:"username",name:"username"},{default:o(()=>[a(i,{"status-icon":"","label-width":"120px",class:"demo-ruleForm"},{default:o(()=>[a(m,{label:"username"},{default:o(()=>[a(r,{modelValue:e.username,"onUpdate:modelValue":t[0]||(t[0]=s=>e.username=s),placeholder:"username",minlength:1},null,8,["modelValue"])]),_:1}),a(m,{label:"password"},{default:o(()=>[a(r,{modelValue:e.password,"onUpdate:modelValue":t[1]||(t[1]=s=>e.password=s),type:"password",autocomplete:"off",maxlength:32},null,8,["modelValue"])]),_:1}),a(m,null,{default:o(()=>[a(d,{type:"primary",onClick:y},{default:o(()=>[f("Submit")]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{label:"email",name:"email"},{default:o(()=>[a(i,{"status-icon":"","label-width":"120px",class:"demo-ruleForm"},{default:o(()=>[a(m,{label:"email"},{default:o(()=>[a(r,{modelValue:e.username,"onUpdate:modelValue":t[2]||(t[2]=s=>e.username=s),placeholder:"email",minlength:1},null,8,["modelValue"])]),_:1}),a(m,{label:"password"},{default:o(()=>[a(r,{modelValue:e.password,"onUpdate:modelValue":t[3]||(t[3]=s=>e.password=s),type:"password",autocomplete:"off",maxlength:32},null,8,["modelValue"])]),_:1}),a(m,null,{default:o(()=>[a(d,{type:"primary",onClick:I},{default:o(()=>[f("Submit")]),_:1})]),_:1})]),_:1})]),_:1}),a(p,{label:"register",name:"register"},{default:o(()=>[a(i,{"status-icon":"","label-width":"120px",class:"demo-ruleForm"},{default:o(()=>[a(m,{label:"email"},{default:o(()=>[a(r,{modelValue:e.username,"onUpdate:modelValue":t[4]||(t[4]=s=>e.username=s),placeholder:"email",minlength:1},null,8,["modelValue"])]),_:1}),a(m,{label:"username"},{default:o(()=>[a(r,{modelValue:e.username,"onUpdate:modelValue":t[5]||(t[5]=s=>e.username=s),placeholder:"username",minlength:1},null,8,["modelValue"])]),_:1}),a(m,{label:"password"},{default:o(()=>[a(r,{modelValue:e.password,"onUpdate:modelValue":t[6]||(t[6]=s=>e.password=s),type:"password",autocomplete:"off",maxlength:32},null,8,["modelValue"])]),_:1}),a(m,null,{default:o(()=>[a(d,{type:"primary",onClick:k},{default:o(()=>[f("Submit")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])}}});const z=U(G,[["__scopeId","data-v-a9a4c1dd"]]);export{z as default};