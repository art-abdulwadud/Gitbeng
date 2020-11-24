import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Users, Repos } from "./users";

const main_url = "https://api.github.com/users/";
@Injectable()
export class GithubApiService {
  private userName: string;
  private clientId = "a715d30c71b8cf3cd9bc";
  private clientSecret = "ed0994f867514f6f97f4e63777357ff06ad5be91";

  constructor(private http: HttpClient) {
    this.userName = "art-abdulwadud";
  }

  getUser(): Observable<HttpResponse<Users[]>> {
    return this.http.get<Users[]>(
      main_url +
        this.userName +
        "?client_id=" +
        this.clientId +
        "&client_secret=" +
        this.clientSecret,
      { observe: "response" }
    );
  }

  getRepos(): Observable<HttpResponse<Repos[]>> {
    return this.http.get<Repos[]>(
      main_url +
        this.userName +
        "/repos?client_id=" +
        this.clientId +
        "&client_secret=" +
        this.clientSecret,
      { observe: "response" }
    );
  }

  changeUserProfile(username: string) {
    this.userName = username;
  }
}
