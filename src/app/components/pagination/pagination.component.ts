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

  makeCurrent(page: number) {
    return (
      '<span class="page-link"> ' +
      page +
      ' <span class="sr-only">(current)</span> </span>'
    );
  }
}
