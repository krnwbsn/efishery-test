const size = (state = [], action) => {
    switch (action.type) {
        case 'READ_SIZE_SUCCESS':
            return action.list.map((item, index) => {
                return {
                    size: item.size,
                    sent: true
                };
            })
        default:
            return state;
    }
}

export default size;