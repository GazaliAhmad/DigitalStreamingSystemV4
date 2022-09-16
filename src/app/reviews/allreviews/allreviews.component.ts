import { GetReviewsService } from "../../services/get/get-reviews.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-allreviews",
  templateUrl: "./allreviews.component.html",
  styleUrls: ["./allreviews.component.css"],
})
export class AllreviewsComponent implements OnInit {
  posts: any;

  constructor(private service: GetReviewsService) {}

  ngOnInit(): void {
    this.service.getAllReviews().subscribe((response) => {
      this.posts = response;
    });
  }
}
