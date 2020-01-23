const area = (state = [], action) => {
    switch (action.type) {
        case 'READ_AREA_SUCCESS':
            return action.list.map((item, index) => {
                return {
                    province: item.province,
                    city: item.city,
                    sent: true
                };
            })
        default:
            return state;
    }
}

export default area;