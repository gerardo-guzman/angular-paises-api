import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Country } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-country-viewer',
  templateUrl: './country-viewer.component.html',
  styleUrls: ['./country-viewer.component.scss']
})
export class CountryViewerComponent implements OnInit, AfterViewInit {

  @Input() countries:  Country[];
  currentCountries: Country[];
  numCountries = 0;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.numCountries = this.countries.length;
    this.currentCountries = [];
    if (this.numCountries > 5) {
      for (let i = 0; i < 5; i++) {
        this.currentCountries.push(this.countries[i]);
      }
    } else {
      this.currentCountries = this.countries;
    }
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Países por página:';
    this.paginator._intl.nextPageLabel = 'siguiente página';
    this.paginator._intl.previousPageLabel = 'página anterior';
  }

  handlePageEvents(event: PageEvent) {
    console.log(event);
    const pageIndex = event.pageIndex;
    const index = pageIndex * 5;
    const end = index + 5;
    this.currentCountries = this.countries.slice(index, end);
  }

}
