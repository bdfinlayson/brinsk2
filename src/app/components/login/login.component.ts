import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: User = new User();

  constructor(private router: Router, private auth: AuthService, private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiBase: 'http://localhost:3000',
      apiPath: 'api/v1'
    });
  }

  onLogin(): void {
    console.log(this.user)
    this.auth.login(this.user).subscribe(response => {
      console.log(response);
    })
    if(this._tokenService.userSignedIn()) {
      this.router.navigateByUrl('dashboard')
    }else{
      this.router.navigateByUrl('login')
    }
  }
}
