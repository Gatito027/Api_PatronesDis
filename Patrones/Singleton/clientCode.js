const Singleton = require('./Singleton');
function clientCode(){
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2){
        console.log('Singleton funciona, ambas variables contienen la misma instancia.');
    } else {
        console.log('Singleton falló, las variables contienen diferentes instancias.');
    }
}

clientCode();