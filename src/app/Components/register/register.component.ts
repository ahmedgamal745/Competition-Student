import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { last } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule,
     HttpClientModule,
     RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   registerFrom: FormGroup;


  constructor(private fb :FormBuilder , private http: HttpClient) {
    this.registerFrom = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      college: ['', Validators.required],
      year: ['', Validators.required],
      department: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Assuming a 10-digit phone number
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
    })
  }

  onSubmit() {
  if (this.registerFrom.invalid) {
    alert("Please fill all the fields correctly");
    return;
  }

  const data = this.registerFrom.value;
  const fullName = `${data.firstName} ${data.lastName}`;

  const apiPayload = {
    fullName: fullName,
    email: data.email,
    password: data.password,
    collegeName: data.college,
    role: 'student'
  };

  const localPayload = {
    fullName,
    email: data.email,
    college: data.college,
    department: data.department,
    year: data.year,
    phone: data.phone,
    role: 'student',
  };

  console.log('Sending to API:', apiPayload);

  this.http.post('https://api.freeprojectapi.com/api/ProjectCompetition/register', apiPayload).subscribe({
    next: () => {alert('Registration successful!');},
    error: (err) => {
      
      if (err.status === 409) {
        alert("This email is already registered. Try logging in.");
      } else {
        console.error('Registration failed:', err);
        alert('Registration failed. Please try again later.');
      }
    }
  });
}
  
}
