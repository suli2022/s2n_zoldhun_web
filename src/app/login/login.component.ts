import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name !: string;
  pass !: string;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    //this.login();
  }

  login() {
    let user = this.name;
    let pass = this.pass;
    this.auth.login(user, pass)
    .subscribe(res => {
      console.log(res.token);
      console.log(res.name);
      localStorage.setItem('token', res.token);
      localStorage.setItem('username', res.name);      
    });
  }

}
