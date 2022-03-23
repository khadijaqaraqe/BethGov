import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Articles } from "../../models/articles.model";
import { ArticlesService } from "../../services/articles.service";

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit, OnDestroy {

  articles: Articles[] = [];
  private articlesSub: Subscription;

  constructor(public articlesService: ArticlesService) { }


  ngOnInit(): void {

    this.articlesService.getArticles();
    this.articlesSub = this.articlesService.getArticleUpdateListener()
      .subscribe((articles: Articles[]) => {
        this.articles = articles;
      });

  }

  ngOnDestroy(): void {
    this.articlesSub.unsubscribe();
  }

}
