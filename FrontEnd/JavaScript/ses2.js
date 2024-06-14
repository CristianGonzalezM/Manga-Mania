document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');
    const inputs = document.querySelectorAll('#miFormulario input');

    const expresiones = {
        gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{4,12}$/ // 4 a 12 dígitos
    };

    const campos = {
        gmail: false,
        password: false
    };

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "gmail":
                validarCampo(expresiones.gmail, e.target, 'gmail');
                break;
            case "password":
                validarCampo(expresiones.password, e.target, 'password');
                break;
        }
    };

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.add('bi-check-circle-fill');
            document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.remove('bi-x-circle-fill');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.add('bi-x-circle-fill');
            document.querySelector(`#grupo__${campo} .formulario__validacion-estado`).classList.remove('bi-check-circle-fill');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        }
    };

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if (campos.gmail && campos.password) {
            document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
                window.location.href = '/FrontEnd/index.html';
            }, 1000);

            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto');
            });

        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
    });
});