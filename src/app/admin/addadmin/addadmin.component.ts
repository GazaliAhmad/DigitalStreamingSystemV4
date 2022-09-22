import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-addadmin",
  templateUrl: "./addadmin.component.html",
  styleUrls: ["./addadmin.component.css"],
})
export class AddadminComponent implements OnInit {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient, private router: Router) {}

  postAdmin(admindata: NgForm) {
    this.httpClient
      .post(`${this.url}/admin/add`, admindata)
      .subscribe((result) => {
        this.router.navigate(["/addadmninsuccess"]);
      });
  }

  ngOnInit(): void {}
}
