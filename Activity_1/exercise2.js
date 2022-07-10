// 2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como 
// resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado 
// devuelto por la función.

function verify(num){
    if(num % 2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

// prueba de escritorio: 2,7,10,11

console.log(verify(11));