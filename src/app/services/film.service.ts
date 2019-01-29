import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IFilms } from "../models/iFilms";

@Injectable({
  providedIn: "root"
})
export class FilmService {
  private _url: string = "https://api.themoviedb.org/3/movie/";
  private _apiTheMovieDB: string = "?api_key=52b79f7149942ffa860e6c6dfa4522ad";
  private _typeOfAPI: string = "popular";
  private _language: string = "en-US";
  private _page: number = 1;

  constructor(private http: HttpClient) {}

  getFilms(): Observable<IFilms> {
    return this.http.get<IFilms>(
      this._url +
        this._typeOfAPI +
        this._apiTheMovieDB +
        "&language=" +
        this._language +
        "&page=" +
        this._page
    );
  }

  changeTypeOfAPI(typeOfAPI: string) {
    this._typeOfAPI = typeOfAPI;
  }

  changePage(page: number) {
    this._page = page;
  }
}
