let leroLero = 'Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar.'

// Acesse a primeira posição do índice

console.log(leroLero[0]);

// Retorne o tamanho da String no console.log

console.log(`O tamanho da String é: ${leroLero.length}`);

// Utilizando o método de troca de String

let leroLero1 = leroLero.replace('Dr Stephen Strange', 'Feiticeira Escarlate');
console.log(leroLero1);

// transformar a String em Substring e acesse o índice de posição 13.

let leroLero2 = leroLero.split(' ');
console.log(leroLero2);
console.log('Essa é a string de posição 13: '+ leroLero2[13]);

// Deixar o texto em maiuculo

let leroLero3 = leroLero.toUpperCase();
console.log(leroLero3);