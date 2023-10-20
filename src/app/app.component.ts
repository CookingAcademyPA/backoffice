import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cookingacademy-bo';

  isLogged = sessionStorage.getItem('token') !== null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(sessionStorage.getItem('token'))
  }

}
