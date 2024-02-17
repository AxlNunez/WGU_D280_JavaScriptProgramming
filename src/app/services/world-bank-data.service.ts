import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldBankDataService {
  constructor(private http: HttpClient) {}

  getCountryInfo(countryId: string) {
    const worldbank = `https://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get(worldbank);
  }
}
