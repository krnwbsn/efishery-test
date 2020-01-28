const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_POST':
      return action.data.map((post, index) => {
        return {
          index: index + 1,
          sent: true,
          ...post
        };
      })
    case "ADD_POST":
      return [...state, { ...action.data }];
    case "DELETE_POST":
      return state.filter(post => post.id !== action.id);
    case "EDIT_POST":
      return state.map(
        post =>
          post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.data,
            editing: !post.editing,
          };
        }
        
        return post;
      });
    default:
      return state;
  }
};
export default postReducer;
