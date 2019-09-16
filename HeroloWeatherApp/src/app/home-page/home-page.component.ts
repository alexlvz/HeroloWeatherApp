import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CityWeather } from '../city-weather'
import { CityForecast } from '../city-forecast'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  private response_current = [{ "LocalObservationDateTime": "2019-09-15T19:50:00+03:00", "EpochTime": 1568566200, "WeatherText": "Mostly clear", "WeatherIcon": 34, "HasPrecipitation": false, "PrecipitationType": null, "IsDayTime": false, "Temperature": { "Metric": { "Value": 21.4, "Unit": "C", "UnitType": 17 }, "Imperial": { "Value": 70, "Unit": "F", "UnitType": 18 } }, "MobileLink": "http://m.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us", "Link": "http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us" }]
  private response_daily = { "Headline": { "EffectiveDate": "2019-09-19T20:00:00+03:00", "EffectiveEpochDate": 1568912400, "Severity": 7, "Text": "Humid Thursday night", "Category": "humidity", "EndDate": "2019-09-20T08:00:00+03:00", "EndEpochDate": 1568955600, "MobileLink": "http://m.accuweather.com/en/il/jerusalem/213225/extended-weather-forecast/213225?unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?unit=c&lang=en-us" }, "DailyForecasts": [{ "Date": "2019-09-15T07:00:00+03:00", "EpochDate": 1568520000, "Temperature": { "Minimum": { "Value": 18, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 25.8, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=1&unit=c&lang=en-us" }, { "Date": "2019-09-16T07:00:00+03:00", "EpochDate": 1568606400, "Temperature": { "Minimum": { "Value": 17.4, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 26.5, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=2&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=2&unit=c&lang=en-us" }, { "Date": "2019-09-17T07:00:00+03:00", "EpochDate": 1568692800, "Temperature": { "Minimum": { "Value": 17.1, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 27.9, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=3&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=3&unit=c&lang=en-us" }, { "Date": "2019-09-18T07:00:00+03:00", "EpochDate": 1568779200, "Temperature": { "Minimum": { "Value": 19.7, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.5, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=4&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=4&unit=c&lang=en-us" }, { "Date": "2019-09-19T07:00:00+03:00", "EpochDate": 1568865600, "Temperature": { "Minimum": { "Value": 19.7, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.1, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=5&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/jerusalem/213225/daily-weather-forecast/213225?day=5&unit=c&lang=en-us" }] }
  private response_search = [{ "Version": 1, "Key": "213225", "Type": "City", "Rank": 30, "LocalizedName": "Jerusalem", "Country": { "ID": "IL", "LocalizedName": "Israel" }, "AdministrativeArea": { "ID": "JM", "LocalizedName": "Jerusalem" } }, { "Version": 1, "Key": "250835", "Type": "City", "Rank": 65, "LocalizedName": "Jerusalem", "Country": { "ID": "NZ", "LocalizedName": "New Zealand" }, "AdministrativeArea": { "ID": "MWT", "LocalizedName": "Manawatu-Wanganui" } }, { "Version": 1, "Key": "221483", "Type": "City", "Rank": 75, "LocalizedName": "Jerusalem", "Country": { "ID": "JM", "LocalizedName": "Jamaica" }, "AdministrativeArea": { "ID": "10", "LocalizedName": "Westmoreland" } }, { "Version": 1, "Key": "3496636", "Type": "City", "Rank": 85, "LocalizedName": "Jerusalem", "Country": { "ID": "AU", "LocalizedName": "Australia" }, "AdministrativeArea": { "ID": "SA", "LocalizedName": "South Australia" } }, { "Version": 1, "Key": "1376675", "Type": "City", "Rank": 85, "LocalizedName": "Jerusalem", "Country": { "ID": "CZ", "LocalizedName": "Czechia" }, "AdministrativeArea": { "ID": "20", "LocalizedName": "Central Bohemian" } }, { "Version": 1, "Key": "1062990", "Type": "City", "Rank": 85, "LocalizedName": "Jerusalem", "Country": { "ID": "MX", "LocalizedName": "Mexico" }, "AdministrativeArea": { "ID": "CHP", "LocalizedName": "Chiapas" } }, { "Version": 1, "Key": "1062987", "Type": "City", "Rank": 85, "LocalizedName": "Jerusalem", "Country": { "ID": "MX", "LocalizedName": "Mexico" }, "AdministrativeArea": { "ID": "DUR", "LocalizedName": "Durango" } }, { "Version": 1, "Key": "1062988", "Type": "City", "Rank": 85, "LocalizedName": "Jerusalem", "Country": { "ID": "MX", "LocalizedName": "Mexico" }, "AdministrativeArea": { "ID": "JAL", "LocalizedName": "Jalisco" } }, { "Version": 1, "Key": "3429142", "Type": "City", "Rank": 85, "LocalizedName": "Jerusalem", "Country": { "ID": "PH", "LocalizedName": "Philippines" }, "AdministrativeArea": { "ID": "NEC", "LocalizedName": "Negros Occidental" } }, { "Version": 1, "Key": "2115414", "Type": "City", "Rank": 85, "LocalizedName": "Jerusalem", "Country": { "ID": "US", "LocalizedName": "United States" }, "AdministrativeArea": { "ID": "OH", "LocalizedName": "Ohio" } }];
  private response_obj;
  private searched_city;
  private searchResults = false;

  private CityWeather: CityWeather;
  private CityForecast = [];
  private in_favorites;

  ngOnInit() {

    this.CityWeather = new CityWeather();
    this.getCurrentCityWeather("215854", "Tel Aviv", false);
  }

  saveToFavorites(city: CityWeather) {
    //let stored_data;

    //stored_data = localStorage.getItem(city.city_name);

    localStorage.setItem(city.city_name, JSON.stringify(city));
    this.in_favorites = true;

  }

  removeFromFavorites(city) {

    localStorage.removeItem(city.city_name)
    this.in_favorites = false;
  }

  getSearchResults(searched_city) {
    this.searchResults = true;

    this._weatherService.getSearchResults(searched_city).subscribe(
      response => {
        this.response_search = response;
      }
    );
  }

  getCurrentCityWeather(city_key, city_name, get_data) {
    this.searchResults = false;
    this.CityWeather.city_name = city_name;
    let index = 0;

    if (get_data) {
      this._weatherService.getCityWeather(city_key).subscribe(
        response => {
          this.response_current = response;
          this.CityWeather.current_temp = Math.round(this.response_current[0].Temperature.Metric.Value)
          this.CityWeather.weather_description = this.response_current[0].WeatherText;
          this.CityWeather.icon = this.response_current[0].WeatherIcon;
        }
      );


      this._weatherService.getFiveDaysForecast(city_key).subscribe(
        response => {
          this.response_daily = response;
          for (let city of this.response_daily.DailyForecasts) {
            this.CityForecast[index] = new CityForecast();
            this.CityForecast[index].day = this.getDay(city.Date);
            this.CityForecast[index].date = this.getDate(city.Date);
            this.CityForecast[index].icon = city.Day.Icon;
            this.CityForecast[index].max_temp = Math.round(city.Temperature.Maximum.Value)
            this.CityForecast[index].min_temp = Math.round(city.Temperature.Minimum.Value)
            index++;
          }
        }
      );
    }

    else {

      if(localStorage.getItem(this.CityWeather.city_name) != null)
        this.in_favorites = true;

      this.CityWeather.current_temp = Math.round(this.response_current[0].Temperature.Metric.Value)
      this.CityWeather.weather_description = this.response_current[0].WeatherText;
      this.CityWeather.icon = this.response_current[0].WeatherIcon;

      for (let city of this.response_daily.DailyForecasts) {
        this.CityForecast[index] = new CityForecast();
        this.CityForecast[index].day = this.getDay(city.Date);
        this.CityForecast[index].date = this.getDate(city.Date);
        this.CityForecast[index].icon = city.Day.Icon;
        this.CityForecast[index].max_temp = Math.round(city.Temperature.Maximum.Value)
        this.CityForecast[index].min_temp = Math.round(city.Temperature.Minimum.Value)
        index++;
      }
    }
  }

  getDay(day_string) {
    let days = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"]
    let date_parts = day_string.split('T');
    date_parts = date_parts[0].split('-');

    let date = new Date(date_parts[0], date_parts[1] - 1, date_parts[2])

    return days[date.getDay()];
  }

  getDate(day_string) {
    let date_parts = day_string.split('T');
    date_parts = date_parts[0].split('-');

    return date_parts[2] + "/" + date_parts[1];
  }
}
