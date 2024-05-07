let nextUrl = 'https://rickandmortyapi.com/api/character'; // URL inicial para personajes
        
        function fetchData(url, container, templateFunction){
            $('#loading').show(); // Muestra el indicador de cargando
            $.ajax({
                url: url,    
                type: 'GET',
                success: function(response) {
                    $('#loading').hide(); // Oculta el indicador de cargando 
                    response.results.forEach(item => container.append(templateFunction(item)));
                    nextUrl = response.info.next; // Actualiza la URL del proximo conjunto de datos
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
                    <img class="card-img-top" src="${character.image}" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">${character.species}</p>
                    </div>
                </div>
            </div>`);
        }

        function episodeTemplate(episode){
            return $(`<div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${episode.name}</h5>
                        <p class="card-text">${episode.episode} - ${episode.air_date}</p>
                    </div>
                </div>
            </div>`);
        }

        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() >= $(document).height() - 100 && nextUrl) {
                fetchData(nextUrl, $('#characters'), characterTemplate);
            }
        });

        $(document).ready(function () {
            fetchData(nextUrl, $('#characters'), characterTemplate);
        })