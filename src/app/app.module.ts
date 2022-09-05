import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { UserRegComponent } from "./user-reg/user-reg.component";
import { AllmoviesComponent } from "./movies/allmovies/allmovies.component";
import { AddmoviesComponent } from "./movies/addmovies/addmovies.component";
import { UpdatemoviesComponent } from "./movies/updatemovies/updatemovies.component";
import { DeletemoviesComponent } from "./movies/deletemovies/deletemovies.component";
import { AllactorsComponent } from './actors/allactors/allactors.component';
import { DeleteactorsComponent } from './actors/deleteactors/deleteactors.component';
import { UpdateactorsComponent } from './actors/updateactors/updateactors.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
