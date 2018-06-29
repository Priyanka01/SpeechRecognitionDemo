import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping-two-d',
  templateUrl: './mapping-two-d.component.html',
  styleUrls: ['./mapping-two-d.component.css']
})
export class MappingTwoDComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


// globe(){
//   var app = angular.module("myapp", []);

//     app.directive("globe", function() {
//         return {
//             restrict   : 'E',
//             scope      : {
//                 data: '=?'
//             },
//             template: 
//             '<div class="globe-wrapper">' +
//                 '<div class="globe"></div>' +
//                 '<div class="info"></div>' +
//             '</div>',
//             link: link
//         };
        
//         function link(scope, element, attrs) {
//             var width = 500, height = width, 
//                 projection, path,
//                 svg, features, graticule,
//                 mapJson = 'https://gist.githubusercontent.com/GordyD/49654901b07cb764c34f/raw/27eff6687f677c984a11f25977adaa4b9332a2a9/countries-and-states.json',
//                 states, stateSet, countries, countrySet, zoom;
            
//             projection = d3.geo.orthographic()
//                 .translate([width / 2, height / 2])
//                 .scale(250)
//                 .clipAngle(90)
//                 .precision(0.1)
//                 .rotate([0, -30]);
            
//             path = d3.geo.path()
//                 .projection(projection);
            
//             svg = d3.select(element[0]).select('.globe')
//                 .append('svg')
//                 .attr('width', width)
//                 .attr('height', height)
//                 .attr('viewBox', '0, 0, ' + width + ', ' + height);
           
//             features = svg.append('g');
            
//             features.append('path')
//                 .datum({type: 'Sphere'})
//                 .attr('class', 'background')
//                 .attr('d', path);
            
//             graticule = d3.geo.graticule();

//             features.append('path')
//               .datum(graticule)
//               .attr('class', 'graticule')
//               .attr('d', path);
            
//             zoom = d3.geo.zoom()
//               .projection(projection)
//               .scaleExtent([projection.scale() * 0.7, projection.scale() * 8])
//               .on('zoom.redraw', function(){
//                 d3.event.sourceEvent.preventDefault();
//                 svg.selectAll('path').attr('d',path);
//               });
            
//             d3.json(mapJson, function(error, world) {
//                 states = topojson.feature(world, world.objects.states).features;
//                 countries = topojson.feature(world, world.objects.countries).features;
                
//                 stateSet = drawFeatureSet('state', states);
//                 countrySet = drawFeatureSet('country', countries);
                
//                 d3.selectAll('path').call(zoom);
//             });
            
//             function drawFeatureSet(className, featureSet) {
//                 var set  = features.selectAll('.' + className)
//                 .data(featureSet)
//                 .enter()
//                 .append('g')
//                 .attr('class', className)
//                 .attr('data-name', function(d) {
//                     return d.properties.name;
//                 })
//                 .attr('data-id', function(d) {
//                     return d.id;
//                 });
                
//                 set.append('path')
//                 .attr('class', 'land')
//                 .attr('d', path);
                
//                 set.append('path')
//                 .attr('class', 'overlay')
//                 .attr('d', path)
//                 .attr('style', function(d) {
//                     if (scope.data[d.id]) {
//                         return 'fill-opacity: ' + (scope.data[d.id]/100);
//                     }
//                 })
//                 .on('click', function(d) {
//                     var val = (scope.data[d.id]) ? scope.data[d.id] : 0;
//                     d3.select(element[0]).select('.info').html(d.properties.name + ': ' + val);
                    
//                     rotateToFocusOn(d);
//                 }); 
                
//                 return set;
//             }
            
//             function rotateToFocusOn(x) {
//                 var coords = d3.geo.centroid(x);
//                 coords[0] = -coords[0];
//                 coords[1] = -coords[1];
                
//                 d3.transition()
//                 .duration(1250)
//                 .tween('rotate', function() {
//                     var r = d3.interpolate(projection.rotate(), coords);
//                     return function(t) {
//                         projection.rotate(r(t));
//                         svg.selectAll('path').attr('d', path);
//                     };
//                 })
//                 .transition();
//             }
//         }
//     });

//     app.controller("ctrl1",function($scope, $log) {
//         $scope.data = {
//             '088': 99,
//             '012': 45,
//             '262': 56,
//             '276': 80, //Germany
//             '380': 56, //Italy
//             '372': 25, //Ireland,
//             '024': 56,
//             '032': 12,
//             '008': 67,
//             '004': 56,
//             '051': 12,
//             '784': 67,
            
//             '152': 89,
//             '156': 45,
//             '384': 51,
//             '170': 73,
//             '818': 49,
//             '208': 66,
//             '724': 9,
//             '250': 31,
//             '242': 51,
//             '356': 87,
//             '826': 19,
//             '360': 26,            
            
//             '3514': 63,
//             '3515': 47,
//             '3516': 47,
//             '3517': 63,
//             '3518': 47,
//             '3519': 47,
//             '3520': 67,
//             '3521': 19,
//             '3522': 71,
//             '3523': 36,
//             '3524': 56,
//             '3525': 12,
//             '3526': 67,
//             '3527': 19,
//             '3528': 71,
//             '3529': 36,
//             '3530': 56, 
//             '3531': 12,
//             '3532': 71,
//             '3533': 36,
//             '3534': 56,
//             '3535': 12,
//             '3536': 67,
//             '3537': 19,
//             '3538': 71,
//             '3539': 36,
//             '3540': 56,
//             '3541': 19,
//             '3542': 71,
//             '3543': 36,
//             '3544': 56,
//             '3545': 12,
//             '3546': 67,
//             '3547': 19,
//             '3548': 71,
//             '3549': 36,
//             '3550': 56, 
//             '3551': 12,
//             '3552': 71,
//             '3553': 21,
//             '3554': 34,
//             '3555': 45,
//             '3556': 5,
//             '3557': 25,
//             '3558': 56,
//             '3559': 36,
//             '3560': 56,
//             '3561': 19,
//             '3562': 71,
//             '3563': 36
//         };
//     });

//     app.run();
// }



}
