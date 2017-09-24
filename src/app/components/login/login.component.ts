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
      email: 'bryan.finlayson@metova.com' as string,
      password: 'Metova$1234' as string
    };
    this.auth.login(sampleUser).then((user) => {
      console.log(user.json())
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
