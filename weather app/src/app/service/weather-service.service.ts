import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  constructor(private _http: HttpClient) {}

  getweather(city: string) {
    return this._http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=27d689e8ba9a7eed2cfb01eb23617d5b&units=metric'
    );
  }
}
