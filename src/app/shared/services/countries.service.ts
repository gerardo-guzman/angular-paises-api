import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  BASE_COUNTRY_URL = 'https://restcountries.com/v3.1/';

  constructor(
    public http: HttpClient
  ) { }

  getAllCountries(): Observable<any> {
    return this.http.get(`${this.BASE_COUNTRY_URL}all`);
  }

  getCountryPerName(name: string, fullName: boolean): Observable<any> {
    const query = fullName ? '?fullText=true' : '';
    return this.http.get(`${this.BASE_COUNTRY_URL}name/${name}${query}`);
  }

  getCountryPerCode(codes: string): Observable<any> {
    return this.http.get(`${this.BASE_COUNTRY_URL}alpha?codes=${codes}`);
  }

  getCountryPerCurrency(currency: string): Observable<any> {
    return this.http.get(`${this.BASE_COUNTRY_URL}currency/${currency}`);
  }

  getCountryPerLanguage(language: string): Observable<any> {
    return this.http.get(`${this.BASE_COUNTRY_URL}lang/${language}`);
  }

  getByCapital(capital: string): Observable<any> {
    return this.http.get(`${this.BASE_COUNTRY_URL}capital/${capital}`);
  }

  getByRegion(region: string): Observable<any> {
    return this.http.get(`${this.BASE_COUNTRY_URL}region/${region}`);
  }

}
