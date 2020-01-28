const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_POST':
      return action.data.map((item, index) => {
        return {
          index: index + 1,
          sent: true,
          ...item
        };
      })
    case "ADD_POST":
      return [...state, { ...action.data }];
    case "GET_AREA":
      return action.dataArea.map((item, index) => {
        return {
          sent: true,
          ...item
        };
      }) 
    case "GET_SIZE":
      return action.dataSize.map((item, index) => {
        return {
          sent: true,
          ...item
        };
      }) 
    case "DELETE_POST":
      return state.filter(item => item.id !== action.id);
    case "EDIT_POST":
      return state.map(
        item =>
          item.id === action.id ? { ...item, isEdit: !item.isEdit } : item
      );
    case "UPDATE":
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.data,
            isEdit: !item.isEdit,
          };
        }
        
        return item;
      });
    default:
      return state;
  }
};
export default postReducer;
