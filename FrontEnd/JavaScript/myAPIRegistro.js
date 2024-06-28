$(document).ready(function () {
    $("#registerForm").validate({
        submitHandler: function (form) {
            var data = {
                username: $("#username").val(),
                first_name: $("#first_name").val(),
                last_name: $("#last_name").val(),
                email: $("#email").val(),
                password: $("#password").val()
            };
            $.ajax({
                url: 'http://localhost:8000/BiblioMania/users/',
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (response) {
                    localStorage.setItem("access", response.access);
                    localStorage.setItem("refresh", response.refresh);
                    alert('Usuario registrado correctamente');
                    //window.location.href = 'index.html';
                },
                error: function (error) {
                    console.log('Error al registrar usuario:', error);
                    alert('Error al registrar usuario');
                }
            });
        }
    });
});
