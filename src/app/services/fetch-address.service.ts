import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchAddressService {
  private apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';

  constructor() {}

  lookupAddress(address: string): Observable<string> {
    const params = new URLSearchParams({
      address,
      key: environment.googleMapsApiKey, // Replace with your actual API key
    });

    const url = `${this.apiUrl}?${params.toString()}`;

    return new Observable<string>((observer) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (data.results && data.results.length > 0) {
            observer.next(data.results[0].formatted_address);
          } else {
            observer.error('Address not found');
          }
          observer.complete();
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          observer.error('Error fetching data');
          observer.complete();
        });
    }).pipe(
      catchError((error) => {
        console.error('Error in observable:', error);
        return throwError('Error in observable');
      })
    );
  }
}
