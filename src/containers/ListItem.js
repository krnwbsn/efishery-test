import React from 'react';
import { connect } from 'react-redux';
//import { editList, deleteList } from '../actions'; // readArea, readSize, readList, postList

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: false, komoditasEdit: '', area_provinsiEdit: '', area_kotaEdit: '', sizeEdit: '', priceEdit: '', tgl_parsedEdit: '', oldKomoditas: this.props.komoditas, oldArea_provinsi: this.props.area_provinsi, oldArea_kota: this.props.area_kota, oldSize: this.props.size, oldPrice: this.props.price, oldTgl_parsed: this.props.tgl_parsed };
        this.changeKomoditas = this.changeKomoditas.bind(this);
        this.changeArea_provinsi = this.changeArea_provinsi.bind(this);
        this.changeArea_kota = this.changeArea_kota.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeTgl_parsed = this.changeTgl_parsed.bind(this);
        this.editListSave = this.editListSave.bind(this);
    }

    componentDidMount() {
        this.setState({ oldKomoditas: this.props.komoditas, oldArea_provinsi: this.props.area_provinsi, oldArea_kota: this.props.area_kota, oldSize: this.props.size, oldPrice: this.props.price, oldTgl_parsed: this.props.tgl_parsed });
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
    changeTgl_parsed(e) {
        this.setState({ tgl_parsedEdit: e.target.value });
    }
    editListSave(e) {
        this.props.editList(this.state.komoditasEdit, this.state.area_provinsiEdit, this.state.area_kotaEdit, this.state.sizeEdit, this.state.priceEdit, this.state.tgl_parsedEdit, this.state.oldKomoditas, this.state.oldArea_provinsi, this.state.oldArea_kota, this.state.oldSize, this.state.oldPrice, this.state.oldTgl_parsed);
        this.setState({ edit: false });
    }

    render() {
        return (
            <tr>
                <td>{this.props.uuid}</td>
                <td>{this.state.edit ? <input type="text" value={this.state.komoditasEdit} onChange={this.changeName} placeholder="Komoditas" /> : this.props.komoditas}</td>
                <td>{this.state.edit ? <input type="text" value={this.state.area_provinsiEdit} onChange={this.changeName} placeholder="Provinsi" /> : this.props.area_provinsi}</td>
                <td>{this.state.edit ? <input type="text" value={this.state.area_kotaEdit} onChange={this.changeName} placeholder="Kota" /> : this.props.area_kota}</td>
                <td>{this.state.edit ? <input type="text" value={this.state.sizeEdit} onChange={this.changeName} placeholder="Size" /> : this.props.size}</td>
                <td>{this.state.edit ? <input type="text" value={this.state.priceEdit} onChange={this.changeName} placeholder="Price" /> : this.props.price}</td>
                <td>{this.state.edit ? <input type="date" value={this.state.tgl_parsedEdit} onChange={this.changeName} placeholder="Tanggal" /> : this.props.tgl_parsed}</td>
                <td>{this.state.edit ? <button className="btn btn-primary" onClick={this.editPhonebookSave}>Save</button> : (this.props.sent ? <div><button className="btn btn-success" onClick={() => this.setState({ edit: true })}>Update</button>&nbsp;
                    <button className="btn btn-danger" onClick={this.props.deletePhonebook}>Delete</button></div>
                    : <div><button className="btn btn-danger" onClick={this.props.resendPhonebook}>Resend</button></div>)}</td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    // deleteList: () => dispatch(deleteList(ownProps)),
    // editList: (komoditas, area_provinsi, area_kota, size, price, tgl_parsed) => dispatch(editList(ownProps.uuid, komoditas, area_provinsi, area_kota, size, price, tgl_parsed))
})

export default connect(
    null,
    mapDispatchToProps
)(ListItem)
