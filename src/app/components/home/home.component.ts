import { Component } from '@angular/core';
import { DotenvParseOutput } from 'dotenv';

declare var process: {
  env: DotenvParseOutput;
};

export const environment = {
  production: false,
  googleMapsApiKey: process.env['GOOGLE_MAPS_API_KEY'],
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  address: string = '';
  approximateAddress: string = '';

  lookupAddress() {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=${environment.googleMapsApiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          this.approximateAddress = data.results[0].formatted_address;
        } else {
          this.approximateAddress = 'Address not found';
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
}
