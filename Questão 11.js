let numeros = [4, 11, 15, 3, 20, 8];
let resultado = []; 

function quadradoMaioresQueDez(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            resultado.push(numeros[i] * numeros[i]);
        }
    }
}


quadradoMaioresQueDez(numeros);
console.log(resultado);