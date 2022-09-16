import { GetActorsService } from "../services/get/get-actors.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  posts: any;

  constructor(private service: GetActorsService) {}

  ngOnInit(): void {
    this.service.getAllActors().subscribe((response) => {
      this.posts = response;
    });
  }
}
