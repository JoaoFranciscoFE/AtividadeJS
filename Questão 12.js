function somaElementos(numeros) {
    console.log(numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0));

}

let numeros = [1, 2, 3, 4, 5];
somaElementos(numeros);
