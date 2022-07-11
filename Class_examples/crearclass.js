class Punto3D{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z =z;
    }

    mover(mx,my,mz) {
        this.x += mx;
        this.y += my;
        this.z += mz;
    }
}
// undefined
Punto3D.prototype
// {constructor: ƒ, mover: ƒ}retroceder: ƒ (mx, my, mz)constructor: class Punto3Dmover: ƒ mover(mx,my,mz)[[Prototype]]: Object
Punto3D.prototype.retroceder = function(mx, my, mz){
    this.x -= mx;
    this.y -= my;
    this.z -= mz;
}
ƒ (mx, my, mz){
    this.x -= mx;
    this.y -= my;
    this.z -= mz;
}
Punto3D.prototype
// {retroceder: ƒ, constructor: ƒ, mover: ƒ}