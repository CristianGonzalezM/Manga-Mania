const formularioLogin = document.getElementById('formulario-login');

formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuarioInput = document.getElementById('usuario').value;
    const passwordInput = document.getElementById('password').value;

    // Obtener los usuarios del Local Storage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar usuario con las credenciales proporcionadas
    const usuarioEncontrado = usuarios.find(user => user.usuario === usuarioInput && user.password === passwordInput);

    if (usuarioEncontrado) {
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});