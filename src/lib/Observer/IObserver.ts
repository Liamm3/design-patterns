import { BaseSubject } from "./BaseSubject";

export interface IObserver {
  update(subject: BaseSubject): void;
}
