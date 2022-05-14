const colaboradores = [
    {
    name: 'Aaron',
    sobrenome: 'Reid',
    salario: 1500,
    vinculo: 'clt'
},
{
    nome: 'Agatha',
    sobrenome: 'Navarro',
    salario: 2500,
    vinculo: 'pj'
},
{
    firstName: 'James',
    lastName: 'Stones',
    salario: 3500,
    vinculo: 'clt'
},
{
    firstName: 'Kalila',
    lastName: 'Sparks',
    salario: 5000,
    vinculo: 'clt'
},
{
    firstName: 'Lysandre',
    lastName: 'Jenkins',
    salario: 4500,
    vinculo: 'pj'
},
];

const desconto = [7.5, 9, 12, 14];

function inss()
{
    por = 0;    
    if (colaboradores.salario <=1212)
    {
    	por = 7.5;
    }
    else if (colaboradores.salario >= 1213 && colaboradores.salario <= 2427)
    {
    	por = 9;
    } 
    else if(colaboradores.salario >= 2428 && colaboradores.salario <= 3641)
    {
    	por = 12;
    }
    else (colaboradores.salario >= 3642 && colaboradores.salario <= 7087)
    {
    	por = 14;
    }
    console.log(colaboradores.salario - ((colaboradores.salario * por)/100));
    console.log(`${name} colabora ${console.log}`)
}