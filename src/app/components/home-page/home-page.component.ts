import { Component, OnInit } from "@angular/core";
import { FilmService } from "../../services/film.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.less"]
})
export class HomePageComponent implements OnInit {
  public films = [];

  constructor(private _filmService: FilmService) {}

  ngOnInit() {
    console.log("app-home-page");
    this._filmService.getFilm().subscribe(data => {
      this.films = data;
      console.log(this.films);
    });
  }
}
