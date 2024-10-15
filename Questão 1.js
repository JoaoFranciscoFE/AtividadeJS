let numero1 = 12
let numero2 = 10
function parOuImpar() {
    var soma = numero1 + numero2;
    if (soma % 2 == 0){
        console.log(`A soma dos numeros é ${soma} e é par`);
    }else{
        console.log(`A soma dos numeros é ${soma} e é impar`);
    }
}
function maiorNumero(){
    let maiorNumero;
    if (numero1 > numero2) {
    maiorNumero = numero1;
    } else {
        maiorNumero = numero2;
    }
    console.log("O maior número entre eles é: " + maiorNumero);
}
parOuImpar()
maiorNumero()
