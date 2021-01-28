var movingrect,fixedrect;
function setup() {
  createCanvas(800,800);
  fixedrect=createSprite(400, 100, 50, 80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400, 800, 80, 30);
  movingrect.shapeColor="green";
  fixedrect.velocityY=4;
  movingrect.velocityY=-4;
}//50/2=25
//80/2=40
//25+40=65.... movingrect.width/2+fixedrect.width/2

function draw() {
  background(0);  //rbg
  //movingrect.x=World.mouseX;
 // movingrect.y=World.mouseY;
  console.log(fixedrect.x-movingrect.x);
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
     movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
     fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2 ){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
    fixedrect.velocityY*=(-1);
    movingrect.velocityY*=(-1);
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}



