import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/api';
  token;

  constructor( private http: HttpClient, private: Router) { }

  login(email: string, password: string) {
    this.http.post(this.url + '/authenticate', { email: email, password: password})
    .subscribe((resp:any)=>{
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', resp.token);
    });
  }
}

logout(){
  localStorage.removeItem('token')
}
public get logIn():boolean{
  return (localStorage.getItem('token')!==null);

}