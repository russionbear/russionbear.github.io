import axios from "axios";
/**
 * 生产模式需要更改默认设置
 */
const myAxios = axios.create();

let github_url = 'https://whitebear.ml/books'
// let github_url = undefined

if(github_url!==undefined){
  myAxios.defaults.baseURL = github_url
}else{
  myAxios.post('/books', {type:'get'}).catch((response)=>{
    console.log(response)
    myAxios.defaults.baseURL = 'http://127.0.0.1:8000/'
  }).then()
}


export default myAxios