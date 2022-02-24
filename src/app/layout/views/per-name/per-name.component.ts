import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Country } from 'src/app/shared/models/country.model';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-per-name',
  templateUrl: './per-name.component.html',
  styleUrls: ['./per-name.component.scss']
})
export class PerNameComponent implements OnInit {

  nameForm: FormGroup;
  isLoading = false;
  countries: Country[];
  currentCountries: Country[];
  numCountries = 0;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public countrySrv: CountriesService,
    public notifySrv: NotificationsService
  ) { }

  ngOnInit(): void {
    this.nameForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      fullName: new FormControl(false)
    })
  }

  buscar() {
    if (this.nameForm.invalid) {
      this.nameForm.markAllAsTouched();
      return;
    }
    this.countries = null;
    const { name, fullName } = this.nameForm.value;
    this.isLoading = true;
    this.countrySrv.getCountryPerName(name, fullName).subscribe(data => {
      this.isLoading = false;
      this.countries = data;
      console.log(data);
    }, err => {
      this.isLoading = false;
      console.error(err);
      if (err.status === 404) {
        return this.notifySrv.snackbarAviso('No se encontró ningún país con la búsqueda ingresada', 'OK');
      }
      this.notifySrv.snackbarError('Hubo un error al consultar los países', 'X', false);
    });
  }

  handlePageEvents(event: PageEvent) {
    console.log(event);
    const pageIndex = event.pageIndex;
    const index = pageIndex * 5;
    const end = index + 5;
    this.currentCountries = this.countries.slice(index, end);
  }

}
