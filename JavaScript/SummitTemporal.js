document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Inicio Sesion Completado');

    document.getElementById('txtRut').value = '';
    document.getElementById('contrasena').value = '';
});