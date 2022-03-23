import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-electronic-guide',
  templateUrl: './electronic-guide.component.html',
  styleUrls: ['./electronic-guide.component.css']
})
export class ElectronicGuideComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | الدليل الإلكتروني ");
  }

  ngOnInit(): void {
  }

}
