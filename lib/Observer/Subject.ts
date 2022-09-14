import { IObserver } from "./Observer";

interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}

export abstract class BaseSubject implements ISubject {
  private observers: IObserver[] = [];

   attach(observer: IObserver): void {
    if (this.observers.includes(observer)) {
      return console.log("Observer has been attached already.");
    }

    console.log("Attach:", observer);
    this.observers.push(observer);
  }

  detach(observer: IObserver): void {
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
