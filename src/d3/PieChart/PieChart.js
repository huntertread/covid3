import React from 'react';
import * as d3 from 'd3';

class PieChart extends React.Component {
  constructor() {
    super()
    this.drawChart = this.drawChart.bind(this)
  }

  drawChart() {

    // var data = [10, 20, 100, 60, 80];
    const data = this.props.data;

    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal()
        .range(["#98abc5", "#8a89a6", "#7b6888"]);

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.deaths; });

    var svg = d3.select("#piechart").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(data))
      .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d) { return color(d.data); });

    g.append("text")
        .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .text(function(d) { return d; });
  }

  componentDidMount() {
    this.drawChart();
  }

  render(){
    return  <div id={"piechart"}></div>
  }
}

export default PieChart;