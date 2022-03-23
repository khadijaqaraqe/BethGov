import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Complaint } from '../models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private complaints: Complaint[] = [];
  private complaintsUpdated = new Subject<Complaint[]>();

  getComplaints() {
    this.http.get("http://localhost:3000/api/complaint");
  }

  getComplaintUpdateListener() {
    return this.complaintsUpdated.asObservable();
  }

  addComplaint() {
    const complaint: Complaint = {};
    this.complaints.push(complaint);
    this.complaintsUpdated.next([...this.complaints]);
  }
  constructor(private http: HttpClient) { }
}
