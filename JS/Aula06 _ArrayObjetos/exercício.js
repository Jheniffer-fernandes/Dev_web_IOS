const alunos = [
    {
    nome: 'Harry',
    sobrenome: 'Potter',
    idade: 11,
    endereco: {
    rua: 'Rua dos Alfeneiros',
    numero: '4',
    },
    numeroChamada: '10',
    serie: '1',
    nota: '5,7,9,10',
    media: '7,75',
    hobbies: ['jogar quadribol'],
    situacao: 'aprovado'
    },

    {
        nome: 'Hermione',
        sobrenome: 'Granger',
        idade: 11,
        endereco: {
        rua: 'Rua dos Hampstead',
        numero: '100',
        },
        numeroChamada: '11',
        serie: '1',
        nota: '10,10,10,10',
        media:'10',
        hobbies: ['ler'],
        situacao: 'aprovada'
    },

    {
        nome: 'Ronald',
        sobrenome: 'Weasley',
        idade: 11,
        endereco: {
        rua: 'Avenida Otery St. Catchpole',
        numero: '93',
        },
        numeroChamada: '25',
        serie: '1',
        nota: '4,7,8,9',
        media: '7',
        hobbies: ['jogar xadrez bruxo'],
        situacao: 'aprovado'
    },
    ];
    
    console.log('O aluno', alunos[0].nome, alunos[0].sobrenome, 'com notas', alunos[0].nota, 'mora na', alunos[0].endereco.rua,'e teve a média,', alunos[0].media, 'portanto foi', alunos[0].situacao);
    console.log('A aluna', alunos[1].nome, alunos[1].sobrenome, 'com notas', alunos[1].nota, 'mora na', alunos[1].endereco.rua,'e teve a média,', alunos[1].media, 'portanto foi', alunos[1].situacao);
    console.log('O aluno', alunos[2].nome, alunos[2].sobrenome, 'com notas', alunos[2].nota, 'mora na', alunos[2].endereco.rua,'e teve a média,', alunos[2].media, 'portanto foi', alunos[2].situacao);