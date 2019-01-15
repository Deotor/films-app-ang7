import { Component, OnInit } from "@angular/core";
import { FilmService } from "../../services/film.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.less"]
})
export class NavBarComponent implements OnInit {
  public films = [];
  private f = "tt0307987";

  constructor(private _filmService: FilmService) {}

  ngOnInit() {
    console.log("app-nav-bar");
  }
}
