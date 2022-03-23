import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Partners } from '../models/partners.model';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  private partners: Partners[] = [];
  private partnersUpdated = new Subject<Partners[]>();

  getPartners() {
    this.http.get("http://localhost:3000/api/partners");
  }

  getPartnerUpdateListener() {
    return this.partnersUpdated.asObservable();
  }

  addPartner() {
    const partner: Partners = {
      id: "354623",
      title: "string" ,
      pageurl: "string",
      images: [
        {
          url: "string",
          "alt-text": "string"
        }
      ]
    };


    this.partners.push(partner);
    this.partnersUpdated.next([...this.partners]);
  }

  constructor(private http: HttpClient) { }

}
