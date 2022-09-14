"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = void 0;
class Observer {
    update(subject) {
        console.log("New data:", subject.state);
    }
}
exports.Observer = Observer;
