import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
      getPrice
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
      }
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
      <Container>
        <FormGroup row>
        <Col sm={6}>
          <h4>Create Data</h4>
        </Col>
        </FormGroup>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="komoditas" sm={1}>Komoditas</Label>
            <Col sm={3}>
              <Input type="text" ref={(input) => this.getKomoditas = input} placeholder="Komoditas" />
            </Col>
            <Label for="area_provinsi" sm={1}>Provinsi</Label>
            <Col sm={3}>
              <Input type="text" ref={(input) => this.getArea_provinsi = input} placeholder="Provinsi" />
            </Col>
            <Label for="area_kota" sm={1}>Kota</Label>
            <Col sm={3}>
              <Input type="text" ref={(input) => this.getArea_kota = input} placeholder="Kota" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="size" sm={1}>Size</Label>
            <Col sm={3}>
              <Input type="number" ref={(input) => this.getSize = input} placeholder="Size" />
            </Col>
            <Label for="price" sm={1}>Price</Label>
            <Col sm={3}>
              <Input type="number" ref={(input) => this.getPrice = input} placeholder="Price" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <Button type="submit" outline color="success" align="right">Save</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
export default connect()(PostForm);
