import { Component, Inject } from '@angular/core';
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
  router= Inject(Router);
  userService = Inject(UserService);
  

  onlogout() {
    localStorage.removeItem('studentId');
    this.userService.loggedUserId = '';
    alert("Logout successful");
     this.router.navigateByUrl('/home');
  }
}
