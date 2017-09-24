import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:3000/api/v1/users/sign_in'
  private headers: Headers = new Headers({
    'Content-Type': 'text/plain'
  });
  constructor(private http: Http) {}
  login(user): Promise<any> {
    let url: string = `${this.BASE_URL}`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
}
