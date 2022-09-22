import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GetAdminService {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

  getAllAdmins() {
    return this.httpClient.get(`${this.url}/admin/all`);
  }
}
