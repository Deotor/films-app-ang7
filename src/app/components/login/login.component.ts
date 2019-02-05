import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../services/account.service";
import { IToken } from "../../models/iToken";
import { ISessionID } from "../../models/iSessionID";
import { Router } from "@angular/router";
import { LanguageService } from "../../services/language.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  private tokenID: IToken;
  private sessionID: ISessionID;

  constructor(
    private _accountService: AccountService,
    private route: Router,
    private _langService: LanguageService
  ) {}

  ngOnInit() {
    if (!this._accountService.getSessionIDProp()) {
      this.getTokenID();
      var url_string = window.location.href;
      var url = new URL(url_string);
      var request_token = url.searchParams.get("request_token");
      var approved = url.searchParams.get("approved");
      console.log(request_token);
      console.log(approved);
      if (approved) {
        this.getSessionID();
      }
    }
  }

  approveTokenID() {
    this.getTokenID();
    this._accountService.approveTokenID();
  }

  logout() {}

  getSessionID() {
    this._accountService.getSessionID().subscribe(data => {
      this.sessionID = data;
      if (this.sessionID.success) {
        this._accountService.setSessionID(this.sessionID.session_id);
        this._accountService.login();
        localStorage.setItem("sessionID", this.sessionID.session_id);
      }
      this.route.navigateByUrl("home-page");
      console.log(this.sessionID);
    });
  }

  getTokenID() {
    if (!this._accountService.getTokenIDProp()) {
      let nowDate = new Date();
      let expiresDateFromLS = this._accountService.checkLocalStorage(
        "tokenID_expires_at"
      );
      let expiresDate = new Date(0);
      if (expiresDateFromLS) {
        expiresDate = new Date(
          this._accountService.checkLocalStorage("tokenID_expires_at")
        );
      }
      if (
        this._accountService.checkLocalStorage("tokenID") === "" ||
        nowDate.getTime() >= expiresDate.getTime()
      ) {
        this._accountService.getTokenID().subscribe(data => {
          this.tokenID = data;
          if (this.tokenID.success) {
            this._accountService.setTokenID(this.tokenID.request_token);
            localStorage.setItem("tokenID", this.tokenID.request_token);
            localStorage.setItem(
              "tokenID_expires_at",
              this.tokenID.expires_at.toString()
            );
          }
          console.log(this.tokenID);
        });
      } else
        this._accountService.setTokenID(
          this._accountService.checkLocalStorage("tokenID")
        );
    }
  }
}
