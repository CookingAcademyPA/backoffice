import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  private apiUrl = environment.apiUrl;
  services: any[] = [];
  private token = sessionStorage.getItem('token') || '';
  private header = new HttpHeaders()
    .set('Authorization', this.token)
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAllServices();
  }

  getAllServices() {
    this.http.get(`${this.apiUrl}/services`).subscribe(
      (data: any) => {
        this.services = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des services :', error);
      }
    );
  }

  deleteService(ServiceId: number): void {
    this.http.delete(`${this.apiUrl}/services/${ServiceId}`, {headers: this.header}).subscribe(
      (data: any) => {
        this.getAllServices();
      }
    )
  }

  addService(): void {
    this.router.navigate(['/addService']);
  }

  formatterDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR', options);
  }
}
