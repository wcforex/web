import axios from "axios";

const BASEURL = ""

export const loginApi = async (data) => {
axios.post(BASEURL + 'login', data).catch((err) => console.log(err))
}

export const registerApi = async (data) => {
 axios.post(BASEURL + 'register', data).catch((err) => console.log(err))
}

export const forgetPasswordApi = async (data) => {
 axios.post(BASEURL + 'forget-password', data).catch((err) => console.log(err))
}

export const resetPasswordApi = async (data) => {
axios.post(BASEURL + 'reset-password', data).catch((err) => console.log(err))
}

