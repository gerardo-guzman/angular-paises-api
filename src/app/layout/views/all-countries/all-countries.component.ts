import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Country } from 'src/app/shared/models/country.model';
import { CountriesService } from 'src/app/shared/services/countries.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnInit, AfterViewInit {

  countries: Country[];
  currentCountries: Country[];
  numCountries = 0;
  isLoading = false;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public countrySrv: CountriesService,
    public notifySrv: NotificationsService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {

  }

  search() {
    this.isLoading = true;
    this.countrySrv.getAllCountries().subscribe(data => {
      this.isLoading = false;
      this.countries = data;
      this.numCountries = this.countries.length;
      this.currentCountries = [];
    }, (err) => {
      this.isLoading = false;
      this.notifySrv.snackbarError('Hubo un error al consultar los países', 'X', false);
    })
  }

  handlePageEvents(event: PageEvent) {
    console.log(event);
    const pageIndex = event.pageIndex;
    const index = pageIndex * 5;
    const end = index + 5;
    this.currentCountries = this.countries.slice(index, end);
  }

}
