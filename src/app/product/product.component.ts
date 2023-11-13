import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  products: any[] = [];
  private token = sessionStorage.getItem('token') || '';
  private header = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.http.get(`${this.apiUrl}/products`).subscribe(
      (data: any) => {
        this.products = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des produits :', error);
      }
    );
  }
  deleteProduct(productId: number): void {
    // Implémentez ici la logique pour supprimer le produit avec l'ID donné
    // Envoyez une requête HTTP DELETE au backend
    // Rafraîchissez la liste des produits après la suppression
    this.http.delete(`${this.apiUrl}/products/${productId}`, {headers: this.header}).subscribe(
      (data: any) => {
        this.getAllProducts();
      }
    )
  }

  addProduct(): void {
    this.router.navigate(['/addProduct']);
  }

}
