import { Routes } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { LoginuserService } from "../loginuser.service";
import { User } from "../user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  Routes: any;

  constructor(private loginuserservice: LoginuserService) {}

  ngOnInit(): void {}

  userLogin() {
    this.loginuserservice.loginUser(this.user).subscribe((data: any): void => {
      const lgIn = data.toString();
      if (lgIn == "true") {
        console.log("Login Successful");
        this.Routes.navigate(["/home"]);
      } else {
        console.log("Login Failed");
      }
    });
  }
}

/*

userLogin() {
    this.loginuserservice.loginUser(this.user).subscribe((data: any): void => {
      const lgIn = data.toString();
      if (lgIn == "true") {
        alert("Login Successfull");
      } else {
        alert("Login Failed");
      }
    });
  }

*/

/*
userLogin() {
this.loginuserservice.loginUser(this.user).subscribe((data: any): void => {
 data.toString() === "true"
        ? alert("Login Successful")
        : alert("Login Failed");
    });
  }

  */
