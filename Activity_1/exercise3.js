// 3. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
//A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por 
// mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function stringInfo(phrase){
    if(phrase == phrase.toUpperCase()){
        return 'Your phrase: ' + phrase +  ' is in UPPERCASE';
    }else if(phrase == phrase.toLowerCase()){
        return 'Your phrase: ' + phrase +  ' is in lowercase';
    }else{
        return 'Your phrase: ' + phrase +  ' is in both UPPERCASE and lowercase';
    }
}

//console.log(stringInfo("THIS IS AN UPPERCASE PHRASE"));
//console.log(stringInfo("this is a lowercase phrase"));
console.log(stringInfo("This is a sentence (upper and lowercase) phrase"));