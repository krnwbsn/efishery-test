const axios = require('axios');
const API_URL = 'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4';
const request = axios.create({
    baseURL: API_URL,
    timeout: 1000
})

// read area
export const readAreaSuccess = (list) => ({
    type: 'READ_AREA_SUCCESS',
    list
})

export const readAreaFailure = () => ({
    type: 'READ_AREA_FAILURE'
})

export const readArea = () => {
    return dispatch => {
        return request.get('/option_area')
            .then(function (response) {
                dispatch(readAreaSuccess(response.data));
            })
            .catch(function (error) {
                console.log(error);
                dispatch(readAreaFailure())
            })
    }
}

// read size
export const readSizeSuccess = (list) => ({
    type: 'READ_SIZE_SUCCESS',
    list
})

export const readSizeFailure = () => ({
    type: 'READ_SIZE_FAILURE'
})

export const readSize = () => {
    return dispatch => {
        return request.get('/option_size')
            .then(function (response) {
                dispatch(readSizeSuccess(response.data));
            })
            .catch(function (error) {
                console.log(error);
                dispatch(readSizeFailure())
            })
    }
}

// read list
export const readListSuccess = (list) => ({
    type: 'READ_LIST_SUCCESS',
    list
})

export const readListFailure = () => ({
    type: 'READ_LIST_FAILURE'
})

export const readList = () => {
    return dispatch => {
        return request.get('/list')
        .then(function(response){
            console.log(response)
            dispatch(readListSuccess(response.data));
        })
        .catch(function(error){
            console.log(error);
            dispatch(readListFailure())
        })
    }
}

// post list
export const postListSuccess = (list) => ({
    type: 'POST_LIST_SUCCESS',
    list
})

export const postListFailure = (uuid) => ({
    type: 'POST_LIST_FAILURE',
    uuid
})

const postListRedux = (uuid, komoditas, area_provinsi, area_kota, size, price, tgl_parsed, timestamp) => ({
    type: 'POST_LIST',
    uuid,
    komoditas,
    area_provinsi,
    area_kota,
    size,
    price,
    tgl_parsed,
    timestamp
})

export const postList = (uuid, komoditas, area_provinsi, area_kota, size, price, tgl_parsed, timestamp) => {
    return dispatch => {
        dispatch(postListRedux(uuid, komoditas, area_provinsi, area_kota, size, price, tgl_parsed, timestamp));
        return request.post('/list', { uuid, komoditas, area_provinsi, area_kota, size, price, tgl_parsed, timestamp })
            .then(function (response) {
                return request.get('/list')
                    .then(function (response) {
                        dispatch(postListSuccess(response.data));
                    })
            })
            .catch(function (error) {
                console.log(error);
                dispatch(postListFailure(uuid))
            })
    }
}

// edit list
const editListRedux = (uuid, komoditas, area_provinsi, area_kota, size, price, tgl_parsed, timestamp) => ({
    type: 'EDIT_LIST',
    uuid, 
    komoditas, 
    area_provinsi, 
    area_kota, 
    size, 
    price, 
    tgl_parsed, 
    timestamp
})

export const editListSuccess = (list) => ({
    type: 'EDIT_LIST_SUCESS',
    list
})

export const editListFailure = (uuid, old_komoditas, old_area_provinsi, old_size, old_price, old_tgl_parsed, old_timestamp) => ({
    type: 'EDIT_LIST_FAILURE',
    uuid, 
    old_komoditas, 
    old_area_provinsi, 
    old_size, 
    old_price, 
    old_tgl_parsed, 
    old_timestamp
})

export const editList = (uuid, old_komoditas, old_area_provinsi, old_size, old_price, old_tgl_parsed, old_timestamp, komoditas, area_provinsi, area_kota, size, price, tgl_parsed, timestamp) => {
    return dispatch => {
        dispatch(editListRedux(uuid, komoditas, area_provinsi, area_kota, size, price, tgl_parsed, timestamp));
        return request.put(`${uuid}`, {komoditas, area_provinsi, area_kota, size, price, tgl_parsed, timestamp})
        .then(function(response){
            return request.get('/list')
            .then(function(response){
                dispatch(editListSuccess(response.data));
            })
        })
        .catch(function(error) {
            console.log(error);
            dispatch(editListFailure(uuid, old_komoditas, old_area_provinsi, old_size, old_price, old_tgl_parsed, old_timestamp));
        })
    }
}

// delete list
const deleteListRedux = (uuid) => ({
    type: 'DELETE_LIST',
    uuid
})

export const deleteListSuccess = () => ({
    type: 'DELETE_LIST_SUCCESS'
})

export const deleteListFailure = (props) => ({
    type: 'DELETE_LIST_FAILURE',
    props
})

export const deleteList = (props) => {
    return dispatch => {
        dispatch(deleteListRedux(props.uuid));
        return request.delete(`/list/${props.uuid}`)
        .then(function(response){
            dispatch(deleteListSuccess());
        })
        .catch(function(error){
            console.log(error);
            dispatch(deleteListFailure(props));
        })
    }
}


