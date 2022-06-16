const btns = document.querySelectorAll('.B_12');
const btn1 = document.querySelector('#B_01');
const btn2 = document.querySelector('#B_02');
const btn3 = document.querySelector('#B_03');
const resetar = document.querySelector('#resetar')

for(let i = 0; i < btns.length; i++) {
    btns[i].style.border = '2px solid #D9BC66';
    btns[i].style.padding = '.5rem';
    btns[i].style.margin = '.7rem';
    btns[i].style.backgroundColor = '#BFBFBF';
}

document.body.style.color = 'black'

let usuario = document.createElement('usuário');
let usuarioH2 = document.createElement('h2');
let usuarioP = document.createElement('p');

document.body.appendChild(usuario);

let img = document.createElement('img');
let figure = document.createElement('figure');

document.body.appendChild(figure);

let tabuada = document.createElement('tabuada');
let h2Tabuada = document.createElement('h2');

document.body.appendChild(tabuada);


function imagem() {
    if(figure.firstChild == img) {
        alert('Você não pode adicionar mais imagens');
    }
    else {
        document.body.style.backgroundColor = ' #262525';
        document.body.style.color = 'white';
    
        figure.appendChild(img);
        img.src = 'TUA.webp';
    }
}

function mensagemUsuario() {
    const mensagem = prompt('Coloque seu nome aqui.');

    if(mensagem.length == 0) {
        alert('Digite o seu nome!');
    } else {
        usuario.appendChild(usuarioH2);
        usuario.appendChild(usuarioP);
        
        if (document.body.style.backgroundColor == 'white') {
            document.body.style.color = 'black'
        } else {
            document.body.style.color = 'white'
        }

        usuarioH2.textContent = 'Mensagens de boas vindas!!';
        usuarioP.textContent = `Seja bem vindo(a) ${mensagem} a nossa academia`;
    }
}

function gerarTabuada() {
    const numeroUsuario = prompt('Digite um número para gerar a tabuada!!');

    if (numeroUsuario.length == 0) {
        alert('Você precisa digitar um valor!');
    } else {      
        tabuada.appendChild(h2Tabuada);
        h2Tabuada.textContent = 'Tabuada'
        for(let count = 1; count <= 10; count++) {
            let pTabuada = document.createElement('p');
            tabuada.appendChild(pTabuada);
            pTabuada.innerHTML = (`${numeroUsuario} x ${count} = ${Number(numeroUsuario) * count} <br />`);
        }
    }
}

function reset() {
    img.remove();
    document.body.style.backgroundColor = 'white';
    divUsuarioH2.remove();
    divUsuarioP.remove();
    divTabuada.innerHTML = ''
}

// Adicionando eventos nos botões
btn1.addEventListener('click', imagem);
btn2.addEventListener('click', mensagemUsuario);
btn3.addEventListener('click', gerarTabuada);
resetar.addEventListener('click', reset);