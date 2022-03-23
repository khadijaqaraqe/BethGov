import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-decisions',
  templateUrl: './decisions.component.html',
  styleUrls: ['./decisions.component.css']
})
export class DecisionsComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | قرارات المحافظ ");
  }


  ngOnInit(): void {
  }

}
