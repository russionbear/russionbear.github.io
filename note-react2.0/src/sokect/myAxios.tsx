import axios from "axios";
/**
 * 生产模式需要更改默认设置
 */
const myAxios = axios.create();

myAxios.post('/books', {type:'get'}).catch((response)=>{
  console.log(response)
  myAxios.defaults.baseURL = 'http://127.0.0.1:8000/'
}).then()

export default myAxios