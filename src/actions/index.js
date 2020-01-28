import axios from 'axios';

const API_URL = "https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4"

export const loadPostSuccess = (data) => ({
    type: 'LOAD_POST_SUCCESS',
    data
})

export const loadPostFailure = () => ({
    type: 'LOAD_POST_FAILURE'
})

export const loadPost = () => {
    return dispatch => {
        return axios.get(`${API_URL}/list`)
            .then(function (response) {
                dispatch(loadPostSuccess(response.data));
            })
            .catch(function (error) {
                console.log(error);
                dispatch(loadPostFailure());
            })
    }
}