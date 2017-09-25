import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:3000/api/v1/auth/sign_in'
  private BASE_REGISTER_URL: string = 'http://localhost:3000/api/v1/auth'

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    let url: string = `${this.BASE_URL}`;
    return this.http
      .post(url, user, { observe: 'response' });
  }

  register(user: User): Promise<any> {
    let url: string = `${this.BASE_REGISTER_URL}`;
    return this.http
      .post(url, user)
      .toPromise();
  }
}
