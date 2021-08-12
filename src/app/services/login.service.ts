import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Injectable({
  providedIn: 'root'
})
export class LoginService { 
  
  
   constructor( private httpClient:HttpClient,private http: HttpClient){}
 
  url ='http://datlanh.herokuapp.com/';
  login( Email:any, Password:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };

    let body = new URLSearchParams();

    // khai báo body
    body.set('Email', Email);
    body.set('Password', Password);

    return this.httpClient.post( this.url + 'user/login', body.toString(), option );

  }
  Profile(Local:any){
  
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    let body = new URLSearchParams();
     body.set('ID', Local);

    return this.httpClient.post( this.url + 'user/getuser',body , option );

  }
  Logout(Local:any){
  
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    let body = new URLSearchParams();
     body.set('Token', Local);

    return this.httpClient.post( this.url + 'user/logout',body , option );

  }
  register( Email:any, Password:any,Name:any,Address:any,Phone:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };

    let body = new URLSearchParams();

    // khai báo body
    body.set('Email', Email);
    body.set('Password', Password);
    body.set('Address', Address);
    body.set('Name', Name);
    body.set('Phone', Phone);

    return this.httpClient.post( this.url + 'user/register', body.toString(), option );
  }
  forgot(Email:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    let body = new URLSearchParams();

    // khai báo body
    body.set('Email', Email);
    return this.httpClient.post( this.url + 'user/forgotPassword', body.toString(), option );
  }
  change(oldpassword:any, Password:any,token:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    let body = new URLSearchParams();

    // khai báo body
    body.set('oldpassword', oldpassword);
    body.set('Password', Password);
    body.set('Token', token);
    return this.httpClient.post( this.url + 'user/changePassword', body.toString(), option );
  }
  edituser(Name:any, Adress:any,Phone:any,ID:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    let body = new URLSearchParams();

    // khai báo body
    body.set('Name',Name );
    body.set('Adress', Adress);
    body.set('Phone', Phone);
    body.set('ID',ID );
    return this.httpClient.post( this.url + 'user/edituser', body.toString(), option );
  }
  
 }

