/** @type {HTMLCanvasElement} */



// shake Animation
// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d')

// CANVAS_WIDTH = canvas.width = 500;
// CANVAS_HEIGHT = canvas.height = 1000;

// const numberOfEnemies = 10;
// const enemiesArray = []

// let gameFrame = 0 ;

// class Enemy {
//     constructor() {
//         this.image = new Image()
//         this.image.src = './enemies/enemy1.png'
//         // this.speed = Math.random() * 5 - 2.5
//         this.spriteWidth = 293
//         this.spriteheight = 155
//         this.height = this.spriteheight/2.5
//         this.width = this.spriteWidth /2.5
//         this.x = Math.random() * (CANVAS_WIDTH - this.width)
//         this.y = Math.random() *( CANVAS_HEIGHT - this.height)
//         this.frame = 0 
//         this.flapSpeed = Math.floor(Math.random() *3 +1)
//     }
//     update() {
//         // this.x += this.speed
//         // this.y += this.speed
//          this.x += Math.random() *15 -7.5
//         this.y += Math.random() *15 -7.5

//         // animate sprites
//         if(gameFrame %this.flapSpeed ==0){
//         this.frame > 4  ? this.frame = 0  : this.frame++}
//     }
//     draw() {

//         ctx.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,this.spriteheight,this.x, this.y, this.width, this.height)
//     }

// }
// // const enemy1 = new Enemy()



// for (let i = 0; i < numberOfEnemies; i++) {
//     enemiesArray.push(new Enemy())

// }


// function animate() {

//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     enemiesArray.forEach((obj) => {
//         obj.update()
//         obj.draw()
//     })
//     //    enemy1.update()
//     //     enemy1.draw()
//     gameFrame++
//     requestAnimationFrame(animate)
// }

// animate()




// wave animation
// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d')

// CANVAS_WIDTH = canvas.width = 500;
// CANVAS_HEIGHT = canvas.height = 1000;

// const numberOfEnemies = 20;
// const enemiesArray = []

// let gameFrame = 0;

// class Enemy {
//     constructor() {
//         this.image = new Image()
//         this.image.src = './enemies/enemy2.png'
//         this.speed = Math.random() * 4 + 1;
//         this.spriteWidth = 266
//         this.spriteheight = 188
//         this.height = this.spriteheight / 2.5
//         this.width = this.spriteWidth / 2.5
//         this.x = Math.random() * (CANVAS_WIDTH - this.width)
//         this.y = Math.random() * (CANVAS_HEIGHT - this.height)
//         this.frame = 0
//         this.flapSpeed = Math.floor(Math.random() * 3 + 1)
//         this.angle = Math.random()*2
//         this.angleSpeed = Math.random()* 0.2
//         this.curve = Math.random() *10 + 1
//      }
//     update() {
//         // this.x += this.speed
//         // this.y += this.speed
//         this.y += this.curve * Math.sin(this.angle)
//         this.angle += this.angleSpeed
//         this.x -= this.speed
//         if (this.x + this.width < 0) this.x = canvas.width


//         // animate sprites
//         if (gameFrame % this.flapSpeed == 0) {
//             this.frame > 4 ? this.frame = 0 : this.frame++
//         }
//     }
//     draw() {

//         ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteheight, this.x, this.y, this.width, this.height)
//     }

// }
// // const enemy1 = new Enemy()



// for (let i = 0; i < numberOfEnemies; i++) {
//     enemiesArray.push(new Enemy())

// }


// function animate() {

//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     enemiesArray.forEach((obj) => {
//         obj.update()
//         obj.draw()
//     })
//     //    enemy1.update()
//     //     enemy1.draw()
//     gameFrame++
//     requestAnimationFrame(animate)
// }

// animate()





// // Snake animation
// const canvas = document.getElementById('canvas1')
// const ctx = canvas.getContext('2d')

// CANVAS_WIDTH = canvas.width = 500;
// CANVAS_HEIGHT = canvas.height = 1000;

// const numberOfEnemies = 50;
// const enemiesArray = []

// let gameFrame = 0;

// class Enemy {
//     constructor() {
//         this.image = new Image()
//         this.image.src = './enemies/enemy3.png'
//         this.speed = Math.random() * 4 + 1;
//         this.spriteWidth = 218
//         this.spriteheight = 177
//         this.height = this.spriteheight / 2.5
//         this.width = this.spriteWidth / 2.5
//         this.x = Math.random() * (CANVAS_WIDTH - this.width)
//         this.y = Math.random() * (CANVAS_HEIGHT - this.height)
//         this.frame = 0
//         this.flapSpeed = Math.floor(Math.random() * 3 + 1)
//         this.angle = 0
//         this.angleSpeed = Math.random()* 1.5 +0.5

//      }
//     update() {
//         // this.x += this.speed
//         // this.y += this.speed

//         // If divide pi with same number the motion is circular 
//         this.x  = canvas.width/2 * Math.sin(this.angle * Math.PI/90) + (canvas.width/2 - this.width/2)
//         this.y = canvas.height/2 * Math.cos(this.angle * Math.PI / 270) + (canvas.height/2 - this.height/2)
//         this.angle += this.angleSpeed

//         if (this.x + this.width < 0) this.x = canvas.width


//         // animate sprites
//         if (gameFrame % this.flapSpeed == 0) {
//             this.frame > 4 ? this.frame = 0 : this.frame++
//         }
//     }
//     draw() {

//         ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteheight, this.x, this.y, this.width, this.height)
//     }

// }
// // const enemy1 = new Enemy()



// for (let i = 0; i < numberOfEnemies; i++) {
//     enemiesArray.push(new Enemy())

// }


// function animate() {

//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//     enemiesArray.forEach((obj) => {
//         obj.update()
//         obj.draw()
//     })
//     //    enemy1.update()
//     //     enemy1.draw()
//     gameFrame++
//     requestAnimationFrame(animate)
// }

// animate()






// move fast randomly animation
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

const numberOfEnemies = 5;
const enemiesArray = []

let gameFrame = 0;

class Enemy {
    constructor() {
        this.image = new Image()
        this.image.src = './enemies/enemy4.png'
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 1917 / 9
        this.spriteheight = 213
        this.height = this.spriteheight / 2.5
        this.width = this.spriteWidth / 2.5
        this.x = Math.random() * (CANVAS_WIDTH - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT - this.height)
        this.newX = Math.random() * (CANVAS_WIDTH - this.width)
        this.newY = Math.random() * (CANVAS_HEIGHT - this.height)
        this.frame = 0
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
        this.interval = Math.floor(Math.random() * 200 + 50)


    }
    update() {

        if (gameFrame % 30 === 0) {
            this.newX = Math.random() * (CANVAS_WIDTH - this.width)
            this.newY = Math.random() * (CANVAS_HEIGHT - this.height)
        }

        let dx = this.x - this.newX
        let dy = this.y - this.newY

        this.x -= dx / 50
        this.y -= dy / 50

        if (this.x + this.width < 0) this.x = canvas.width


        // animate sprites
        if (gameFrame % this.flapSpeed == 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++
        }
    }
    draw() {

        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteheight, this.x, this.y, this.width, this.height)
    }

}
// const enemy1 = new Enemy()



for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy())

}


function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach((obj) => {
        obj.update()
        obj.draw()
    })
    //    enemy1.update()
    //     enemy1.draw()
    gameFrame++
    requestAnimationFrame(animate)
}

animate()
