$(document).ready(function(){
    $('#comentarioForm').validate({
        rules: {
            userName: {
                required: true,
                minlength: 3
            },
            comentarioDescrip: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            userName: {
                required: 'Por favor, ingresa un nombre de usuario',
                minlength: 'El nombre de usuario debe tener al menos 3 caracteres'
            },
            comentarioDescrip: {
                required: 'Por favor, ingresa una descripción',
                minlength: 'La descripción debe tener al menos 3 caracteres'
            }
        },
        submitHandler: function(form) {
            addComentario();
            form.reset();
            return false; // Previene la recarga de la página
        }
    })
    loadComentarios();
});

function addComentario(){
    var userName = $('#userName').val();
    var comentarioDescrip = $('#comentarioDescrip').val();
    var comentario = { UserName: userName, Descripcion: comentarioDescrip }

    appendComentarioToTable(userName, comentarioDescrip);
    saveComentarioToStorage(comentario);
}

function editComentario(button){
    var row = $(button).closest('tr');
    var cols = row.children('td');
    if(button.textContent === 'Editar'){
        $(cols[0]).html(`<input type="text" value="${$(cols[0]).text()}">`);
        $(cols[1]).html(`<input type="text" value="${$(cols[1]).text()}">`);
        $(button).text('Guardar').removeClass('btn-info').addClass('btn-success');
        $(button).next().text('Cancelar').removeClass('btn-danger').addClass('btn-warning');
    } else { // Guardar
        var newName = $(cols[0]).find('input').val();
        var newDescrip = $(cols[1]).find('input').val();
        $(cols[0]).text(newName);
        $(cols[1]).text(newDescrip);
        $(button).text('Editar').removeClass('btn-success').addClass('btn-info');
        $(button).next().text('Eliminar').removeClass('btn-warning').addClass('btn-danger');
        updateComentarioInStorage(row.index(), newName, newDescrip);
    }
}

function updateComentarioInStorage(index, newName, newDescrip){
    var comentarios = JSON.parse(localStorage.getItem('comentarios'));
    comentarios[index].UserName = newName;
    comentarios[index].Descripcion = newDescrip;
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}

function deleteComentario(button){
    var row = $(button).closest('tr');
    var cols = row.children('td');
    if(button.textContent === 'Cancelar'){
        $(cols[0]).text($(cols[0]).find('input').val());
        $(cols[1]).text($(cols[1]).find('input').val());
        $(button).prev().text('Editar').removeClass('btn-success').addClass('btn-info');
        $(button).text('Eliminar').removeClass('btn-warning').addClass('btn-danger');
    } else {
        removeFromStorage(row.index());
        row.remove();
    }
}

function removeFromStorage(index) {
    var comentarios = JSON.parse(localStorage.getItem('comentarios'));
    comentarios.splice(index, 1);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}

function loadComentarios(){
    if(localStorage.getItem('comentarios')){
        var comentarios = JSON.parse(localStorage.getItem('comentarios'));
        comentarios.forEach(function(comentario){
            appendComentarioToTable(comentario.UserName, comentario.Descripcion);
        });
    }
}

function appendComentarioToTable(name, descrip){
    $('#comentariosTable tbody').append(`
        <tr>
            <td>${name}</td>
            <td>${descrip}</td>
            <td>
                <button class="btn btn-info btn-sm edit-comentario" onclick="editComentario(this)">Editar</button>
                <button class="btn btn-danger btn-sm delete-comentario" onclick="deleteComentario(this)">Eliminar</button>
            </td>
        </tr>
    `);
}

function saveComentarioToStorage(comentario) {
    var comentarios = localStorage.getItem('comentarios') ? JSON.parse(localStorage.getItem('comentarios')) : [];
    comentarios.push(comentario);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
}