$(document).ready(function () {
    function cargarOpcionesManga() {
        $.ajax({
            url: 'http://localhost:8000/BiblioMania/manga/',
            type: 'GET',
            success: function (response) {
                var options = '';
                $.each(response, function (key, value) {
                    options += '<option value="' + value.id + '">' + value.title + '</option>';
                });
                $('#manga').html(options);
            },
            error: function (error) {
                console.log('Error al cargar opciones de manga:', error);
                alert('Error al cargar opciones de manga');
            }
        });
    }

    cargarOpcionesManga();

    $("#resenaForm").validate({
        submitHandler: function (form) {
            var data = {
                manga: $("#manga").val(),
                rating: $("#rating").val(),
                comment: $("#comment").val()
            };
            $.ajax({
                url: 'http://localhost:8000/BiblioMania/resena/',
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (response) {
                    alert('Reseña guardada correctamente');
                    form.reset();
                },
                error: function (error) {
                    console.log('Error al guardar reseña:', error);
                    alert('Error al guardar reseña');
                }
            });
        }
    });
});