let fs = require('fs')

let pathArchivo = '/var/tmp/veep/uno.json'

fs.writeFile(pathArchivo, 'hola amigos', 'utf-8', (err) => {
   if (err) {
      console.log(err)
      return
   }
})

