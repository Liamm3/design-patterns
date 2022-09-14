"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runExample = void 0;
const lib_1 = require("./lib/");
class WeatherServer extends lib_1.BaseSubject {
    constructor() {
        super(...arguments);
        this.weather = 30;
    }
    publishWeather(temperature) {
        console.log("Publish new weather data:", temperature);
        this.weather = temperature;
        this.notify();
    }
}
class WeatherClient extends lib_1.BaseObserver {
    update(subject) {
        console.log("Got weather data:", subject.weather);
    }
}
function runExample() {
    const weatherServer = new WeatherServer();
    const weatherClientOne = new WeatherClient();
    const weatherClientTwo = new WeatherClient();
    const weatherClientThree = new WeatherClient();
    weatherServer.attach(weatherClientOne);
    weatherServer.attach(weatherClientTwo);
    weatherServer.attach(weatherClientThree);
    weatherServer.publishWeather(51);
    weatherServer.detach(weatherClientOne);
    weatherServer.detach(weatherClientTwo);
    weatherServer.publishWeather(23);
}
exports.runExample = runExample;
