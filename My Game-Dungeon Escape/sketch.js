const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var player,player_img
var background_img

var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,
enemy8,enemy9,enemy10,enemy11,enemy12;

//var health1 = 2,health2 = 2,health3 = 2,health4 = 2,
//health5 = 2,health6 = 2,health7 = 2,health8 = 2;
var test
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, 
wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16,
 wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, 
 wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, 
 wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40,
  wall41,wall42, wall43, wall44, wall45, wall46, wall47, wall48, 
  wall49, wall50, wall51;

function preload(){
    background_img = loadImage("images/map-image.png");
    player_img = loadImage("images/player.png");
}

function setup(){
    createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    //walls(to block player)

    //horizontal walls
    wall1 = createSprite(500,12,1000,20);
        wall1.visible = false;
    wall2 = createSprite(300,100,270,20);
        wall2.visible = false;
    wall3 = createSprite(500,987,1000,20);
        wall3.visible = false;
    wall6 = createSprite(490,140,120,20);
        wall6.visible = false;
    wall9 = createSprite(670,180,250,20);
        wall9.visible = false;
    wall12 = createSprite(850,320,120,20);
        wall12.visible = false;
    wall13 = createSprite(220,250,270,20);
        wall13.visible = false;
    wall16 = createSprite(100,370,150,20);
        wall16.visible = false;
    wall17 = createSprite(120,620,130,20);
        wall17.visible = false;
    wall37 = createSprite(510,210,90,20);
        wall37.visible = false;
    wall38 = createSprite(540,340,270,20);
        wall38.visible = false;
    wall39 = createSprite(570,415,20,30);
        wall39.visible = false;
    wall39 = createSprite(570,415,20,30);
        wall39.visible = false;
    wall40 = createSprite(520,585,120,20);
        wall40.visible = false;
    wall41 = createSprite(480,650,130,20);
        wall41.visible = false;
    wall42 = createSprite(440,790,150,20);
        wall42.visible = false;
    wall43 = createSprite(340,880,200,20);
        wall43.visible = false;
    wall44 = createSprite(610,920,80,20);
        wall44.visible = false;
    wall45 = createSprite(550,850,60,20);
        wall45.visible = false;
    wall46 = createSprite(50,850,150,20);
        wall46.visible = false;
    wall47 = createSprite(150,750,150,20);
        wall47.visible = false;
    wall48 = createSprite(290,690,160,20);
        wall48.visible = false;
    wall49 = createSprite(690,750,150,20);
        wall49.visible = false;
    wall50 = createSprite(780,520,150,20);
        wall50.visible = false;
    wall51 = createSprite(760,715,40,40);
        wall51.visible = false;
    //

    //verticle walls
    wall4 = createSprite(-10,500,5,1000);
        wall4.visible = false;
    wall5 = createSprite(987,500,20,1000);
        wall5.visible = false;
    wall7 = createSprite(430,120,20,60);
        wall7.visible = false;
    wall8 = createSprite(550,170,20,100);
        wall8.visible = false;
    wall10 = createSprite(787,270,20,150);
        //wall10.visible = false;
    wall11 = createSprite(920,400,20,180);
        //wall11.visible = false
    wall14 = createSprite(180,200,20,200);
        //wall14.visible = false
    wall15 = createSprite(180,500,20,250);
        //wall15.visible = false
    wall18 = createSprite(330,400,20,250);
        wall18.visible = false
    wall19 = createSprite(360,700,20,210);
        //wall19.visible = false
    wall20 = createSprite(620,730,20,180);
        wall20.visible = false
    wall21 = createSprite(860,650,20,250);
        //wall21.visible = false
    wall22 = createSprite(790,650,20,100);
         //wall22.visible = false
    wall23 = createSprite(710,500,20,80);
        //wall23.visible = false
    wall24 = createSprite(590,500,20,170);
        //wall24.visible = false
    wall25 = createSprite(460,500,20,170);
        //wall25.visible = false
    wall26 = createSprite(470,270,20,160);
        wall26.visible = false
    wall27 = createSprite(430,940,20,160);
        wall27.visible = false
    wall28 = createSprite(230,820,20,150);
        wall28.visible = false
    wall29 = createSprite(40,300,20,150);
        wall29.visible = false
    wall30 = createSprite(90,200,20,150);
        wall30.visible = false
    wall31 = createSprite(410,580,20,150);
         wall31.visible = false
        wall32 = createSprite(560,380,20,100);
        wall32.visible = false
    wall33 = createSprite(570,890,20,90);
        wall33.visible = false
    wall34 = createSprite(520,820,20,90);
        wall34.visible = false
    wall35 = createSprite(660,930,20,100);
        wall35.visible = false
    wall36 = createSprite(660,400,20,140);
        wall36.visible = false



    player = createSprite(50,100,100,100);
    player.addImage("player",player_img);
    player.scale = 0.007;
    //player.debug = true;
    player.setCollider("rectangle",0,0,5000,7000,0)

    enemy1 = new Enemy1(200,500,100,100);
    enemy2 = new Enemy1(100,600,100,100);
    enemy3 = new Enemy1(400,200,100,100);
    enemy4 = new Enemy1(500,200,100,100);
    enemy5 = new Enemy2(600,200,100,100);
    enemy6 = new Enemy2(700,200,100,100);
    enemy7 = new Enemy2(800,200,100,100);
    enemy8 = new Enemy2(900,200,100,100);
    enemy9 = new Enemy2(200,200,100,100);
    enemy10 = new Enemy2(200,700,100,100);
    enemy11 = new Enemy2(200,800,100,100);
    enemy12 = new Enemy2(200,400,100,100);

}

function draw(){
    background(background_img);
    Engine.update(engine);
    //image(background_img,0,0,5000,5000);

    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(wall5);
    player.collide(wall6);
    player.collide(wall7);
    player.collide(wall8);
    player.collide(wall9);
    player.collide(wall10);
    player.collide(wall11);
    player.collide(wall12);
    player.collide(wall13);
    player.collide(wall14);
    player.collide(wall15);
    player.collide(wall16);
    player.collide(wall17);
    player.collide(wall18);
    player.collide(wall19);
    player.collide(wall20);
    player.collide(wall21);
    player.collide(wall22);
    player.collide(wall23);
    player.collide(wall24);
    player.collide(wall25);
    player.collide(wall26);
    player.collide(wall27);
    player.collide(wall28);
    player.collide(wall29);
    player.collide(wall30);
    player.collide(wall31);
    player.collide(wall32);
    player.collide(wall33);
    player.collide(wall34);
    player.collide(wall35);
    player.collide(wall36);
    player.collide(wall37);
    player.collide(wall38);
    player.collide(wall39);
    player.collide(wall40);
    player.collide(wall41);
    player.collide(wall42);
    player.collide(wall43);
    player.collide(wall44);
    player.collide(wall45);
    player.collide(wall46);
    player.collide(wall47);
    player.collide(wall48);
    player.collide(wall49);
    player.collide(wall50);
    player.collide(wall51);





    if (keyDown("w")){
        player.y = player.y - 10;
    }

    if (keyDown("s")){
        player.y = player.y + 10;
    }

    if (keyDown("d")){
        player.x = player.x + 10;
    }

    if (keyDown("a")){
        player.x = player.x - 10;
    }
    drawSprites();
//enemy1.display();
//enemy2.display();
//enemy3.display();
//enemy4.display();
//enemy5.display();
//enemy6.display();
//enemy7.display();
//enemy8.display();
 //enemy9.display();
 //enemy10.display();
 //enemy12.display();
 //enemy11.display();


}