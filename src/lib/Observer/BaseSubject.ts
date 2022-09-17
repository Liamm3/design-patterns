import { IObserver } from "./IObserver";

export abstract class BaseSubject {
  private observers: IObserver[] = [];

  public attach(observer: IObserver): void {
    if (this.observers.includes(observer)) {
      return console.log("Observer has been attached already.");
    }
    console.log("Attach:", observer);
    this.observers.push(observer);
  }

  public detach(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Observer is not attached to subject.");
    }
    console.log("Detach:", observer);
    this.observers.splice(observerIndex, 1);
  }

  protected notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}
