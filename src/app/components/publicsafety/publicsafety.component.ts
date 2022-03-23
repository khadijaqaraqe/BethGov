import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-publicsafety',
  templateUrl: './publicsafety.component.html',
  styleUrls: ['./publicsafety.component.css']
})
export class PublicsafetyComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | السلامة العامة ");
  }

  ngOnInit(): void {
  }

}
