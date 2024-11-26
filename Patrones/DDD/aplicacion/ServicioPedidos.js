const RepositorioPedidos = require('../Dominio/pedidos/RepositorioPedidos');
const ServicioFacturacion = require('../Dominio/facturacion/ServicioFacturacion');
const RepositorioInventario = require('../Dominio/inventario/RepositorioInventario');

class ServicioPedidos {
    constructor() {
        this.repositorioPedidos = new RepositorioPedidos();
        this.servicioFacturacion = new ServicioFacturacion();
        this.repositorioInventario = new RepositorioInventario();
    }

    completarPedido(pedidoId) {
        const pedido = this.repositorioPedidos.obtenerPedidoPorId(pedidoId);
        const factura = this.servicioFacturacion.generarFactura(pedido);
        this.repositorioInventario.actualizarIngrediente(pedido.items);
        return factura;
    }
}

module.exports = ServicioPedidos;
