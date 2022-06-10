/*
La conjetura de collatz o 3n + 1
"Se llama conjetura a aquello que NO esta probado matematicamente"
"Pero se supone o todo nos hace pensar que es asi"

Explicacion del algoritmo
Si un numero es par ? se divide por dos
Si un numero es impar se aplica 3n + 1
Si iteramos sobre esta logica una y otra vez
Llegamos siempre a 1.
Ahora bien, antes de llegar a uno vamos a pasar
por 4,2,1 que si le aplico 3n + 1 da 4
Ahi entro en el 4,2,1 loop.
*/

let esMayorAuno = z => z > 1
let esPar = z => z % 2 === 0
let esImpar = z => !esPar()
let cortar = z => z / 2
let aplicarFormulaCollatz = z => (z * 3) + 1

function probando(n, reportar) {
   while(esMayorAuno(n)) {
      reportar(n)
      if (esPar(n)) {
         n = cortar(n)
      } else {
         n = aplicarFormulaCollatz(n)
      }
   }
}

probando(234, z => {
   console.log(z)
})

probando(777, z => z)



