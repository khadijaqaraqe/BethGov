import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  selectedValue: string = '';

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | تقديم شكوى ");
  }

  ngOnInit(): void {
  }

  sendComplaint() {

  }

}
