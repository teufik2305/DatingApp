import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherforecast',
  templateUrl: './weatherforecast.component.html',
  styleUrls: ['./weatherforecast.component.css']
})
export class WeatherforecastComponent implements OnInit {
  weatherforecasts: any;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getWeatherForecast();
  }

  // tslint:disable-next-line: typedef
  getWeatherForecast(){
    this.http.get('http://localhost:5000/WeatherForecast').subscribe(response => {
      this.weatherforecasts = response;
    }, error => {
      console.log(error);
    });
  }

}
