import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { Articles } from "../../models/articles.model";
import { ArticlesService } from "../../services/articles.service";
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css'],

})
export class MainSectionComponent implements OnInit, OnDestroy {
  articles: Articles[] = [];
  private articlesSub: Subscription;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;


  constructor(public articlesService: ArticlesService) {
  }


  ngOnInit(): void {
    this.articlesService.getArticles();
    this.articlesSub = this.articlesService.getArticleUpdateListener()
      .subscribe((articles: Articles[]) => {
        this.articles = articles;
      });

  }

  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }

  stopSlider() {
    this.carousel.pause();
  }

  ngOnDestroy(): void {
    this.articlesSub.unsubscribe();
  }

}
