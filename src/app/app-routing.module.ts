import { DeletereviewComponent } from "./reviews/deletereview/deletereview.component";
import { AddreviewComponent } from "./reviews/addreview/addreview.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "./page404/page404.component";
import { WrongcredComponent } from "./wrongcred/wrongcred.component";
import { AllreviewsComponent } from "./reviews/allreviews/allreviews.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AllmoviesComponent } from "./movies/allmovies/allmovies.component";
import { AdminRouteGuard } from "./guard/admin-route.guard";
import { DeletemoviesComponent } from "./movies/deletemovies/deletemovies.component";
import { UpdatemoviesComponent } from "./movies/updatemovies/updatemovies.component";
import { AddmoviesComponent } from "./movies/addmovies/addmovies.component";
import { UpdatereviewComponent } from "./reviews/updatereview/updatereview.component";
import { AddsuccessComponent } from "./movies/addmovies/addsuccess/addsuccess.component";
import { AllactorsComponent } from "./actors/allactors/allactors.component";
import { AddactorsComponent } from "./actors/addactors/addactors.component";
import { DeleteactorsComponent } from "./actors/deleteactors/deleteactors.component";
import { UpdateactorsComponent } from "./actors/updateactors/updateactors.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AdminRouteGuard] },
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

  { path: "wrongcred", component: WrongcredComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
