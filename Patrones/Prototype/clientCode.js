const Prototype = require('./prototype');
const ComponentWithBackReference = require('./Component');
function clientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();

    if (p1.primitive === p2.primitive) {
        console.log('¡Los valores de los campos primitivos se han trasladado a un clon. Yay!');
    } else {
        console.log('Los valores de los campos primitivos no se han copiado. Booo!');
    }
    if (p1.component === p2.component){
        console.log('El componente simple no ha sido clonado. Booo!');
    } else {
        console.log('El componente simple ha sido clonado. Yay!');
    }
    if (p1.circularReference === p2.circularReference) {
        console.log('El componente con referencia inversa no ha sido clonado. Booo!');
    } else { 
        console.log('El componente con referencia inversa ha sido clonado. Yay!'); 
    } if (p1.circularReference.prototype === p2.circularReference.prototype) { 
        console.log('El componente con referencia inversa está vinculado al objeto original. Booo!'); 
    } else { 
        console.log('El componente con referencia inversa está vinculado al clon. Yay!'); 
    }
}

clientCode();