document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const entrada = document.getElementById('entrada').value;
    const cantidadEntrada = document.getElementById('cantidadEntrada').value;
    const platosFuertes = document.getElementById('platosFuertes').value;
    const cantidadPlatosFuertes = document.getElementById('cantidadPlatosFuertes').value;
    const bebidas = document.getElementById('bebidas').value;
    const cantidadBebidas = document.getElementById('cantidadBebidas').value;

    const orderList = document.getElementById('orderList');

    const entradaItem = `${entrada} - Cantidad: ${cantidadEntrada}`;
    const platoFuerteItem = `${platosFuertes} - Cantidad: ${cantidadPlatosFuertes}`;
    const bebidaItem = `${bebidas} - Cantidad: ${cantidadBebidas}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>Entrada:</strong> ${entradaItem}<br><strong>Plato Fuerte:</strong> ${platoFuerteItem}<br><strong>Bebida:</strong> ${bebidaItem}`;
    orderList.appendChild(listItem);

    // Limpiar el formulario
    document.getElementById('orderForm').reset();
});


