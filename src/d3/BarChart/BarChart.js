import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component {

  constructor() {
    super()
    this.drawChart = this.drawChart.bind(this)
  }

  drawChart() {
    const data = this.props.data;
    const svg = d3.select("body").append("svg")
    .attr("width", this.props.width)
    .attr("height", this.props.height);

    const h = this.props.height;

    svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 100)
    .attr("y", (d, i) => h - 10 * d.cases)
    .attr("width", 65)
    .attr("height", (d, i) => d.cases * 10)
    .attr("fill", "green")

    svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text((d) => d.country)
    .attr("x", (d, i) => i * 70)
    .attr("y", (d, i) => h - (10 * d.cases) - 3)

    //selection.attr(“property”, (d, i) => {})
  }

  componentDidMount() {
    this.drawChart();
  }

  render(){
    return  <div id={"#" + this.props.id}></div>
  }

}

export default BarChart;