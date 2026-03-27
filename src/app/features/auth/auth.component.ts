import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  submitted = false;
  showPassword = false;
  loginForm!: FormGroup;

  constructor(private router: Router) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getUsernameErrorMessage(): string {
    const usernameControl = this.username;

    if (
      !usernameControl ||
      !(
        usernameControl?.touched ||
        usernameControl?.dirty ||
        this.submitted === true
      )
    )
      return '';

    if (usernameControl?.hasError('required')) return 'Username is required';

    return '';
  }
  getPassErrorMessage(): string {
    const passControl = this.username;

    if (
      !passControl ||
      !(passControl?.touched || passControl?.dirty || this.submitted === true)
    )
      return '';

    if (passControl?.hasError('required')) return 'Password is required';

    return '';
  }

  handleVerfitication() {
    this.getUsernameErrorMessage;
    this.getPassErrorMessage;
  }

  handleSubmit() {
    this.submitted = true;
    // dataLogin = {};
    console.log('Submitted', this.loginForm);
    // this.handleVerfitication;
    this.router.navigate(['/']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
