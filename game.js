class game {
    constructor() {
        this.canvas = null
        this.context = null
        this.init()
        this.loop()
        this.time = 0
        this.count()
        this.level()
    }

    init() {
        this.canvas = document.getElementById('game')
        this.context = this.canvas.getContext('2d')
        this.plank = new Plank(this.context)
        this.ball = new ball(this.context)
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.context.fillText('point: ' + this.time, 10, 20, 100)
        this.plank.draw()
        this.ball.draw()
    }

    update() {
        this.ball.update()
    }

    loop() {
        this.draw()
        this.update()
        setTimeout(() => this.loop(), 60)
    }

    count() {
        this.time += 1
        this.level()
        setTimeout(() => this.count(), 1000)
    }

    level() {
        if (this.time === 5) {
            this.ball.level()
        }
        if (this.time === 30) {
            this.ball.level()
        }
        if (this.time === 60) {
            this.ball.level()
        }
    }
}

let g=new game()
