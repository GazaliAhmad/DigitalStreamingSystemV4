import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetActorsService {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

  getAllActors() {
    return this.httpClient.get(`${this.url}/actors/all`);
  }
}
