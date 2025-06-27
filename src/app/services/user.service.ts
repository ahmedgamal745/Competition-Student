import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.freeprojectapi.com/api/ProjectCompetition/login';
  loggedUserId: string = '';

  constructor(private http: HttpClient) {
    const loginData = localStorage.getItem('studentId');
    if (loginData != null) {
      this.loggedUserId = loginData;
    }
  }

  userlogin(email: string, password: string): Observable<any> {
    const body = { email, password };
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    // Option 1: Without credentials (recommended first try)
    return this.http.post(this.apiUrl, body, { headers });
    
    
}
}