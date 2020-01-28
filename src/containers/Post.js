import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <h5>{this.props.post.komoditas}</h5>
        <h5>{this.props.post.area_provinsi}</h5>
        <h5>{this.props.post.area_kota}</h5>
        <h5>{this.props.post.size}</h5>
        <h5>{this.props.post.price}</h5>
        <div className="control-buttons">
          <button
            className="edit"
            onClick={() =>
              this.props.dispatch({ type: "EDIT_POST", id: this.props.post.id })
            }
          >
            Edit
          </button>
          <button
            className="delete"
            onClick={() =>
              this.props.dispatch({
                type: "DELETE_POST",
                id: this.props.post.id
              })
            }
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default connect()(Post);
