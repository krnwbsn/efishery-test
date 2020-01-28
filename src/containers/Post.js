import React from "react";
import { connect } from "react-redux";

function Post({ post, dispatch }) {
  return (
    <div className="post">
      <h5>{post.komoditas}</h5>
      <h5>{post.area_provinsi}</h5>
      <h5>{post.area_kota}</h5>
      <h5>{post.size}</h5>
      <h5>{post.price}</h5>
      <div className="control-buttons">
        <button
          className="edit"
          onClick={() =>
            dispatch({ type: "EDIT_POST", id: post.id })
          }
        >
          Edit
        </button>
        <button
          className="delete"
          onClick={() =>
            dispatch({ type: "DELETE_POST", id: post.id })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default connect()(Post);
