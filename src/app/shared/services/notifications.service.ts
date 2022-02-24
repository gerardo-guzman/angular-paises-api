import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  private abrirSnackbar(mensaje: string, action: string, clase: string[] | string, ilimitado: boolean) {
    const config: MatSnackBarConfig = {
      duration: ilimitado ? 0 : 5000,
      panelClass: clase
    }
    return this.snackbar.open(mensaje, action, config);
  }

  snackbarExito(mensaje: string, action: string, ilimitado: boolean = false) {
    return this.abrirSnackbar(mensaje, action, 'exito-snackbar', ilimitado);
  }
  snackbarError(mensaje: string, action: string, ilimitado: boolean = false) {
    return this.abrirSnackbar(mensaje, action, 'error-snackbar', ilimitado );
  } 
  snackbarAviso(mensaje: string, action: string, ilimitado: boolean = false) {
    return this.abrirSnackbar(mensaje, action, 'aviso-snackbar', ilimitado );
  }

}
