import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host = "http://localhost:8000/api/";
  constructor(private http: HttpClient) { }

  login(user: string, pass: string) {
    //JSON választ
    let userData = {
      name: user,
      password: pass
    }
    let userDataJson = JSON.stringify(userData);
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let httpOption = {
      headers: header
    };
    let endpoint = 'login';
    let url = this.host + endpoint;
    return this.http.post<any>(url, userDataJson, httpOption);
  }

}
