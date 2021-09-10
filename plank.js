class Plank {
    constructor(context) {
        this.context = context
        this.x = 150
        this.y = 520
        this.move()
    }
    draw() {
        this.context.fillStyle='blue'
        this.context.fillRect(this.x,this.y,100,20)
    }
    move(){

        document.addEventListener('keydown',(e)=>{
            if(e.which==37){
                this.x-=15
            }else if(e.which==39){
                this.x+=15
            }
        })
    }
}
