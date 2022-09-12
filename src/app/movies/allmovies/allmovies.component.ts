import { Component, OnInit } from "@angular/core";
import { GetMoviesService } from "src/app/services/get-movies.service";

@Component({
  selector: "app-allmovies",
  templateUrl: "./allmovies.component.html",
  styleUrls: ["./allmovies.component.css"],
})
export class AllmoviesComponent implements OnInit {
  posts: any;

  constructor(private service: GetMoviesService) {}

  ngOnInit(): void {
    this.service.getAllMovies().subscribe((response) => {
      this.posts = response;
    });
  }
}
