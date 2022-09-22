import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Logging import paths
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AdminRouteGuard } from "./guard/admin-route.guard";

// Movies import paths
import { AllmoviesComponent } from "./movies/allmovies/allmovies.component";
import { DeletemoviesComponent } from "./movies/deletemovies/deletemovies.component";
import { UpdatemoviesComponent } from "./movies/updatemovies/updatemovies.component";
import { AddmoviesComponent } from "./movies/addmovies/addmovies.component";
import { AddsuccessComponent } from "./movies/addmovies/addsuccess/addsuccess.component";

// Reviews import paths
import { AllreviewsComponent } from "./reviews/allreviews/allreviews.component";
import { DeletereviewComponent } from "./reviews/deletereview/deletereview.component";
import { AddreviewComponent } from "./reviews/addreview/addreview.component";
import { UpdatereviewComponent } from "./reviews/updatereview/updatereview.component";

// Actors import paths
import { AllactorsComponent } from "./actors/allactors/allactors.component";
import { AddactorsComponent } from "./actors/addactors/addactors.component";
import { DeleteactorsComponent } from "./actors/deleteactors/deleteactors.component";
import { UpdateactorsComponent } from "./actors/updateactors/updateactors.component";

// Misc import paths
import { Page404Component } from "./page404/page404.component";
import { WrongcredComponent } from "./wrongcred/wrongcred.component";

// Admin import paths
import { AlladminComponent } from "./admin/alladmin/alladmin.component";
import { AddadminComponent } from "./admin/addadmin/addadmin.component";
import { DeleteadminComponent } from "./admin/deleteadmin/deleteadmin.component";
import { UpdateadminComponent } from "./admin/updateadmin/updateadmin.component";
import { AddadminsuccessComponent } from "./admin/addadmin/addadminsuccess/addadminsuccess.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AdminRouteGuard] },

  // Movies Path
  {
    path: "movies",
    component: AllmoviesComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "addmovies",
    component: AddmoviesComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "addsuccess",
    component: AddsuccessComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "deletemovies",
    component: DeletemoviesComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "updatemovies",
    component: UpdatemoviesComponent,
    canActivate: [AdminRouteGuard],
  },

  // Reviews Path
  {
    path: "reviews",
    component: AllreviewsComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "reviews",
    component: AllreviewsComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "addreviews",
    component: AddreviewComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "deletereviews",
    component: DeletereviewComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "updatereviews",
    component: UpdatereviewComponent,
    canActivate: [AdminRouteGuard],
  },

  // Actors Path
  {
    path: "actors",
    component: AllactorsComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "addactors",
    component: AddactorsComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "deleteactors",
    component: DeleteactorsComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "updateactors",
    component: UpdateactorsComponent,
    canActivate: [AdminRouteGuard],
  },

  // Admin Path
  {
    path: "admin",
    component: AlladminComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "addadmin",
    component: AddadminComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "deleteadmin",
    component: DeleteadminComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "updateadmin",
    component: UpdateadminComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "addadmninsuccess",
    component: AddadminsuccessComponent,
    canActivate: [AdminRouteGuard],
  },

  // Misc Path
  { path: "wrongcred", component: WrongcredComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// Admin/Users import paths
/* import { AlladminComponent } from "./user-reg/alladmin/alladmin.component";
import { AdduserComponent } from "./user-reg/adduser/adduser.component";
import { UpdateuserComponent } from "./user-reg/updateuser/updateuser.component";
import { DeleteuserComponent } from "./user-reg/deleteuser/deleteuser.component";
import { AddusersuccessComponent } from "./user-reg/adduser/addusersuccess/addusersuccess.component";
*/

// Admin/Users Path
/* {
    path: "users",
    component: AlladminComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "adduser",
    component: AdduserComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "updateuser",
    component: UpdateuserComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "addusersuccess",
    component: AddusersuccessComponent,
    canActivate: [AdminRouteGuard],
  },
  {
    path: "deleteuser",
    component: DeleteuserComponent,
    canActivate: [AdminRouteGuard],
  }
  */
