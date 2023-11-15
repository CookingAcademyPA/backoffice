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
import {AddRecipeComponent} from "./add-recipe/add-recipe.component";
import {AddServiceComponent} from "./add-service/add-service.component";
import {AuthGuard} from "./auth/services/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: DashboardComponent},
  {path: 'product', canActivate: [AuthGuard], component: ProductComponent},
  {path: 'meal', canActivate: [AuthGuard], component: MealComponent},
  {path: 'recipe', canActivate: [AuthGuard], component: RecipeComponent},
  {path: 'service', canActivate: [AuthGuard], component: ServiceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'users', canActivate: [AuthGuard], component: UsersComponent},
  {path: 'addProduct', canActivate: [AuthGuard], component: AddProductComponent},
  {path: 'addMeal', canActivate: [AuthGuard], component: AddMealComponent},
  {path: 'addRecipe', canActivate: [AuthGuard], component: AddRecipeComponent},
  {path: 'addService', canActivate: [AuthGuard], component: AddServiceComponent},
  {path: 'users/:id', canActivate: [AuthGuard], component: UserDetailComponent},
  {path: 'terms', component: TermsComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
