const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600; // JPN: 600->400

class CustomD3Component extends D3Component {
    
    initialize(node, props) {
	const svg = this.svg = d3.select(node).append('svg');
	svg.attr('viewBox', `0 0 ${size} ${size}`)
	    .style('width', size) // JPN: '100%' to size
	//.style('height', 'auto'); // JPN
	    .style('height',size/2); // JPN 'auto' to size/2
	
	svg.append('circle')
	    .attr('r', 20)
	    .attr('cx', Math.random() * size)
	    .attr('cy', Math.random() * size); 
    }
    
    update(props, oldProps) {
	this.svg.selectAll('circle')
	    .transition()
	    .duration(750)
	    .attr('cx', Math.random() * size)
	    .attr('cy', Math.random() * size); 
    }
}

module.exports = CustomD3Component;
