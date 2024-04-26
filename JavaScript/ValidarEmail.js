window.onload = function () {
    document
      .getElementById("miFormulario")
      .addEventListener("submit", function (event) {
        if (!validarEmail(document.getElementById("txtGmail").value)) {
          event.preventDefault(); // Prevenir el envío del fomrulario si la validación falla
          alert("Email no cumplen con el formato esperado.");
        }

      });
};
  
  function validarEmail(txtGmail) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(txtGmail);
  }

/*
  document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('Inicio Sesion Completado');

    document.getElementById('txtGmail').value = '';
    document.getElementById('contrasena').value = '';
});
*/