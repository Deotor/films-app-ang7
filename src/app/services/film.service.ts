import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IFilm } from "../models/ifilm";

@Injectable({
  providedIn: "root"
})
export class FilmService {
  private _url = "https://api.themoviedb.org/3/movie/";
  private _apiTheMovieDB = "?api_key=52b79f7149942ffa860e6c6dfa4522ad";
  private _typeOfAPI = "popular";
  private _language = "&language=en-US";
  private _page = "&page=1";

  constructor(private http: HttpClient) {}

  changeTypeOfAPI(typeOfAPI: string) {
    this._typeOfAPI = typeOfAPI;
  }

  getFilm(): Observable<IFilm[]> {
    console.log("FilmService");
    return this.http.get<IFilm[]>(
      this._url +
        this._typeOfAPI +
        this._apiTheMovieDB +
        this._language +
        this._page
    );
  }
}
