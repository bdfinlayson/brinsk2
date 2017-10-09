import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: User = new User();

  constructor(private router: Router, private auth: AuthService) {}

  onLogin(): void {
    console.log(this.user)
    this.auth.login(this.user).subscribe(response => {
      if(this.auth.isUserSignedIn()) {
        this.router.navigateByUrl('dashboard')
      }else{
        this.router.navigateByUrl('auth')
      }
    })
  }
}
