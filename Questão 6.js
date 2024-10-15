let fila = [];

function adicionar(addItem) {
    fila.push(addItem);
    console.log(`${addItem} foi adicionado à fila.`);
}

function remover(removeItem) {
    if (fila.length === 0) {
        console.log("A fila está vazia.");
    } else {
        let itemRemovido = fila.pop(removeItem);
        console.log(`${itemRemovido} foi removido da fila.`);
    }
}

function mostrarFila() {
    console.log("Fila atual: ", fila);
}

adicionar(1);
adicionar(2);
adicionar(3);
mostrarFila();

remover(3);
mostrarFila();

remover(2);
mostrarFila();
