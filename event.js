class secret{
    constructor(context) {
        this.context=context
        this.x=0
        this.y=0
        this.random()
    }
    random(){
        this.x=(Math.floor(Math.random()*20-1)+1)*20
        this.y=(Math.floor(Math.random()*20-1)+1)*20
    }
    draw(){
        this.context.beginPath();
        this.context.fillStyle='orange'
        this.context.arc(this.x,this.y,10,0,2*Math.PI)
        this.context.fill()
    }
}

