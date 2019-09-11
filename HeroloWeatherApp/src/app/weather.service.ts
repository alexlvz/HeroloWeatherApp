import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

//http://dataservice.accuweather.com/currentconditions/v1/213225?apikey=qQcr4CuvSGbfpRFmY3Q1TKhxYlu8wngA&details=true
//http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=qQcr4CuvSGbfpRFmY3Q1TKhxYlu8wngA&q=Jerusalem
//http://dataservice.accuweather.com/forecasts/v1/daily/5day/213225?apikey=qQcr4CuvSGbfpRFmY3Q1TKhxYlu8wngA&details=false&metric=true

export class WeatherService {

  private http: Http;
  private api_key = "?apikey=qQcr4CuvSGbfpRFmY3Q1TKhxYlu8wngA";
  private base_url = "http://dataservice.accuweather.com";
  private resources = ["/locations/v1/cities/autocomplete","/currentconditions/v1/","/forecasts/v1/daily/5day/"] //213225 goes at res[1] [2]
  private params = ["&q=","&details=","&details=false&metric=true"] // details can be true or false, q = name of city

  constructor( ) { }
}
