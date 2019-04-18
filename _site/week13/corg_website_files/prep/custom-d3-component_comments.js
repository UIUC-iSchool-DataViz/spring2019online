// read in several libraries to allow us to
//  make reactive things & use d3.js
const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

// set the size of our canvas
const size = 600;

// here is the class we'll use to define our component
class CustomD3Component extends D3Component {

    // each custom component will have an initialize function
    //  that "sets the scene" and an update component
    //  that will update when something changes on our webpage
    initialize(node, props) {
	// let's use vector graphics to draw a viewer box
	const svg = this.svg = d3.select(node).append('svg');
	// define the size of our box based on our chosen
	//  constant size variable
	svg.attr('viewBox', `0 0 ${size} ${size}`)
	    .style('width', '100%')
	    .style('height', 'auto');

	// let's also include a little circle in our scene
	svg.append('circle')
	    .attr('r', 20) // 20px radius
       	    // next 2 lines specify random x&y
	    .attr('cx', Math.random() * size)
	    .attr('cy', Math.random() * size);
    }

    // now we define what happens when we update our scene
    update(props, oldProps) {
	// first, select the circle object
	this.svg.selectAll('circle')
	    .transition() // say we are changing things
	    .duration(750) // animation over 750 millisecs
	    .attr('cx', Math.random() * size) // place randomly again
	    .attr('cy', Math.random() * size);
    }
}

module.exports = CustomD3Component; // output our component
