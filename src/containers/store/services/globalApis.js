import axios from "axios";
const BASEURL = ''

export const globalGetAllApi = async (endpoint) => {
    await axios.get(BASEURL + `${endpoint}`).catch((err) => console.log(err))
}

export const globalGetOneApi = async (endpoint) => {
    await axios.get(BASEURL + `${endpoint}`)
}

export const globalCreateApi = async (endpoint, data) => {
    await axios.post(BASEURL + `${endpoint}`, data)
}

export const globalUpdateApi = async (endpoint, data) => {
    await axios.patch(BASEURL + `${endpoint}`, data)
}

export const globalDeleteApi = async (endpoint) => {
    await axios.delete(BASEURL + `${endpoint}/${id}`)
}



