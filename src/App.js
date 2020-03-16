import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Country from './Country/Country'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allCasesByCountry: [],
      allDataHighLevel: []
    }
    this.getDataByCountry = this.getDataByCountry.bind(this)
    this.getAllData = this.getAllData.bind(this)
  }

  getAllData() {
    axios.get('https://coronavirus-19-api.herokuapp.com/all')
      .then((results) => this.setState({allDataHighLevel: results.dat}))
      .catch((err) => console.error(err))
  }

  getDataByCountry() {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries')
      .then((results) => this.setState({allCasesByCountry: results.data}))
      .catch((err) => console.error(err))
  }

  componentDidMount() {
    this.getDataByCountry()
    this.getAllData()
  }

  render() {
    return (
      <div className="App">
        {this.state.allCasesByCountry.map((country, i) => <Country country={country} key={i} />)}
      </div>
    );
  }
}

export default App;
