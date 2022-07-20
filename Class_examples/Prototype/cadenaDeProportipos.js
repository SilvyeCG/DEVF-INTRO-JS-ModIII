var obj = {
    a:1,
    b:2
}
// undefined
obj.constructor
// ƒ Object() { [native code] }
var obj2 = Object.create(obj)
// undefined
obj2
{}
obj2.a =3
//3
obj2
//{a: 3}
obj2.b // --> A pesar que no se asigno valor de B en obj2, al ser creado a partir de obj, hereda la propiedad de b de obj
2