import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | شائعات وحقائق");
  }

  ngOnInit(): void {
  }

}
