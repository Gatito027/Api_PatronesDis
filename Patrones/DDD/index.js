const Pedido = require('./Dominio/pedidos/Pedido');
const Item = require('./Dominio/pedidos/Item');
const ServicioPedidos = require('./aplicacion/ServicioPedidos');

function clientCode() {
    const servicioPedidos = new ServicioPedidos();

    // Crear un nuevo pedido
    const pedido = new Pedido(1, 'Cliente 1', [], 0);
    const item1 = new Item(1, 'Tortilla de Maíz', 10, 5);
    const item2 = new Item(2, 'Tortilla de Harina', 20, 10);

    pedido.agregarItem(item1);
    pedido.agregarItem(item2);

    // Agregar el pedido al repositorio
    servicioPedidos.repositorioPedidos.agregarPedido(pedido);

    // Completar el pedido
    const factura = servicioPedidos.completarPedido(1);
    console.log(factura);
}

clientCode();
