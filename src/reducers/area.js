import {
    LOAD_AREA_SUCCESS,
    LOAD_AREA_FAILURE
} from '../constants';

const initialState = {
    areas: [],
    province: '',
    city: '',
    message: { text: '', type: ''}
}

export default function area(state = initialState, action) {
    const {
        area,
        province,
        city,
        message,
        areas
    } = action;
}

let newAreas

switch (type) {
    case LOAD_AREA_SUCCESS:
    case LOAD_AREA_FAILURE:
    default:
        return { ...state, message: { text: '', type: ''}}
}
