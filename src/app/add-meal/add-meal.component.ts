import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  private token = sessionStorage.getItem('token') || '';
  private header = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Content-Type', 'application/json');

  meal = {
    name: '',
    description: '',
    price: 0
  };
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }
  addMeal(): void {
    this.http.post(`${this.apiUrl}/meals`, {name: this.meal.name, description: this.meal.description, price: this.meal.price}, {headers: this.header}).subscribe({
      next: (data) => {
        this.router.navigate(['/meal']);
        console.log(data);
      },
    })
  }

}
