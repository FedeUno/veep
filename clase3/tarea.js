let fn1 = () => {
   console.log('Hola, estoy en la funcion 1')
}

let fn2 = () => {
   setTimeout(() => {
      console.log('Hola, estoy en la funcion 2')
   }, 3000)
}

let fn3 = () => {
   console.log('Hola, estoy en la funcion 3')
}

let fn4 = () => {
   setTimeout(() => {
      console.log('Hola, estoy en la funcion 4')
   }, 2000)
}

fn1()
fn2()
fn3()
fn4()