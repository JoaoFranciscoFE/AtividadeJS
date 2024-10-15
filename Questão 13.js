let frutas = ['maçã', 'banana', 'laranja', 'uva'];
let novaFruta = 'manga';

function modificarFrutas(frutas, novaFruta) {
    frutas.splice(1, 1, novaFruta);
}

modificarFrutas(frutas, novaFruta);
console.log(frutas);