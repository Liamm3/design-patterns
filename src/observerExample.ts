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
  constructor(
    public name: string
  ) {}

  update(subject: WeatherServer): void {
    console.log(`${this.name} got weather data: ${subject.weather}°C.`);
  }
}

export function run() {
  const weatherServer = new WeatherServer();
  const weatherClientOne = new WeatherClient("Berlin");
  const weatherClientTwo = new WeatherClient("Hamburg");
  const weatherClientThree = new WeatherClient("Lüneburg");

  weatherServer.attach(weatherClientOne);
  weatherServer.attach(weatherClientTwo);
  weatherServer.attach(weatherClientThree);
  weatherServer.publishWeather(51);

  weatherServer.detach(weatherClientOne);
  weatherServer.detach(weatherClientTwo);

  weatherServer.publishWeather(23);
}
