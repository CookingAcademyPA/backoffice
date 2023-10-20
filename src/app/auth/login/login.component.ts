import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {UserService} from "../../services/user.service";
import {formatNumber} from "@angular/common";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private apiUrl = environment.apiUrl;
  email!: string;
  password!: string;
  errorMessage!: string;
  admin!: User;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService, private userService: UserService) {
  }

  onSubmit(): void {
    const formData = {
      email: this.email,
      password: this.password
    };
    this.http.post<any>(`${this.apiUrl}/auth/login`, formData)
      .subscribe(
        (response) => {
          if (response === null) {
            sessionStorage.clear();
            return;
          }
          const userId = this.getUserId(response.token).userId;
          const admin = this.getAdmin(userId);
          console.log(admin)

          if (admin.is_admin) {
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('userId', userId);
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = 'Permission denied. Only administrators can access.';
          }

        },
        (error) => {
          this.errorMessage = 'Connection error. Verify your informations';
          console.error('Erreur de connexion :', error);
        }
      );
  }

  getUserId(token: string): any {
    this.authService.setToken(token);
    this.authService.decodeToken();
    return this.authService.getUserId();
  }

  getAdmin(id: string): User {
    this.userService.getAdminById(id).subscribe(user => {
        this.admin = user;
      }
    );
    return this.admin;
  }

}
