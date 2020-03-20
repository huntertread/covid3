import React from 'react';
import * as d3 from 'd3';
import './barchart.css'

class BarChart extends React.Component {
  constructor() {
    super()
    this.drawChart = this.drawChart.bind(this)
  }

  drawChart() {
    const data = this.props.data;
    d3.select("#barchart")
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("div")
    .text((d) => d.country + " cases: " + d.cases)
    .style("width", (d) => (d.cases / 50) + "px")
    .attr('class', 'bar')
  }

  componentDidMount() {
    this.drawChart();
  }

  render(){
    return  <div id={"barchart"}></div>
  }
}

export default BarChart;