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
    debugelement = fixture.debugElement;
  })

  function findEl(selector: string): HTMLElement {
    return debugelement.query(By.css(selector)).nativeElement
  }

  it('should display the page title', () => {
    el = findEl('h1')
    expect(el.textContent).toContain('Login')
  })

  it('should display the email field label', () => {
    el = findEl('label[for=email]');
    expect(el.textContent).toContain('Email')
  })

  it('should display the password field label', () => {
    el = findEl('label[for=password]')
    expect(el.textContent).toContain('Password')
  })

  it('should display the email field placeholder', () => {
    el = findEl('input[id=email]')
    expect(el.getAttribute('placeholder')).toEqual('Enter your email')
  })

  it('should display the password field placeholder', () => {
    el = findEl('input[id=password]')
    expect(el.getAttribute('placeholder')).toEqual('Enter your password')
  })

  it('should have a submit button', () => {
    el = findEl('button[type=submit]')
    expect(el.textContent).toContain('Submit')
  })

  it('should have a register link', () => {
    el = findEl('a[id=register]')
    expect(el.textContent).toContain('REGISTER')
  })
})
