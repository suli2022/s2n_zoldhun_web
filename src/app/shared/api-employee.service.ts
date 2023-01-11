import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEmployeeService {
  host = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  getEmployees() {
    let endpoint = 'employees'
    let url = this.host + endpoint;
    return this.http.get<any>(url);
  }
}
