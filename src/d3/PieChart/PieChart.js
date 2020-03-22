import React from 'react';
import * as d3 from 'd3';

class PieChart extends React.Component {
  constructor(props) {
    super(props)
    this.drawChart = this.drawChart.bind(this)
  }

  drawChart() {

    // var data = [10, 20, 100, 60, 80];
    const data = this.props.data;

    var width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;

    // give the pie a scalar color range
    var color = d3.scaleOrdinal()
        .range(["#FF3A3A", "#FF5733", "#FF733A", "#FF913A", "#FFA53A", "#FFC63A", "#FFDE3A"]);
    
    // generate the arcs
    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    
    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    // generate the pie
    var pie = d3.pie()
        .sort(null)
        .value(function(d) { return d.cases; });

    var svg = d3.select("#piechart").append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // generate groups
    var g = svg.selectAll(".arc")
        .data(pie(data))
      .enter().append("g")
        .attr("class", "arc");

    // draw arc paths and apply colors to each group
    g.append("path")
        .attr("d", arc)
        .style("fill", function(d, i) { return color(i); });

    // apply text to each group
    g.append("text")
        .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .text(function(d) { return `${d.data.country}: ${d.data.cases} cases`; });
  }

  componentDidMount() {
    this.drawChart();
  }

  render(){
    return  <div id="piechart"></div>
  }
}

export default PieChart;