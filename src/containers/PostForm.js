import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
class PostForm extends Component {

  handleSubmit = e => {
    e.preventDefault();

    let localTime = moment().format('YYYY-MM-DD');
    let parsedDate = localTime + "T00:00:00.000Z";

    const {
      getKomoditas,
      getArea_provinsi,
      getArea_kota,
      getSize,
      getPrice,
    } = this;

    if (!getKomoditas.value || !getArea_provinsi.value || !getArea_kota.value || !getSize.value || !getPrice.value) {
      alert('Isi form yang lengkap');
      return false;
    }
    
    const { dispatch } = this.props;
    
    dispatch({
      type: 'ADD_POST',
      data: {
        id: new Date(),
        komoditas: getKomoditas.value,
        area_provinsi: getArea_provinsi.value,
        area_kota: getArea_kota.value,
        size: getSize.value,
        price: getPrice.value,
        tgl_parsed: parsedDate,
        timestamp: moment().unix(),
        isEdit: false
      },
    });

    // Reset Form
    getKomoditas.value = '';
    getArea_provinsi.value = '';
    getArea_kota.value = '';
    getSize.value = '';
    getPrice.value = '';
  };

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <input type="text" ref={(input) => this.getKomoditas = input} placeholder="Komoditas" />
          </div>
          <div>
            <input type="text" ref={(input) => this.getArea_provinsi = input} placeholder="Provinsi" />
          </div>
          <div>
            <input type="text" ref={(input) => this.getArea_kota = input} placeholder="Kota" />
          </div>
          <div>
            <input type="text" ref={(input) => this.getSize = input} placeholder="Size" />
          </div>
          <div>
            <input type="text" ref={(input) => this.getPrice = input} placeholder="Price" />
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
