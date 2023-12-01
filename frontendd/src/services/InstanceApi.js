import axios from "axios";


export const createAxiosInstance = () => {
  
  return axios.create({
    headers: {
      'apikey': `${process.env.REACT_APP_API_KEY}`,
    },
  });
};


export const createAxiosInstanceAuth = () => {
    const token = localStorage.getItem('Authorization');
    return axios.create({
      headers: {
        // 'apikey': `${process.env.REACT_APP_API_KEY}`,
        'Authorization': `${token}`
        
      },
    });
  };