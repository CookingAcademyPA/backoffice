import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthModule} from "./auth/auth.module";
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './footer/terms/terms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import { ProductComponent } from './product/product.component';
import { MealComponent } from './meal/meal.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ServiceComponent } from './service/service.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    TermsComponent,
    ProductComponent,
    MealComponent,
    RecipeComponent,
    ServiceComponent,
    UsersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
