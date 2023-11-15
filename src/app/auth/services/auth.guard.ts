import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userSession = sessionStorage.getItem('token');

    if (userSession) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
