function numeroPrimo(numero) {
    if (numero <= 1) {
        console.log(`${numero} não é um número primo`);
        return false;
    }
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log(`${numero} não é um número primo`);
            return false;
        }
    }
    
    console.log(`${numero} é um número primo`);
    return true;
}
numeroPrimo(10)
numeroPrimo(7)