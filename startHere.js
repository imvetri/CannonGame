/**
 * Created by shanmuv on 11/19/15.
 */

(function(){
    /* Example FnExp
    *   if X+Y = 1
    *   then FnExp = 1-Y
    *   FnExp = function(){return 1-Y}
    */
    var FnExp = function(){
        return (1-y);
    };
    var getXFrom = function(FnExp,y){
        return FnExp(y);
    };

    var p = [];
    //setting origin
    p.push(new Point(100,100));


    for(var y=-50 ; y< 50 ; y++){
        var x = getXFrom(FnExp,y);
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
