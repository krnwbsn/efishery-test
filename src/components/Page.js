import React from 'react';
import FormAdd from '../containers/FormAdd';
import DataList from '../containers/DataList';

export default class Page extends React.Component {

    render() {
        return (
            <div className="container">
                <FormAdd />
                <DataList />
            </div>
        );
    }
}