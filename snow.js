class Snow {
    constructor(x,y){
    var  options = {isStatic:false,
    restitution:0.4}
    this.r = 5;  
     this.snowFlake = Bodies.circle(x,y,this.r,options)
     this.image = loadImage("snow4.webp");
     World.add(world,this.snowFlake) ;
    }
display(){
    var pos = this.snowFlake.position ;
    var angle = this.snowFlake.angle;
    push ();
   translate (pos.x,pos.y) ;
   rotate (angle)
   imageMode(CENTER);
    image(this.image , 0,0,this.r+20,this.r+20);
// fill ("red")
// ellipseMode(RADIUS);
// ellipse(0,0,this.r,this.r)
    pop ();

}
   
}