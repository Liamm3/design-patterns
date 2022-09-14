import { BaseSubject } from "./Subject";

export abstract class BaseObserver {
  abstract update(subject: BaseSubject): void;
}
