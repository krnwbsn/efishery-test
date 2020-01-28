import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newKomoditas = this.getKomoditas.value;
    const newArea_provinsi = this.getArea_provinsi.value;
    const newArea_kota = this.getArea_kota.value;
    const newSize = this.getSize.value;
    const newPrice = this.getPrice.value;
    const data = {
      newKomoditas,
      newArea_provinsi,
      newArea_kota,
      newPrice,
      newSize
    }
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
  };
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={(input) => this.getKomoditas = input}
            defaultValue={this.props.post.komoditas}
            placeholder="Komoditas"
          />
          <input
            required
            rows="5"
            ref={(input) => this.getArea_provinsi = input}
            defaultValue={this.props.post.area_provinsi}
            placeholder="Provinsi"
          />
          <input
            required
            type="text"
            ref={(input) => this.getArea_kota = input}
            defaultValue={this.props.post.area_kota}
            placeholder="Kota"
          />
          <input
            required
            rows="5"
            ref={(input) => this.getSize = input}
            defaultValue={this.props.post.size}
            placeholder="Size"
          />
          <input
            required
            rows="5"
            ref={(input) => this.getPrice = input}
            defaultValue={this.props.post.price}
            placeholder="Price"
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
