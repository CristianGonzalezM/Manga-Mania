let nextUrl = 'https://narutodb.xyz/api/character'; // URL inicial para personajes
        
        function fetchData(url, container, templateFunction){
            $('#loading').show(); // Muestra el indicador de cargando
            $.ajax({
                url: url,    
                type: 'GET',
                success: function(response) {
                    $('#loading').hide(); // Oculta el indicador de cargando 
                    response.characters.forEach(item => container.append(templateFunction(item)));
                    //nextUrl = response.info.next; // Actualiza la URL del proximo conjunto de datos
                },
                error: function(){
                    $('#loading').hide(); // Oculta el indicador de cargando 
                    alert('No se pudo obtener datos')
                }
            });
        }

        function characterTemplate(character){
            return $(`<div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="${character.images}" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                    </div>
                </div>
            </div>`);
        }

        $(document).ready(function () {
            fetchData(nextUrl, $('#caracteres'), characterTemplate);
        })