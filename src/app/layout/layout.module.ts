import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LayoutRoutesModule } from './layout.routes';
import { AllCountriesComponent } from './views/all-countries/all-countries.component';
import { PerNameComponent } from './views/per-name/per-name.component';
import { PerCodeComponent } from './views/per-code/per-code.component';
import { PerCurrencyComponent } from './views/per-currency/per-currency.component';
import { PerLanguageComponent } from './views/per-language/per-language.component';
import { PerAllOthersComponent } from './views/per-all-others/per-all-others.component';
import { CountryCardComponent } from './components/country-card/country-card.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CountryViewerComponent } from './components/country-viewer/country-viewer.component';
import { MatChipsModule } from '@angular/material/chips';

const MY_MAT_MODULES = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatCheckboxModule,
  MatMenuModule,
  MatDatepickerModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatChipsModule
];

@NgModule({
  declarations: [
    LayoutComponent,
    AllCountriesComponent,
    PerNameComponent,
    PerCodeComponent,
    PerCurrencyComponent,
    PerLanguageComponent,
    PerAllOthersComponent,
    CountryCardComponent,
    CountryViewerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutRoutesModule,
    ...MY_MAT_MODULES,
  ]
})
export class LayoutModule { }
