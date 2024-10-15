let alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Ana', nota: 6 }
];

function verificarAprovacao(alunos){
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= 7) {
            console.log(`${alunos[i].nome}: Aprovado`);
        } else {
            console.log(`${alunos[i].nome}: Reprovado`);
        }
    }
}

verificarAprovacao(alunos)