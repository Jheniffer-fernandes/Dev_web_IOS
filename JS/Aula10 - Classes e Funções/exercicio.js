class Pessoa {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    agePessoa(ano) {
        return ano - this.dob;
    }
}

    let dataHoje = new Date()
    let dob = dataHoje.getFullYear()



let agePessoa = new Pessoa('Percy', 'Jackson', '2000-08-15');

console.log(agePessoa.getBirthYear());

var hoje = new Date().getFullYear();
var birthday = 2000-08-15;

console.log(hoje.getFullYear() - birthday.getFullYear());

