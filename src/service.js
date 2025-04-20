import axios from 'axios';

const my_axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}
)

my_axios.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    return Promise.reject(error);
  });
  // apiClient.interceptors.request.use(config => {
  //   // הוספת טוקן כותרת לכל בקשה
  //   config.headers['Authorization'] = 'Bearer your-token';
  //   return config;
  // }, error => {
  //   return Promise.reject(error);
  // });



export default {
  getTasks: async () => {
    const result = await my_axios.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await my_axios.post(`/items?name=${name}`, {
      // headers: {
      //     'Content-Type': 'application/json'
      // }
  });
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await my_axios.put(`/items/${id}?isComplete=${isComplete}`) 
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await my_axios.delete(`/items/${id}`)
    return result.data;
  }
};
