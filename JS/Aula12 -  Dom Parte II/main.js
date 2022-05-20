// Método getElementById

let titulo = document.getElementById('titulo');

//alterando o conteudo do html

titulo.innerHTML = 'Vai perder o PC galera do AWS';

//configurando o CSS do html

titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

// Método getElementsByClassName

let itens = document.getElementsByClassName('item');
console.log(itens);
console.log(itens[1]);
itens[1].textContent = 'Eric e Jheniffer trombadinhas de PC';
itens[1].style.fontWeight = 'bold';
itens[1].style.backgroundColor = 'red';
itens[1].style.padding = '.5rem';

// Utilizando o FOR para percorrer a lista 

for(let i = 0; i < itens.length; i++){
    itens[i].style.backgroundColor = 'CCCCC9';
    itens[i].style.fontWeight = 'bold';
}

//Metódo getElementsByTagName

let li = document.getElementsByTagName('li');
console.log(li);

for(let i = 0; i <= li.length; i+2){
    li[i].style.backgroundColor = 'pink';
    li[i].style.fontWeight = 'bold';
}

//Metódo getElementsByName

let nome  = document.getElementsByName('fitem');

console.clear();
console.log(nome);
nome[0].textContent = 'Pose de Quebrada';
nome[0].style.backgroundColor = 'BAC1FB';
nome[1]. textContent = 'RECEBAA';
nome[1].style.backgroundColor = 'yellow';

//Remover conteudo

let item2 = document.getElementById('item2');

item2.remove();

// Inserindo um valor

let lista = document.getElementById('itens'); //coloca primeiro o pai
let item1 = document.getElementById('item1'); //depois o filho
lista.insertBefore(item2, item1.nextSibling); //inserir no pai

// Alterar estilo da lista 

let ul = document.getElementById('itens');
ul.style.listStyle = 'none';

//Acessar elemento por meio de outro elemento

// document.ul.appendChild('item1');

let teste = document.getElementById('itens');
let teste1 = teste.getElementsByTagName('li');
console.log(teste1);