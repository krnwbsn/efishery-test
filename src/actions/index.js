const SteinStore = require("stein-js-client");
const moment = require('moment');

const store = new SteinStore(
    "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4"
);

// load listdata
export const loadDataSuccess = (listdata) => ({
    type: 'LOAD_DATA_SUCCESS',
    listdata
})

export const loadDataFailure = () => ({
    type: 'LOAD_DATA_FAILURE'
})

export const loadData = () => {
    return dispatch => {
        return store.read('list')
        .then(function(response) {
            dispatch(loadDataSuccess(response.data));
        })
        .catch(function(error) {
            console.log(error);
            dispatch(loadDataFailure());
        })
    }
}

// post data
export const postDataSuccess = (listdata) => ({
    type: 'POST_DATA_SUCESS',
    listdata
})

export const postDataFailure = (id) => ({
    type: 'POST_DATA_FAILURE', 
    id
})

const postDataRedux = (id, komoditas, area_provinsi, area_kota, size, price, tgl_parsed) => ({
    type: 'POST_DATA',
    id,
    komoditas,
    area_provinsi, 
    area_kota, 
    size, 
    price, 
    tgl_parsed
})

export const postData = (komoditas,
    area_provinsi, 
    area_kota, 
    size, 
    price, 
    tgl_parsed) => {
    let id = Date.now();
    return dispatch => {
        dispatch(postDataRedux(id, komoditas,
    area_provinsi, 
    area_kota, 
    size, 
    price, 
    tgl_parsed));
        return store.append('list', {id, komoditas,
    area_provinsi, 
    area_kota, 
    size, 
    price, 
    tgl_parsed})
        .then(function(response){
            return store.read('list')
            .then(function(response){
                dispatch(postDataSuccess(response.data));
            })
        })
        .catch(function(error){
            console.log(error);
            dispatch(postDataFailure(id));
        })
    }
}