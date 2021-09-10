class game {
    constructor() {
        this.canvas = null
        this.context = null
        this.time = 0
    }

    init() {
        this.canvas = document.getElementById('game')
        this.context = this.canvas.getContext('2d')
        this.plank = new Plank(this.context)
        this.ball = new ball(this.context)
        this.secret1= new secret(this.context)
        this.secret2= new secret(this.context)
        this.enemy1=new enemy(this.context,0,250)
        this.enemy2=new enemy(this.context,300,100)
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.context.fillText('point: ' + this.time, 10, 20, 100)
        this.plank.draw()
        this.ball.draw()
        this.secret1.draw()
        this.secret2.draw()
        this.enemy1.draw()
        this.enemy2.draw()
    }

    update() {
        this.ball.update()
        this.enemy1.update()
        this.enemy2.update()
    }

    loop() {
        this.draw()
        this.update()
        this.Touch()
        this.game_over()
        setTimeout(() => this.loop(), 30)
    }

    count() {
        this.time += 1
        setTimeout(() => this.count(), 1000)
    }
    change(){
        this.secret1.random()
        this.secret2.random()
        setTimeout(()=>this.change(),4000)
    }
    Touch(){
        let T1x=Math.abs(this.ball.x-this.secret1.x)
        let T1y=Math.abs(this.ball.y-this.secret1.y)
        if (Math.sqrt(T1x*T1x+T1y*T1y)<=20){
            this.ball.random();
            this.secret1.random()

        }
        let T2x=Math.abs(this.ball.x-this.secret2.x)
        let T2y=Math.abs(this.ball.y-this.secret2.y)
        if (Math.sqrt(T2x*T2x+T2y*T2y)<=20){
            this.ball.random();
            this.secret2.random()
        }
        if(this.ball.y>=(this.enemy1.y-10)&&this.ball.y<=this.enemy1.y+30){
            if(this.ball.x>=this.enemy1.x-10&&this.ball.x<=this.enemy1.x+110){
                this.ball.dy=-this.ball.dy
                this.sound_ball()
            }
        }
        if(this.ball.y>=(this.enemy2.y-10)&&this.ball.y<=this.enemy2.y+30){
            if(this.ball.x>=this.enemy2.x-10&&this.ball.x<=this.enemy2.x+110){
                this.ball.dy=-this.ball.dy
                this.sound_ball()
            }
        }
        if(this.ball.y>=(this.plank.y-10)&&this.ball.y<=this.plank.y+10){
            if(this.ball.x>=this.plank.x-10&&this.ball.x<=this.plank.x+90){
                this.ball.dy=-this.ball.dy
                this.sound_ball()


            }
        }
    }
    game_over(){
        if(this.ball.y>640&&this.ball.y<650){
            alert('You Lose')
        }
        if(this.ball.y>645){
            this.time=0
        }
    }
    reset_ball(){
        this.ball.x=200;
        this.ball.y=50
        this.time=0
        this.ball.random()
    }
    sound_ball(){
        let song=new Audio();
        song.src='ball.wav';
        song.volume=0.1
        song.play()
    }
}
let g=new game()
function play(){
    g.init()
    g.loop()
    g.count()
    g.change()
    sound_game()
}
function reset(){
    g.reset_ball()
}
function sound_game(){
    let Song=new Audio('sound.mp3')
    Song.volume=0.2
    Song.play()
}
