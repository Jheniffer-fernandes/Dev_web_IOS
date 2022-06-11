// Função Simples

function alertCookie() {
    alert('Você quer um cookie?');
    console.log('Você quer um cookie?');
}

// Arrow Function

const alertSucesso = () => {
    alert('Mensagem gerada com sucesso')
    console.log('Mensagem gerada com sucesso')
}

//Objeto Notebook

let notebook = {
    marca: 'Asus',
    windows: 10,
    nome: 'Zenbook Pro Duo UX581se',
    diferencial: 'desbloqueio facial',
    valor: 8800
}
console.log( notebook );

// Conversão de anos para dias

function conversor (ano = 1, dias = 365) {
    return ano * dias;
};
console.log(conversor());