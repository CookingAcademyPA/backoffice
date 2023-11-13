import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  meals: any[] = [];
  private token = sessionStorage.getItem('token') || '';
  private header = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAllMeals();
  }
  getAllMeals() {
    this.http.get(`${this.apiUrl}/meals`).subscribe(
      (data: any) => {
        this.meals = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des repas :', error);
      }
    );
  }

  deleteMeal(mealId: number): void {
    this.http.delete(`${this.apiUrl}/meals/${mealId}`, {headers: this.header}).subscribe(
      (data: any) => {
        this.getAllMeals();
      }
    )
  }

  addMeal(): void {
    this.router.navigate(['/addMeal']);
  }

}
