//Trabalhando com Strings
//Concatenar
let exemplo1 = 10;
let exemplo2 = 2;
let string1 = 'Aqui vai um texto';

console.log('O resultado da soma é: ' + exemplo1 + exemplo2); //concatenação completa, por ex a soma iria ficat 102
console.log('O resultado da soma é: ' + (exemplo1 + exemplo2)); //exemplo do 3º*
console.log("O resultado da soma é: " + (exemplo1 + exemplo2)); //concatenção com aspas duplas
console.log(`O resultado da soma é: ${exemplo1 + exemplo2}`); //concatenção com crase
console.clear();
//Metodos de Strings

//Acessar uma String
let string2 = 'Aqui vai um texto';
console.log(string2.charAt(0));
console.log(string2[10]);
console.clear();

//Tamanho da String
let string3 = 'Aqui vai um texto';
console.log(string3.length);

//Maiuscula e Minuscula
let string4 = 'aqui vai um texto em maiusculo';
console.log(string4.toUpperCase());
let string5 = 'AQUI VAI UM TEXTO EM MINUSCULO';
console.log(string5.toLowerCase());

// Substring e 
let string6 = 'Mozilla';
console.log(string6.substring(0,2));

//Slipt 
let string7 = 'A raposa é um animal esperto';
let string8 = string7.split(' ');
console.log(string8[3]);
console.log(string8); //retorna somente o definido no .split

//Substituir uma String dentro de uma String
let string9 = 'Aqui vai um texto';
let string10 = string9.replace('Aqui', 'Kauan');
console.log(string10);

//Remover Espaços da String
let string11 = '                              Aqui vai um texto';
console.log(string11);
console.log(string11.trim());

//Métodos de Buscar em Strings
let string12 = 'Aqui vai um texto';
//string.indexof
console.log(string12.indexOf('Aqui'));
//string.lastindexof
console.log(string12.lastIndexOf('Aqui'));
//string.search
console.log(string12.search('Aqui'));
//string.startswith
console.log(string12.startsWith('A'));
console.log(string12.startsWith('Q'));
//string.endswith
console.log(string12.endsWith('.'));
console.log(string12.endsWith('o'));
console.log(string12.endsWith('O'));