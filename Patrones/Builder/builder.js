// builder.js
const Product1 = require('./Product1'); // Corrige esta línea de importación

class ConcreteBuilder1 {
    constructor() {
        this.reset();
    }

    reset() {
        this.product = new Product1();
    }

    producePartA() {
        this.product.parts.push('Parte A1');
    }

    producePartB() {
        this.product.parts.push('Parte B1');
    }

    producePartC() {
        this.product.parts.push('Parte C1');
    }

    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}

module.exports = ConcreteBuilder1;