"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runExample = void 0;
const lib_1 = require("./lib/");
class WeatherServer extends lib_1.BaseSubject {
    constructor() {
        super(...arguments);
        this.weather = 52.2;
    }
    newWeatherData(temperature) {
        this.weather = temperature;
        this.notify();
    }
}
class WeatherClient {
    update(subject) {
        console.log("New weather data:", subject.weather);
    }
}
function runExample() {
    const weatherServer = new WeatherServer();
    const weatherClientOne = new WeatherClient();
    const weatherClientTwo = new WeatherClient();
    const weatherClientThree = new WeatherClient();
    weatherServer.attach(weatherClientOne);
    weatherServer.attach(weatherClientTwo);
    weatherServer.newWeatherData(32);
    weatherServer.detach(weatherClientTwo);
    weatherServer.attach(weatherClientThree);
    weatherServer.newWeatherData(31);
}
exports.runExample = runExample;
