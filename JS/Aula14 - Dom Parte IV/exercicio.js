const nome = document.querySelector('#nome');
const bDay = document.querySelector('#dNascimento');
const email = document.querySelector('#email');
const userList = document.querySelector('#users');
const btnIncluir = document.querySelector('#incluir');
const pulseira = document.querySelector('#pulseira');


btnIncluir.addEventListener('click', Incluir);

function Incluir(e) {
    e.preventDefault();

    let li = document.createElement('li');
    userList.appendChild(li);
    li.innerHTML = `${nome.value} | ${bDay.value} | ${email.value}`
};






// function onSubmit(s) {
//     s.preventDefault();
    
    // console.log(nameInput.value);
    
    // if (nameInput.value === '' || emailInput.value === '') {
    //     // alert('Por favor, preencha os dados.');
    //     msg.classList.add('error');
    //     msg.innerHTML = 'Por favor, preencha os dados.';
    //     setTimeout(() => msg.remove(), 3000);
    // } else {
        
        // console.log('sucess');
        
//         const li = document.createElement('li');
//         li.appendChild(
//             document.createTextNode(
//                 `${nameInput.value} : ${emailInput.value} : ${nascimento.value}`
//             )
//         );
//         userList.appendChild(li);
        
//         // Limpa o formulário
//         nameInput.value = '';
//         emailInput.value = '';
//         horario.getElementsByTagName('option')[0].selected = 'selected';
//         nameInput.focus(); //Coloca o foco no elmento
//     }
// }

// function onExclude(e) {
//     e.preventDefault();
    
//     // console.log(nameInput.value);
    
//     if (nameInput.value === '' || emailInput.value === '') {
//         // alert('Por favor, preencha os dados.');
//         msg.classList.add('error');
//         msg.innerHTML = 'Por favor, preencha os dados.';
//         setTimeout(() => msg.remove(), 3000);
//     } else {
        
//         // console.log('sucess');
        
//         const li = document.createElement('li');
//         li.appendChild(
//             document.createTextNode(
//                 `${nameInput.value} : ${emailInput.value} : ${horario.value}`
//             )
//         );
//         userList.appendChild(li);
        
//         // Limpa o formulário
//         nameInput.value = '';
//         emailInput.value = '';
//         horario.getElementsByTagName('option')[0].selected = 'selected';
//         nameInput.focus(); //Coloca o foco no elmento
//     }
// }

// // Validando e-mail

// emailInput.addEventListener('change', (e) => {
//     let padrao = new RegExp(/.*@.*\..*/i);
//     if (!padrao.test(emailInput.value)) {
        
//         // alert('Por favor, insira um e-mail válido.');
//         msg_email.classList.add('error');
//         setTimeout(() => msg.email(), 3000);
//         msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
//         setTimeout(() => msg.remove(), 3000);

//     }
// });

// // Base validar idade

// emailInput.addEventListener('change', (e) => {
//     let padrao = new RegExp(/.*@.*\..*/i);
//     if (!padrao.test(emailInput.value)) {
        
//         // alert('Por favor, insira um e-mail válido.');
//         msg_email.classList.add('error');
//         setTimeout(() => msg.email(), 3000);
//         msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
//         setTimeout(() => msg.remove(), 3000);

//     }
// });