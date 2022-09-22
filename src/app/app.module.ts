import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

// Base
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

// Navigation
import { NavbarComponent } from "./navbar/navbar.component";

// Misc
import { Page404Component } from "./page404/page404.component";
import { WrongcredComponent } from "./wrongcred/wrongcred.component";

// Movies
import { AllmoviesComponent } from "./movies/allmovies/allmovies.component";
import { AddmoviesComponent } from "./movies/addmovies/addmovies.component";
import { UpdatemoviesComponent } from "./movies/updatemovies/updatemovies.component";
import { DeletemoviesComponent } from "./movies/deletemovies/deletemovies.component";
import { AddsuccessComponent } from "./movies/addmovies/addsuccess/addsuccess.component";

// Actors
import { AllactorsComponent } from "./actors/allactors/allactors.component";
import { AddactorsComponent } from "./actors/addactors/addactors.component";
import { DeleteactorsComponent } from "./actors/deleteactors/deleteactors.component";
import { UpdateactorsComponent } from "./actors/updateactors/updateactors.component";

// Reviews
import { AllreviewsComponent } from "./reviews/allreviews/allreviews.component";
import { AddreviewComponent } from "./reviews/addreview/addreview.component";
import { DeletereviewComponent } from "./reviews/deletereview/deletereview.component";
import { UpdatereviewComponent } from "./reviews/updatereview/updatereview.component";

// Admin
import { AlladminComponent } from "./admin/alladmin/alladmin.component";
import { AddadminComponent } from "./admin/addadmin/addadmin.component";
import { DeleteadminComponent } from "./admin/deleteadmin/deleteadmin.component";
import { UpdateadminComponent } from "./admin/updateadmin/updateadmin.component";
import { AddadminsuccessComponent } from './admin/addadmin/addadminsuccess/addadminsuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
    AddsuccessComponent,
    AddactorsComponent,
    AlladminComponent,
    AddadminComponent,
    DeleteadminComponent,
    UpdateadminComponent,
    AddadminsuccessComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Admin
/* import { AlladminComponent } from "./user-reg/alladmin/alladmin.component";
import { AdduserComponent } from "./user-reg/adduser/adduser.component";
import { UpdateuserComponent } from "./user-reg/updateuser/updateuser.component";
import { DeleteuserComponent } from "./user-reg/deleteuser/deleteuser.component";
import { AddusersuccessComponent } from "./user-reg/adduser/addusersuccess/addusersuccess.component";
import { AddadminComponent } from './admin/addadmin/addadmin.component';
import { DeleteadminComponent } from './admin/deleteadmin/deleteadmin.component';
import { UpdateadminComponent } from './admin/updateadmin/updateadmin.component';

*/

/*
    AdduserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    AlladminComponent,
    AddusersuccessComponent,
    AddadminComponent,
    DeleteadminComponent,
    UpdateadminComponent,
*/
