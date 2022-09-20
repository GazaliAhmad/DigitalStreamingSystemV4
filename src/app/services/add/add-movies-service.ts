import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class AddMoviesService {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

  getAllMovies(moviedata: NgForm) {
    this.httpClient
      .post(`${this.url}/movies/add`, moviedata)
      .subscribe((result) => {
        console.log("result", result);
      });
  }

  ngOnInit(): void {}
}
