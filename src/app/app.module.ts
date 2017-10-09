import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './components/auth/auth.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { ContactsModule } from './components/contacts/contacts.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AuthModule,
    DashboardModule,
    ContactsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
