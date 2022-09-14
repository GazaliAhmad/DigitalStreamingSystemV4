import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Page404Component } from "./page404/page404.component";
import { WrongcredComponent } from "./wrongcred/wrongcred.component";
import { AllreviewsComponent } from "./reviews/allreviews/allreviews.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AllmoviesComponent } from "./movies/allmovies/allmovies.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "movies", component: AllmoviesComponent },
  { path: "reviews", component: AllreviewsComponent },
  { path: "wrongcred", component: WrongcredComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
