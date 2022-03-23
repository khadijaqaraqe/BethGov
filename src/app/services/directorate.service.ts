import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Directorate } from '../models/directorate.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorateService {

  private directorate: Directorate[] = [];
  private directoratesUpdated = new Subject<Directorate[]>();

  getDirectorates() {
    this.http.get("http://localhost:3000/api/directorate");
  }

  getDirectorateUpdateListener() {
    return this.directoratesUpdated.asObservable();
  }

  addDirectorate() {
    const directorate: Directorate =
    {
      id: "54687",
      title: "string",
      director: "string",
      pageurl: "string",
      location: "string",
      phoneNumbers: [
        {
          number1: 57658747,
          number2: 567865785,
          fax: 7857865,
        }
      ],
      socialLinks:  [
        {
          facebook: "string",
          instagram: "string",
          twitter: "string",
          linkedin: "string",
          whatsapp: "string",
          youtube: "string",
        }
      ],
      GoogleMapLocation: "string",
      images: [
        {
          url: "string",
          "alt-text": "string"
        }
      ]
    };

    this.directorate.push(directorate);
    this.directoratesUpdated.next([...this.directorate]);
  }
  constructor(private http: HttpClient) { }
}
