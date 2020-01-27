import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './List';
import Edit from './Edit';

class DataItem extends Component {
    render() {
        return (
            <div>
                <h1>Data Item</h1>
                {this.props.items.map((item) => (
                    <div key={item.id}>
                        {item.isEdit ? <Edit item={item} key={item.id} /> :
                            <List key={item.id} item={item} />}
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state
    }
}
export default connect(mapStateToProps)(DataItem);