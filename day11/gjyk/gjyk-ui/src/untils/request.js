import axios from 'axios'

const httpAxios = axios.create()

httpAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return {
        ...config,
        headers:{
            ...config.headers,
            'authorization':window.localStorage.token
        }
    };
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
httpAxios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default httpAxios