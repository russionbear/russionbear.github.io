var c=Object.defineProperty;var i=(a,e,s)=>e in a?c(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var t=(a,e,s)=>(i(a,typeof e!="symbol"?e+"":e,s),s);import{au as n}from"./index-31ea285c.js";class r{constructor(e){t(this,"session");this.session=e}async listFeedback(e=0,s=1e3){return(await this.session.get("/feedback",{params:{page:e,pageSize:s}})).data}async putFeedback(e){return await this.session.put("/feedback",{content:e})}}const b=new r(n);export{b as f};