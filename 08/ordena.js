// Crie uma função que receba um array de números inteiros e retorne o array ordenado de forma crescente.

// function swap(a, b) {
//     let temp = a;
//     a = b;
//     b = temp;
// }

let numeros = [40, 10, 30, 20, 50 ];

console.log(numeros);

function bubbleSort(array) {

    for (let limite = array.length - 1; limite >= 0; limite--) {
        for (let i = 0; i < limite; i++) {
            if (array[i] > array[i + 1]) { // troco eles de lugar            
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }

    return array;
}

// SAÍDA
let saida1 = bubbleSort(numeros)
console.log(saida1);