import { LoginComponent } from "./../login/login.component";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminRouteGuard implements CanActivate {
  // constructor(private login: LoginComponent) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const xStr = sessionStorage.getItem("xNum");
    if (sessionStorage.getItem("xNum") === xStr && xStr?.length === 103) {
      return true;
    } else return false;
  }
}
