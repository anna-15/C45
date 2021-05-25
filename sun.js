class Sun{
    constructor(x,y,width,height){
          var option ={
              isStatic: true
          }

        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/sun.png")
        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
       // push();
       // translate(width/2,height/2);
       // rotate(PI/3.0);
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.width,this.height);
       
        
    }
}