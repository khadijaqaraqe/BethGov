import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Articles } from "../../models/articles.model";
import { ArticlesService } from "../../services/articles.service";

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})

export class TourismComponent implements OnInit, OnDestroy {

  articles: Articles[] = [];
  private articlesSub: Subscription;

  constructor(public articlesService: ArticlesService) { }

  isShow = true;

  ngOnInit(): void {
    this.articlesService.getArticles();
    this.articlesSub = this.articlesService.getArticleUpdateListener()
      .subscribe((articles: Articles[]) => {
        this.articles = articles;
      });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnDestroy(): void {
    this.articlesSub.unsubscribe();
  }
}
