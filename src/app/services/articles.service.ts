import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Articles } from '../models/articles.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles: Articles[] = [];
  private articlesUpdated = new Subject<Articles[]>();

  constructor(private http: HttpClient) { }

  getArticles() {
    this.http.get<{message: string, articles: Articles[]}>("http://localhost:3000/api/articles")
      .subscribe((articleData) => {
        this.articles = articleData.articles;
        this.articlesUpdated.next([...this.articles]);
      });
  }

  getArticleUpdateListener() {
    return this.articlesUpdated.asObservable();
  }

  addArticle(
    author: string,
    title: string,
    text: string,
    date:  number,
    time: number,
    category: string,
    type: string,
    url: string,
    altText: string
    )
    {

      const article: Articles =
      {
        id: "4445554",
        author: author,
        title: title,
        text: text,
        date:  new Date().getDate(),
        time: new Date().getTime(),
        category: category,
        type: type,
        images: [
          {
            url: url,
            "alt-text": altText
          }
        ]
      };
      this.http
        .post<{ message: string }>("http://localhost:3000/api/articles", article)
        .subscribe(responseData => {
          console.log(responseData.message);
          this.articles.push(article);
          this.articlesUpdated.next([...this.articles]);
        });
    }
}
