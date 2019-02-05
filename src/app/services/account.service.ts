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
  private sessionID: string;
  private tokenID: string;

  private _url_tokenID: string =
    "https://api.themoviedb.org/3/authentication/token/new";
  private _url_sessionID: string =
    "https://api.themoviedb.org/3/authentication/session/new";
  private _apiTheMovieDB: string = "?api_key=52b79f7149942ffa860e6c6dfa4522ad";

  constructor(private http: HttpClient) {
    this.sessionID = localStorage.getItem("sessionID");
    this.tokenID = localStorage.getItem("tokenID");
    if (this.sessionID) this.isLoggedIn = true;
  }

  checkLocalStorage(key: string): string {
    let data = localStorage.getItem(key);
    if (data) {
      return data;
    } else return "";
  }

  setTokenID(tokenID: string) {
    this.tokenID = tokenID;
    console.log(this.tokenID);
  }

  getTokenID(): Observable<IToken> {
    return this.http.get<IToken>(this._url_tokenID + this._apiTheMovieDB);
  }

  getTokenIDProp() {
    return this.tokenID;
  }

  getSessionIDProp() {
    return this.sessionID;
  }

  approveTokenID() {
    if (this.tokenID.length > 0) {
      window.location.href =
        "https://www.themoviedb.org/authenticate/" +
        this.tokenID +
        "?redirect_to=http://localhost:4200/login";
    }
  }

  getSessionID(): Observable<ISessionID> {
    let data = { request_token: this.tokenID };
    return this.http.post<ISessionID>(
      this._url_sessionID + this._apiTheMovieDB,
      data
    );
  }

  setSessionID(sessionID: string) {
    this.sessionID = sessionID;
  }

  checkIsLoggedIn() {
    return this.isLoggedIn;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.sessionID = "";
    this.tokenID = "";
    localStorage.removeItem("sessionID");
    localStorage.removeItem("tokenID");
    localStorage.removeItem("tokenID_expires_at");
  }
}
