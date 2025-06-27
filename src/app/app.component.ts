// In app.component.ts
import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Competation-Student';
  
  constructor(
    public router: Router,
    public userService: UserService // Must be public for template access
  ) {}
  
  onlogout() {
    this.userService.clearUserData();
    alert("Logout successful");
    this.router.navigateByUrl('/home');
  }
}
   