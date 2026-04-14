import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      loginId: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(\+?\d{9,11}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,})$/,
        ),
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  get username() {
    return this.loginForm.get('loginId');
  }

  get password() {
    return this.loginForm.get('password');
  }

  handleSubmit() {
    this.submitted = true;
    this.loginError = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { loginId, password } = this.loginForm.value;

    // console.log('data login: ', loginId, password);

    this.authService.login({ loginId, password }).subscribe({
      next: (res) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        if (err.status === 0) {
          console.log('login error: ', err);
          this.loginError = 'Không thể kết nối đến máy chủ.';
          return;
        }

        this.loginError = err?.error?.message || 'Đăng nhập thất bại.';
      },
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
