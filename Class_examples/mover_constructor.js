function Punto2D(x,y){
    this.x=x;
    this.y=y;
}
//undefined
Punto2D.prototype
// {constructor: ƒ}constructor: ƒ Punto2D(x,y)[[Prototype]]: Object
let punto1 =new Punto2D(1,2)
// undefined
punto1.x
//1
punto1.y
// 2
punto1
// Punto2D {x: 1, y: 2}
Punto2D.prototype
//{constructor: ƒ}constructor: ƒ Punto2D(x,y)[[Prototype]]: Object
Punto2D.prototype.mover = function(mx,my){
    this.x +=mx;
    this.y +=my;
}
ƒ (mx,my){
    this.x +=mx;
    this.y +=my;
}
Punto2D.prototype
// {mover: ƒ, constructor: ƒ}
punto1.constructor.prototype
// {mover: ƒ, constructor: ƒ}mover: ƒ (mx,my)constructor: ƒ Punto2D(x,y)[[Prototype]]: Object
punto1
// Punto2D {x: 1, y: 2}
punto1.mover
ƒ (mx,my){
    this.x +=mx;
    this.y +=my;
}
punto1.mover(5,4);
// undefined
punto1
// Punto2D {x: 6, y: 6}
punto2 = new Punto2D(3,4)
// Punto2D {x: 3, y: 4}
punto1
// Punto2D {x: 6, y: 6}
punto2.mover(100,100)
// undefined