import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-addmovies",
  templateUrl: "./addmovies.component.html",
  styleUrls: ["./addmovies.component.css"],
})
export class AddmoviesComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  onSubmit(moviedata: NgForm) {
    this.httpClient
      .post("http://localhost:8080/movies/add", moviedata)
      .subscribe((result) => {
        console.log("result", result);
      });
  }

  ngOnInit(): void {}
}
