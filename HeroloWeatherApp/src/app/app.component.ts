import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HeroloWeatherApp';

  constructor(private router: Router)
  {}

  navigate(page)
  {
    this.router.navigate([page]);
  }
}
