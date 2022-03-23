import { Component, OnInit } from '@angular/core';

import { WeatherServiceService } from "../../services/weather-service.service";

import { formatDate } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';

registerLocaleData(localeAr, 'ar');

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  tempCel :object = []
  currentDate =  '';
  CurrentDay:Date = new Date();
  dates = '';

  constructor(private weather:WeatherServiceService){
    this.weather.getData().subscribe(data => {
      //console.log("my data ",data);
     // console.log("my data ", data['current'].temp_c, " 34ºc, Sunny " );
      this.tempCel = (data);
      this.currentDate = formatDate(new Date(), 'yyyy/MM/dd', 'ar');
      this.dates = formatDate(this.CurrentDay, 'EEEE', 'ar');
    });
  }

  ngOnInit(): void {
  }

}
