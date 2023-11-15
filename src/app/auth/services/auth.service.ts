import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenInfos! : { [key: string]: string };
  private jwtToken!: string;

  API_URL = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  setToken(token: string): void {
    this.jwtToken = token;
  }

  getToken(): string {
    return this.jwtToken;
  }

  decodeToken() {
    if (this.jwtToken) {
      this.tokenInfos = decode(this.jwtToken);
    }
  }

  getUserId() {
    this.decodeToken();
    return this.tokenInfos ? this.tokenInfos : null;
  }

  getUserIdFromToken(): string | null {
    try {
      const decodedToken: any = decode(this.jwtToken);
      return decodedToken.userId;
    } catch (error) {
      console.error('Erreur lors de la décodage du jeton :', error);
      return null;
    }
  }

  isLoggedIn() {
    return sessionStorage.getItem('token') !== null;
  }

  clearSession() {
    this.http.get(`${this.API_URL}/auth/logout`).subscribe(data => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('userId');
      this.router.navigate(['/login']);
    });
  }
}
