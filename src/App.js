import React, { Component } from 'react';
import FormAdd from './FormAdd';
import DataItem from './DataItem';

class App extends Component {
  render() {
      return (
      <div className="App">
        <FormAdd />
        <DataItem />
      </div>
      );
  }
}
export default App;
