import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    handleEdit(e){
        e.preventDefault();
        const newKomoditas = this.getKomoditas.value;
        const newArea_provinsi = this.getArea_provinsi.value;
        const newArea_kota = this.getArea_kota.value;
        const newSize = this.getSize.value;
        const newPrice = this.getPrice.value;
        const data = {
            newKomoditas,
            newArea_provinsi,
            newArea_kota,
            newPrice,
            newSize
        }
        this.props.dispatch({ type: 'UPDATE_DATA', id: this.props.item.id, data: data })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleEdit}>
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
        )
    }
}

export default connect()(Edit);