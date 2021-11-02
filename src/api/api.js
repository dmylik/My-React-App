import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "4558af43-6a15-453e-98d3-2645a1eab72c"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const getUsers = (currentPage, pageSize) => {
    return  instance.get(`users/?page=${currentPage}&count=${pageSize}`)
        .then(response =>{return  response.data})
};

// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//     {withCredentials: true,
//         headers: {"API-KEY": "4558af43-6a15-453e-98d3-2645a1eab72c"}})

export const userPostFollow = (id) => {
    return  instance.post(`follow/${id}`)
        .then(response =>{return  response.data})
};

export const userDeleteFollow = (id) => {
    return  instance.delete(`follow/${id}`)
        .then(response =>{return  response.data})
};
