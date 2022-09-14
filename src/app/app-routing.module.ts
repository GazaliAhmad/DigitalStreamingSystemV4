import { AllreviewsComponent } from "./reviews/allreviews/allreviews.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllmoviesComponent } from "./movies/allmovies/allmovies.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "movies", component: AllmoviesComponent },
  { path: "reviews", component: AllreviewsComponent },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*
const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "/login" },
];
*/
