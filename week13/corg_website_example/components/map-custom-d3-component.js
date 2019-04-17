const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

// JPN: had to add the following
const topojson = require('topojson-client'); // Need this for map
const d3tip = require('d3-tip');

//const size = 600;
//const width = 600;
//const height= 600;

var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
var format = d3.format(",");


class MapCustomD3Component extends D3Component {
    
    initialize(node, props) {
	const svg = this.svg = d3.select(node).append('svg');
	svg.attr("width", width)
            .attr("height", height)
            .append('g')
            .attr('class', 'map');


	// Set tooltips
	var tip = d3tip() // JPN: had to change here d3.tip -> d3tip
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
		return "<strong>Country: </strong><span class='details'>" + d.properties.name + "<br></span>" + "<strong>Population: </strong><span class='details'>" + format(d.population) +"</span>";
            })
	
	
	var color = d3.scaleThreshold()
	    .domain([10000,
		     100000,
		     500000,
		     1000000,
		     5000000,
		     10000000,
		     50000000,
		     100000000,
		     500000000,
		     1500000000])
	    .range(["rgb(247,251,255)",
		    "rgb(222,235,247)",
		    "rgb(198,219,239)",
		    "rgb(158,202,225)",
		    "rgb(107,174,214)",
		    "rgb(66,146,198)",
		    "rgb(33,113,181)",
		    "rgb(8,81,156)",
		    "rgb(8,48,107)",
		    "rgb(3,19,43)"]);


	var path = d3.geoPath();
	
//	var svg = d3.select("body")
//            .append("svg")
	
	var projection = d3.geoMercator()
            .scale(130)
            .translate( [width / 2, height / 1.5]);
	
	var path = d3.geoPath().projection(projection);
	
	svg.call(tip);

	d3.queue() // JPN: had to change queue -> d3.queue()
	    .defer(d3.json, "https://raw.githubusercontent.com/jdamiani27/Data-Visualization-and-D3/master/lesson4/world_countries.json")
	    .defer(d3.tsv, "https://raw.githubusercontent.com/jnaiman/champaignElection/master/website_test/random_data/world_population.tsv")
	    .await(ready);

	function ready(error, data, population) {
	    if (error) throw error;
	    var populationById = {};
	    
	    population.forEach(function(d) { populationById[d.id] = +d.population; });
	    //console.log('YO');
	    //console.log(population);
	    data.features.forEach(function(d) { d.population = populationById[d.id] });
	    
	    svg.append("g")
		.attr("class", "countries")
		.selectAll("path")
		.data(data.features)
		.enter().append("path")
		.attr("d", path)
		.style("fill", function(d) { return color(populationById[d.id]); })
		.style('stroke', 'white')
		.style('stroke-width', 1.5)
		.style("opacity",0.8)
	    // tooltips
		.style("stroke","white")
		.style('stroke-width', 0.3)
		.on('mouseover',function(d){
		    tip.show(d, this);
		    
		    d3.select(this)
			.style("opacity", 1)
			.style("stroke","white")
			.style("stroke-width",3);
		})
		.on('mouseout', function(d){
		    tip.hide(d);
		    
		    d3.select(this)
			.style("opacity", 0.8)
			.style("stroke","white")
			.style("stroke-width",0.3);
		});
	    
	    svg.append("path")
		.datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
	    //.datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
		//.attr("d", topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }) )
		.attr("class", "names")
		.attr("d", path);
	}
    
    }
}



module.exports = MapCustomD3Component;
