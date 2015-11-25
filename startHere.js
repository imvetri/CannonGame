/**
 * Created by shanmuv on 11/19/15.
 */

(function(){
    /* Example FunctionExpression
    *   if X+Y = 1
    *   then FunctionExpression = 1-Y
    *   FunctionExpression = function(){return 1-Y}
    */
    var FunctionExpression = function(){
        return (1-y);
    };
    var getXFrom = function(FunctionExpression,y){
        return FunctionExpression(y);
    };

    var p = [];
    //setting origin
    var origin = new Point(100,100);


    for(var y=-50 ; y< 50 ; y++){
        var x = getXFrom(FunctionExpression,y);
        p.push(new Point(x,y));

    }
    //draw the graph
    graph.init("graph");

    p.forEach(function(element, index, array){
        graph.draw({
            "name":'circle',
            cx : element.x,
            cy : element.y,
            r:0.5,
            stroke:'black'
        });
    });
})();
