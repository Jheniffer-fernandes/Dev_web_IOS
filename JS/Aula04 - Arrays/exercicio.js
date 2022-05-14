//Exercício 1

let festa = new Array ('Joaquim', 'José', 'Silva', 'Xavier');
console.log ('O inicio da festa');

console.clear();
festa = ['Joaquim', 'José', 'Silva', 'Xavier'];
let a = festa.unshift('Amanda');
console.log(festa);
console.log(a);
console.log('Amanda chegou na festa');

console.clear();
festa = ['Amanda','Joaquim', 'José', 'Silva', 'Xavier'];
let x = festa.pop('Xavier');
console.log(festa);
console.log(x);
console.log('Xavier saiu da festa')

console.clear();
festa = ['Amanda','Joaquim', 'José', 'Silva'];
let z = festa.push('Zuleica');
console.log(festa);
console.log(z);
console.log('Zuleica chegou na festa');

console.clear();
festa = ['Amanda','Joaquim', 'José', 'Silva', 'Zuleica'];
let am = festa.shift('Amanda');
console.log(festa);
console.log(am);
console.log('Amanda saiu da festa');

console.clear();
festa = ['Joaquim', 'José', 'Silva', 'Zuleica'];
delete festa[2];
console.log(festa);
console.log('Silva saiu da festa');

console.clear();
festa = ['Joaquim', 'José', 'null', 'Zuleica'];
console.log(`Antes : ${festa}`);
festa[2] = 'Silvana';
console.log(`Depois : ${festa}`);
console.log('Silvana chegou na festa');

console.clear();
festa = ['Joaquim', 'José', 'Silvana', 'Zuleica'];
console.log(festa.length);
console.log('Ficaram 4 pessoas na festa');

//Exercício 2

let personagens = ['Anne Frank', 'August Pullman', 'Harry Potter', 'Liesel Meminger', 'Percy Jackson'];
console.log(`Antes: ${personagens}`);

//Primeiro Metódo

personagens = ['Anne Frank', 'August Pullman', 'Harry Potter', 'Liesel Meminger', 'Percy Jackson'];
let pers = personagens.splice(3);
console.log(`Depois: ${pers}`);

//Segundo Metódo

personagens = ['Anne Frank', 'August Pullman', 'Harry Potter', 'Liesel Meminger', 'Percy Jackson'];
console.log(`Antes: ${personagens}`);
let person = personagens.reverse();
console.log(`Depois: ${person}`);