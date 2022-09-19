import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AddMoviesService {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

  getAllMovies() {
    return this.httpClient.post(`${this.url}/movies/add`, {
      movie_title: "7th Son",
      movie_cost: 12,
      movie_year: "2020",
      movie_image_url:
        "https://cdn.dailyclipart.net/wp-content/uploads/medium/Graduation10.jpg",
    });
  }
}
