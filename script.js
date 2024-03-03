
canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 700;

let canvasPosition = canvas.getBoundingClientRect()

const explosionsArr = [];

class Explosion {
    constructor(x,y) {
       
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth /2 ;
        this.height = this.spriteHeight /2 ;
        this.image = new Image()
        this.x =x 
        this.y = y 
        this.image.src = 'boom.png';
        this.frame = 0
        this.timer =0 ;
        this.angle = Math.random() * 6.2; // 6.2 is radient value of 360 degree
        this.sound = new Audio()
        this.sound.src = 'Fire impact 1.wav'
    }

    update(){
        if(this.frame === 1){
            this.sound.play()
        }
        this.timer++
        if(this.timer % 10 == 0){
        this.frame++}
    }
    draw(){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(this.angle)
        ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight , 0- this.width/2,0-this.height/2 , this.width , this.height);
        ctx.restore()
    }
}


const createAnimation = (e)=>{

    let positionX = e.x -canvasPosition.left
    let positionY = e.y - canvasPosition.top
    explosionsArr.push(new Explosion(positionX,positionY))
}

window.addEventListener('click',function (e) {

createAnimation(e)
})

console.log(explosionsArr)

function animate (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < explosionsArr.length; i++) {
        explosionsArr[i].update()
        explosionsArr[i].draw()
        if(explosionsArr[i].frame > 5){
        explosionsArr.splice(i,1)
        i--
        }
    }
    requestAnimationFrame(animate)
}
animate()