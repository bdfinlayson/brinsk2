import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  test: string = 'just a test';
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    let sampleUser: any = {
      email: 'test@test.com' as string,
      password: 'test1234' as string
    };
    let newUser: any = {
      email: 'any5@any.com' as string,
      password: 'any12345' as string,
      password_confirmation: 'any12345' as string
    };

    this.auth.login(sampleUser).then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })

    this.auth.register(newUser).then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
