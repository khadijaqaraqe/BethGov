import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear =  '';
  constructor() {
    this.currentYear = formatDate(new Date(), 'yyyy', 'en')
  }

  ngOnInit(): void {
  }

}
