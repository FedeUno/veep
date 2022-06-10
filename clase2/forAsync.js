let asyncForLoop = require('@arteysoft/asyncforloop')

asyncForLoop(100, (nroIteracion, next) => {
   console.log(nroIteracion)
   // grabar archivo y en su callback llamo a next
   setTimeout(next, 500)
}, (err) => {
   if (err) {
      console.log('termino todo, verificando error')
      console.log(err)
   }
})