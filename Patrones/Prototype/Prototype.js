const ComponentWithBackReference = require('./Component');
class Prototype {
    constructor() {
        this.primitive = null;
        this.component = {};
        this.circularReference = new ComponentWithBackReference(this);
    }

    clone() {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);

        clone.circularReference = {
            ...this.circularReference,
            Prototype: { ...this},
        };

        return clone;
    }
}

module.exports = Prototype;