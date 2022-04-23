import axios from "axios";
const myAxios = axios.create();

myAxios.post('/books', {type:'get'}).catch((response)=>{
  console.log(response)
  myAxios.defaults.baseURL = 'http://127.0.0.1:8000/'
})

export default myAxios