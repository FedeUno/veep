let fs = require('fs')
let genUsu = require('./lib/genusuario')

let usuario = genUsu()
let usuarioJSON = JSON.stringify(usuario)
let pathArchivo = [
   '/var/tmp/veep/',
   usuario.id,
   '.json'].join('')

fs.writeFile(pathArchivo, usuarioJSON, 'utf-8', (err) => {
   if (err) {
      console.log(err)
      return
   }
})

console.log(genUsu())
