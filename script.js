// * arregles
let str= "hola"
let num= 1
let bool=true

let array=["hola",1,true]

console.log(array[1])

// * Arreglo anidado

let anidado= [1,2,3,4,[5,6,7]]
 console.log(anidado[4][1])


//  * metedos
// ! push
anidado.push(6,"hola")

console.log(anidado)

// ! pop / saca el ultimo elemento del arreglo

anidado.pop()
console.log(anidado)

// ! unshift / agrega el elemento al principio del arreglo

anidado.unshift(2)
console.log(anidado)

// ! shifr / saca el primer elemento del arreglo

anidado.shift(2)
console.log(anidado)
anidado.push([2,3,4,6])
console.log(anidado)

// ! recorrer- iterar un arreglo

// let arr2=[1,2,3,4]
// console.log(arr2[0])

// let i= 0
//  while(i < 4){
//     console.log(arr2[i])
//     i++
//  }

//  for( let i=0;i<4;i++){
//     console.log(arr2[i])
//  }


//  let arr=[1,2,3,4,5]
//  let arr2=["hola","como","estas"]
//  let arr3= ["hola","alan",25]

//  function iterar(arr){
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
//  }
// console.log("primer arreglo")
//  iterar(arr)
//  console.log("segundo arreglo")
//  iterar(arr2)
//  console.log("tercer arreglo")
//  iterar(arr3)

// ? EJERCICIO 1
//  * crear una funcion llamada esPar
// * la funcion recibe por parametro un arreglo de numeros
// * recorrer el arrglo y si algun numero del numero es par, se imprime por consola 

//  let arr=[1,2,3,4,5]
//  let arr2=[10,20,13,7,40]
//  let arr3= [9,7,4,10,55]

//  function esPar(arreglo){
    
//     for( let i = 0; i<arreglo.length; i++){
//         if(arreglo[i]%2 ===0){
//             console.log(arreglo[i]+" es par")
//         }else{
//             console.error(arreglo[i]+" es impar")
//         }
//     }
//  }

// console.log("-----------ARREGLO arr--------------")
//  esPar(arr)
//  console.log("----------ARREGLO arr2------------")
//  esPar(arr2)
//  console.log("----------ARREGLO arr3------------")
//  esPar(arr3)



// * FUNCIONES CALLBACK
// * son funciones que reciben otro funcion por parametros

function operar(num,fn){
    let resultado = fn(num)
    return resultado
}

function sumar(num){
    return num + 10
}

function restar(num){
    return num-10
}

function multiplicar (num){
    return num * 10
}

 console.log(operar(25,sumar))
 console.log(operar(25,restar))
console.log(operar(25,multiplicar))

