let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function processarNumeros(filtro) {
    let numerosPares = filtro.filter(num => num % 2 === 0);
    let numeroParDobrado = numerosPares.map(num => num * 2);
    console.log(`Os números pares são: ${numerosPares} e o dobro deles é ${numeroParDobrado}`)
}

processarNumeros(numeros);