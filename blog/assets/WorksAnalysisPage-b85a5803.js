import{B as e}from"./index-88ad1515.js";import{D as c}from"./DataGenerator-e1ea0cda.js";import{d as p,r as d,f as m,g as u,z as i,i as a,A as t,_ as f}from"./index-31ea285c.js";import{L as l}from"./install-7b032135.js";const _={class:"container"},h={class:"row"},g={class:"row"},y={class:"row"},v=p({__name:"WorksAnalysisPage",setup(x){const r=c.generateTimeLinearData(1e3),n=d({color:["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"],title:{text:"Gradient Stacked Area Chart"},top:"10px",tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Line 1","Line 2","Line 3","Line 4","Line 5"],top:"20px",right:"10px"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:r.map(o=>o.date)}],yAxis:[{type:"value"}],series:[{name:"Line 1",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new l(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])},emphasis:{focus:"series"},data:r.map(o=>o.value)},{name:"Line 2",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new l(0,0,0,1,[{offset:0,color:"rgb(0, 221, 255)"},{offset:1,color:"rgb(77, 119, 255)"}])},emphasis:{focus:"series"},data:r.map(o=>o.value+20)}]}),s={title:{text:"Referer of a Website",subtext:"Fake Data",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return(o,b)=>(m(),u("div",_,[i("div",h,[a(t(e),{class:"chart",option:n.value,autoresize:""},null,8,["option"]),a(t(e),{class:"chart",option:s,autoresize:""})]),i("div",g,[a(t(e),{class:"chart",option:n.value,autoresize:""},null,8,["option"]),a(t(e),{class:"chart",option:s,autoresize:""})]),i("div",y,[a(t(e),{class:"chart",option:s,autoresize:""}),a(t(e),{class:"chart",option:s,autoresize:""}),a(t(e),{class:"chart",option:s,autoresize:""})])]))}});const k=f(v,[["__scopeId","data-v-6156f083"]]);export{k as default};
