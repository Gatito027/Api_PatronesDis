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

// RepositorioProduccion.js
const Produccion = require('./Produccion');

class RepositorioProduccion {
    constructor() {
        this.producciones = [];
    }

    agregarProduccion(produccion) {
        this.producciones.push(produccion);
    }

    obtenerProduccionPorId(id) {
        return this.producciones.find(produccion => produccion.id === id);
    }

    actualizarProduccion(produccion) {
        const index = this.producciones.findIndex(p => p.id === produccion.id);
        if (index !== -1) {
            this.producciones[index] = produccion;
        }
    }

    eliminarProduccion(id) {
        const index = this.producciones.findIndex(produccion => produccion.id === id);
        if (index !== -1) {
            this.producciones.splice(index, 1);
        }
    }

    listarProducciones() {
        return this.producciones;
    }
}

module.exports = RepositorioProduccion;
