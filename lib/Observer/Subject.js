"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSubject = void 0;
class BaseSubject {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        if (this.observers.includes(observer)) {
            return console.log("Observer has been attached already.");
        }
        console.log("Attach:", observer);
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Observer is not attached to subject.");
        }
        console.log("Detach:", observer);
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
exports.BaseSubject = BaseSubject;
