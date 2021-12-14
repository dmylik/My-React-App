import * as axios from "axios";
import React from 'react';

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "d2c830c0-1c01-452e-85bf-c08fac5a15a0"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
//     {withCredentials: true,
//         headers: {"API-KEY": "4558af43-6a15-453e-98d3-2645a1eab72c"}})
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data;})
    },
    userPostFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {return response.data})
    },

    userDeleteFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {return response.data})
    }
};

export const profileAPI = {
    getUserProfile(userID){
        return instance.get(`profile/` + userID)
            .then(response => {return response.data})
    },
    getStatus(userID){
        return instance.get(`profile/status/` + userID)
            .then(response => {return response.data})
    },
    updateStatus(status1){
        return instance.put(`profile/status`, {status: status1})
    },
    savePhoto(filePhoto){
        const formData = new FormData();
        formData.append("image", filePhoto );
        return instance.put(`profile/photo`, formData, {
            headers: { 'Content-Type' : 'multipart/form-data'}})
    },
    saveUserInfo(profile){
        return instance.put(`profile`, profile);
    }
};

export const headerAPI = {
    authMe(){
        return instance.get(`auth/me`)
            .then(response => {return response.data})
    }
};

export const loginAPI = {
    login(email, password, rememberMe = false, captcha = null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => {return response.data})
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(response => {return response.data})
    }
};

export const securityAPI = {
    getCaptchaURL(){return instance.get(`security/get-captcha-url`)}
};

export const weatherAPI = {
    getWeatherCity(id){
    // &lang=ru
        return fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=7c3ff516549bbbbcdb03fd9a5319aaef`)
            .then(response => {return response.json()})
            .then(data => {return data})
    }
}

export const rateAPI = {
    getRateCity(){
        return axios.get(`http://api.currencylayer.com/live?access_key=6f818aef5fac86572e3acc93fe69d27b&currencies=EUR,GBP,PLN,RUB,BYN`)
            .then(response => { return response.data})
    }
}