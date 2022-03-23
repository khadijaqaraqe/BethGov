import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-governor-word',
  templateUrl: './governor-word.component.html',
  styleUrls: ['./governor-word.component.css']
})
export class GovernorWordComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | كلمة المحافظ ");
  }

  ngOnInit(): void {
  }

}
