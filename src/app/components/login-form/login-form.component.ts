import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[a-z].*[A-Z])/)])
  });
  constructor(private route: Router) { }

  logInForm() {
    if (this.loginForm.valid) {
      this.route.navigateByUrl("contact-information");
    }
  }

  registerForm() {
    this.route.navigateByUrl("contact-information");
  }
}
