import { GetAdminService } from "./../../services/get/get-admin.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-alladmin",
  templateUrl: "./alladmin.component.html",
  styleUrls: ["./alladmin.component.css"],
})
export class AlladminComponent implements OnInit {
  posts: any;

  constructor(private service: GetAdminService) {}

  ngOnInit(): void {
    this.service.getAllAdmins().subscribe((response) => {
      this.posts = response;
    });
  }
}
