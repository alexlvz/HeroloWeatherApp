import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CityWeather } from '../city-weather'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
  }
  

}
