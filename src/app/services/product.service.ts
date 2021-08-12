import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
 
  constructor( private httpClient:HttpClient){}
  url ='http://datlanh.herokuapp.com/'
  get_list_product(  ){
    return this.httpClient.get( this.url + 'san-pham' );
  }

  postProduct(ID:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    let body = new URLSearchParams();

    // khai báo body
    body.set('ID', ID);
    return this.httpClient.post( this.url + 'san-pham', body.toString(), option );
    
  }
  
  messageSource = new BehaviorSubject<any>(0);
  currentMessage = this.messageSource.asObservable();
  changeMessage(message:any) {
    this.messageSource.next(message);
  }
}

