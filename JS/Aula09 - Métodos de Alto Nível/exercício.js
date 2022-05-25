// Exercício 1

const numeros = [17, 43, 8, 4, 97, 56, 29];

const parOuImpar = numeros.forEach((numeros) => {

    if (numeros % 2 === 0) {
        console.log(`Par: ${numeros}`)
    } 
    else {
        console.log(`Impar: ${numeros}`)
    }
});

const numerosMenor18 = numeros.filter((numeros) => {
    return numeros <= 18
});

console.log('Numeros menores ou iguais a 18:');
console.log(numerosMenor18);




// Exercício 2:

const alunos = [
    {
        nome: 'Ana',
        idade: 17,
        nota: 8,
        ano: '2ºB'
    },

    {
        nome: 'Bruno',
        idade: 16,
        nota: 6,
        ano: '2ºC'
    },

    {
        nome: 'Veronica',
        idade: 16,
        nota: 9,
        ano: '2ºC'
    },

    {
        nome: 'Marta',
        idade: 15,
        nota: 5,
        ano: '3ºC'
    },

    {
        nome: 'Brenno',
        idade: 19,
        nota: 6,
        ano: '3ºC'
    },

    {
        nome: ' Maria',
        idade: 14,
        nota: 4,
        ano: '1ºF'
    },
];

console.log('Nome e ano dos alunos:')

const nomeAno = alunos.filter((alunos) => {
    console.log('-------------------------------')
    console.log('Nome: ' + alunos.nome)
    console.log('Ano: ' + alunos.ano)
});

console.log('Alunos(as) que são do segundo ano:');

const segundoAno = alunos.filter((alunos) => {
    if (alunos.ano == '2ºB' || alunos.ano == '2ºC') {
        console.log(alunos)
    }
});

console.log('Turma aprovada ou reprovada:');

const notaAlunos = alunos.map((notaValores) => {return notaValores.nota}).reduce(calcularNotas);

function calcularNotas(nota1, nota2) {
    return nota1 + nota2
};

function mediaTurma(totalNotas) {
    if (totalNotas / 6 >= 7) {
        console.log('Turma aprovada, pois a média é maior ou igual a 7')
    }

    else {
        console.log('Turma reprovada, pois a média é menor que 7')
    }
};

mediaTurma(notaAlunos);