const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;

class MyCustomD3Component extends D3Component {
//class CustomD3Component extends D3Component {

  initialize(node, props) {
    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');

    //svg.append('circle')
    svg.append('rect')
      //.attr('width', 20)
	  .attr('width',100) // make it wide
      .attr('height',20)
      .attr('x', Math.random() * size)
	  .attr('y', Math.random() * size);

      // we can also add other things to our interactive -> multiple objects
      svg.append('image')
      //.attr('xlink:href', 'https://uiuc-ischool-dataviz.github.io/spring2019online/week04/data/littleCorgiInHat.png')
      // note: we can also add stuff from our static images as well
	  .attr('xlink:href', 'static/images/imgcropped.png')
          .attr('x',Math.random()*size)
	  .attr('y',Math.random()*size)
	  .attr('width',100)
	  .attr('height',200)
  }

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

module.exports = MyCustomD3Component;
//module.exports = CustomD3Component;
