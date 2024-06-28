function cargarAutores() {
    $.ajax({
        url: 'http://localhost:8000/BiblioMania/autor/',
        type: 'GET',
        success: function (data) {
            var autoresTableBody = $('#autoresTableBody');
            autoresTableBody.empty();

            data.forEach(function (autor) {
                autoresTableBody.append(
                    `<tr>
                        <td>${autor.name}</td>
                        <td>${autor.country}</td>
                        <td>${autor.gender === 'M' ? 'Masculino' : 'Femenino'}</td>
                    </tr>`
                );
            });
        },
        error: function (error) {
            console.log('Error al cargar autores:', error);
            alert('Error al cargar autores');
        }
    });
}

$(document).ready(function () {
    $("#autorForm").validate({
        submitHandler: function (form) {
            var data = {
                name: $("#name").val(),
                country: $("#country").val(),
                gender: $("#gender").val()
            };
            $.ajax({
                url: 'http://localhost:8000/BiblioMania/autor/',
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (response) {
                    alert('Autor registrado correctamente');
                    cargarAutores();
                },
                error: function (error) {
                    console.log('Error al registrar autor:', error);
                    alert('Error al registrar autor');
                }
            });
        }
    });

    cargarAutores();
});