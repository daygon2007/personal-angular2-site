import { Component, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
// Something has to change here... I don't think you're actually setting this.login

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: DataService, private login: LoginComponent) {
    console.log(this.login); 
  }

  canActivate() {
    return this.login.isLoggedIn();
  }
}