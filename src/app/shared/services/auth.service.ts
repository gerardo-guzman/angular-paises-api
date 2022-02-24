import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public router: Router
  ) { }

  login(user: string, password: string): Observable<any> {
    if (user === 'jerry' && password === 'jerry') {
      return of({
        token: "QpwL5tke4Pnpja7X4",
        rol: 'user'
      }).pipe(delay(1500));
    }
    if (user === 'admin' && password === 'admin') {
      return of({
        token: "QpwL5tke4Pnpja7X4",
        rol: 'admin'
      }).pipe(delay(2000));
    }
    return throwError({msg: 'Usuario y/o contraseña incorrectos'}).pipe(
      materialize(),
      delay(2000),
      dematerialize()
    );
  }

  successLogin(rol: 'admin' | 'user', token: string) {
    localStorage.removeItem('rol');
    localStorage.setItem('rol', rol);
    localStorage.setItem('token', token);
    return this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('rol');
    localStorage.removeItem('token');
    return this.router.navigate(['/login']);
  }
}
