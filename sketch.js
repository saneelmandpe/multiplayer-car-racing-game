var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var car1,car2,car3,car4;

var car1Img,car2Img,car3Img,car4Img;

var groundImage;

var trackImage;

var track2Image;

var cars=[];

var form, player, game;

function preload(){
car1Img=loadImage("car1.png");
car2Img=loadImage("car2.png");
car3Img=loadImage("car3.png");
car4Img=loadImage("car4.png");

groundImage=loadImage("ground.png");

track2Image=loadImage("track.jpg");

trackImage=loadImage("track.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);

  car1=createSprite(300,200);
  car2=createSprite(100,200);
  car3=createSprite(500,200);
  car4=createSprite(700,200);

  car1.addImage("car 1",car1Img);
  car2.addImage("car 2",car2Img);
  car3.addImage("car 3",car3Img);
  car4.addImage("car 4",car4Img);

 cars=[car1,car2,car3,car4];

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
game.end();    
  }
  drawSprites();
}
