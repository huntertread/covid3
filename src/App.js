import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Country from './Country/Country'
import GlobalData from './GlobalData/GlobalData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allCasesGlobal: {},
      allCasesByCountry: []
    }
    this.getDataByCountry = this.getDataByCountry.bind(this)
    this.getGlobalData = this.getGlobalData.bind(this)
  }

  getGlobalData() {
    axios.get('https://coronavirus-19-api.herokuapp.com/all')
      .then((results) => this.setState({allCasesGlobal: results.data}))
      .catch((err) => console.error(err))
  }

  getDataByCountry() {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries')
      .then((results) => this.setState({allCasesByCountry: results.data}))
      .catch((err) => console.error(err))
  }

  componentDidMount() {
    this.getDataByCountry()
    this.getGlobalData()
  }

  render() {
    return (
      <div className="App">
        <div>
          <GlobalData data={this.state.allCasesGlobal} />
        </div>
        <div className="country-data">
          {this.state.allCasesByCountry.map((country, i) => <Country country={country} key={i} />)}
        </div>
      </div>
    );
  }
}

export default App;
