// Produccion.js
class Produccion {
    constructor(id, tipoTortilla, cantidad, estado) {
        this.id = id;
        this.tipoTortilla = tipoTortilla;
        this.cantidad = cantidad;
        this.estado = estado;
    }

    iniciarProduccion() {
        this.estado = 'En Proceso';
        console.log(`Producción de ${this.cantidad} tortillas de ${this.tipoTortilla} iniciada.`);
    }

    finalizarProduccion() {
        this.estado = 'Completado';
        console.log(`Producción de ${this.cantidad} tortillas de ${this.tipoTortilla} completada.`);
    }
}

module.exports = Produccion;
