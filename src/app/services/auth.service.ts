import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:3000/api/v1/auth/sign_in'

  constructor(private http: HttpClient) {}

  login(user): Promise<any> {
    let url: string = `${this.BASE_URL}`;
    return this.http
      .post(url, user)
      .toPromise();
  }
}
