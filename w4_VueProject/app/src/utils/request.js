import axios from 'axios'

// 环境判断
console.log('process.env.NODE_ENV=',process.env.NODE_ENV)
export const baseUrl = 
// process.env.NODE_ENV === 'development' ? 
// 'http://10.3.136.163:2105' 
// : 
'http://120.76.247.5:2003';
export const apiUrl = baseUrl + '/api'
const instance = axios.create({
    // 默认配置
    baseURL:apiUrl,
    withCredentials:true
})

// export default instance;

async function request(config) {
   const {data} = await instance(config);
   return data;
}

request.get = async function(url,data,config={}){
    const {data:res} = await instance.get(url,{
        ...config,
        params:data
    });
   return res;
}
request.post = async function(url,data,config){
    const {data:res} = await instance.post(url,data,config);
   return res;
}
request.delete = async function(url,data,config={}){
    const {data:res} = await instance.delete(url,{
        ...config,
        params:data
    });
    return res;
}
request.put = async function(url,data,config){
    const {data:res} = await instance.put(url,data,config);
   return res;
}
request.patch = async function(url,data,config){
    const {data:res} = await instance.patch(url,data,config);
   return res;
}

export default request;

// request('/login',{username,password,vcode})
// instance.post('/login')
// instance.get('/login',{
//     params:{
//         username,password
//     }
// })
// request.get('/login',{username,password})