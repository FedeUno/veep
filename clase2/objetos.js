/*
Paradigma de objetos
Puedo tener en una capsula funcionalidad/estado
*/

function crearObjeto() {
   let estado = 1
   return function() {
      console.log(estado)
      estado++
   }
}

let objeto = crearObjeto()

objeto()
objeto()
objeto()
objeto()