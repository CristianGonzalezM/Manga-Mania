$(document).ready(function () {
    function loadSubscriptions() {
        $.ajax({
            url: 'http://localhost:8000/BiblioMania/suscripcion/',
            type: 'GET',
            success: function (response) {
                $('#subscriptionTable tbody').empty();

                response.forEach(function (subscription) {
                    var row = `<tr>
                                    <td>${subscription.user.username}</td>
                                    <td>${subscription.tipo_suscripcion === 'M' ? 'Mensual $10 Dolares' : 'Anual $60 Dolares'}</td>
                                    <td>${subscription.suscription_date}</td>
                                </tr>`;
                    $('#subscriptionTable tbody').append(row);
                });
            },
            error: function (error) {
                console.log('Error al cargar suscriptores:', error);
            }
        });
    }

    loadSubscriptions();

    $("#subscriptionForm").validate({
        submitHandler: function (form) {
            var data = {
                user: $("#user").val(),
                tipo_suscripcion: $("#tipo_suscripcion").val()
            };
            $.ajax({
                url: 'http://localhost:8000/BiblioMania/suscripcion/',
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (response) {
                    alert('Suscripción guardada correctamente');
                    loadSubscriptions();
                },
                error: function (error) {
                    console.log('Error al guardar suscripción:', error);
                    alert('Error al guardar suscripción');
                }
            });
        }
    });
});