import { User } from "./user";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginuserService {
  private baseUrl = "http://localhost:8080/admin/";

  constructor(private http: HttpClient) {}

  loginUser(user: User): Observable<Object> {
    return this.http.get<Object>(
      `${this.baseUrl}${user.email}/${user.password}`
    );
  }
}

//constructor(private httpClient: HttpClient) {}
//return this.httpClient.post(`${this.baseUrl}`, +user);
