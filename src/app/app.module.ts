import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { FilmService } from "./services/film.service";
import { AccountService } from "./services/account.service";
import { LanguageService } from "./services/language.service";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { LoginComponent } from "./components/login/login.component";
import { LanguageSelectComponent } from './components/language-select/language-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    PaginationComponent,
    LoginComponent,
    LanguageSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FilmService, AccountService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
