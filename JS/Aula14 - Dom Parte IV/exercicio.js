const nome = document.querySelector('#nome');
const bDay = document.querySelector('#dNascimento');
const email = document.querySelector('#email');
const userList = document.querySelector('#users');
const btnIncluir = document.querySelector('#incluir');
const btnExcluir = document.querySelector('#delete');
const pulseira = document.querySelector('#pulseira');
const warning =  document.getElementById('#error')

btnIncluir.addEventListener('click', Incluir);
btnExcluir.addEventListener('click', function() {
    userList.remove();
});

function Incluir(e) {
    e.preventDefault();

    if (campos() === true) {
        alert('Preencha os dados');
    }

    else if (idade() < 18) {
        alert('Você ainda é menor de idade!')
    } 
    else {
        let li = document.createElement('li');
        userList.appendChild(li);
        li.innerHTML = `${nome.value} | ${bDay.value} | ${email.value} | ${pulseira.value}` 
    }
} 

const campos = () => {
    let verificadorNome = nome.value === ''
    let verificadorEmail = email.value === ''
 
    if(verificadorNome || verificadorEmail) {
        return true;
    } 
    
    else {
        return false;
    }

 }
 
 function verificarEmail() {
 
     let padrao = new RegExp(/.*@.*\..*/i);
 
     if (!padrao.test(email.value)) {
         // alert('Por favor, insira um e-mail válido.');
         let erro = document.createElement('p');
         warning.appendChild(erro);
 
         erro.innerHTML = 'Email invalido';
         erro.style.color = 'red';
         setTimeout(() => erro.remove(), 3000);
     }
 }
 
 
 const idade = () => {
     let transformarInputObjetoData = new Date(bDay.value);
     let diaNascimento = transformarInputObjetoData.getUTCDate();
     let mesNascimento = transformarInputObjetoData.getUTCMonth() + 1;
     let anoNascimento = transformarInputObjetoData.getFullYear();
 
     let dataAtual = new Date();
     let diaAtual = dataAtual.getUTCDate();
     let mesAtual = dataAtual.getUTCMonth() + 1;
     let anoAtual = dataAtual.getFullYear();
 
     let condicaoNaoFezAniversario = mesAtual < mesNascimento || mesAtual == mesNascimento && diaAtual < diaNascimento
 
     let idade = anoAtual - anoNascimento
     
     if (condicaoNaoFezAniversario) {
         return --idade;
     }
 
     else {
         return idade;
     }
 }
 

 