// import axios, { AxiosRequestConfig } from 'axios';

// const token = ''

// axios.post('http://localhost:3333', {
//     "email": ,
//     "password":,
//     "isAdmin": false
// }, {
//     headers: {
//         'Authorization': `Bearer ${token}`
//     }
// })






// import axios, { AxiosRequestConfig } from 'axios';

// export const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3333',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// // Adicionar um interceptor para incluir o token de autorização no cabeçalho
// axiosInstance.interceptors.request.use(
//     (config: AxiosRequestConfig) => {
//         const token = 'seu-token-de-autorizacao-aqui';
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

