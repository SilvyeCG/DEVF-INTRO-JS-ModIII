// 5. Definir una función que determine si la cadena de texto que se le pasa como parámetro es un 
// palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
// Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

function palindromo(palabra){
    let arr = palabra.split('');
    let reverse = arr.reverse();
    let join = reverse.join('');

    if(palabra === join){
        return 'Es palindromo';
    }else{
        return 'No es palindromo';
    }
}

console.log(palindromo("madam"));
// console.log(palindromo("computadora"));