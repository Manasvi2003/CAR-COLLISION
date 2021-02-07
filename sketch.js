var thickness,wall;
var bullet,speed,weight;



function setup(){
createCanvas(1600,400);
car=createSprite(50,200,50,50);
wall=createSprite(1200,200,thickness,height/2);
car.velocityX=5;
speed=random(223,321);
thickness=random(22,83);
weight=random(30,52);
}
function draw(){
    background="black";
    function hasCollided(Lbullet,Lwall)
    {
        bulletRightEdge=bullet.x+bullet.width;
        wallLeftEdge=wall.x;
        if(bulletRightEdge>=wallLeftEdge)
        {
            return true
        
        }
        return false;
    }
     
    if(hasCollided(bullet,wall))
    {
        bullet.velocityX=0;
        var damage=0.5 * weight *speed * speed/(thickness * thickness * thickness);
        
        if(damage>10)
        {
            wall.shapecolor=color(255,0,0);

        }

        if(damage<10)
        wall.shapeColor=color(0,255,0);
    }
      
     damage=0.5/(ThicknessofWall)*bulletWeight/(ThicknessofWall)*bulletSpeed/(ThicknessofWall)

    
    
};
