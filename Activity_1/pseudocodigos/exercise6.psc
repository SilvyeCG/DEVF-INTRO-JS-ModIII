Funcion repeats <- sums ( number )
	repeats[number]<-
	Si (repeats[number] | 0) Entonces
		(repeats[number] | 0) + 1
	Fin Si
	
Fin Funcion

Funcion sums.forEach(number) <- dados ()
	Mientras i < 36000 Hacer
		dado1<-parseInt(6*Math.random()+1)
		dado2<-parseInt(6*Math.random()+1)
		sum<-dado1 + dado2
		Leer sums.push(sum)
		Leer i++
	Fin Mientras
	
Fin Funcion

Algoritmo exercise6
	Leer dados()
FinAlgoritmo
