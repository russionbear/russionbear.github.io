import{d as F,r as l,f as M,g as w,M as p,N as _,z as d,aG as g,D as u,O as B,_ as D}from"./index-31ea285c.js";const R=F({__name:"SplitPanelLayout",props:{originalFistSize:{default:"50%"},originalSecondSize:{default:"50%"},firstMin:{},secondMin:{}},setup(S){const{originalFistSize:h,originalSecondSize:y,secondMin:e,firstMin:t}=S,r=l(null),v=l(h),f=l(y),s=l(!1),i=l(!1),m=(...n)=>{const o=r.value.getBoundingClientRect().width;let a=(n[0].clientX-r.value.getBoundingClientRect().left)*100/o,z=t?t[t.length-1]=="%"?parseFloat(t):parseFloat(t)*100/o:0,c=e?e[e.length-1]=="%"?parseFloat(e):parseFloat(e)*100/o:0;c=100-c,a<=z?s.value=!0:a>=c?i.value=!0:(s.value=!1,i.value=!1),a=B.clamp(a,0,100),v.value=a+"%",f.value=100-a+"%"};return(n,o)=>(M(),w("div",{class:"split-layout",ref_key:"containerRef",ref:r},[p(d("div",{class:"left-panel",style:u({width:v.value,minWidth:t})},[g(n.$slots,"first",{},void 0,!0)],4),[[_,!s.value]]),d("div",{class:"splitter",draggable:"true",onDragend:m,style:u({opacity:s.value||i.value?0:1})},null,36),p(d("div",{class:"right-panel",style:u({minWidth:e,width:f.value})},[g(n.$slots,"second",{},void 0,!0)],4),[[_,!i.value]])],512))}});const C=D(R,[["__scopeId","data-v-ae4a849d"]]);export{C as S};