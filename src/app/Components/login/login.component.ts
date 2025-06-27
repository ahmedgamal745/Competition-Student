import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false)
  });

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

 onSubmit() {
  if (this.loginForm.invalid) {
    return;
  }

  const { email, password } = this.loginForm.value;

  this.userService.userlogin(email, password).subscribe({
    next: (response: any) => {
      if (response.userId) {
        this.userService.setUserData(response);
        this.router.navigate(['/home']);
      } else {
        console.error('Login response missing userId', response);
        alert("Login successful but missing required data. Please contact support.");
      }
    },
    error: (error: any) => {
      console.error('Login failed', error);
      alert("Login failed. Please check your credentials.");
    }
  });
}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}