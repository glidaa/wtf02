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
    
      
  const meteoriteDataURL = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json";
  const worldMapURL = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";
  
  const width = 1000,
  height = 600;
  
  const svg = d3.select("body").append("svg").
  attr("width", width).
  attr("height", height);
  
  svg
  .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height", height)
    .attr("width", height)
    .style("fill", "EBEBEB")

    const g = svg.append("g");

    const tooltip = d3.select("body").append("div").
  attr("class", "tooltip").
  style("opacity", 0);
const projection = d3.geoEquirectangular().
scale(200).
translate([width / 2, height / 2]);
  

const path = d3.geoPath().
projection(projection).
pointRadius(d => Math.sqrt(d.properties.mass) / 100);

var files = [worldMapURL, meteoriteDataURL];
var promises = [];


var world;
var meteorites;

files.forEach(function(url) {
  promises.push(d3.json(url))
});

Promise.all(promises).then(function(values) {
  console.log(values)
  world = values[0];
  meteorites = values[1];
  console.log(world);
  console.log(meteorites);

  meteorites.features.sort(function (a, b) {
    return b.properties.mass - a.properties.mass;
  });

  g.selectAll(".border").
  data(world.features).
  enter().append("path").
  attr("class", "border").
  attr("d", path).
  style("stroke", "white").
  style("fill", "white");

  g.selectAll(".meteorite").
  data(meteorites.features).
  enter().append("path").
  attr("class", "meteorite").
  attr("d", path).
  style("stroke", "steelblue").
  style("fill", "steelblue").
  style("opacity", "0.8").
  on("mouseover", function (d) {
    d3.select(this).
    style("fill", "red").
    style("stroke", "red");
    tooltip.
    style("opacity", 0.8).
    html(
    "Name: " + d.properties.name +
    "<br />Mass: " + d.properties.mass +
    "<br />Year: " + d.properties.year.slice(0, 4)).

    style('left', d3.event.pageX + 'px').
    style('top', d3.event.pageY + 'px');
  }).
  on("mouseout", function (d) {
    d3.select(this).
    style("stroke", "steelblue").
    style("fill", "steelblue");
    tooltip.style("opacity", 0);
  });

});



  
  }

  
}

