import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})

//http://dataservice.accuweather.com/currentconditions/v1/213225?apikey=qQcr4CuvSGbfpRFmY3Q1TKhxYlu8wngA&details=true
//http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=qQcr4CuvSGbfpRFmY3Q1TKhxYlu8wngA&q=Jerusalem
//http://dataservice.accuweather.com/forecasts/v1/daily/5day/213225?apikey=qQcr4CuvSGbfpRFmY3Q1TKhxYlu8wngA&details=false&metric=true

export class WeatherService {

  private api_key = "qQcr4CuvSGbfpRFmY3Q1TKhxYlu8wngA";
  private base_url = "http://dataservice.accuweather.com";

  constructor(private http: Http) { }


  getSearchResults(city){
    
    return this.http.get(this.base_url + "/locations/v1/cities/autocomplete?apikey=" + this.api_key + "&q=" +city).pipe(map(res => res.json()));

  }

  getCityWeather(city_code){
    
    return this.http.get(this.base_url + "/currentconditions/v1/" + city_code  + "?apikey=" + this.api_key + "&details=false").pipe(map(res => res.json()));

  }

  getFiveDaysForecast(city_code)
  {
    return this.http.get(this.base_url + "/forecasts/v1/daily/5day/" + city_code  + "?apikey=" + this.api_key + "&details=false&metric=true").pipe(map(res => res.json()));
  }

}
