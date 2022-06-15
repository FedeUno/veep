let fs = require('fs');
let genUsu = require('./lib/genusuario');
let asyncForLoop = require('@arteysoft/asyncforloop');

asyncForLoop(2000, (nroIteracion, next, abort) => {
  console.log(nroIteracion)
  let usuario = genUsu()
  let usuarioJSON = JSON.stringify(usuario)
  let pathArchivo = [
   '/var/tmp/veep/',
   usuario.id,
   '.json'].join('')

  fs.writeFile(pathArchivo, usuarioJSON, 'utf-8', (err) => {
     if (err) {
       console.log(err)
       abort(err)
       return // decidir si se aborta el proceso o bien
              // se continua con el siguiente
     }
     next()
  })
}, (err) => {
   if (err) {
      console.log('termino todo, verificando error')
      console.log(err)
   }
})
