const { ConcreteFactory1, ConcreteFactory2 } = require('./abstractFactory');

// client-code.js
function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

//module.exports = clientCode;
console.log('Cliente: Testeando codigo cliente con el primer tipo de fabrica...');
clientCode(new ConcreteFactory1());
console.log('');
console.log('Cliente: Testeando otro codigo cliente con el segundo tipo de fabrica...');
clientCode(new ConcreteFactory2());