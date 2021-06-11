import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Traemos al servicio de firebase para logearnos
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  // Este login se realiza con firebase
  login(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password).
      then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('No es válido');
      });
    }
  }

  // Este login con rest api
  loginRestApi(): void {
    this.authService.loginRestApi('nicolas@nicola.com', '123456')
    .subscribe(data => {
      console.log(data);
    });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
