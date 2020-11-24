import { Component, OnInit } from '@angular/core';
import { Users, Repos } from '../users'
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Users[] = [];
  repos: Repos[] = [];
  headers: string[];
  username: string;

  constructor(private githubApiService: GithubApiService) { 
    this.githubApiService.getUser()
    .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
          this.users = {...resp.body}
    });

    this.githubApiService.getRepos()
    .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
          for (const data of resp.body) {
            this.repos.push(data);
          }
    });
  }
  search() {
    this.repos = [];
    var username = ((document.getElementById("search-bar") as HTMLInputElement).value);
    this.githubApiService.changeUserProfile(username);
    this.githubApiService.getUser()
    .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
          this.users = {...resp.body}
    });

    this.githubApiService.getRepos()
    .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
          for (const data of resp.body) {
            this.repos.push(data);
          }
    });
  }
  ngOnInit(): void {
    
  }

}
