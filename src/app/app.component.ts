import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgComponent } from './components/svg.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SvgComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  countryData: any = {};
  
  onCountryDataReceived(data: any) {
    this.countryData.name = data[1][0].name;
    this.countryData.capital = data[1][0].capitalCity;
    this.countryData.region = data[1][0].region.value;
    this.countryData.income = data[1][0].incomeLevel.value;
    this.countryData.longitude = data[1][0].longitude;
    this.countryData.latitude = data[1][0].latitude;
  }
}
