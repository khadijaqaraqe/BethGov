import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BethlehemGovSite';

  constructor(private http: HttpClient){

  }

  ngOnInit(){

  }

  onCreateArticle(
    articleData: {
      id: string,
      author: string,
      title: string,
      text: string,
      date: string,
      time: string,
      category: string,
      images: [
        {
          url: string,
          'alt-text': string
        }
      ]
    }
  ) {
    this.http.post('https://bethlehemgovernment-default-rtdb.firebaseio.com/articles.json', articleData)
    .subscribe(responseData => {

    });
  }

  onFetchArticles() {

  }

  private fetchArticles() {
    this.http.get('https://bethlehemgovernment-default-rtdb.firebaseio.com/articles.json')
    .subscribe( articles => {

    });
  }
}
