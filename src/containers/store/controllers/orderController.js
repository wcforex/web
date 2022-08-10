import { globalGetAllApi, globalCreateApi, globalDeleteApi, globalGetOneApi, globalUpdateApi } from "../services/globalApis"

export const getOrdersController = () => {
    new Promise(function(resolve, reject) {
        globalGetAllApi('/all').then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
} 

export const getOrderController = (id) => {
    new Promise(function(resolve, reject) {
        globalGetOneApi(`/${id}`).then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
}

export const createOrderController = (data) => {
    new Promise(function(resolve, reject) {
        globalCreateApi('/create', data).then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
}

export const updateOrderController = (id, data) => {
    new Promise(function(resolve, reject) {
        globalUpdateApi(`/${id}`, data).then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
}

export const deleteOrderController = (id) => {
    new Promise(function(resolve, reject) {
        globalDeleteApi(`/${id}`).then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
}


