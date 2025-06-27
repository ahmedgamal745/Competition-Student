import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.freeprojectapi.com/api/ProjectCompetition/login';
  private userData: {
    userId: string,
    fullName: string,
    email: string,
    collegeName: string,
    role: string
  } = {
    userId: '',
    fullName: 'Guest',
    email: '',
    collegeName: '',
    role: ''
  };

  constructor(private http: HttpClient) {
    this.loadUserData();
  }

  private loadUserData(): void {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      this.userData = JSON.parse(savedData);
    }
  }

  get loggedUserId(): string {
    return this.userData.userId;
  }

  get loggedUsername(): string {
    return this.userData.fullName;
  }

  // get userEmail(): string {
  //   return this.userData.email;
  // }

  // get userCollege(): string {
  //   return this.userData.collegeName;
  // }

  // get userRole(): string {
  //   return this.userData.role;
  // }

  userlogin(email: string, password: string): Observable<any> {
    const body = { email, password };
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(this.apiUrl, body, { headers });
  }

  setUserData(userData: any): void {
    this.userData = {
      userId: userData.userId,
      fullName: userData.fullName,
      email: userData.email,
      collegeName: userData.collegeName,
      role: userData.role
    };
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

  clearUserData(): void {
    this.userData = {
      userId: '',
      fullName: 'Guest',
      email: '',
      collegeName: '',
      role: ''
    };
    localStorage.removeItem('userData');
  }

  isLoggedIn(): boolean {
    return !!this.userData.userId;
  }
}