import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { Country } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-per-code',
  templateUrl: './per-code.component.html',
  styleUrls: ['./per-code.component.scss']
})
export class PerCodeComponent implements OnInit {

  codes: string[] = [];
  isLoading = false;
  countries: Country[];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public countrySrv: CountriesService,
    public notifySrv: NotificationsService
  ) { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.codes.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(code: string): void {
    const index = this.codes.indexOf(code);

    if (index >= 0) {
      this.codes.splice(index, 1);
    }
  }

  buscar() {
    if (!this.codes.length) {
      return;
    }
    const codeQuery = this.codes.join(',');
    this.isLoading = true;
    this.countries = null;
    this.countrySrv.getCountryPerCode(codeQuery).subscribe(data => {
      this.countries = data;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
      if (err.status === 404) {
        return this.notifySrv.snackbarAviso('No se encontró ningún país con la búsqueda ingresada', 'OK');
      }
      this.notifySrv.snackbarError('Hubo un error al consultar los países', 'X', false);
    })
  }

}
