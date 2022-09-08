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

  constructor(private loginuserservice: LoginuserService) {}

  ngOnInit(): void {}

  userLogin() {
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe((data: any) => {
      let d = data.toString();
      if (d == "true") {
        alert("Login Successfull");
      } else {
        alert("Login Failed");
      }
    });
  }
}
