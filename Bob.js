class Bob {
    constructor(x,y,radius)
    {
        var options_paper = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.6
            
            
        }
        this.body = Bodies.circle(x, y,radius, options_paper);
        this.width = width;
        this.height = height;
        
        World.add(world,this.body)
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("yellow");
      fill("yellow");   
      ellipse(0, 0,60,60);
      pop();
    }
}