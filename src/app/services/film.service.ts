import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IFilms } from "../models/iFilms";
import { FormControl } from "@angular/forms";
import { LanguageService } from "../services/language.service";

@Injectable({
  providedIn: "root"
})
export class FilmService {
  getPopFilmsExample =
    "https://api.themoviedb.org/3/movie/popular?api_key=52b79f7149942ffa860e6c6dfa4522ad&language=en-US&page=1";
  getPopTVExample =
    "https://api.themoviedb.org/3/tv/popular?api_key=52b79f7149942ffa860e6c6dfa4522ad&language=en-US&page=1";
  searchExample =
    "https://api.themoviedb.org/3/search/multi?api_key=52b79f7149942ffa860e6c6dfa4522ad&language=en-US&query=www&page=1&include_adult=false";
  public isLoaded: boolean = true;
  public films: IFilms;
  public searchInput = new FormControl("");
  public searchMode: boolean = false;
  public apiData = {
    url: "https://api.themoviedb.org/3/",
    filmType: "movie",
    apiKey: "?api_key=52b79f7149942ffa860e6c6dfa4522ad",
    type: "popular",
    language: "en-US",
    page: 1,
    search: "search/multi",
    adult: "&include_adult=true"
  };

  constructor(private http: HttpClient, private _langService: LanguageService) {
    this.apiData.language = _langService.language;
  }

  getFilms(): Observable<IFilms> {
    this.isLoaded = false;
    let { url, filmType, apiKey, type, language, page } = this.apiData;
    return this.http.get<IFilms>(
      url +
        filmType +
        "/" +
        type +
        apiKey +
        "&language=" +
        language +
        "&page=" +
        page
    );
  }

  search(query: string) {
    this.isLoaded = false;
    let { url, search, apiKey, language, page, adult } = this.apiData;
    return this.http.get<IFilms>(
      url +
        search +
        apiKey +
        "&language=" +
        language +
        "&query=" +
        query +
        "&page=" +
        page +
        adult
    );
  }

  changeType(type: string) {
    this.apiData.type = type;
  }

  changeFilmType(type: string) {
    this.apiData.filmType = type;
  }

  changePage(page: number) {
    this.apiData.page = page;
  }
}
