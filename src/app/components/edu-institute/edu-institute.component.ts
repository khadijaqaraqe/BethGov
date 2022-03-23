import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-edu-institute',
  templateUrl: './edu-institute.component.html',
  styleUrls: ['./edu-institute.component.css']
})
export class EduInstituteComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | مؤسسات تعليمية");
  }

  ngOnInit(): void {
  }

}
