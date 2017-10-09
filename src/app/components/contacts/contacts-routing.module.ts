import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsResolver } from './contacts-resolver.service';

import { AuthGuard } from '../../auth-guard.service';
import { ContactsComponent } from './contacts.component';

const contactsRoutes: Routes = [
  { path: 'contacts',
    component: ContactsComponent,
    canActivate: [AuthGuard],
    resolve: {
      contacts: ContactsResolver
    }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(contactsRoutes)
  ],
  providers: [
    AuthGuard,
    ContactsResolver
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule {}
