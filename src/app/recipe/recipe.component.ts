import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  recipes: any[] = [];
  private token = sessionStorage.getItem('token') || '';
  private header = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAllRecipes();
  }
  getAllRecipes() {
    this.http.get(`${this.apiUrl}/recipes`).subscribe(
      (data: any) => {
        this.recipes = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des recettes :', error);
      }
    );
  }
  deleteRecipe(RecipeId: number): void {
    this.http.delete(`${this.apiUrl}/recipes/${RecipeId}`, {headers: this.header}).subscribe(
      (data: any) => {
        this.getAllRecipes();
      }
    )
  }
  addRecipe(): void {
    this.router.navigate(['/addRecipe']);
  }

}
