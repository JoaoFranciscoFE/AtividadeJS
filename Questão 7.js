let frutas = ["Banana", "Abacaxi", "Cajá", "Damasco", "Embaúba"];

function organizador(organiza) {
    let n = organiza.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (organiza[j] > organiza[j + 1]) {
                [organiza[j], organiza[j + 1]] = [organiza[j + 1], organiza[j]];
            }
        }
    }
    console.log(organiza)
}
organizador(frutas)