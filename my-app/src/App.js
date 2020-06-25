import React, { Component } from 'react';
import './App.css';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'

import { fetchData } from './api'

class App extends Component {

  state={
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({data: fetchedData})
  }

  handleCountryChange = async(country) =>{
    console.log(country);
  }

  render() {
    const data = this.state.data;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <br/>
        <Chart/>
        <br/>
      </div>
    );
  }

}

export default App;
