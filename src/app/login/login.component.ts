import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginuserService } from "../guard/loginuser.service";
import { User } from "../guard/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(
    private loginuserservice: LoginuserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clearSessionStorage();
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }

  userLogin() {
    this.loginuserservice.loginUser(this.user).subscribe((data: any): void => {
      const lgIn = data.toString();
      if (lgIn === "true") {
        sessionStorage.setItem("user", lgIn);
        this.router.navigate(["/home"]);
      } else {
        sessionStorage.clear();
        this.router.navigate(["/wrongcred"]);
      }
    });
  }
}
