import {globalCreateApi, globalDeleteApi, globalGetAllApi, globalGetOneApi, globalUpdateApi} from '../services/globalApis';

export const getPackagesController = () => {
    new Promise(function(resolve, reject) {
        globalGetAllApi('/all').then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
} 

export const getPackageController = (id) => {
    new Promise(function(resolve, reject) {
        globalGetOneApi(`/${id}`).then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
}

export const createPacakgeController = (data) => {
    new Promise(function(resolve, reject) {
        globalCreateApi('/create', data).then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
}

export const updatePackageController = (id, data) => {
    new Promise(function(resolve, reject) {
        globalUpdateApi(`/${id}`, data).then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
}

export const deletePackageController = (id) => {
    new Promise(function(resolve, reject) {
        globalDeleteApi(`/${id}`).then((response) => resolve(response)).catch((err) => reject(new Error(`${err}`)))
    });
}