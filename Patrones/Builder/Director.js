// Director.js
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

module.exports = Director;