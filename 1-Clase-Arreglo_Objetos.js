/*
Funcion Flecha
const suma = (n,m) => {
    return n+m;
  }
console.log(suma(5,6))
*/

/*
Ejercicio:
Arreglo de objetos de distintas opciones matematicas, crear una funcion que lo invoque
*/
//Arreglo de objetos
let operacionesMatematicas = [
    { valor1: 10, operacion: "+", valor2: 5 },
    { valor1: 45, operacion: "-", valor2: 12 },
    { valor1: 5, operacion: "*", valor2: 45 },
    { valor1: 100, operacion: "/", valor2: 20 }
];

/*
Otra opcion para recorrer el arreglo
function recorrerObjeto(objeto){
  let result = []
  for (let i = 0; i< objeto.length; i++){
          result.push(objeto[i])
  }
  return result
}
*/

//Funcion para recorrer el arreglo 
function recorrerArreglo(Arreglo){
    Arreglo.forEach(function (operador){
        imprimirOperacion(operador, operador.operacion);
    })
}

//Funcion para imprimirlo el arreglo
function imprimirOperacion(op, operador) {
    let resultado;
    // Realizamos la operación según el operador
    switch (operador) {
        case "+":
            resultado = op.valor1 + op.valor2;
            break;
        case "-":
            resultado = op.valor1 - op.valor2;
            break;
        case "*":
            resultado = op.valor1 * op.valor2;
            break;
        case "/":
            resultado = op.valor1 / op.valor2;
            break;
        default:
            resultado = "Operación no válida";
    }
    console.log(`${op.valor1} ${operador} ${op.valor2} = ${resultado}`);
}

recorrerArreglo(operacionesMatematicas);
