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

function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('Cliente: Testeando codigo cliente con el primer tipo de fabrica...');
clientCode(new ConcreteFactory1());
console.log('');
console.log('Cliente: Testeando otro codigo cliente con el segundo tipo de fabrica...');
clientCode(new ConcreteFactory2());
