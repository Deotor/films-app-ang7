import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormControl } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  private url: string = "../assets/languages/";
  public language: string = "en-US";
  public data: any = {};
  public langSelect = new FormControl("");

  constructor(private http: HttpClient) {
    let lang = this.checkLocalStorage("language");
    if (lang) {
      this.language = lang;
      this.langSelect.setValue(lang);
    } else {
      localStorage.setItem("language", this.language);
      this.langSelect.setValue(this.language);
    }
  }

  getLanguage() {
    return this.http.get(this.url + this.language + ".json");
  }

  changeLanguage() {
    this.language = this.langSelect.value;
    console.log(this.language);
  }

  checkLocalStorage(key: string): string {
    let data = localStorage.getItem(key);
    if (data) {
      return data;
    } else return "";
  }
}
