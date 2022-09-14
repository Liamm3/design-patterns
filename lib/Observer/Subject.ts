import { Observer } from "./Observer";

interface ISubject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

export class Subject implements ISubject {
  public state: number = 0;
  private observers: Observer[] = [];

   attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return console.log("Observer has been attached already.");
    }

    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Observer is not attached to subject.")
    }

    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  changeState(): void {
    this.state++;
    this.notify();
  }
}

