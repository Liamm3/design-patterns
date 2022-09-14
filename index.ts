import { Observer, Subject } from "./lib/";

const numberSubject = new Subject();
const observerOne = new Observer();
const observerTwo = new Observer();

numberSubject.attach(observerOne);
numberSubject.attach(observerOne);
numberSubject.attach(observerTwo);

numberSubject.changeState();
numberSubject.changeState();
numberSubject.changeState();
numberSubject.changeState();
