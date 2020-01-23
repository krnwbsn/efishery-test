const list = (state = [], action) => {
    switch (action.type) {
        case 'READ_LIST_SUCCESS':
            return action.list.map((item, index) => {
                return { uuid: item.uuid,
                    komoditas: item.komoditas, 
                    area_provinsi: item.area_provinsi, 
                    area_kota: item.area_kota, 
                    size: item.size, 
                    price: item.price, 
                    tgl_parsed: item.tgl_parsed, 
                    timestamp: item.timestamp, 
                    sent: true };
            })
        case 'POST_LIST':
            return [
                ...state,
                {
                    uuid: action.uuid,
                    komoditas: action.komoditas,
                    area_provinsi: action.area_provinsi,
                    area_kota: action.area_kota,
                    size: action.size,
                    price: action.price,
                    tgl_parsed: action.tgl_parsed,
                    timestamp: action.timestamp,
                    sent: true
                }
            ]
        case 'POST_LIST_SUCCESS':
            return action.list.map((item, index) => {
                return {
                    uuid: item.uuid,
                    index: index + 1,
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
        case 'POST_LIST_FAILURE':
            return state.map(item => {
                if (item.uuid === action.uuid) {
                    item.sent = false;
                }
                return item;
            })
        case 'EDIT_LIST':
            return state.map(item => {
                if (item.uuid === action.uuid) {
                    item.komoditas = action.komoditas;
                    item.area_provinsi = action.area_provinsi;
                    item.area_kota = action.area_kota;
                    item.size = action.size;
                    item.price = action.price;
                    item.tgl_parsed = action.tgl_parsed;
                    item.timestamp = action.timestamp;
                }
                return item;
            })
        case 'EDIT_LIST_SUCCESS':
            return action.list.map((item, index) => {
                return {
                    uuid: item.uuid,
                    index: index + 1,
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
        case 'EDIT_LIST_FAILURE':
            return state.map(item => {
                if (item.uuid === action.uuid) {
                    item.komoditas = action.komoditas;
                    item.area_provinsi = action.area_provinsi;
                    item.area_kota = action.area_kota;
                    item.size = action.size;
                    item.price = action.price;
                    item.tgl_parsed = action.tgl_parsed;
                    item.timestamp = action.timestamp;
                }
                return item;
            })
        case 'DELETE_LIST':
            let a = state.filter(item => item.uuid !== action.uuid)
            console.log(a)
            return a;
        case 'DELETE_LIST_FAILURE':
            state.splice(action.props.uuid, 0, 
                { komoditas: action.props.komoditas, 
                  area_provinsi: action.props.area_provinsi, 
                  area_kota: action.props.area_kota,
                  size: action.props.size,
                  price: action.props.price,
                  tgl_parsed: action.props.tgl_parsed,
                  timestamp: action.props.timestamp,
                  sent: true });
            return [...state];
        case 'SEARCH_LIST_SUCCESS':
            return action.list.map(item => {
                return {
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
        case 'DELETE_LIST_SUCCESS':
        case 'LOAD_LIST_FAILURE':
        default:
            return state;
    }
}

export default list;