import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:3000/api/v1/auth/sign_in'
  private BASE_REGISTER_URL: string = 'http://localhost:3000/api/v1/auth'

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiBase: 'http://localhost:3000',
      apiPath: 'api/v1'
    });
  }

  login(user: User): Observable<any> {
    let url: string = `${this.BASE_URL}`;
    return this._tokenService.signIn({
      email:    user.email,
      password: user.password
    })
    // return this.http
    //   .post(url, user, { observe: 'response' });
  }

  // register(user: User): Promise<any> {
  //   let url: string = `${this.BASE_REGISTER_URL}`;
  //   return this.http
  //     .post(url, user)
  //     .toPromise();
  // }
}
