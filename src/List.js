import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    render(){
        return (
            <div>
                <h5>{this.props.item.komoditas}</h5>
                <h5>{this.props.item.area_provinsi}</h5>
                <h5>{this.props.item.area_kota}</h5>
                <h5>{this.props.item.size}</h5>
                <h5>{this.props.item.price}</h5>
                <button onClick={() => this.props.dispatch({ type: 'EDIT_DATA', id: this.props.item.id })}>Edit</button>
                <button onClick={() => this.props.dispatch({type: 'DELETE_DATA', id: this.props.item.id})}>Delete</button>
            </div>
        )
    }
}

export default connect()(List);