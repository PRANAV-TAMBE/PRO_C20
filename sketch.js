var bgImg;
var cat1Img,cat2Img;
var mouse1Img,mouse2Img;
var mouse,cat;
var cat4,mouse4;

function preload() {
//load the images here
bgImg=loadImage("images/garden.png");
cat1Img=loadImage("images/cat1.png");
cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
mouse1Img=loadImage("images/mouse1.png");
mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
cat4=loadImage("images/cat4.png");
mouse4=loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(300,700,50,50);
    mouse.addImage(mouse1Img);
    mouse.scale=0.1;
    cat=createSprite(700,700,50,50);
    cat.addImage(cat1Img);
    cat.scale=0.1;
   

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.addAnimation("catRunning",cat4);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseHappy",mouse4);
      mouse.changeAnimation("mouseHappy");
      cat.velocityX=0;
    }

    cat.debug=true;
    mouse.debug=true;



  drawSprites();
}

function keyPressed(){

//For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
  mouse.addAnimation("mouseTeasing",mouse2Img);
  mouse.changeAnimation("mouseTeasing");
  mouse.frameDelay=25;
  
  cat.velocityX=-6;
  cat.addAnimation("catRunning",cat2Img);
  cat.changeAnimation("catRunning");
   }

  }