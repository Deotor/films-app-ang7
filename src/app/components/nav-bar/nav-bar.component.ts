import { Component, OnInit } from "@angular/core";
import { FilmService } from "../../services/film.service";
import { LanguageService } from "../../services/language.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.less"]
})
export class NavBarComponent implements OnInit {
  constructor(
    private _filmService: FilmService,
    private _langService: LanguageService
  ) {}

  ngOnInit() {
    console.log("app-nav-bar");
  }

  search() {
    this._filmService.searchMode = true;
    if (this._filmService.searchInput.value !== "") {
      this._filmService.apiData.page = 1;
      this._filmService
        .search(this._filmService.searchInput.value)
        .subscribe(data => {
          this._filmService.films = data;
          this._filmService.isLoaded = true;
          console.log(this._filmService.films);
        });
    }
  }
}
