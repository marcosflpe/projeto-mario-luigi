const form = document.querySelector('.formulario-fale-conosco');
const mascara = document.querySelector('.mascara-formulario');

function MostrarForm() {
    form.classList.add('ativo');
    mascara.classList.add('ativa');
    form.style.left = '50%'
    form.style.transform = 'translateX(-50%)'
}

function FecharFormulario() {
    form.classList.remove('ativo');
    mascara.classList.remove('ativa');
     form.style.left = '-300px'
    form.style.transform = 'translateX(0)'
}

