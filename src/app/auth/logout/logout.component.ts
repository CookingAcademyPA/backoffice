import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  private API_URL = environment.apiUrl;
  constructor(private router: Router, private http: HttpClient) { }

  // to modify into button and remove link
  ngOnInit(): void {

  }

}
