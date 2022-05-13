//Laço while do Matheus
// let profHelo = 1;

// while(profHelo <=5){
//     console.log("Bate palma");
//     // profHelo = profHelo + 1 opção mais completa, o ++ é a forma simplificada
//     profHelo++
// };

//Loop infinito
// let profHelo = 1;

// while(profHelo <=5){
//     console.log("Bate palma");

//Do-while do Matheus

// do{
//     console.log("Bater palma")
//     console.log(profHelo)
//     profHelo++
// }while (profHelo <= 5);

//Exibir o valor de 1 até 10

// let contador = 1; 

// while(contador <=10){
// console.log(`O valor do contador é? ${contador}`);
// contador++
// }

// Decremento

// let contador2 = 10;
// while(contador2 >= 0){
//     console.log(`O valor do contador é? ${contador2}`);
//     contador2--
// }

//Laço For

// for(let profHelo = 1; profHelo <= 5; profHelo++){
//     console.log('Olá Jackass');
// }

// for(let contador = 10; contador >= 0; contador --){
//     console.log(`O valor do contador é? ${contador}`);
// }

//Laço de repetição e Array

// const frutas = ['maca', 'laranja', 'pera', 10];

// for(let j = 0; j < frutas.length; j++){
//     console.log(`Nome: ${frutas[j]}`);
// };

// crie um array chamado carros com 8 carros e percorra o array  de 2 em 2 exibindo os carros do array.

const carros = ['fusca', 'jeep', 'onix', 'bmw', 'limousine', 'suv', 'picape', 'cronos'];

for(let c = 0; c < carros.length; c+=2){
    console.log(`Nome: ${carros[c]}`);
};

