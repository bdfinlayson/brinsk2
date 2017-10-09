import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async } from '@angular/core/testing';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './../auth-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/register.component';
import { User } from '../../../models/user';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let debugelement: DebugElement;
  let el: HTMLElement;
  let authServiceStub = {
    isUserSignedIn: true
  }
  let fixture;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AuthRoutingModule,
        RouterTestingModule
      ],
      declarations: [
        LoginComponent,
        RegisterComponent
      ],
      providers: [
        { provide: AuthService, useValue: authServiceStub }
      ]
    })
    .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    debugelement = fixture.debugElement.query(By.css('h1'));
    el = debugelement.nativeElement;
  })

  it('should display the login title', () => {
    expect(el.textContent).toContain('Login')
  })
})
