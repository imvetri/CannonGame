/**
 * graph.init(target)     - draws a target div with graph
 * graph.draw(param)- any param passed, wil be drawn on target
 *
 * target - target div
 * param - SVG valid shapes in form of {'name':tagName, attribute1:value...........}
 *
 * example
 *--------
 * to create following line
   <line class="xAxis" x1="100" y1="0" x2="100" y2="200" stroke="green" stroke-width="2"/>

  param ={
                    name:'line',
                    class: "xAxis"
                    x1:100,
                    y1:0,
                    x2:100,
                    y2:200,
                    stroke:"green",
                    'stroke-width':1
                }

 *
 */
(function(){
    window.graph = (function(){

        var create = function(params){
            var dom = document.createElementNS("http://www.w3.org/2000/svg", params.name);
            for( var atrib in params){
                dom.setAttribute(atrib,params[atrib]);
            }
            return dom;
        };

        var target, svg ;

        var init = function(target){

            target = document.getElementById("graph");
            svg = create({
                name:'svg',
                width:200,
                height:200
            });

            var rect = create({
                    name:'rect',
                    width:200,
                    height:200,
                    stroke:'green',
                    'stroke-width':1,
                    fill:'yellow'
                }),
                xAxis = create({
                    name:'line',
                    x1:0,
                    y1:100,
                    x2:200,
                    y2:100,
                    stroke:"green",
                    'stroke-width':1
                }),
                yAxis = create({
                    name:'line',
                    x1:100,
                    y1:0,
                    x2:100,
                    y2:200,
                    stroke:"green",
                    'stroke-width':1
                });

            svg.appendChild(rect);
            svg.appendChild(xAxis);
            svg.appendChild(yAxis);

            target.appendChild(svg);
        };
        var draw = function(params){
            var obj = create(params);
            svg.appendChild(obj);
        };

        return{
            init:init,
            draw:draw
        };
    })();
})();