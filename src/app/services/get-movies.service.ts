import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetMoviesService {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

  getAllMovies() {
    return this.httpClient.get(`${this.url}/movies/all`);
  }
}
