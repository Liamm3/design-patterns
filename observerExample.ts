import { IObserver, BaseSubject } from "./lib/";

class WeatherServer extends BaseSubject {
  weather: number = 52.2;

  newWeatherData(temperature: number) {
    this.weather = temperature;
    this.notify();
  }
}

class WeatherClient implements IObserver {
  update(subject: WeatherServer): void {
    console.log("New weather data:", subject.weather);
  }
}

export function runExample() {
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
