import { Component, OnInit } from "@angular/core";
import { FilmService } from "../../services/film.service";
import { LanguageService } from "../../services/language.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.less"]
})
export class HomePageComponent implements OnInit {
  constructor(
    private _filmService: FilmService,
    private _langService: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.router.url.search("/films") + 1)
      this._filmService.apiData.filmType = "movie";
    if (this.router.url.search("/serials") + 1)
      this._filmService.apiData.filmType = "tv";
    this._filmService.getFilms().subscribe(data => {
      this._filmService.films = data;
      this._filmService.isLoaded = true;
      console.log(this._filmService.films);
    });
  }

  getData(filmType: string) {
    this._filmService.searchMode = false;
    console.log("getData");
    this._filmService.apiData.page = 1;
    this._filmService.changeFilmType(filmType);
    this._filmService.getFilms().subscribe(data => {
      this._filmService.films = data;
      this._filmService.isLoaded = true;
      console.log(this._filmService.films);
    });
  }
}
