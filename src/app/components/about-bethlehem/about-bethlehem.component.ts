import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about-bethlehem',
  templateUrl: './about-bethlehem.component.html',
  styleUrls: ['./about-bethlehem.component.css']
})
export class AboutBethlehemComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | حول محافظة بيت لحم");
  }

  ngOnInit(): void {
  }

}
