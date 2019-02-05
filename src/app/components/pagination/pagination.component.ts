import { Component, OnInit, Input } from "@angular/core";
import { FilmService } from "../../services/film.service";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.less"]
})
export class PaginationComponent implements OnInit {
  @Input() page: number;

  constructor(private _filmService: FilmService) {}

  ngOnInit() {}

  changePage(pageN: number) {
    console.log("changePage");
    if (this._filmService.searchMode) {
      this._filmService.changePage(pageN);
      this._filmService
        .search(this._filmService.searchInput.value)
        .subscribe(data => {
          this._filmService.films = data;
          this._filmService.isLoaded = true;
          console.log(this._filmService.films);
        });
    } else {
      this._filmService.changePage(pageN);
      this._filmService.getFilms().subscribe(data => {
        this._filmService.films = data;
        this._filmService.isLoaded = true;
        console.log(this._filmService.films);
      });
    }
  }
}
