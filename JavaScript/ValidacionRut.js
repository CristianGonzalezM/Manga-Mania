window.onload = function () {
    document
      .getElementById("miFormulario")
      .addEventListener("submit", function (event) {
        
        if (!validarRut(document.getElementById("rut").value)) {
          event.preventDefault(); // Prevenir el envío del formlario si la validación falla
          alert("Rut no cumplen con el formato esperado.");
        }
      });
  };
  function validarRut(rut) {
    var valor = rut.replace(/[\.-]/g, "");
    var cuerpo = valor.slice(0, -1);
    var dv = valor.slice(-1).toUpperCase();
    rut = cuerpo + "-" + dv;
    if (cuerpo.length < 7) {
      return false;
    }
  
    var suma = 0;
    var multiplo = 2;
  
    for (var i = 1; i <= cuerpo.length; i++) {
      var index = multiplo * valor.charAt(cuerpo.length - i);
      suma = suma + index;
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }
    }
  
    var dvEsperado = 11 - (suma % 11);
    dv =
      dvEsperado === 10 ? "K" : dvEsperado === 11 ? "0" : dvEsperado.toString();
    return dv === valor.slice(-1).toUpperCase();
  }