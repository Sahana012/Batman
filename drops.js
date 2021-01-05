class Drops{
    constructor(x, y){
        var options = {
            friction : 0.5,
        }
        this.radius = 5;

        this.rain = Bodies.circle(x, y, 5, options); 
        World.add(world, this.rain); 
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
        }
    }
    display(){
        var pos = this.rain.position;

        fill(163, 240, 255);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }

}