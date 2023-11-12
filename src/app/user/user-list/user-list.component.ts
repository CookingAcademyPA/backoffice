import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  users: any[] = [];
  private token = sessionStorage.getItem('token') || '';
  private header = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.http.get(`${this.apiUrl}/users`, {headers: this.header}).subscribe(
      (data: any) => {
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
      }
    );
  }

  deleteUser(UserId: number): void {
    // Implémentez ici la logique pour supprimer le produit avec l'ID donné
    // Envoyez une requête HTTP DELETE au backend
    // Rafraîchissez la liste des produits après la suppression
    this.http.delete(`${this.apiUrl}/users/${UserId}`, {headers: this.header}).subscribe(
      (data: any) => {
        this.getAllUsers();
      }
    )
  }

}
