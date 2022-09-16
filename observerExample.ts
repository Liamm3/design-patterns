import { IObserver, BaseSubject } from "./lib/";

class WeatherServer extends BaseSubject {
  weather: number = 30;

  publishWeather(temperature: number) {
    console.log("Publish new weather data:", temperature);
    this.weather = temperature;
    this.notify();
  }
}

class WeatherClient implements IObserver {
  update(subject: WeatherServer): void {
    console.log("Got weather data:", subject.weather);
  }
}

export function run() {
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
