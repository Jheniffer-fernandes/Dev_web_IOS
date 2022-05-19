const colaboradores = [
    {
    firstName: 'Aaron',
    lastName: 'Reid',
    salario: 1500,
    vinculo: 'clt'
},
{
    firstName: 'Agatha',
    lastName: 'Navarro',
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



function inss(colaborador)
{ 
    if (colaborador.vinculo === 'pj')
    {
        console.log(`${colaborador.firstName} contribui com 0,00`);
        return
    }
    
    let por = 0;    
    
    if (colaborador.salario <=1212)
    {
    	por = 7.5;
    }
    else if (colaborador.salario >= 1213 && colaborador.salario <= 2427)
    {
    	por = 9; 
    } 
    else if(colaborador.salario >= 2428 && colaborador.salario <= 3641)
    {
    	por = 12;
    }
    else if (colaborador.salario >= 3642 && colaborador.salario <= 7087)
    {
    	por = 14;
    }
    else 
    {
        let resultado1 = 7088 * 14 / 100;
        console.log(`${colaborador.firstName} colabora ${resultado1}`)
        return
    }
    let resultado = colaborador.salario * por / 100;
    console.log(`${colaborador.firstName} colabora ${resultado}`)
}

inss(colaboradores[0]);
inss(colaboradores[1]);
inss(colaboradores[2]);
inss(colaboradores[3]);
inss(colaboradores[4]);
