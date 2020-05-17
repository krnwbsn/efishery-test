const reducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return action.data.map((data, index) => {
        return {
          index: index + 1,
          sent: true,
          ...data
        };
      });
    case "ADD_DATA":
      return [...state, { ...action.data, isOpen: true }];
    case "DELETE_DATA":
      return state.filter(data => data.id !== action.id);
    case "EDIT_DATA":
      return state.map(
        data =>
          data.id === action.id ? { ...data, editing: !data.editing } : data
      );
    case "UPDATE":
      return state.map(data => {
        if (data.id === action.id) {
          return {
            ...data,
            ...action.data,
            editing: !data.editing,
          };
        }
        return data;
      });
    default:
      return state;
  }
};

export default reducer;
