let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function exibirMultiplosDeTres(multiplos) {
    let total = 0;

    for (let i = 0; i < multiplos.length; i++) {
        if (multiplos[i] % 3 === 0) {
            console.log(multiplos[i]);
            total++;
        }
    }

    console.log("Total de números múltiplos de 3 encontrados:" + total);
}


exibirMultiplosDeTres(numeros);
