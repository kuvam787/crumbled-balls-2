 class Paper {

constructor(x,y,width,height){

var options = {

restitution :0.3,
friction:0.9,
density: 6,
}
this.image = loadImage("paper.png")
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world, this.body);


}
display(){
 
imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,70,70)


}



















 }