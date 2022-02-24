import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonimousGuard } from './guards/anonimous.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AnonimousGuard] },
  { path: '', loadChildren: () => import('../app/layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
