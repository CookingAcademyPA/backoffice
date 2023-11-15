import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cookingacademy-bo';
  constructor(private router: Router) {}

  isLogged: boolean = false;

  ngOnInit(): void {
    this.isLogged = sessionStorage.getItem('token') !== null;
    console.log(`isLogged ${this.isLogged}`);
    if (!this.isLogged) {
      this.router.navigate(['/login']);
    }
  }

}
