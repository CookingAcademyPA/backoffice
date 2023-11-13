import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  products: any[] = [];
  private token = sessionStorage.getItem('token') || '';
  private header = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Content-Type', 'application/json');

  product = {
    name: '',
    description: '',
    price: 0
  };
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }
  addProduct(): void {
    this.http.post(`${this.apiUrl}/products`, {name: this.product.name, description: this.product.description, price: this.product.price}, {headers: this.header}).subscribe({
      next: (data) => {
        this.router.navigate(['/product']);
        console.log(data);
      },
    })
  }



}
