import { Component, OnInit } from "@angular/core";
import { FilmService } from "../../services/film.service";
import { IFilms } from "../../models/iFilms";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.less"]
})
export class HomePageComponent implements OnInit {
  public films: IFilms;

  constructor(private _filmService: FilmService) {}

  ngOnInit() {
    console.log("app-home-page");
    this._filmService.getFilms().subscribe(data => {
      this.films = data;
      console.log(this.films);
    });
  }
}
