import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from 'reactstrap';

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();

    const {
      getKomoditas,
      getArea_provinsi,
      getArea_kota,
      getSize,
      getPrice,
    } = this;

    const { dispatch, item } = this.props;

    const data = {
      komoditas: getKomoditas.value,
      area_provinsi: getArea_provinsi.value,
      area_kota: getArea_kota.value,
      size: getSize.value,
      price: getPrice.value,
    };

    dispatch({
      type: "UPDATE",
      id: item.id,
      data,
    });
  };

  render() {
    return (
      <tr>
        <td><input
          required
          type="text"
          ref={(input) => this.getKomoditas = input}
          defaultValue={this.props.item.komoditas}
          placeholder="Komoditas"
        /></td>
        <td>
          <input
            required
            rows="5"
            ref={(input) => this.getArea_provinsi = input}
            defaultValue={this.props.item.area_provinsi}
            placeholder="Provinsi"
          />
        </td>
        <td>
          <input
            required
            type="text"
            ref={(input) => this.getArea_kota = input}
            defaultValue={this.props.item.area_kota}
            placeholder="Kota"
          />
        </td>
        <td>
          <input
            required
            rows="5"
            ref={(input) => this.getSize = input}
            defaultValue={this.props.item.size}
            placeholder="Size"
          />
        </td>
        <td>
          <input
            required
            rows="5"
            ref={(input) => this.getPrice = input}
            defaultValue={this.props.item.price}
            placeholder="Price"
          />
        </td>
        <td>
          <Button outline color="warning" onSubmit={this.handleEdit}>Update</Button>
        </td>
      </tr>
    );
  }
}

export default connect()(EditComponent);
