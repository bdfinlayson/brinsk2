import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiBase: 'http://localhost:3000',
      apiPath: 'api/v1'
    });
  }

  getContacts(): Observable<any> {
    return this._tokenService.get('contacts')
  }
}
