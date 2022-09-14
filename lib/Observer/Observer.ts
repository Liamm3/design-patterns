import { Subject } from "./Subject";

interface IObserver {
  update(subject: Subject): void;
}

export class Observer implements IObserver {
  update(subject: Subject): void {
    console.log("New data:", subject.state);
  }
}
