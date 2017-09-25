import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: User = new User();

  constructor(private auth: AuthService) {}

  onLogin(): void {
    console.log(this.user)
    this.auth.login(this.user).subscribe(response => {
      console.log(response);
    })
  }
}
