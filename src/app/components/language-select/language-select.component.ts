import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../services/language.service";
import { FilmService } from "../../services/film.service";

@Component({
  selector: "app-language-select",
  templateUrl: "./language-select.component.html",
  styleUrls: ["./language-select.component.less"]
})
export class LanguageSelectComponent implements OnInit {
  public langs = [
    { value: "en-US", viewValue: "EN" },
    { value: "ru-RU", viewValue: "RU" }
  ];
  constructor(
    private _langService: LanguageService,
    private _filmService: FilmService
  ) {}

  ngOnInit() {}

  changeLang() {
    this._langService.changeLanguage();
    this._filmService.apiData.language = this._langService.langSelect.value;
    localStorage.setItem("language", this._langService.langSelect.value);
    this._langService.getLanguage().subscribe(data => {
      this._langService.data = data;
      console.log(this._langService.data);
    });
  }
}
