import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TermsComponent} from "./footer/terms/terms.component";
import {LoginComponent} from "./auth/login/login.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {ProductComponent} from "./product/product.component";
import {MealComponent} from "./meal/meal.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {ServiceComponent} from "./service/service.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'meal', component: MealComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
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
