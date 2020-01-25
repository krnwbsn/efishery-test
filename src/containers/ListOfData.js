import React from 'react';
import ListItem from './ListItem';
import {connect} from 'react-redux';
import {readList} from '../actions';

class ListOfData extends React.Component {
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
        this.setState({ komoditasEdit: e.target.value });
    }
    handleArea_provinsiChange(e) {
        this.setState({ area_provinsiEdit: e.target.value });
    }
    handleArea_kotaChange(e) {
        this.setState({ area_kotaEdit: e.target.value });
    }
    handleSizeChange(e) {
        this.setState({ sizeEdit: e.target.value });
    }
    handlePriceChange(e) {
        this.setState({ priceEdit: e.target.value });
    }
    handleTgl_parsedChange(e) {
        this.setState({ tgl_parsedEdit: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    componentDidMount() {
        this.props.readList();
    }

    render() {
        const { listOfData, actions } = this.props;
        var komoditas = this.state.komoditas.trim().toLowerCase();
        var area_provinsi = this.state.area_provinsi.trim().toLowerCase();
        var area_kota = this.state.area_kota.trim().toLowerCase();
        var size = this.state.size.trim().toLowerCase();
        var price = this.state.price.trim().toLowerCase();
        var tgl_parsed = this.state.tgl_parsed.trim().toLowerCase();

        var filteredData = listOfData;

        if (komoditas !== '' && area_kota !== '') {
            filteredData = listOfData.filter(item => item.komoditas.toLowerCase().startsWith(komoditas) && item.area_kota.toLowerCase().startsWith(area_kota))
        } else if (komoditas !== '') {
            filteredData = listOfData.filter(item => item.komoditas.toLowerCase().startsWith(komoditas))
        } else if (area_kota !== '') {
            filteredData = listOfData.filter(item => item.area_kota.toLowerCase().startsWith(area_kota))
        }

        let dataList = filteredData.map((item, index) => {
            return (
            <ListItem sent={item.sent} uuid={item.uuid} komoditas={item.komoditas} area_provinsi={item.area_provinsi} area_kota={item.area_kota} size={item.size} price={item.price} tgl_parsed={item.tgl_parsed}/>
                )
        });

        return (
                <table>
                    <tbody>
                        <dataList/>
                    </tbody>
                </table>
        )
    }
}

const mapStateToProps = (state) => ({
    listOfData: state.listOfData
})

const mapDispatchToProps = (dispatch) => ({
    readList: () => dispatch(readList())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfData)