let unaPromesa = () => {
   return new Promise((resolve, reject) => {
      console.log('Ingreso al codigo asincronico')
      setTimeout(() => {
         console.log('voy a llamar a resolve')
         resolve()
      }, 5000)
   })
}

unaPromesa()
.then(() => unaPromesa())
.then(() => console.log('ACA PUEDO LLAMAR A UN CODIGO SINCRONICO'))
.then(() => unaPromesa())
.then(() => unaPromesa())
.then(() => unaPromesa())
.then(() => unaPromesa())
.then(() => unaPromesa())
.then(() => unaPromesa())
