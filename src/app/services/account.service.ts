import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IToken } from "../models/iToken";
import { ISessionID } from "../models/iSessionID";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private isLoggedIn: boolean = false;
  private sessionID: ISessionID;
  private tokenID: IToken;

  private _url_tokenID: string =
    "https://api.themoviedb.org/3/authentication/token/new";
  private _url_sessionID: string =
    "https://api.themoviedb.org/3/authentication/session/new";
  private _apiTheMovieDB: string = "?api_key=52b79f7149942ffa860e6c6dfa4522ad";

  constructor(private http: HttpClient) {}

  getTokenID(): Observable<IToken> {
    return this.http.get<IToken>(this._url_tokenID + this._apiTheMovieDB);
  }

  checkLocalStorage(key: string): string {
    let data = localStorage.getItem(key);
    if (data) {
      return data;
    } else return "";
  }

  setTokenID(id: IToken) {
    this.tokenID = id;
  }

  approveTokenID() {
    if (this.tokenID.request_token.length > 0) {
      window.location.href =
        "https://www.themoviedb.org/authenticate/" +
        this.tokenID +
        "?redirect_to=http://localhost:4200/home-page";
    }
  }

  getSessionID(): Observable<ISessionID> {
    let data = { request_token: this.tokenID };
    return this.http.post<IToken>(
      this._url_sessionID + this._apiTheMovieDB,
      data
    );
  }

  setSessionID(id: ISessionID) {
    this.sessionID = id;
  }

  checkIsLoggedIn() {
    return this.isLoggedIn;
  }
}
