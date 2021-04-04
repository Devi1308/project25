class Paper 
{
    constructor(x,y,r)
      {
       var Options ={
           isStatic:false,
           restitution:0.3,
           friction:0,
           density:1.2
       }

       this.x=x;
       this.y=y;
       this.r=r
       this.image = loadImage("paper.png");
       this.body=Bodies.circle(this.x, this.y, this.r, Options)
       World.add(world, this.body);

   }
   display()
   {
           var paperpos=this.body.position;		
           push()
           translate(paperpos.x, paperpos.y);
           
           
           //draw the ellipse here to display the rubber ball
           imageMode(CENTER);
           image(this.image, 0, 0,80, 80);
           pop()
   }

}
      
