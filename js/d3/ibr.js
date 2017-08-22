//Defining the Margins
var margin = { top: 80, right: 80, bottom: 80, left: 80 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


var dataset = [
                [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
              ];

var parse = d3.timeParse("%b %Y");

var svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

//Set the X and Y scales
var xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                     .range([0, width]);

var yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                     .range([height,0]);
// Defining the Axis
var xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(5)
    ;

var yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(5)
// xAxis is now a function that will add the x axis to the graph




// Call xAxis 
svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate("+ margin.left + "," + (height+margin.top) + ")")
    .call(xAxis); 
svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate("+ margin.left + "," + (margin.top) + ")")
    .call(yAxis); 