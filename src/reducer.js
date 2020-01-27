const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return state.concat([action.data]);
        case 'DELETE_DATA':
            return state.filter((item) => item.id !== action.id);
        case 'EDIT_DATA':
            return state.map((item) => item.id === action.id ? {...postMessage, isEdit:!item.isEdit} : item);
        case 'UPDATE_DATA':
            return state.map((item) => {
                if (item.id === action.id){
                    return {
                        ...item,
                        komoditas: action.data.newKomoditas,
                        area_provinsi: action.data.newArea_provinsi,
                        area_kota: action.data.newArea_kota,
                        size: action.data.newSize,
                        price: action.data.newPrice,
                        isEdit: !item.isEdit
                    }
                } else {
                    return item;
                }
            })
        default:
            return state;
    }
}

export default reducer;