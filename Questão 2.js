let num = 10
let soma = 0;
function someAteX(x) {
    for (let i = 1; i <= num; i++) {
      soma += i;
    }
    console.log(`A soma até o número ${num} é ${soma}`);    
}
someAteX()
