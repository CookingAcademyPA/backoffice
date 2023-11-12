import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule
    ]
})
export class UserModule { }
