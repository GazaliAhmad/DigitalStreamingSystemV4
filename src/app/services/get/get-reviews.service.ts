import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetReviewsService {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

  getAllReviews() {
    return this.httpClient.get(`${this.url}/reviews/all`);
  }
}
