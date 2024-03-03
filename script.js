const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const  CANVAS_WIDTH = canvas.width = 800;
const   CANVAS_HEIGHT  = canvas.height = 700

let gameSpeed = 15;


const backgroundLayer1 = new Image()
backgroundLayer1.src = './backgroundLayers/layer-1.png';

const backgroundLayer2 = new Image()
backgroundLayer2.src = './backgroundLayers/layer-2.png';

const backgroundLayer3 = new Image()
backgroundLayer3.src = './backgroundLayers/layer-3.png';

const backgroundLayer4 = new Image()
backgroundLayer4.src = './backgroundLayers/layer-4.png';

const backgroundLayer5 = new Image()
backgroundLayer5.src = './backgroundLayers/layer-5.png';

// create animation loop
//easy way to create it
// let x=0
// let x2=2400

// function animate(){
//     ctx.clearRect(0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);
    
//     ctx.drawImage(backgroundLayer4, x, 0);
//     ctx.drawImage(backgroundLayer4, x2, 0);
//     requestAnimationFrame(animate)
//     // x++
//     if(x<-2400) x= 2400 + x2 -gameSpeed
//     else x-= gameSpeed;

//     if(x2<-2400) x2= 2400 + x1 -gameSpeed
//     else x2-= gameSpeed;

// }

window.addEventListener('load',function(){
    // slider element
const slider = document.getElementById('slider')
slider.value = gameSpeed

const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed

slider.addEventListener('change',function (e) {
     gameSpeed =  e.target.value
     showGameSpeed.innerHTML = gameSpeed
})

class Layer {
    constructor(image,speedModifier){
        this.x = 0
        this.y =0
        this.width = 2400
        this.height = 700
        this.image = image
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier
    }
    update(){
        this.speed  = gameSpeed* this.speedModifier
        if(this.x <= -this.width){
            this.x =0
        }
        
        this.x = Math.floor(this.x - this.speed)
     
    }
    draw(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
            
    }
}


const layer1 = new Layer(backgroundLayer1,0.2)
const layer2 = new Layer(backgroundLayer2,0.4)
const layer3 = new Layer(backgroundLayer3,1.6)
const layer4 = new Layer(backgroundLayer4,0.8)
const layer5 = new Layer(backgroundLayer5,1)

const gameObject = [layer1,layer2,layer3,layer4,layer5]

function animate(){
    ctx.clearRect(0, 0,CANVAS_WIDTH, CANVAS_HEIGHT);

    gameObject.forEach((value) => {
        value.draw()
        value.update()
    })
    // without looping 
        // layer1.update()
        // layer1.draw()
        // layer2.update()
        // layer2.draw()
        // layer3.update()
        // layer3.draw()
        // layer4.update()
        // layer4.draw()
        // layer5.update()
        // layer5.draw()
    requestAnimationFrame(animate)
}



animate()
})