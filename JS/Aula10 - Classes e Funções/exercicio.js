function Pessoa(nome, date) {
    this.nome = nome;
    this.dataNascimento = new Date(date[0], date[1], date[2], date[3]);
    this.ano = this.dataNascimento.getFullYear();
    this.month = this.dataNascimento.getMonth() + 1;
    this.dia = this.dataNascimento.getDate();
    
    this.atual = new Date();
    this.anoAtual = this.atual.getFullYear();
    this.mesAtual = this.atual.getMonth() + 1;
    this.diaAtual = this.atual.getDate();

    this.idade = function() {
        if (this.mesAtual < this.month || this.mesAtual == this.month && this.diaAtual < this.dia) {
            idade = this.anoAtual - this.ano;
        }
        return --idade
    }
}

let pessoas = new Array(10);
pessoas[0] = new Pessoa('Percy', [1992, 08, 18, 5]);
pessoas[1] = new Pessoa('Annabeth',[1993, 07, 10, 5]);
pessoas[2] = new Pessoa('Nico',[1924, 05, 16, 5]);
pessoas[3] = new Pessoa('Will',[1990, 08, 27, 5]);
pessoas[4] = new Pessoa('Harry',[1980, 07, 31, 5]);
pessoas[5] = new Pessoa('Hermione',[1979, 09, 19, 5]);
pessoas[6] = new Pessoa('Ronald',[1980, 03, 01, 5]);
pessoas[7] = new Pessoa('Ginevra',[1981, 08, 11, 5]);
pessoas[8] = new Pessoa('Luna',[1981, 02, 13, 5]);
pessoas[9] = new Pessoa('Lilian',[1960, 01, 30, 5]);

for (var c = 0; c < pessoas.length; c++) {
    
    function verificandoAniversario() {
        if (pessoas[c].mesAtual < pessoas[c].month) {
            console.log(`${pessoas[c].nome} tem ${pessoas[c].idade()} e ainda não fez aniversário`);
        } else {
            console.log(`${pessoas[c].nome} tem ${pessoas[c].idade()} e já fez aniversário`);
        }
    }

    verificandoAniversario();
};
