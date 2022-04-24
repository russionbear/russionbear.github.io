import axios from "axios";
/**
 * 生产模式需要更改默认设置
 */
const myAxios = axios.create();
// export const prim_url = 'http://127.0.0.1:8000/'


export default myAxios


const webAxios = axios.create();
webAxios.defaults.baseURL = 'https://whitebear.ml/books'

export { webAxios }