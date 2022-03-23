import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-bethlehem-numbers',
  templateUrl: './bethlehem-numbers.component.html',
  styleUrls: ['./bethlehem-numbers.component.css']
})
export class BethlehemNumbersComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | بيت لحم في أرقام   ");
  }

  ngOnInit(): void {
  }

}
