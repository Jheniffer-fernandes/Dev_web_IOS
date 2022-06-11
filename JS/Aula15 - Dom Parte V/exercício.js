const itemInput = document.getElementById('item');
const quantidadeInput = document.getElementById('quantidade');
const valorInput = document.getElementById('valor');
const form = document.getElementById('form');
let total = document.getElementById('total');
const adicionarInput = document.getElementById('adicionar');
const itemsLista = document.getElementById('produtos');
const quantidadeLista = document.querySelector('.quantidade');
const precoLista = document.getElementById('preco');

let calculadora = 0

adicionarInput.addEventListener('click', adicionarItems);

class Item {
    constructor(nome, quantidade, valor) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
        this.createElements();
        this.calcularTotalValorItens();
    }

    createElements() {
        
        let nomeLi = document.createElement('li');
        nomeLi.innerHTML = this.nome;
        itemsLista.appendChild(nomeLi);

        let quantidadeLi = document.createElement('li');
        quantidadeLista.appendChild(quantidadeLi);

        let textoQuantidadeValor = document.createElement('span');
        textoQuantidadeValor.innerHTML = this.quantidade;
        quantidadeLi.appendChild(textoQuantidadeValor);

        let valorLi = document.createElement('li');
        valorLi.innerHTML = this.valor;
        precoLista.appendChild(valorLi);

        let btnRetirarItem = document.createElement('button');
        btnRetirarItem.innerHTML = '-';
        quantidadeLi.appendChild(btnRetirarItem);
        btnRetirarItem.classList.add('bg-red');
        btnRetirarItem.addEventListener('click', retirar);

        let btnAdicionarItem = document.createElement('button');
        btnAdicionarItem.innerHTML = '+';
        quantidadeLi.appendChild(btnAdicionarItem);
        btnAdicionarItem.addEventListener('click', adicionar);
        btnAdicionarItem.classList.add('bg-black')

        let btnCancelarItem = document.createElement('button');
        btnCancelarItem.innerHTML = 'X';
        valorLi.appendChild(btnCancelarItem);
        btnCancelarItem.addEventListener('click', cancelar);

        let quantidade = this.quantidade
        let valor = this.valor
        
        function retirar() {
            quantidade--
            calculadora -= valor 
            console.log(quantidade * valor);
            total.innerHTML = moeda();
            console.log(quantidade);
            textoQuantidadeValor.innerHTML = quantidade;
            return calculadora;
        }

        function adicionar() {
            quantidade++
            valor = Number(valor)
            
            calculadora += valor
            
            total.innerHTML = moeda();
            
            textoQuantidadeValor.innerHTML = quantidade;
            return calculadora;
        }

        function cancelar() {
            nomeLi.remove();
            quantidadeLi.remove();
            valorLi.remove();
            
            calculadora = calculadora - (quantidade * valor)
            total.innerHTML = moeda();
            
        }
    }

    calcularTotalValorItens() {
        calculadora += Number(this.quantidade * this.valor);
        total.innerHTML = moeda();
        return calculadora
    }
}

function adicionarItems(event) {
    event.preventDefault();

    if(itemInput.value == '') {
        alert('Preencha todos os campos!');
    } else if (quantidadeInput.value == '') {
        alert('Preencha todos os campos!');
    } else if (valorInput.value == '') {
        alert('Preencha todos os campos!');
    } else {
        new Item(itemInput.value, quantidadeInput.value, valorInput.value);
    }

    form.reset();
}

function moeda() {
    return calculadora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}