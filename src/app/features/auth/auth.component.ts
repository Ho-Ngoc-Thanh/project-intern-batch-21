import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormControlComponent } from 'src/app/shared/components/form-control/form-control.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormControlComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  submitted = false;
  showPassword = false;
  loginForm!: FormGroup;
  loginError = '';

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

  testAccounts = [
    {
      username: 'dung',
      password: '12345',
    },
    {
      username: 'admin',
      password: 'admin123',
    },
  ];
  handleVerification(username: string, password: string): boolean {
    return this.testAccounts.some(
      (account) =>
        account.username === username && account.password === password,
    );
  }

  handleSubmit() {
    this.submitted = true;
    this.loginError = '';

    // console.log('Submitted', this.loginForm.value);

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const username = this.loginForm.value.username ?? '';
    const password = this.loginForm.value.password ?? '';

    const isValid = this.handleVerification(username, password);

    if (!isValid) {
      this.loginError = 'Username hoặc password không đúng';
      return;
    }

    // console.log('Login success', { username, password });
    this.router.navigate(['/']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
