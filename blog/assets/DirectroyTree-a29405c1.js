var p=Object.defineProperty;var N=(i,e,t)=>e in i?p(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var c=(i,e,t)=>(N(i,typeof e!="symbol"?e+"":e,t),t);import{O as a}from"./index-31ea285c.js";let u;const E=new Uint8Array(16);function m(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(E)}const o=[];for(let i=0;i<256;++i)o.push((i+256).toString(16).slice(1));function L(i,e=0){return o[i[e+0]]+o[i[e+1]]+o[i[e+2]]+o[i[e+3]]+"-"+o[i[e+4]]+o[i[e+5]]+"-"+o[i[e+6]]+o[i[e+7]]+"-"+o[i[e+8]]+o[i[e+9]]+"-"+o[i[e+10]]+o[i[e+11]]+o[i[e+12]]+o[i[e+13]]+o[i[e+14]]+o[i[e+15]]}const O=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:O};function _(i,e,t){if(y.randomUUID&&!e&&!i)return y.randomUUID();i=i||{};const r=i.random||(i.rng||m)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){t=t||0;for(let s=0;s<16;++s)e[t+s]=r[s];return e}return L(r)}class P{static random(e,t){switch(arguments.length){case 1:return parseInt((Math.random()*e+1).toString(),10);case 2:return parseInt((Math.random()*(t-e+1)+e).toString(),10);default:return 0}}static uuid(){_()}static string2color(e){let t=0;for(let s=0;s<e.length;s++)t=e.charCodeAt(s)+((t<<5)-t);let r="#";for(let s=0;s<3;s++){const l=t>>s*8&255;r+=("00"+l.toString(16)).substring(-2)}return r}static decomposePath(e){const t=e.split("/").filter(Boolean);return t.reduce((r,s,l)=>{const h=t.slice(0,l+1).join("/");return r.push("/"+h),r},[])}}class f{constructor(){c(this,"KEY_SPLIT","/");c(this,"index",-1);c(this,"key","");c(this,"fullIndex","");c(this,"fullKey","");c(this,"extra",null);c(this,"children",{});c(this,"isRoot",!1)}enterTree(e,t=null,r){const s=e.split(this.KEY_SPLIT);let l=this;for(const h of s)if(h!="")if(l.children[h])l=l.children[h];else{const n=new f;n.key=h,n.index=a.keys(l.children).length,l.isRoot?n.fullIndex=n.index+"":n.fullIndex=l.fullIndex+this.KEY_SPLIT+n.index,l.isRoot?n.fullKey=n.key:n.fullKey=l.fullKey+this.KEY_SPLIT+n.key,l.children[h]=n,l=n}return l==this?null:(l.extra==null&&(l.extra=t,r&&(t[r]=l)),l)}renameFields(e){for(const t of a.values(this.children))t.renameFields(e);this.isRoot||e(this)}getLength(){let e=0;for(const t of a.values(this.children))e+=t.getLength();return e+1}getLeaves(){let e=[];for(const t of a.values(this.children))e=e.concat(t.getLeaves());return a.keys(this.children).length==0&&e.push(this),e}sortChildrenByKey(e,t=!1){for(const r of a.values(this.children))r.sortChildrenByKey(e,t);this.children=a.sortBy(this.children,r=>t?parseFloat(a.get(r,e)):a.get(r,e))}}class U{constructor(e="id",t="",r="",s="name",l="",h="/",n="/",d="",K=!0,D=!0,I="children",g="array"){this.idKey=e,this.fullFloorKey=t,this.floorKey=r,this.nameKey=s,this.fullNameKey=l,this.nameDelimiter=h,this.floorDelimiter=n,this.parentIdKey=d,this.canRefreshFloorKey=K,this.ignoreEmptyNameString=D,this.childrenKey=I,this.childrenType=g}countLeaves(e){let t=0;const r=[e];for(;r.length;){t++;const s=r.shift(),l=this.getChildrenArray(s);r.push(...l)}return t}enterRootByFullName(e,t){const r=t[this.fullNameKey].split(this.nameDelimiter);let s=e;for(const l of r.splice(0,r.length-1)){if(l==""&&this.ignoreEmptyNameString)continue;let h;switch(this.childrenType){case"array":h=a.find(s[this.childrenKey],n=>n[this.nameKey]==l);break;case"idDict":h=a.chain(s[this.childrenKey]).values().find(n=>n[this.nameKey]===l).value();break;case"nameDict":h=s[this.childrenKey][l];break}if(h)s=h;else return{isOk:!1,nearestParentNode:s}}this.enterParentNode(t,s),this.refreshNodeAttributes(t,s)}enterRootByFullFloor(e,t){const r=t[this.fullFloorKey].split(this.floorDelimiter);let s=e;for(const l of r.splice(0,r.length-1)){const h=parseInt(l);if(isNaN(h))continue;let n;switch(this.childrenType){case"array":n=a.find(s[this.childrenKey],d=>d[this.floorKey]==l);break;case"idDict":case"nameDict":n=a.chain(s[this.childrenKey]).values().find(d=>d[this.floorKey]==l).value();break}if(n)s=n;else return{isOk:!1,nearestParentNode:s}}this.enterParentNode(t,s),this.refreshNodeAttributes(t,s)}makeRootByParentId(e){const t={},r={},s=[],l=[];for(const h of e)h[this.parentIdKey]?(r[h[this.parentIdKey]]=r[h[this.parentIdKey]]||[],r[h[this.parentIdKey]].push(h)):(s.push(h),l.push(h));for(;s.length;){const h=s.shift();if(t[h[this.idKey]])throw new Error("loop");const n=r[h[this.idKey]]||[];for(const d of n)this.enterParentNode(d,h),this.refreshNodeAttributes(d,h),s.push(d);delete r[h[this.idKey]]}return l}refreshNodeAttributes(e,t){this.fullNameKey&&this.nameKey&&(e[this.fullNameKey]=t[this.fullFloorKey]+this.nameDelimiter+e[this.nameKey]),this.canRefreshFloorKey&&this.floorKey&&(e[this.floorKey]=this.childrenType==="array"?t[this.childrenKey].length:a.keys(t[this.childrenKey]).length),this.floorKey&&this.fullFloorKey&&(e[this.floorKey]=t[this.fullFloorKey]+this.floorDelimiter+e[this.floorKey]),this.parentIdKey&&(e[this.parentIdKey]=t[this.idKey])}enterParentNode(e,t){switch(this.childrenType){case"array":t[this.childrenKey]=t[this.childrenKey]||[],t[this.childrenKey].push(e);break;case"idDict":t[this.childrenKey]=t[this.childrenKey]||{},t[this.childrenKey][e[this.idKey]]=e;break;case"nameDict":t[this.childrenKey]=t[this.childrenKey]||{},t[this.childrenKey][e[this.nameKey]]=e;break}}getChildrenArray(e){switch(this.childrenType){case"array":return e[this.childrenKey]||[];case"idDict":case"nameDict":return a.values(e[this.childrenKey])||[];default:return[]}}}class k{constructor(){c(this,"id");c(this,"fullPath");c(this,"parentId");c(this,"icon");c(this,"iconType");c(this,"label");c(this,"tags");c(this,"detail");c(this,"expend");c(this,"children");c(this,"selected");c(this,"isDir");c(this,"fileSize");c(this,"fileName");c(this,"createTime");c(this,"updateTime")}sortBy(e,t="ASC"){this.children&&(this.children.sort((r,s)=>t=="ASC"?r[e]>s[e]?1:-1:r[e]>s[e]?-1:1),this.children.forEach(r=>r.sortBy(e,t)))}search(e,t=!1,r=[]){if(r.length&&!t)return r;const s=this;for(const l of e.conditions){if(s[l.key]==l.value){if(!e.all){r.push(this);break}}else if(e.all)break;r.push(this)}return this.children&&this.children.forEach(l=>{l.search(e,t,r)}),r}}var A=(i=>(i.NONE="NONE",i.ADD_FILE="ADD_FILE",i.ADD_FOLDER="ADD_FOLDER",i.RENAME="RENAME",i.DELETE="DELETE",i.MOVE="MOVE",i.AUTHORITY="AUTHORITY",i.SETTING="SETTING",i.NODE_CLICK="NODE_CLICK",i.NODE_RIGHT_CLICK="NODE_RIGHT_CLICK",i.NODE_DOUBLE_CLICK="NODE_DOUBLE_CLICK",i.COPY_LINK="COPY_LINK",i.CHANGE_VIEW_MODE="CHANGE_VIEW_MODE",i.UPLOAD="UPLOAD",i.RE_UPLOAD="RE_UPLOAD",i.TO_EDIT="TO_EDIT",i))(A||{});export{k as D,A as E,P as M,f as T,U as a};