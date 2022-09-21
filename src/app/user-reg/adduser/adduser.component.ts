import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.css"],
})
export class AdduserComponent implements OnInit {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient, private router: Router) {}

  postAdmin(userdata: NgForm) {
    this.httpClient
      .post(`${this.url}/admin/add`, userdata)
      .subscribe((result): void => {
        this.router.navigate(["/addusersuccess"]);
      });
  }

  ngOnInit(): void {}
}
