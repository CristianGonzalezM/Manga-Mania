$(document).ready(function(){
    $('#productForm').validate({
        rules: {
            productName: {
                required: true,
                minlength: 3
            },
            productPrice: {
                required: true,
                number: true,
                min: 1
            }
        },
        messages: {
            productName: {
                required: 'Por favor, ingresa un nombre',
                minlength: 'El nombre debe tener al menos 3 caracteres'
            },
            productPrice: {
                required: 'Por favor, ingresa un precio',
                number: 'El precio debe ser un número',
                min: 'El precio debe ser mayor o igual a 1'
            }
        },
        submitHandler: function(form) {
            addProduct();
            form.reset();
            return false; // Previene la recarga de la página
        }
    })
    loadProducts();
});

function addProduct(){
    var productName = $('#productName').val();
    var productPrice = $('#productPrice').val();
    var product = { Name: productName, Price: productPrice}

    appendProductToTable(productName, productPrice);
    saveProductToStorage(product);
}

function editProduct(button){
    var row = $(button).closest('tr');
    var cols = row.children('td');
    if(button.textContent === 'Editar'){
        $(cols[0]).html(`<input type="text" value="${$(cols[0]).text()}">`);
        $(cols[1]).html(`<input type="number" value="${$(cols[1]).text()}">`);
        $(button).text('Guardar').removeClass('btn-info').addClass('btn-success');
        $(button).next().text('Cancelar').removeClass('btn-danger').addClass('btn-warning');
    } else { // Guardar
        var newName = $(cols[0]).find('input').val();
        var newPrice = $(cols[1]).find('input').val();
        $(cols[0]).text(newName);
        $(cols[1]).text(newPrice);
        $(button).text('Editar').removeClass('btn-success').addClass('btn-info');
        $(button).next().text('Eliminar').removeClass('btn-warning').addClass('btn-danger');
        updateProductInStorage(row.index(), newName, newPrice);
    }
}

function updateProductInStorage(index, newName, newPrecio){
    var products = JSON.parse(localStorage.getItem('products'));
    products[index].Name = newName;
    products[index].Price = newPrecio;
    localStorage.setItem('products', JSON.stringify(products));
}

function deleteProduct(button){
    var row = $(button).closest('tr');
    var cols = row.children('td');
    if(button.textContent === 'Cancelar'){
        $(cols[0]).text($(cols[0]).find('input').val());
        $(cols[1]).text($(cols[1]).find('input').val());
        $(button).prev().text('Editar').removeClass('btn-info').addClass('btn-info');
        $(button).text('Eliminar').removeClass('btn-warning').addClass('btn-danger');
    } else {
        removeFormStorage(row.index());
        row.remove();
    }
}

function removeFormStorage(index) {
    var products = JSON.parse(localStorage.getItem('products'));
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
}

function loadProducts(){
    if(localStorage.getItem('products')){
        var products = JSON.parse(localStorage.getItem('products'));
        products.forEach(function(product){
            appendProductToTable(product.Name, product.Price);
        });
    }
}

function appendProductToTable(name, price){
    $('#productsTable tbody').append(`
        <tr>
            <td>${name}</td>
            <td>${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}</td>
            <td>
                <button class="btn btn-info btn-sm edit-product" onclick="editProduct(this)">Editar</button>
                <button class="btn btn-danger btn-sm delete-product" onclick="deleteProduct(this)">Eliminar</button>
            </td>
    `);
}

function saveProductToStorage(product) {
    var products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    //If Lineal > If condicion ? then algo : then otra cosa;
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}