import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetMoviesService {
  private URL = "http://localhost:8080/movies/all";

  constructor(private httpClient: HttpClient) {}

  getAllMovies() {
    return this.httpClient.get(this.URL);
  }
}
