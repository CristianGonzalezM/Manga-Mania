let nextUrl = 'https://api.jikan.moe/v4/manga'; // URL inicial para mangas

function fetchData(url, container, templateFunction) {
    $('#loading').show(); // Muestra el indicador de cargando
    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            $('#loading').hide(); // Oculta el indicador de cargando
            response.data.forEach(item => container.append(templateFunction(item)));
        },
        error: function() {
            $('#loading').hide(); // Oculta el indicador de cargando
            alert('No se pudo obtener datos');
        }
    });
}

function mangaTemplate(manga) {
    const image = manga.images.jpg.image_url;
    const title = manga.title;
    const authors = manga.authors.map(author => author.name).join(', ');
    const publishedDate = manga.published.from ? `<p class="card-text">Fecha de lanzamiento: ${new Date(manga.published.from).toLocaleDateString()}</p>` : '';
    const categories = manga.genres.map(genre => genre.name).join(', ');

    return $(`<div class="col-md-4">
        <div class="card">
            <img class="card-img-top" src="${image}" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Autores: ${authors}</p>
                ${publishedDate}
                <p class="card-text">Categorías: ${categories}</p>
            </div>
        </div>
    </div>`);
}

$(document).ready(function() {
    fetchData(nextUrl, $('#mangas'), mangaTemplate);
});