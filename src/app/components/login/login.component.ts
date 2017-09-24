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
    this.auth.login(this.user).then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  // ngOnInit(): void {
  //   let newUser: any = {
  //     email: 'any5@any.com' as string,
  //     password: 'any12345' as string,
  //     password_confirmation: 'any12345' as string
  //   };
  //   this.auth.register(newUser).then((user) => {
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }
}
