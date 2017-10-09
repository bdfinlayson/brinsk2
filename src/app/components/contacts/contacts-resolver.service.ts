import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactsResolver implements Resolve<any> {
  constructor(private contactsService: ContactsService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.contactsService.getContacts().map(res => {
      console.log(res.json())
      return res.json()
    });
  }
}
