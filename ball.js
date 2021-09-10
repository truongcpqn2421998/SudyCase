class ball{
    constructor(context) {
        this.context = context
        this.x=200
        this.y=50
        this.speed=10
        this.dx=0
        this.dy=0
        this.random()
    }
    draw(){
        this.context.beginPath()
        this.context.fillStyle='red'
        this.context.arc(this.x,this.y,10,0,2*Math.PI)
        this.context.fill()
    }
    update(){
        this.x+=this.dx
        this.y+=this.dy
        if(this.x+this.dx>390||this.x+this.dx<10){
            this.dx=-this.dx;
        }
        if(this.y+this.dy<10){
            this.dy=-this.dy
        }
        if(this.y>640&&this.y<650){
            alert('You Lose')
        }
    }
    random(){
        let T=Math.floor(Math.random() * ((this.speed - 1) - 1)) + 1
        let t1 = Math.floor(Math.random() * 2 - 1) + 1
            if(t1===1){
                this.dx=T
            }else {
                this.dx=-T
                    }
        let t2 = Math.floor(Math.random() * 2 - 1) + 1
            if (t2 === 1) {
                this.dy = Math.sqrt(Math.pow(this.speed,2)-Math.pow(this.dx,2))
            } else {
                this.dy = -Math.sqrt(Math.pow(this.speed,2)-Math.pow(this.dx,2))
            }
        }
    level(){
        this.dx*=2
        this.dy*=2
    }
}
