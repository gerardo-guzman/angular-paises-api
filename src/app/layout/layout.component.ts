import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
  .pipe(map(result => result.matches),
    shareReplay()
  );

  routes = [
    { title: 'Todos los países', path: '/all-countries', icon: 'flag' },
    { title: 'Por nombre', path: '/per-name', icon: 'drive_file_rename_outline' },
    { title: 'Por código', path: '/per-code', icon: 'qr_code' },
    { title: 'Por moneda', path: '/per-currency', icon: 'monetization_on' },
    { title: 'Por idioma', path: '/per-language', icon: 'translate' },
    { title: 'Otros filtros', path: '/all-other', icon: 'search' }
  ]

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authSrv: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authSrv.logout();
  }

}
