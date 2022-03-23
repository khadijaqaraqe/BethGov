import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-invest-map',
  templateUrl: './invest-map.component.html',
  styleUrls: ['./invest-map.component.css']
})
export class InvestMapComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | الخارطة الاستثمارية ");
  }

  ngOnInit(): void {
  }

}
