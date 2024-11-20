// products.js
//const db2 = require('../../database_2.js');
//const db = require('../../database.js');


//*Productos A

class AbstractProductA{
    usefulFunctionA() {}
}

class ConcreteProductA1 extends AbstractProductA {
    usefulFunctionA() {
        return 'El resultado de el producto A1.';
    }
}

class ConcreteProductA2 extends AbstractProductA {
    usefulFunctionA() {
        return 'El resultado de el producto A2.';
    }
}

//*Productos B

class AbstractProductB {
    usefulFunctionB() {}
    anotherUsefulFunctionB(collaborador) {}
}

class ConcreteProductB1 extends AbstractProductB {
    usefulFunctionB() {
        return 'El resultado de el producto B1.';
    }

    anotherUsefulFunctionB(collaborador){
        const result = collaborador.usefulFunctionA();
        return 'El resultado de el B1 colaborando con el '+result;
    }
}

class ConcreteProductB2 extends AbstractProductB {
    usefulFunctionB() {
        return 'El resultado de el producto B2.';
    }

    anotherUsefulFunctionB(collaborador){
        const result = collaborador.usefulFunctionA();
        return 'El resultado de el B2 colaborando con el '+result;
    }
}

module.exports = { ConcreteProductA1, ConcreteProductA2, ConcreteProductB1, ConcreteProductB2 };