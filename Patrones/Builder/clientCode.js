// clientCode.js
const Director = require('./Director');
const ConcreteBuilder1 = require('./builder'); // Añadir esta importación para utilizar ConcreteBuilder1

function clientCode(director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Producto estandar basico: ');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Producto estandar completo: ');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    console.log('Producto customisado: ');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);