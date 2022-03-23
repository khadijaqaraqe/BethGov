import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم |  هدايا من بيت لحم ");
  }

  ngOnInit(): void {
  }

}
