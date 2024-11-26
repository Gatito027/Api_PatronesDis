const Pedido = require('./Pedido');

class RepositorioPedidos {
    constructor() {
        this.pedidos = [];
    }

    agregarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    obtenerPedidoPorId(id) {
        return this.pedidos.find(pedido => pedido.id === id);
    }
}

module.exports = RepositorioPedidos;
