import { Component, OnInit } from "@angular/core";
import { GetAdminService } from "./../../services/get/get-admin.services";

@Component({
  selector: "app-alladmin",
  templateUrl: "./alladmin.component.html",
  styleUrls: ["./alladmin.component.css"],
})
export class AlladminComponent implements OnInit {
  posts: any;

  constructor(private service: GetAdminService) {}

  ngOnInit(): void {
    this.service.getAllAdmin().subscribe((response) => {
      console.log(response);
      this.posts = response;
    });
  }
}
