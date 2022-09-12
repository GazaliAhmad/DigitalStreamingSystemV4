import { Component, OnInit } from "@angular/core";
import { GetActorsService } from "src/app/services/get-actors.service";

@Component({
  selector: "app-allactors",
  templateUrl: "./allactors.component.html",
  styleUrls: ["./allactors.component.css"],
})
export class AllactorsComponent implements OnInit {
  posts: any;

  constructor(private service: GetActorsService) {}

  ngOnInit(): void {
    this.service.getAllActors().subscribe((response) => {
      this.posts = response;
    });
  }
}
