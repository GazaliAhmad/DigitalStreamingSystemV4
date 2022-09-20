import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-addactors",
  templateUrl: "./addactors.component.html",
  styleUrls: ["./addactors.component.css"],
})
export class AddactorsComponent implements OnInit {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient, private router: Router) {}

  postActor(actordata: NgForm) {
    this.httpClient
      .post(`${this.url}/actors/add`, actordata)
      .subscribe((result) => {
        console.log(result);
        //this.router.navigate(["/addsuccess"]);
      });
  }

  ngOnInit(): void {}
}
