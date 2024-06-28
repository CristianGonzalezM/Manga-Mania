$(document).ready(function () {
    function cargarMangas() {
        $.ajax({
            url: 'http://localhost:8000/BiblioMania/manga/',
            type: 'GET',
            success: function (data) {
                var tableRows = '';
                data.forEach(function (manga) {
                    tableRows += '<tr>';
                    tableRows += '<td>' + manga.title + '</td>';
                    tableRows += '<td>' + manga.author.name + '</td>';
                    tableRows += '<td>' + manga.publication_date + '</td>';
                    tableRows += '<td>' + manga.description + '</td>';
                    tableRows += '<td>' + (manga.status === 'E' ? 'En emisión' : 'Finalizado') + '</td>';
                    tableRows += '</tr>';
                });
                $('#mangaTableBody').html(tableRows);
            },
            error: function (error) {
                console.log('Error al cargar mangas:', error);
            }
        });
    }

    cargarMangas();

    $("#mangaForm").validate({
        submitHandler: function (form) {
            var data = {
                title: $("#title").val(),
                author: $("#author").val(),
                publication_date: $("#publication_date").val(),
                description: $("#description").val(),
                status: $("#status").val()
            };
            $.ajax({
                url: 'http://localhost:8000/BiblioMania/manga/',
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (response) {
                    alert('Manga guardado correctamente');
                    cargarMangas();
                },
                error: function (error) {
                    console.log('Error al guardar manga:', error);
                    alert('Error al guardar manga');
                }
            });
        }
    });
});