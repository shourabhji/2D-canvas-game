document.addEventListener('DOMContentLoaded', () => {
    const canvas = canvas1;
    const ctx = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 800;


    class Game {
        constructor(ctx, width, height) {
            this.ctx = ctx;
            this.width = width;
            this.height = height
            this.enemies = []
            // this.#addNewEnemy()
            this.enemyInterval = 500;
            this.enemyTimer = 0
            this.enemyTypes = ['worm', 'ghost', 'spider']

        }
        update(deltaTime) {

            //remove enemies 
            this.enemies = this.enemies.filter(obj => !obj.markedForDeletion)

            if (this.enemyTimer > this.enemyInterval) {
                this.#addNewEnemy();
                this.enemyTimer = 0
            }
            else {
                this.enemyTimer += deltaTime
            }
            this.enemies.forEach(obj => obj.update(deltaTime))
        }
        draw() {
            this.enemies.forEach(obj => obj.draw(this.ctx))
        }
        #addNewEnemy() {
            const randomEnemy = this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
            if (randomEnemy == 'worm') this.enemies.push(new Worm(this))
            if (randomEnemy == 'ghost') {
                this.enemies.sort((a, b) => {
                    return a.y - b.y
                })
                this.enemies.push(new Ghost(this))
            }
            if (randomEnemy == 'spider') this.enemies.push(new Spider(this))

        }

    }


    class Enemy {
        constructor(game) {
            this.game = game
            this.markedForDeletion = false;
            this.frameX=0;
            this.maxFrame = 5;
            this.frameInterval = 100
            this.FrameTimer = 0;
        }
        update(deltaTime) {
            this.x -= this.vx * deltaTime
            // remove enemies
            if (this.x < 0 - this.width) this.markedForDeletion = true;
            if (this.FrameTimer > this.frameInterval) {
                if (this.frameX < this.maxFrame) this.frameX++
                else {
                    this.frameX = 0
                    this.FrameTimer = 0
                }
            }
            else {
                this.FrameTimer += deltaTime;
            }
        }
        draw(ctx) {
     
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.frameX*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);

        }
    }

    class Worm extends Enemy {
        constructor(game) {
            super(game)
            this.image = worm;
            this.x = this.game.width;
            this.spriteWidth = 229;
            this.spriteHeight = 171;
            this.width = this.spriteWidth / 2;
            this.height = this.spriteHeight / 2;
            this.y = this.game.height - this.height;
            this.vx = Math.random() * .1 + 0.1 // x axis speed
        }
    }

    class Ghost extends Enemy {
        constructor(game) {
            super(game)
            this.image = ghost;
            this.x = this.game.width;
            this.spriteWidth = 261;
            this.spriteHeight = 209;
            this.y = Math.random() * this.game.height * 0.8; // for the random y axis between 80% height of canvas
            this.width = this.spriteWidth / 2;
            this.height = this.spriteHeight / 2;
            this.vx = Math.random() * .2 + 0.1 // x axis speed
            this.angle = 0
            this.curve = Math.random() * 3
        }
        update(deltaTime) {

            super.update(deltaTime)
            if(this.y < 0-this.height*2) this.markedForDeletion = true
            this.y += Math.sin(this.angle) * this.curve;
            this.angle += 0.04
        }
        draw(ctx) {
            ctx.save()
            ctx.globalAlpha = 0.5;
            super.draw(ctx)
            ctx.restore()
        }
    }


    class Spider extends Enemy {
        constructor(game) {
            super(game)
            this.image = spider;
            this.x = Math.random() * this.game.width;
            this.spriteWidth = 310;
            this.spriteHeight = 175;
            this.width = this.spriteWidth / 2;
            this.height = this.spriteHeight / 2;
            this.y = 0 - this.height;
            this.vx = 0
            this.vy = Math.random() * 0.1 + 0.1
        }
        update(deltaTime) {
            super.update(deltaTime)
            this.y += this.vy * deltaTime
            if (this.y > 200) this.vy *= -1
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.moveTo(this.x + this.width / 2, 0)
            ctx.lineTo(this.x + this.width / 2, this.y + 10);
            ctx.stroke();
            super.draw(ctx)
        }
    }


    const game = new Game(ctx, canvas.width, canvas.height)
    let lastTime = 1
    function animate(timeStamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // code
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp
        game.update(deltaTime)
        game.draw()


        requestAnimationFrame(animate);
    }
    animate(0)
})