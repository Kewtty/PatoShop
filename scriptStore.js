document.addEventListener('DOMContentLoaded', function() {
    // Asignar eventos a los botones de navegación y modo oscuro
    let c = document.getElementById("Back");
    let d = document.getElementById("ModNegro");

    c.addEventListener('click', function () {
        window.location.href = 'mainpage.html';
    });

    d.addEventListener('click', function () {
        document.body.classList.toggle("modoBlack");
    });

    // Inicializar productos y agregar al DOM
    const products = [
        {name: 'Coca-cola', price: 6.00, description: 'Mediano'},
        {name: 'Agua Vital', price: 8.00, description: 'Mediano'},
        {name: 'Papas Lays', price: 5.00, description: 'Pequenio'},
    ];

    const productList = document.querySelector('.productoLista');

    products.forEach(function (product) {
        const productElement = document.createElement('li');
        productElement.className = 'producto';

        const nameElement = document.createElement('h2');
        nameElement.textContent = product.name;
        productElement.appendChild(nameElement);

        const priceElement = document.createElement('p');
        priceElement.className = 'precio';
        priceElement.textContent = `${product.price.toFixed(2)} Bs`;
        productElement.appendChild(priceElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'descripcion';
        descriptionElement.textContent = product.description;
        productElement.appendChild(descriptionElement);

        const buttonElement = document.createElement('button');
        buttonElement.className = 'mostrar';
        buttonElement.textContent = 'Mostrar Precio';
        productElement.appendChild(buttonElement);

        productList.appendChild(productElement);
    });

    // Asignar eventos a los botones de mostrar precio
    assignShowPriceEvent();
});


/*PENDIENTE XD*/
function assignShowPriceEvent() {
    document.querySelectorAll('.mostrar').forEach(function(button) {
        button.addEventListener('click', function() {
            const productInfo = getProductInfo(button);
            alert(`Nombre: ${productInfo.name}\nPrecio: ${productInfo.price} Bs`);
        });
    });
}

function getProductInfo(button) {
    const productElement = button.closest('.producto');
    const nameElement = productElement.querySelector('h2');
    const priceElement = productElement.querySelector('.precio');
    const name = nameElement.textContent.trim();
    const price = priceElement.textContent.replace('Bs', '').trim();
    return { name, price };
}
