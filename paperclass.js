 class paper{

    constructor(x,y){
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.body = bodies.ellipse(x, y, 10, options)

        World.add(world, this.body);


    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
  
        fill("pink");
        ellipse(pos.x, pos.y, this.width, this.height);
      }
}