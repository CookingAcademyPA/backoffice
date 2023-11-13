import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  private token = sessionStorage.getItem('token') || '';
  private header = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Content-Type', 'application/json');

  recipe = {
    name: '',
    description: ''
  };
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }
  addRecipe(): void {
    this.http.post(`${this.apiUrl}/recipes`, {name: this.recipe.name, description: this.recipe.description}, {headers: this.header}).subscribe({
      next: (data) => {
        this.router.navigate(['/recipe']);
        console.log(data);
      },
    })
  }

}
