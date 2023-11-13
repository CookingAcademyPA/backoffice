import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TermsComponent} from "./footer/terms/terms.component";
import {LoginComponent} from "./auth/login/login.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {ProductComponent} from "./product/product.component";
import {MealComponent} from "./meal/meal.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {ServiceComponent} from "./service/service.component";
import {UsersComponent} from "./users/users.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {AddMealComponent} from "./add-meal/add-meal.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'meal', component: MealComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'users', component: UsersComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'addMeal', component: AddMealComponent},
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
