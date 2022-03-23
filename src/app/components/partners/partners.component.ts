import { Component, OnInit, ViewChild } from '@angular/core';
import  *  as  partners  from  '../../../assets/partners.json';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'/* , '../../assets/css/infinite-slider.css' */]
})

export class PartnersComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  gamesFormatted ;
  constructor() {

  }

  public partners = partners;



  ngOnInit(): void {
    this.gamesFormatted = [];

    var j = -1;

    for (var i = 0; i < this.partners.partners.length; i++) {
        if (i % 3 == 0) {
            j++;
            this.gamesFormatted[j] = [];
            this.gamesFormatted[j].push(this.partners.partners[i]);
        }
        else {
            this.gamesFormatted[j].push(this.partners.partners[i]);
        }
    }
  }


}
