class enemy{
    constructor(context,x,y) {
        this.context=context
        this.x=x
        this.y=y
        this.dx=10
        this.dy=0
    }
    draw(){
        this.context.fillStyle='black'
        this.context.fillRect(this.x,this.y,100,20)
    }
    update(){
        this.x+=this.dx
        this.y+=this.dy
        if(this.x+this.dx>=300||this.x+this.dx<0){
            this.dx=-this.dx
        }
    }

}