let fs = require('fs');
let asyncForLoop = require('@arteysoft/asyncforloop');

let pathFolder = '/var/tmp/veep/'

fs.readdir(pathFolder, (err, arrFiles) => {
   console.log(arrFiles)
   let cantIteraciones = arrFiles.length
   asyncForLoop(cantIteraciones, (idx, next, abort) => {
      let archivoActual = pathFolder.concat(arrFiles[idx])
      fs.readFile(archivoActual, 'utf-8' ,(err, data) => {
         console.log(data)
      })
   }, (err) => {
      console.log('termino el proceso')
      console.log(err)
   })
})