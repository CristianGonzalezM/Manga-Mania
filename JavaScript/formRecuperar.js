const formularioRecuperar = document.getElementById('formulario-recuperar');

formularioRecuperar.addEventListener('submit', (e) => {
    e.preventDefault();

    const correoInput = document.getElementById('correo').value;

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
});
