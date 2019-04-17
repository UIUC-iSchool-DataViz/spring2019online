const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;

// rename our class to our new component
class MyCustomD3Component extends D3Component {
//class CustomD3Component extends D3Component {
    
    initialize(node, props) {
	// all of this is the same
	const svg = this.svg = d3.select(node).append('svg');
	svg.attr('viewBox', `0 0 ${size} ${size}`)
	    //.style('width', '100%')
	    //.style('height', 'auto');
	    .style('width', size) // JPN: '100%' to size
	    .style('height',size/2); // JPN 'auto' to size/2
	
	// instead of a circle, lets add a little vector rectangel
	svg.append('rect')
	    .attr('width',100) // make it wide
	    .attr('height',20)
	    .attr('x', Math.random() * size)
	    .attr('y', Math.random() * size);
	
	// we can also add other things to our interactive for multiple objects
	svg.append('image') // let's add an image
	//.attr('xlink:href', 'https://uiuc-ischool-dataviz.github.io/spring2019online/week04/data/littleCorgiInHat.png')
	// note: we can also add stuff from our static images as well
	    .attr('xlink:href', 'static/images/imgcropped.png')
            .attr('x',Math.random()*size)
	    .attr('y',Math.random()*size)
	    .attr('width',200)
	    .attr('height',300)
    }

    // update the properties of both our rectangle & image
    //  randomly each time there is a state change
    update(props, oldProps) {
	this.svg.selectAll('rect')
	    .transition()
	    .duration(750)
	    .attr('x', Math.random() * size)
	    .attr('y', Math.random() * size);
	this.svg.selectAll('image')
	    .transition()
	    .duration(750)
	    .attr('x', Math.random() * size)
	    .attr('y', Math.random() * size);
    }
}

// export our new class
module.exports = MyCustomD3Component;
