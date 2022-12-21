import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.login();
  }

  login() {
    let user = 'Pali';
    let pass = 'titok';
    this.auth.login(user, pass)
    .subscribe(res => {
      console.log(res.token);
      console.log(res.name);
    });
  }

}
