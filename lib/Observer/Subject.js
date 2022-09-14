"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    attach(observer) {
        if (this.observers.includes(observer)) {
            return console.log("Observer has been attached already.");
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Observer is not attached to subject.");
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    changeState() {
        this.state++;
        this.notify();
    }
}
exports.Subject = Subject;
