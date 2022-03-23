import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) { }
  getData() {
    let url = 'https://api.weatherapi.com/v1/current.json?key=e6c710bf2dd941d29e385324212912&q=Palestine&aqi=yes';
    return this.http.get(url);
  }
}
