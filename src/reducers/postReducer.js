const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_POST':
      return action.data.map((post, index) => {
        return {
          index: index + 1,
          uuid: post.uuid,
          komoditas: post.komoditas,
          area_provinsi: post.area_provinsi,
          area_kota: post.area_kota,
          size: post.size,
          price: post.price,
          tgl_parsed: post.tgl_parsed,
          timestamp: post.timestamp,
          sent: true
        };
      })
    case "ADD_POST":
      return state.concat([action.data]);
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
            komoditas: action.data.newKomoditas,
            area_provinsi: action.data.newArea_provinsi,
            area_kota: action.data.newArea_kota,
            size: action.data.newSize,
            price: action.data.newPrice,
            editing: !post.editing
          };
        } else return post;
      });
    default:
      return state;
  }
};
export default postReducer;
