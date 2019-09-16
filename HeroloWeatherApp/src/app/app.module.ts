import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HomePageComponent } from '../app/home-page/home-page.component';
import { FavoritesComponent } from '../app/favorites/favorites.component';
import { WeatherService} from '../app/weather.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

const appRoutes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'home', component: FavoritesComponent
  },
  {
    path: 'favorites', component: FavoritesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    GooglePlaceModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
