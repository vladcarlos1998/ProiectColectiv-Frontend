import { ProfileComponent } from "./profile/profile.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatSelectModule,
  MatNativeDateModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material";
import { MatMenuModule } from "@angular/material/menu";
import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { LoginComponent } from "./components/login/login.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { MovieCardComponent } from "./components/movie-card/movie-card.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { SlideshowModule } from "ng-simple-slideshow";
import { TvShowsComponent } from "./tv-shows/tv-shows.component";
import { UserService } from "./services/user.service";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { AuthService } from "./services/authentication.service";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ApiProvider } from './services/api-provide';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    LoginComponent,
    MovieCardComponent,
    CarouselComponent,
    TvShowsComponent,
    AdminPageComponent,
    ProfileComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    SlickCarouselModule,
    SlideshowModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [UserService, AuthService, ApiProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
