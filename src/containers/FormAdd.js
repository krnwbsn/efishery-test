import React from 'react';
import {connect} from 'react-redux';
import {postData} from '../actions/index';

class FormAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {komoditas: '', area_provinsi: '', area_kota: '', size: '', price: '', tgl_parsed: '', isFormHidden: true};
        this.changeKomoditas = this.changeKomoditas.bind(this);
        this.changeArea_provinsi = this.changeArea_provinsi.bind(this);
        this.changeArea_kota = this.changeArea_kota.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeVisibilityForm = this.changeVisibilityForm.bind(this);
    }

    changeKomoditas(e) {
        this.setState({ komoditasEdit: e.target.value });
    }
    changeArea_provinsi(e) {
        this.setState({ area_provinsiEdit: e.target.value });
    }
    changeArea_kota(e) {
        this.setState({ area_kotaEdit: e.target.value });
    }
    changeSize(e) {
        this.setState({ sizeEdit: e.target.value });
    }
    changePrice(e) {
        this.setState({ priceEdit: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.komoditas && this.state.area_provinsi && this.state.area_kota && this.state.size && this.state.price) {
            this.props.postData(this.state.komoditas, this.state.area_provinsi, this.state.area_kota, this.state.size, this.state.price );
            this.setState({komoditas: '', area_provinsi: '', area_kota: '', size: '', price: '', tgl_parsed: '', isFormHidden: true});
        }
    }

    changeVisibilityForm(e) {
        this.setState({isFormHidden: !this.state.isFormHidden});
    }

    render() {
        return (
            <div>
                <div className="form-group row mt-3">
                    <div className="form-group col-md-5">
                        <button className="btn btn-primary" id="add" onClick={this.changeVisibilityForm}>Add</button>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} style={this.state.isFormHidden ? {display: 'none'} : {display: 'block'}}>
                    <div className="form-group row">
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" onChange={this.changeKomoditas} value={this.state.komoditas} id="komoditas" placeholder="Komoditas" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" onChange={this.changeArea_provinsi} value={this.state.area_provinsi} id="area_provinsi" placeholder="Area_provinsi" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" onChange={this.changeArea_kota} value={this.state.area_kota} id="area_kota" placeholder="Area_kota" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" onChange={this.changePrice} value={this.state.price} id="price" placeholder="Price" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" onChange={this.changeSize} value={this.state.size} id="size" placeholder="Size" />
                        </div>
                        <div className="form-group col-md-2">
                            <button type="submit" className="btn btn-success mr-1">Save</button> 
                            <button className="btn btn-warning ml-1" onClick={() => this.setState({ isFormHidden: true })}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
        postData: (komoditas, area_provinsi, area_kota, size, price, tgl_parsed) => dispatch(postData(komoditas, area_provinsi, area_kota, size, price, tgl_parsed))
    })

export default connect(
    null,
    mapDispatchToProps
)(FormAdd)