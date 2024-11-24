// Product1.js
class Product1 {
    constructor() {
        this.parts = [];
    }

    listParts() {
        console.log('Partes del producto: ', this.parts.join(', '),'\n');
    }
}

module.exports = Product1;