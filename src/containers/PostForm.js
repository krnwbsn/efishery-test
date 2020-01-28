import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let localTime = moment().format('YYYY-MM-DD');
    let parsedDate = localTime + "T00:00:00.000Z";
    const komoditas = this.getKomoditas.value;
    const area_provinsi = this.getArea_provinsi.value;
    const area_kota = this.getArea_kota.value;
    const size = this.getSize.value;
    const price = this.getPrice.value;
    const data = {
      id: new Date(),
      komoditas,
      area_provinsi,
      area_kota,
      price,
      size,
      tgl_parsed: parsedDate,
      timestamp: moment().unix(),
      isEdit: false
    }
    this.props.dispatch({
      type: 'ADD_POST',
      data
    });
    this.getKomoditas.value = '';
    this.getArea_provinsi.value = '';
    this.getArea_kota.value = '';
    this.getSize.value = '';
    this.getPrice = '';
    console.log(data);
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
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
