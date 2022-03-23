import { Time } from "@angular/common"

export class Articles {
  id: string;
  author: string;
  title: string;
  text: string;
  date:  number;
  time: number;
  category: string;
  type: string;
  images: [
    {
      url: string;
      "alt-text": string;
    }
  ]
}
