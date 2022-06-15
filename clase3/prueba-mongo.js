let mongoInteface = require('./lib/MongoInterface')
let genUsu = require('./lib/genusuario');

let nuevoUsu = genUsu()
let baseDeDatos = 'andy'
let coleccion = 'personas'

mongoInteface.insert(baseDeDatos, coleccion, nuevoUsu, (err, data) => {
   console.log(err?err:'NO HUBO ERROR')
   console.log(data)
})