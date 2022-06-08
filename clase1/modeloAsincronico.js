function estaFuncionEsAsincronica(callBack) {
    setTimeout(callBack, 0)
}

function yoSoyElCallBack() {
   console.log('Estoy dentro del callback')
   return function() {
      console.log('epaaaaaaaaaaaaaa')
   }
}

console.log('vamos a explicar el setTimeout')
console.log('Paso 1 sincronico ejemplo let a = [1, 2, 3]')
console.log('Paso 2 sincronico ejemplo if (boolean) {} ')
console.log('paso 3 asincronico')
estaFuncionEsAsincronica(yoSoyElCallBack)
console.log('paso 4 sincronico')
console.log('paso 5 sincronico')
for (let x = 6; x < 100; x++) {
   console.log(`paso ${x} sincronico `)
}

