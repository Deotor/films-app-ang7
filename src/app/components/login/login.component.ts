import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../services/account.service";
import { IToken } from "../../models/iToken";
import { ISessionID } from "../../models/iSessionID";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  private tokenID: IToken;
  private sessionID: ISessionID;
  private f = "tt0307987";

  constructor(
    private _accountService: AccountService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTokenID();
  }

  dateString2Date(dateString: string) {
    var dt = dateString.split(/\-|\s/);
    return new Date(
      dt
        .slice(0, 3)
        .reverse()
        .join("-") +
        " " +
        dt[3]
    );
  }

  getTokenID() {
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
          this._accountService.setTokenID(this.tokenID);
          localStorage.setItem("tokenID", this.tokenID.request_token);
          localStorage.setItem(
            "tokenID_expires_at",
            this.tokenID.expires_at.toString()
          );
        }
        console.log(this.tokenID);
      });
    }
  }
}
