document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');
    const orderList = document.getElementById('orderList');

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addOrder();
    });

    function addOrder() {
        const mesa = document.getElementById('mesas').value;
        const entrada = document.getElementById('entrada').value;
        const cantidadEntrada = document.getElementById('cantidadEntrada').value;
        const platoFuerte = document.getElementById('platosFuertes').value;
        const cantidadPlatoFuerte = document.getElementById('cantidadPlatosFuertes').value;
        const bebida = document.getElementById('bebidas').value;
        const cantidadBebida = document.getElementById('cantidadBebidas').value;

        if (mesa && (entrada || platoFuerte || bebida)) {
            const orderItem = document.createElement('li');
            orderItem.textContent = `Mesa: ${mesa}, Entrada: ${entrada} (${cantidadEntrada}), Plato Fuerte: ${platoFuerte} (${cantidadPlatoFuerte}), Bebida: ${bebida} (${cantidadBebida})`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => {
                orderList.removeChild(orderItem);
            });
            orderItem.appendChild(deleteButton);
            orderList.appendChild(orderItem);
        }
    }
});
