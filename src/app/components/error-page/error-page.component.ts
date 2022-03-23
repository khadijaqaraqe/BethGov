import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | صفحة غير متوفرة ");
  }

  ngOnInit(): void {
  }

}
