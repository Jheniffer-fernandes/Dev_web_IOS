console.log(window);
    window.alert('Olá, seja bem-vindos');

document.title = 'JavaScript com HTML DOM – Parte I'


let section = document.createElement('section');
var titulo = document.createElement('h1')
var paragrafo = document.createElement('p')
titulo.innerHTML = 'Hannibal';
paragrafo.innerHTML = 'O drama explora o início do relacionamento do psiquiatra Hannibal Lecter com seu paciente, o talentoso analista comportamental do FBI, Will Graham.'
section.innerHTML = '';
document.body.appendChild(section);
section.appendChild(titulo);
section.appendChild(paragrafo);

let article = document.createElement('article');
var titulo = document.createElement('h1');
var paragrafo = document.createElement('p');
article.innerHTML = '';
titulo.innerHTML = 'Mindhunter';
paragrafo.innerHTML = 'Mindhunter é uma série de televisão norte-americana de drama policial criada por Joe Penhall, e baseada no livro Mind Hunter: Inside the FBI’s Elite Serial Crime Unit escrito por John E. Douglas e Mark Olshaker.';
document.body.appendChild(article);
article.appendChild(titulo);
article.appendChild(paragrafo);


