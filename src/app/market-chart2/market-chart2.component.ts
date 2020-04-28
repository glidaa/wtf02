import {ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-market-chart2',
  templateUrl: './market-chart2.component.html',
  styleUrls: ['./market-chart2.component.css'],

})
export class MarketChart2Component implements OnInit {
  @ViewChild('chart2')
  chartElement: ElementRef;

  private svgElement: HTMLElement;
  private chartProps: any;

  constructor() { }

  ngOnInit() {
    
    var svg = d3.select("app-market-chart2").append("svg").attr("width", "1040")
    .attr("height", "400");
    var projection = d3.geoEqualEarth().rotate([90, 0, 0]);
    var path = d3.geoPath().projection(projection);

    var url = "http://enjalot.github.io/wwsd/data/world/world-110m.geojson";
    var data_url = "http://enjalot.github.io/wwsd/data/world/ne_50m_populated_places_simple.geojson";
    
    Promise.all([d3.json(url), d3.json(data_url)]).then(function(data) {
      var world = data[0];
      var places = data[1];
      
      svg.append("path")
      	.attr("d", path(world))
      	.attr("fill", "grey")
      	.attr("stroke", "white");
      
      
    });
  
  }

  
}

