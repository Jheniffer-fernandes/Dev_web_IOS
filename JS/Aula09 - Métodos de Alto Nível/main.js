//Método forEach com Arrays

const frutas = ['Maca', 'Pera', 'Melancia'];
frutas.forEach(minnhaFuncao);

function minnhaFuncao(index, item){
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);   
};

//Com Arrow Function

const frutas2 = ['Maca', 'Pera', 'Melancia'];
frutas2.forEach((index, item) =>{
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
})

// Metodo forEach com Array de Objetos
//Forma mais enxuta de escrever funções
const tarefas = [
    {
        id: 1,
        texto: 'Aqui vai um texto'
    },
    {
        id: 2,
        texto: 'Aqui vai dois textos'
    },
    {
        id: 3,
        texto: 'Aqui vai três textos'
    },
];

tarefas.forEach((teste)=> console.log(teste.texto));

//Metodo map
const numeros = [2, 4, 9, 15];
const newArray = numeros.map(Math.sqrt);

console.log('Array antigo');
console.log(numeros);
console.log('Novo Array');
console.log(newArray);

//Outro exemplo de Map
const mapText = tarefas.map((valor) =>{
    return valor.texto;
});

    console.log(mapText);

//Método filter
const idade = [32, 15, 8, 98, 70];

let filtroIdade = idade.filter((idades)=>{
    return idades >=18;
});

console.log(filtroIdade);

//Método Find()
const meuArray = [
    
       {nome: 'Diego', idade: 12, altura: 120, sexo: 'masculino'},
       {nome: 'Jissara', idade: 15, altura: 170, sexo: 'feminino'},
       {nome: 'Jheniffer', idade: 70, altura: 180, sexo: 'feminino'}
];
console.log(
    meuArray.find((genero)=>{
        return genero.sexo === 'feminino'
    })
);

//Crie um array de objetos com quatro objetos 
// E cada objeto tera 4 propriedades.
// retorne o nome de todos os alunos
// Retorne todos os alunos que tirou nota maior que 6
// retorne o primeiro aluno que tirou nota menor que 5

const alunos = [
    {nome: 'Annabeth', idade: 12, nota: 10, sexo: 'feminino'},
    {nome: 'Harry', idade: 11, nota: 5, sexo: 'masculino'},
    {nome: 'Hermione', idade: 11, nota: 10, sexo: 'feminino'},
    {nome: 'Percy', idade: 12, nota: 4, sexo: 'masculino'},
];
alunos.forEach((alunos.nome));