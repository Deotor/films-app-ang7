import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { FilmService } from "./services/film.service";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

@NgModule({
  declarations: [AppComponent, NavBarComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule {}
