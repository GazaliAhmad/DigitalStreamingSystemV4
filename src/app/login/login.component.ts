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

  randStr(length: number) {
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyz _-+=!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }

  userLogin() {
    this.loginuserservice.loginUser(this.user).subscribe((data: any): void => {
      const lgIn = data.toString();
      if (lgIn === "true") {
        const xStr = this.randStr(103);
        sessionStorage.setItem("xNum", xStr);
        this.router.navigate(["/home"]);
      } else {
        this.router.navigate(["/wrongcred"]);
      }
    });
  }
}
