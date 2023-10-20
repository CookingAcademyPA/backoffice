import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const userId = +this.route.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(user =>
      this.user = user
    );
  }
}
