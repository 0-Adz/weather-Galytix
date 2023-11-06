import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

    getWeather(){
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Delhi&APPID=794ee95e63c5a32aaf88cd813fa2e425&units=metric');
    }
}
