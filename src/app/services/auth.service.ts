import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginResponse: ResponseLogin;

  public clearToken(): void {
    //this.loginResponse = undefined;
    window.sessionStorage.removeItem('token');
  }

  public getToken(): string {
    let token;

    try {
      token = JSON.parse(window.sessionStorage.getItem('token'));
      token = token.access_token;
    } catch (e) {
      token = false;
    }

    return token;
  }

  public getUser(): string {
    let user;
    let token;

    try {
      token = JSON.parse(window.sessionStorage.getItem('token'));
      user = token.user;
    } catch (e) {
      user = 0;
    }

    return user;
  }

  public setToken(token: string): void {
    //this.loginResponse = undefined;
    window.sessionStorage.setItem('token', token);
  }

  public isAuthenticated(): Boolean {
    let token;

    try {
      token = JSON.parse(window.sessionStorage.getItem('token'));
      token = token.access_token;
    } catch (e) {
      token = false;
    }

    return Boolean(token);
  }
}
