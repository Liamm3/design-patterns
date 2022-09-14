import { BaseObserver } from "./Observer";

interface ISubject {
  attach(observer: BaseObserver): void;
  detach(observer: BaseObserver): void;
  notify(): void;
}

export abstract class BaseSubject implements ISubject {
  private observers: BaseObserver[] = [];

   attach(observer: BaseObserver): void {
    if (this.observers.includes(observer)) {
      return console.log("Observer has been attached already.");
    }

    console.log("Attach:", observer);
    this.observers.push(observer);
  }

  detach(observer: BaseObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Observer is not attached to subject.");
    }

    console.log("Detach:", observer);
    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}
