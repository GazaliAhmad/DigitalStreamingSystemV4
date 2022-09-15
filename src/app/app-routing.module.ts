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

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "movies", component: AllmoviesComponent },
  { path: "addmovies", component: AddmoviesComponent },
  { path: "deletemovies", component: DeletemoviesComponent },
  { path: "updatemovies", component: UpdatemoviesComponent },
  { path: "reviews", component: AllreviewsComponent },
  { path: "addreviews", component: AddreviewComponent },
  { path: "deletereviews", component: DeletereviewComponent },
  { path: "updatereviews", component: UpdatereviewComponent },
  { path: "wrongcred", component: WrongcredComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*

 {
    path: "movies",
    component: AllmoviesComponent,
    children: [
      { path: "addmovies", component: AddmoviesComponent },
      { path: "deletemovies", component: DeletemoviesComponent },
      { path: "updatemovies", component: UpdatemoviesComponent },
    ],
  },


   {
    path: "movies",
    component: AllmoviesComponent,
  },
  { path: "addmovies", component: AddmoviesComponent },
  */
