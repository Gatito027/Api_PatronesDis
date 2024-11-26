class Pedido {
    constructor(id, cliente, items, total) {
        this.id = id;
        this.cliente = cliente;
        this.items = items;
        this.total = total;
    }

    agregarItem(item) {
        this.items.push(item);
        this.total += item.precio;
    }

    eliminarItem(itemId) {
        const itemIndex = this.items.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            this.total -= this.items[itemIndex].precio;
            this.items.splice(itemIndex, 1);
        }
    }
}

module.exports = Pedido;
