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

/*

  canActivateChild(|childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> | Observable<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
}

*/

// constructor(private login: LoginComponent) {}
// Remember to import LoginComponent
// import { LoginComponent } from "./login/login.component";
// Trying to get variables from another class is not working
