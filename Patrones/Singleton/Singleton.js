class Singleton {
    static instance;

    constructor() {
        if (Singleton.instance) {
            throw new Error("Usa Singleton.getInstance() para instancear uno nuevo.");
        }
        Singleton.instance = this;
    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    someBusinessLogic(){
        //TODO ...
    }
}

module.exports = Singleton;