import { Editor , toHTML} from 'ngx-editor';


import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Title } from '@angular/platform-browser';
import { ArticlesService } from "../services/articles.service";


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent/*  implements OnInit, OnDestroy */  {

  enteredTitle = "";
  enteredContent = "";
  today = new Date();
  time =  this.today.getTime();

  editor: Editor;
  html: '';

  htmlContent = '';
 // const html = toHTML(jsonDoc, schema);
  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Type something. Test the Editor... ヽ(^。^)丿',
    translate: 'no'
  };

 /*  ngOnInit(): void {
    this.editor = new Editor();
  }
 */
  constructor(public articlesService: ArticlesService, private titleService:Title) {
    this.titleService.setTitle("محافظة بيت لحم | المشرفين");
  }

  onAddArticle(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.articlesService.addArticle("form.value.title", "form.value.content", "", this.today.getDate() , this.time ,"" ,"" ,"","" );
    form.resetForm();
  }


  /* ngOnDestroy(): void {
    this.editor.destroy();
  } */
}
