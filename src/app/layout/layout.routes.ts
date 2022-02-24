import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { AllCountriesComponent } from "./views/all-countries/all-countries.component";
import { PerAllOthersComponent } from "./views/per-all-others/per-all-others.component";
import { PerCodeComponent } from "./views/per-code/per-code.component";
import { PerCurrencyComponent } from "./views/per-currency/per-currency.component";
import { PerLanguageComponent } from "./views/per-language/per-language.component";
import { PerNameComponent } from "./views/per-name/per-name.component";


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'all-countries', component: AllCountriesComponent },
            { path: 'per-name', component: PerNameComponent },
            { path: 'per-code', component: PerCodeComponent },
            { path: 'per-currency', component: PerCurrencyComponent },
            { path: 'per-language', component: PerLanguageComponent },
            { path: 'all-other', component: PerAllOthersComponent },
            { path: '**', redirectTo: 'all-countries', pathMatch: 'full' }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutesModule { }
