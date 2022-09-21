import { Component, OnInit } from "@angular/core";
import { GetMoviesService } from "src/app/services/get/get-movies.service";

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

/*

 {
        "admin_id": 71,
        "first_name": "Jill",
        "last_name": "Hardy",
        "username": "jillhardy",
        "password": "63g564u48",
        "email": "jillhardy@gmail.com",
        "phone_number": "25436774"
    },

    */
