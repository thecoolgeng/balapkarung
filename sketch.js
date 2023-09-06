let player1,player2;
let sfxlompat
let bglapang

function preload(){
  soundFormats('mp3')
  sfxlompat = loadSound('lompat.mp3')
  bglapang = loadImage('lapang1.jpg')
}

function setup() {
  createCanvas(600, 400);
  
  player1 = new Player('red',100)
  player2 = new Player('blue',300)
  
  
}

function draw() {
 image(bglapang,0,0,width,height);
    
    player1.tampilkan()
    player2.tampilkan()
  
    player1.finish()
    player2.finish()


 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    player1.maju()
    sfxlompat.play()
  }
  
  else if(keyCode === RIGHT_ARROW){
    player2.maju()
    sfxlompat.play()
  }
}

