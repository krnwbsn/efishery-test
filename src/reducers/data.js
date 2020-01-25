import {
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAILURE,
    EDIT_DATA_SUCCESS,
    EDIT_DATA_FAILURE,
    DELETE_DATA_SUCCESS,
    DELETE_DATA_FAILURE,
    DELETE_DATA
} from '../constants';

import moment from 'moment';

var localTime = moment().format('YYYY-MM-DD');
var proposedDate = localTime + "T00:00:00.000Z";

const initialState = {
    datas: [],
    page: 1,
    komoditas: '',
    area_provinsi: '',
    area_kota: '',
    size: '',
    price: '',
    tgl_parsed: proposedDate,
    timestamp: moment().unix(),
    message: { text: '', type: '' }
}

export default function data(state = initialState, action) {
    const {
        type,
        datas,
        data,
        page,
        uuid,
        komoditas,
        area_provinsi,
        area_kota,
        size,
        price,
        tgl_parsed,
        timestamp,
        message
    } = action;

    let newDatas, newUuid;

    switch (type) {
        case LOAD_DATA_SUCCESS:
            newDatas = page > 1 ? [...state.datas, ...datas] : datas;
            newDatas = newDatas.map(data => ({ ...data, sent: true }));
            newUuid = newDatas
                .map(data => data.uuid)
                .map((uuid, i, arr) => arr.indexOf(uuid) === i);
            newDatas = newDatas.filter((data, i) => newUuid.includes(i));
            return {
                datas: newDatas,
                page,
                komoditas,
                area_provinsi,
                area_kota,
                size,
                price,
                data,
                uuid,
                tgl_parsed,
                timestamp,
                message: { text: '', type: '' }
            }
        case LOAD_DATA_FAILURE:
            return {
                ...state,
                message: { text: 'Failed to load data', type: 'error' }
            }
        case ADD_DATA_SUCCESS:
            return {
                ...state,
                datas: [...state.datas, data].map(data => ({
                    ...data,
                    sent: true
                })),
                message: { text: message, type: 'success' }
            }
        case ADD_DATA_FAILURE:
            return {
                ...state,
                message: { text: 'Failed to add data', type: 'error' }
            }
        case EDIT_DATA_SUCCESS:
            return {
                ...state,
                datas: state.datas.map(dataItem => ({
                    ...dataItem,
                    ...(dataItem.uuid === data.uuid && data)
                })),
                message: { text: '', type: '' }
            }
        case EDIT_DATA_FAILURE:
            return {
                ...state,
                datas: state.datas.map(dataItem => ({
                    ...dataItem,
                    ...(dataItem.uuid === data.uuid && data)
                })),
                message: { text: message, type: 'error' }
            }
        case DELETE_DATA:
            return { ...state, datas: state.datas.filter(data => data.uuid !== uuid) };
        case DELETE_DATA_SUCCESS:
            return { ...state, message: { text: message, type: 'success' } };
        case DELETE_DATA_FAILURE:
            return {
                ...state,
                datas: [...state.datas, data].sort((a, b) => a.uuid - b.uuid),
                message: { text: message, type: 'error' }
            }
        default:
            return { ...state, message: { text: '', type: '' } }
    }
}