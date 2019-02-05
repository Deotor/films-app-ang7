import { Component, OnInit } from "@angular/core";
import { LanguageService } from "./services/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  constructor(private _langService: LanguageService) {}

  ngOnInit() {
    this._langService.getLanguage().subscribe(data => {
      this._langService.data = data;
      console.log(this._langService.data);
    });
  }
}
