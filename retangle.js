class Retangle{
    x=Math.random()*500
    y=Math.random()*500
    width;
    height;
    constructor(width,height) {

        this.width=width
        this.height=height
    }
    radomColor(){
        let red =Math.random()*255
        let green=Math.random()*255
        let blue=Math.random()*255
        return(`rgb(${red},${green},${blue})`)
    }
    drawRec(){
        let canvas=document.getElementById("canvas")
        let ctx=canvas.getContext("2d")
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.width,this.height)
        ctx.fillStyle=this.radomColor()
        ctx.fill()  // đổ màu cho hình ( mặc định màu đen)
        ctx.closePath()// đóng but
    }
    retanglePerimeter(){
        return (this.width+this.height)*2
    }
    retangleArena(){
        return this.width*this.height
    }
}
let rec = new Retangle(200,100)
rec.drawRec()
rec.retanglePerimeter()

rec.retangleArena()