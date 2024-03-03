let playerState = 'idle'
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change',function(e) {
    playerState = e.target.value
})


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
console.log(ctx)
// decleaar the canvas width
const CANVAS_WIDTH = canvas.width  = 600
const CANVAS_HEITHT = canvas.height = 600
const playerImage = new Image()
playerImage.src = 'shadow_dog.png'

const spriteWidth =  575
const spriteHeight = 523

let gameFrame = 0
 let staggerFrames = 9 // to control the speed of animation

 

 const spriteAnimations = []

 const spriteAnimationStates = [ 
    {
        name:'idle',
        frame:7
    }
    ,{
        name: 'jump',
        frame:7
    }
    ,{
        name: 'fall',
        frame:7

    }
    ,{
        name: 'run',
        frame:9
    }
    ,{
        name: 'dizzy',
        frame:11
    }
    ,{
        name: 'sit',
        frame:5
    }
    ,{
        name: 'roll',
        frame:7
    }
    ,{
        name: 'bite',
        frame:7
    }
    ,{
        name: 'ko',
        frame:12
    }
    ,{
        name: 'getHit',
        frame:4
    }
 ]

 spriteAnimationStates.forEach((state,index)=>{
    let frames ={
        loc:[]
    }
    for(let j=0; j< state.frame; j++){
        let positionX = j* spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x:positionX,y:positionY})
        spriteAnimations[state.name] = frames
    }
 })

// Add function to animate for a animation loop

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEITHT)
    let position = Math.floor(gameFrame/ staggerFrames) % spriteAnimations[playerState].loc.length;
   let frameX = spriteWidth*position ;
   let frameY = spriteAnimations[playerState].loc[position].y

    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0 ,CANVAS_WIDTH,CANVAS_HEITHT)
    requestAnimationFrame(animate)
gameFrame++
    // // simple way to animate 
    // if(frameX < 4) frameX++
    // else frameX = 0
     
}

animate()
