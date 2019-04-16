const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

const size = 600;
//const height = 600;

//var projection = d3.geo.mercator();


class MapCustomD3Component extends D3Component {
    
  initialize(node, props) {
    const svg = this.svg = d3.select(node).append('svg');
    svg.attr('viewBox', `0 0 ${size} ${size}`)
      .style('width', '100%')
      .style('height', 'auto');
  }
}

//    svg.append('circle')
//      .attr('r', 20)
//      .attr('cx', Math.random() * size)
//      .attr('cy', Math.random() * size);
//  }

//  update(props, oldProps) {
//    this.svg.selectAll('circle')
//      .transition()
//      .duration(750)
//      .attr('cx', Math.random() * size)
//	  .attr('cy', Math.random() * size);
//  }
//}
  
      
//      var path = d3.geo.path()
//          .projection(projection);
//      var g = svg.append("g");
// 
//      d3.json("world-110m2.json", function(error, topology) {
//          g.selectAll("path")
//            .data(topojson.object(topology, topology.objects.countries)
//                .geometries)
//          .enter()
//            .append("path")
//            .attr("d", path)
//      });
      
//  }
//
//  update(props, oldProps) {
//    this.svg.selectAll('circle')
//      .transition()
//      .duration(750)
//      .attr('cx', Math.random() * size)
//      .attr('cy', Math.random() * size);
//  }
//}

module.exports = MapCustomD3Component;
