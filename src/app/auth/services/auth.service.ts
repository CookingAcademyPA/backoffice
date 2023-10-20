import { Injectable } from '@angular/core';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenInfos! : { [key: string]: string };
  private jwtToken!: string;

  constructor() { }

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
}
