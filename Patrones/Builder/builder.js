class Product1 {
    constructor() {
        this.parts = [];
    }

    listParts() {
        console.log('Partes del producto: ', this.parts.join(', '),'\n');
    }
}

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

class Director {
    setBuilder(builder) {
        this.builder = builder;
    }

    buildMinimalViableProduct() {
        this.builder.producePartA();
    }

    buildFullFeaturedProduct() {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

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