document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function (event) {
        const gmail = document.getElementById('txtGmail');
        const contrasena = document.getElementById('contrasena');
        
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const contrasenaRegex = /^[a-zA-Z0-9]{4,12}$/;

        let valid = true;

        // Validar Gmail
        if (!gmailRegex.test(gmail.value)) {
            gmail.classList.add('formulario__grupo-incorrecto');
            valid = false;
        } else {
            gmail.classList.remove('formulario__grupo-incorrecto');
        }

        // Validar Contraseña
        if (!contrasenaRegex.test(contrasena.value)) {
            contrasena.classList.add('formulario__grupo-incorrecto');
            valid = false;
        } else {
            contrasena.classList.remove('formulario__grupo-incorrecto');
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
