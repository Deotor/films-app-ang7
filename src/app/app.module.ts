import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { FilmService } from "./services/film.service";
import { AccountService } from "./services/account.service";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    PaginationComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FilmService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {}
