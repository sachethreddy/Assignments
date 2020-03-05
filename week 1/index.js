// javascript
var data = [
    {"poke_type": "fire", "percentage": 27}, 
    {"poke_type": "water", "percentage": 23},
    {"poke_type": "grass", "percentage": 24},
    {"poke_type": "fighting", "percentage": 26}
];

var svgWidth = 500, svgHeight = 300, radius =  Math.min(svgWidth, svgHeight) / 2;
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

//Create group element to hold pie chart    
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")") ;

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d) { 
     return d.percentage; 
});

var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);
 
var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d", path)
    .attr("fill", function(d) { return color(d.data.percentage); });
        
var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);
            
arc.append("text")
    .attr("transform", function(d) { 
        return "translate(" + label.centroid(d) + ")"; 
    })
    .attr("text-anchor", "middle")
    .text(function(d) { return d.data.poke_type+":"+d.data.percentage+"%"; });