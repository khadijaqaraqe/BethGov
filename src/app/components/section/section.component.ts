import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Articles } from "../../models/articles.model";
import { ArticlesService } from "../../services/articles.service";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, OnDestroy {


  articles: Articles[] = [];
  private articlesSub: Subscription;

  //public newsList = articles;

  constructor(public articlesService: ArticlesService) { }

  ngOnInit(): void {
  //  JSON.stringify(articles);
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
