import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading = false;

  constructor(
    public authSrv: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { user, password } = this.loginForm.value;
    this.isLoading = true;
    this.authSrv.login(user, password).subscribe(data => {
      this.isLoading = false;
      this.authSrv.successLogin(data.rol, data.token);
      console.log(data);
    }, err => {
      this.isLoading = false;
      console.error(err);
    });

  }

}
