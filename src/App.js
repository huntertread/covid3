import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Country from './Country/Country'
import GlobalData from './GlobalData/GlobalData'
import BarChart from './d3/BarChart/BarChart'
import PieChart from './d3/PieChart/PieChart'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allCasesGlobal: {},
      allCasesByCountry: [],
      pageView: 'list'
    }
    this.getDataByCountry = this.getDataByCountry.bind(this)
    this.getGlobalData = this.getGlobalData.bind(this)
    this.viewClickHandler = this.viewClickHandler.bind(this)
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

  viewClickHandler(view) {
    this.setState({pageView: view})
  }

  componentDidMount() {
    this.getGlobalData()
    this.getDataByCountry()
  }

  render() {
    if (this.state.pageView === 'list') {
      return (
        <div className="App">
          <button onClick={() => this.viewClickHandler('bar-chart')} >bar chart view</button>
          <button onClick={() => this.viewClickHandler('pie-chart')} >pie chart view</button>
          <div className="global-data" >
            <GlobalData data={this.state.allCasesGlobal} />
          </div>
          <div className="country-data">
            {this.state.allCasesByCountry.map((country, i) => <Country country={country} key={i} />)}
          </div>
        </div>
      )
    } else if (this.state.pageView === 'bar-chart') {
      return (
        <div className="App">
          <button onClick={() => this.viewClickHandler('list')} >list view</button>
          <button onClick={() => this.viewClickHandler('pie-chart')} >pie chart view</button>
          <div className="global-data" >
            <GlobalData data={this.state.allCasesGlobal} />
          </div>
          <div className="bar-chart-global-container">
            <BarChart data={this.state.allCasesByCountry} />
          </div>
        </div>
      )
    } else if (this.state.pageView === 'pie-chart') {
      return (
        <div className="App">
          <button onClick={() => this.viewClickHandler('list')} >list view</button>
          <button onClick={() => this.viewClickHandler('bar-chart')} >bar chart view</button>
          <div className="global-data" >
            <GlobalData data={this.state.allCasesGlobal} />
          </div>
          <div className="pie-chart-global-container">
            <PieChart data={this.state.allCasesByCountry} />
          </div>
        </div>
      )
    }
  }
}

export default App;
