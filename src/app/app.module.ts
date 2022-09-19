import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { UserRegComponent } from "./user-reg/user-reg.component";
import { AllmoviesComponent } from "./movies/allmovies/allmovies.component";
import { AddmoviesComponent } from "./movies/addmovies/addmovies.component";
import { UpdatemoviesComponent } from "./movies/updatemovies/updatemovies.component";
import { DeletemoviesComponent } from "./movies/deletemovies/deletemovies.component";
import { AllactorsComponent } from "./actors/allactors/allactors.component";
import { DeleteactorsComponent } from "./actors/deleteactors/deleteactors.component";
import { UpdateactorsComponent } from "./actors/updateactors/updateactors.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AllreviewsComponent } from "./reviews/allreviews/allreviews.component";
import { AddreviewComponent } from "./reviews/addreview/addreview.component";
import { DeletereviewComponent } from "./reviews/deletereview/deletereview.component";
import { UpdatereviewComponent } from "./reviews/updatereview/updatereview.component";
import { Page404Component } from "./page404/page404.component";
import { WrongcredComponent } from "./wrongcred/wrongcred.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserRegComponent,
    AllmoviesComponent,
    AddmoviesComponent,
    UpdatemoviesComponent,
    DeletemoviesComponent,
    AllactorsComponent,
    DeleteactorsComponent,
    UpdateactorsComponent,
    NavbarComponent,
    AllreviewsComponent,
    AddreviewComponent,
    DeletereviewComponent,
    UpdatereviewComponent,
    Page404Component,
    WrongcredComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
