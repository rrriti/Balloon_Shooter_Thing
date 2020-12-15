var bow, bowImg;
var bg1, bg1Img;
var arrowImg, arrowGroup;
var balloonGroup, redGroup, blueGroup, greenGroup, pinkGroup;
var redImg, blueImg, greenImg, pinkImg;

var score = 0;

function preload(){
 //load your images here 
 bowImg = loadImage("bow0.png");
 bg1Img = loadImage("background0.png");
 arrowImg = loadImage("arrow0.png");
 redImg = loadImage("red_balloon0.png");
 blueImg = loadImage("blue_balloon0.png");
 greenImg = loadImage("green_balloon0.png");
 pinkImg = loadImage("pink_balloon0.png");
}

function setup() {
  createCanvas(600, 600);
  bg1 = createSprite (0,0,600,50);
  bg1.addImage(bg1Img); 
  bow = createSprite(560,300,20,20); 
  bow.addImage(bowImg); 
  
  bg1.scale = 3;
  bg1.velocityX = -5; 
}

function draw() {
  background("white");
  bow.y = mouseY;
  
  if(bg1.x<0){
   bg1.x = bg1.width/2;
  
  if(keyDown("SPACE")){
     var temp_arrow = createArrow();
     temp_arrow.addImage(arrowImg);
     temp_arrow.y = bow.y;
     }
  
  var select_balloon = Math.round(random(1,4));

  if(frameCount % 3 === 0){
    if(select_balloon === 1){
      redBalloon();
    } else if(select_balloon === 2){
      blueBalloon();
    } else if(select_balloon === 3){
      greenBalloon();
    } else {
      pinkBalloon();
    }
   }
  } 
  
  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  
  if(arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  
   if(arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }
  
   if(arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  }
  
   if(arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 5;
  }
  drawSprites();
  
  textSize(25);
  fill("black");
  text("Score: "+ score,270,30);
}


function createArrow(){
  arrow = createSprite(560,100,5,10);
  arrow.addImage(arrowImg);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime = 100;
  arrowGroup.add(arrow);
  return arrow;
}

function redBalloon(){
  var red = createSprite(Math.round(random(70,370)),600,10,10);
  red.addImage(redImg);
  red.velocityY = -3;
  red.lifetime = 200;
  red.scale = 0.1; 
  redGroup.add(red);
}

function blueBalloon(){
  var blue = createSprite(Math.round(random(70,370)),600,10,10);
  blue.addImage(blueImg);
  blue.velocityY = -3;
  blue.lifetime = 175;
  blue.scale = 0.1; 
  blueGroup.add(blue);
}

function greenBalloon(){
  var green = createSprite(Math.round(random(70,370)),600,10,10);
  green.addImage(greenImg);
  green.velocityY = -3;
  green.lifetime = 150;
  green.scale = 0.1; 
  greenGroup.add(green);
}

function pinkBalloon(){
  var pink = createSprite(Math.round(random(70,370)),600,10,10);
  pink.addImage(pinkImg);
  pink.velocityY = -3;
  pink.lifetime = 120; 
  pinkGroup.add(pink);
}