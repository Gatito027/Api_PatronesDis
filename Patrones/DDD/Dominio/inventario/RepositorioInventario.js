// RepositorioInventario.js
const Ingrediente = require('./Ingrediente');

class RepositorioInventario {
    constructor() {
        this.ingredientes = [];
    }

    agregarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }

    obtenerIngredientePorId(id) {
        return this.ingredientes.find(ingrediente => ingrediente.id === id);
    }

    actualizarIngrediente(ingrediente) { 
        const index = this.ingredientes.findIndex(i => i.id === ingrediente.id); 
        if (index !== -1) { 
            this.ingredientes[index] = ingrediente; 
        } 
    } 
    eliminarIngrediente(id) { 
        const index = this.ingredientes.findIndex(ingrediente => ingrediente.id === id); 
        if (index !== -1) { 
            this.ingredientes.splice(index, 1); 
        } 
    } 
    listarIngredientes() { 
        return this.ingredientes; 
    } 
} 

module.exports = RepositorioInventario;