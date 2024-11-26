class ServicioFacturacion {
    calcularTotal(pedido) {
        return pedido.items.reduce((total, item) => total + item.precio, 0);
    }

    generarFactura(pedido) {
        const total = this.calcularTotal(pedido);
        return {
            pedidoId: pedido.id,
            cliente: pedido.cliente,
            total: total,
            fecha: new Date()
        };
    }
}

module.exports = ServicioFacturacion;
