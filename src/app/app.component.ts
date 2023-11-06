import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myWeather: any;
  location:string='';
  temperature: number = 0;
  lowTemp: number=0;
  highTemp: number=0;
  humidity: number=0;
  wind: number=0;
  constructor(private weatherService: WeatherService){}
  ngOnInit(): void {
    this.weatherService.getWeather().subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather);
        this.temperature = this.myWeather.main.temp;
        this.lowTemp = this.myWeather.main.temp_min;
        this.highTemp = this.myWeather.main.temp_max;
        this.humidity = this.myWeather.main.humidity;
        this.wind = this.myWeather.wind.speed;
        this.location = this.myWeather.name;
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }
}
