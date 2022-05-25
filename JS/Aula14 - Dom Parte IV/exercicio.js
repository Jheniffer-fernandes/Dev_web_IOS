

const myForm = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#dNascimento');
const nascimento = document.querySelector('#email');
const msg = document.querySelector('.msg');
const msg_email = document.querySelector('.msg_email');
const userList = document.querySelector('#users');

Form.addEventListener('Incluir', onSubmit);
Form.addEventListener('Excluir', onSubmit); //excluir



function onSubmit(s) {
    s.preventDefault();
    
    // console.log(nameInput.value);
    
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        
        // console.log('sucess');
        
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${nascimento.value}`
            )
        );
        userList.appendChild(li);
        
        // Limpa o formulário
        nameInput.value = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus(); //Coloca o foco no elmento
    }
}

function onExclude(e) {
    e.preventDefault();
    
    // console.log(nameInput.value);
    
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        
        // console.log('sucess');
        
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${horario.value}`
            )
        );
        userList.appendChild(li);
        
        // Limpa o formulário
        nameInput.value = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus(); //Coloca o foco no elmento
    }
}

// Validando e-mail

emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        
        // alert('Por favor, insira um e-mail válido.');
        msg_email.classList.add('error');
        setTimeout(() => msg.email(), 3000);
        msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
        setTimeout(() => msg.remove(), 3000);

    }
});

// Base validar idade

emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        
        // alert('Por favor, insira um e-mail válido.');
        msg_email.classList.add('error');
        setTimeout(() => msg.email(), 3000);
        msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
        setTimeout(() => msg.remove(), 3000);

    }
});