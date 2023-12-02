import { API_URLS, LOCALSTORAGE_TOKEN_KEY } from "../utils";
// const customFetch= async(url,{body,...customConfig}) =>{
//   const token=window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
//   const headers={
//     'content-type':'application/json',
//      Accept: 'application/json'
//   }
//   if(token){
//     headers.Authorization=`Bearer${token}`;
//   }
//   const config={
//     ...customConfig,
//     headers:{
//       ...headers,
//       ...customConfig.headers
//     }
//   } 
//   if(body){
//     config.body=JSON.stringify(body);
//   }
//   try{
//     const response=await fetch(url,config);
//     const data=await response.json();
//     if(data.success){
//     return {
//       data:data.data,
//       success:true,
//     };
//   }
//   throw new Error(data.message);
// }catch(error){
//     console.error('error');
//     return{
//       message:error.message,
//       success:false,
//     }
//   }
// }

// export const getPosts = (page=1, limit=5) => {
//   return customFetch(API_URLS.posts(page,limit));
// };
const customFetch = async (url, { body, ...customConfig } = {}) => {
  const LOCALSTORAGE_TOKEN_KEY = 'your_token_key'; // Replace with your actual token key
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error('Error:', error);
    return {
      message: error.message,
      success: false,
    };
  }
};

// export const getPosts = (page = 1, limit = 5) => {
  // Replace API_URLS with your actual API URL
  // const API_URLS = `https://your-api-url/posts?page=${page}&limit=${limit}`;
  export const getPosts = (page=1, limit=5) => {
      return customFetch(API_URLS.posts(page,limit));
  // return customFetch(API_URLS);
};