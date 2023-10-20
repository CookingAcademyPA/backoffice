import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _API_URL =  environment.apiUrl;

  header = new HttpHeaders()
    .set('Authorization', `${sessionStorage.getItem('token')}`)
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

    getAllUsers() {
      return new Observable<User[]>((observer) => {
        this.http.get(`${this._API_URL}/users`, {headers: this.header}).subscribe((results: any) => {
          const users = [];
          for (const result of results) {
            const user = new User(
              result.id,
              result.created_at,
              result.email,
              result.password,
              result.first_name,
              result.last_name,
              result.birthday_date,
              result.street,
              result.postal_code,
              result.city,
              result.country,
              result.subscription_id,
              result.is_admin
            );
            users.push(user);
          }
          observer.next(users);
          observer.complete();
        }, error => {
          observer.error(error);
          observer.complete();
        })
      });
    }

    getUserById(userId: number) {
      return new Observable<User>((observer) => {
        this.http.get(`${this._API_URL}/users/${userId}`, {headers: this.header}).subscribe(async (result: any) => {
          const user = new User(
            result.id,
            result.created_at,
            result.email,
            result.password,
            result.first_name,
            result.last_name,
            result.birthday_date,
            result.street,
            result.postal_code,
            result.city,
            result.country,
            result.subscription_id,
            result.is_admin
          );
          observer.next(user);
          observer.complete();
        }, error => {
          observer.error(error);
          observer.complete();
        })
      });
    }

    getAdminById(id: string) {
      return new Observable<User>((observer) => {
        this.http.get(`${this._API_URL}/users/admins/${id}`).subscribe(async (result: any) => {
          const user = new User(
            result.id,
            result.created_at,
            result.email,
            result.password,
            result.first_name,
            result.last_name,
            result.birthday_date,
            result.street,
            result.postal_code,
            result.city,
            result.country,
            result.subscription_id,
            result.is_admin
          );
          observer.next(user);
          observer.complete();
        }, error => {
          observer.error(error);
          observer.complete();
        })
      });
    }

}
