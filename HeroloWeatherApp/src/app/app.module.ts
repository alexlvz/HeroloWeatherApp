import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HomePageComponent } from '../app/home-page/home-page.component';
import { FavoritesComponent } from '../app/favorites/favorites.component';
import { WeatherService} from '../app/weather.service';


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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherService,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
