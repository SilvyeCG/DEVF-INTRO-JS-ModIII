Funcion result <- stringInfo( phrase )
	Si phrase == phrase.toUpperCase Entonces
		Escribir 'Your phrase: ' + phrase +  ' is in UPPERCASE'
	SiNo
		Si phrase == phrase.toLowerCase Entonces
			Escribir 'Your phrase: ' + phrase +  ' is in lowercase'
		SiNo
			Escribir 'Your phrase: ' + phrase +  ' is in both UPPERCASE and lowercase'
		Fin Si
	Fin Si
Fin Funcion

Algoritmo exercise3
	Leer stringInfo("THIS IS A PHRASE")
FinAlgoritmo
