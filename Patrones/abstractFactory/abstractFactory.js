// abstract-factory.js
const { ConcreteProductA1, ConcreteProductA2, ConcreteProductB1, ConcreteProductB2 } = require('./products');
class AbstractFactory {
    createProductA() {}
    createProductB() {}
}

class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
        return new ConcreteProductA1();
    }
    createProductB() {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 extends AbstractFactory {
    createProductA(){
        return new ConcreteProductA2();
    }
    createProductB(){
        return new ConcreteProductB2();
    }
}

module.exports = { ConcreteFactory1, ConcreteFactory2 };