const listdata = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_DATA_SUCCESS':
            return action.listdata.map((item, index) => {
                return {
                    index: index + 1,
                    uuid: item.uuid,
                    komoditas: item.komoditas,
                    area_provinsi: item.area_provinsi,
                    area_kota: item.area_kota,
                    size: item.size,
                    price: item.price,
                    tgl_parsed: item.tgl_parsed,
                    timestamp: item.timestamp,
                    sent: true
                };
            })
        case 'POST_DATA':
            return [
                ...state,
                {
                    komoditas: action.komoditas,
                    area_provinsi: action.area_provinsi,
                    area_kota: action.area_kota,

                    id: action.id,
                    sent: true
                }
            ]
        case 'POST_DATA_SUCCESS':
            return action.listdata.map((item, index) => {
                return {
                    index: index + 1,
                    uuid: item.uuid,
                    komoditas: item.komoditas,
                    area_provinsi: item.area_provinsi,
                    area_kota: item.area_kota,
                    size: item.size,
                    price: item.price,
                    tgl_parsed: item.tgl_parsed,
                    timestamp: item.timestamp,
                    sent: true
                };
            })
        case 'POST_DATA_FAILURE':
            return state.map(item => {
                if (item.id === action.id) {
                    item.sent = false;
                }
                return item;
            })
        case 'LOAD_DATA_FAILURE':
        default:
            return state;
    }   
}

export default listdata;