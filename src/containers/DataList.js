import React from 'react';
import DataItem from './DataItem';
import {connect} from 'react-redux';
import {loadData} from '../actions';

class DataList extends React.Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            komoditas: '',
            area_provinsi: '',
            area_kota: '',
            size: '',
            price: '',
            tgl_parsed: ''
        }
    }

    handleKomoditasChange(e) {
        this.setState({ komoditas: e.target.value });
    }
    handleArea_provinsiChange(e) {
        this.setState({ area_provinsi: e.target.value });
    }
    handleArea_kotaChange(e) {
        this.setState({ area_kota: e.target.value });
    }
    handleSizeChange(e) {
        this.setState({ size: e.target.value });
    }
    handlePriceChange(e) {
        this.setState({ price: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    componentDidMount() {
        this.props.loadData();
    }

    render() {
        const { listdata, actions } = this.props

        var komoditas = this.state.komoditas.trim().toLowerCase();
        var area_provinsi = this.state.area_provinsi.trim().toLowerCase();
        var area_kota = this.state.area_kota.trim().toLowerCase();
        var size = this.state.size.trim().toLowerCase();
        var price = this.state.price.trim().toLowerCase();
        var tgl_parsed = this.state.tgl_parsed.trim().toLowerCase();

        var filteredData = listdata

        if (komoditas !== '' && area_kota !== '') {
            filteredData = listdata.filter(item => item => item.komoditas.toLowerCase().startsWith(komoditas) && item.area_kota.toLowerCase().startsWith(area_kota))
        } else if (komoditas !== '') {
            filteredData = listdata.filter(item => item.komoditas.toLowerCase().startsWith(komoditas))
        } else if (area_kota !== '') {
            filteredData = listdata.filter(item => item.area_kota.toLowerCase().startsWith(area_kota))
        }

        let dataList = filteredData.map((item, index) => {
            return (<DataItem id={index + 1} sent={item.sent} komoditas={item.komoditas} area_provinsi={item.area_provinsi} area_kota={item.area_kota} size={item.size} price={item.price} tgl_parsed={item.tgl_parsed} />)
        });

        return (
            <div className="">
                <div className="">
                    <h2>Search Form</h2>
                    <div className="">
                        <form className="form-group row" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" placeholder="Komoditas" value={this.state.komoditas} onChange={this.handleKomoditasChange.bind(this)} />
                            </div>
                            <div className="col-sm-3">
                                <input type="text" className="form-control" placeholder="Kota" value={this.state.area_kota} onChange={this.handleArea_kotaChange.bind(this)} />
                            </div>
                        </form>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Komoditas</th>
                            <th>Provinsi</th>
                            <th>Kota</th>
                            <th>Size</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    listdata: state.listdata
})

const mapDispatchToProps = (dispatch) => ({
    loadData: () => dispatch(loadData())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataList)