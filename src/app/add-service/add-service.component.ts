import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {timestamp} from "rxjs";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  private token = sessionStorage.getItem('token') || '';
  private header = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Content-Type', 'application/json');

  service = {
    type: 'Lesson',
    title: '',
    description: '',
    place: '',
    start_date: new Date(),
    number_of_person: 0,
    price: 0
  };
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }
  addService(): void {
    this.http.post(`${this.apiUrl}/services`, {type: this.service.type,
      title: this.service.title,
      description: this.service.description,
      place: this.service.place,
      start_date: this.service.start_date,
      number_of_person: this.service.number_of_person,
      price: this.service.price}, {headers: this.header}).subscribe({

      next: (data) => {
        this.router.navigate(['/service']);
        console.log(data);
      },
    })
  }

}
