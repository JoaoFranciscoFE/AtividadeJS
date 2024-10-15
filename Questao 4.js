let num = 5
function fatorial(x) {
    let resultado = 1;
    for (let i = 2; i <= x; i++) {
        resultado *= i;
    }
    console.log(`O fatorial de ${num} é ${resultado}`)
}
fatorial(num)