import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  Grid,
  TextField,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Save,
  Cancel
} from '@material-ui/icons';
import SelectArea from '../SelectArea'

const styles = () => ({
  modal: {
    width: 300
  },
  save: {
    '&:hover': {
      backgroundColor: 'rgba(24, 51, 88, 0.9)'
    },
    marginRight: '10px',
    backgroundColor: 'rgb(24, 51, 88)',
    textTransform: 'none'
  },
  cancel: {
    '&:hover': {
      backgroundColor: 'rgba(255, 0, 0, 0.9)'
    },
    backgroundColor: 'rgb(255, 0, 0)',
    textTransform: 'none'
  }
});

class FormAdd extends Component {
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
      type: 'ADD_DATA',
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

    getKomoditas.value = '';
    getArea_provinsi.value = '';
    getArea_kota.value = '';
    getSize.value = '';
    getPrice.value = '';
  };

  render() {
    const { classes, handleClose } = this.props;

    return (
      <div>
        <h3>Tambah Data</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <Grid className={classes.modal} container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputRef={(input) => this.getKomoditas = input}
                id="komoditas"
                label="Komoditas"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputRef={(input) => this.getArea_provinsi = input}
                id="area_provinsi"
                label="Provinsi"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputRef={(input) => this.getArea_kota = input}
                id="area_kota"
                label="Kota"
                size="small"
                fullWidth
              />
            </Grid>
            <SelectArea />
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputRef={(input) => this.getSize = input}
                id="size"
                label="Ukuran"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                inputRef={(input) => this.getPrice = input}
                id="price"
                label="Harga"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.save}
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<Save />}
                onClick={handleClose}
              >
                Simpan
              </Button>
              <Button
                className={classes.cancel}
                type="button"
                variant="contained"
                color="secondary"
                startIcon={<Cancel />}
                onClick={handleClose}
              >
                Kembali
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const styled = withStyles(styles)(FormAdd);
export default connect()(styled);
