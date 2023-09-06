class Player{
  constructor(warna, y){
    this.warna = color(warna)
    this.d = 40
    this.pos = createVector(50,y)
    this.speed = 2  
  }
  
  maju(){
    this.pos.x += this.speed
  }
  
  tampilkan(){
    fill(this.warna)
    circle(this.pos.x, this.pos.y, this.d)
  }
  
  finish() {
    if(this.pos.x > width ) {
      textSize(30)
      textAlign(CENTER)
      text('FINISH', width/2, height/2)
      noLoop()
    }
  }
}