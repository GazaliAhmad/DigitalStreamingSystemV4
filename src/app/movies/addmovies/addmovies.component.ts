import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-addmovies",
  templateUrl: "./addmovies.component.html",
  styleUrls: ["./addmovies.component.css"],
})
export class AddmoviesComponent implements OnInit {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient, private router: Router) {}

  postMovie(moviedata: NgForm) {
    this.httpClient
      .post(`${this.url}/movies/add`, moviedata)
      .subscribe((result) => {
        this.router.navigate(["/movies"]);
      });
  }

  ngOnInit(): void {}
}
