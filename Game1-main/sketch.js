var bgimg;
var b1img, b2img, b3img;
var effectimg;
var auraimg;
var diamondimg;
var ninjastand, ninjafire;
var bg;
var bgroup;
var ninja;

function preload()
{
  bgimg = loadImage("images/bg2.png");
  b1img = loadImage("images/bomb1.png");
  b2img = loadImage("images/bomb2.png");
  b3img = loadImage("images/bomb3.png");
  diamondimg = loadImage("images/diamond.png");
  effectimg = loadImage("images/effect1.png");
  ninjastand = loadImage("images/ninja_aim.png");
  ninjafire = loadImage("images/ninja_kill.png");
  auraimg = loadImage("images/aura.png");


}

function setup()
{
  createCanvas(1600,800);
  bg = createSprite(300,400,width,height);
  bg.addImage("bg",bgimg);
  bg.scale = 1.5;

  ninja = createSprite(300,100,50,50);
  ninja.addImage("ninja_Stand",ninjastand);
  ninja.scale = 0.04;
  ninja.debug = true;

  bgroup = new Group();
  
  
  

}
function draw()
{
  background(0);
  bombs();

  drawSprites();
}

function bombs()
{
  if(frameCount % 70 === 0)
  {
    bomb = createSprite(1600,300,10,10);
    bomb.y = Math.round(random(70,730));
    bomb.velocityX = -5;
    var r = Math.round(random(1,1));
    switch(r)
    {
      case 1: bomb.addImage(b1img);
      bomb.scale = 0.03;
      break;
      case 2: bomb.addImage(b2img);
      break;
      case 3: bomb.addImage(b3img);
      break;
      default: break;
    }
    bomb.lifetime = 500;
    bgroup.add(bomb);

  }
}