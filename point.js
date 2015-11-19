/*
*   point defines (x,y)
*   First point object is always considered as origin.
*
*   example. if you want to set a point (101,101) which is (1,1) in a graph with origin at (100,100), first create a point object as (100,100)
*/
(function(){

    window.Point = function(x,y){
        this.x = x;
        this.y = y;

        if(!Point.prototype.origin){
            Point.prototype.origin = this;
        }
        else{
            //update point w.r.t origin
            this.x += Point.prototype.origin.x;
            this.y += Point.prototype.origin.y;
        }
        return this;
    };
/*
    var origin = new Point(100, 100);
    console.log(origin);
    var a = new Point(1, 0);
    console.log(a);
*/

})();
