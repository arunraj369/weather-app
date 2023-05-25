import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../service/weather-service.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
})
export class TemperatureComponent {
  constructor(private weatherservice: WeatherServiceService) {}
  weatherdata: any;
  temperature: number = 0;
  humitidy: number = 0;
  maxtemp: number = 0;
  mintemp: number = 0;
  pressure: number = 0;
  city: string = '';

  getvalue(val: any) {
    this.city = val;

    this.weatherservice.getweather(this.city).subscribe((res) => {
      this.weatherdata = res;
      console.log(this.weatherdata);

      this.temperature = this.weatherdata.main.temp;
      this.humitidy = this.weatherdata.main.humidity;
      this.maxtemp = this.weatherdata.main.temp_max;
      this.mintemp = this.weatherdata.main.temp_min;
      this.pressure = this.weatherdata.main.pressure;
    });
  }
  // ngOnInit(): void {
  //   this.weatherservice.getweather(this.city).subscribe((res) => {
  //     console.log(res);
  //     this.weatherdata = res;
  //     console.log(this.weatherdata);
  //     this.temperature = this.weatherdata.main.temp;
  //     this.humitidy = this.weatherdata.main.humidity;
  //     this.maxtemp = this.weatherdata.main.temp_max;
  //     this.mintemp = this.weatherdata.main.temp_min;
  //     console.log(this.temperature);
  //   });
  // }
}
