import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TermsComponent} from "./footer/terms/terms.component";
import {LoginComponent} from "./auth/login/login.component";
import {AuthGuard} from "./auth/services/auth-guard";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'terms', component: TermsComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
