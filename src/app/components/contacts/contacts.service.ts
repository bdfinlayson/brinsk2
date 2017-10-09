import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  constructor(private _tokenService: Angular2TokenService) {}

  getContacts(): Observable<any> {
    return this._tokenService.get('contacts')
  }
}
