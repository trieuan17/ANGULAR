import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class HoadonService {
  url ='http://datlanh.herokuapp.com/';
  constructor(private httpClient:HttpClient) { }
  hoadon(NAME:any,SDT:any,DIACHI:any,ID:any,SP:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };

    let body = new URLSearchParams();
    //khai báo body
    body.set("ID",ID);
    body.set("SANPHAM",SP);
    body.set("NAME",NAME);
    body.set("ADRESS",DIACHI);
    body.set("PHONE",SDT);
    return this.httpClient.post( this.url + 'hoadon',body , option );

  }
  xemhoadon(ID:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    
    let body = new URLSearchParams();
    //khai báo body
    body.set("ID",ID);
    
    return this.httpClient.post( this.url + 'xemhoadon',body , option );

  }
  huyhoadon(ID:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    
    let body = new URLSearchParams();
    //khai báo body
    body.set("id",ID);
    
    return this.httpClient.post( this.url + 'huydonhang',body , option );

  }
  danhan(ID:any,Trangthai:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    
    let body = new URLSearchParams();
    //khai báo body
    body.set("id",ID);
    body.set("Trangthai",Trangthai)
    
    return this.httpClient.post( this.url + 'sanpham/thanhcong',body , option );

  }
  postmenu(ID:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    
    let body = new URLSearchParams();
    //khai báo body
    body.set("ID",ID);
    return this.httpClient.post( this.url + 'menuselect',body , option );
  }
  postbaiviet(id:any){
    let option = { 
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded") 
    };
    
    let body = new URLSearchParams();
    //khai báo body
    body.set("id",id);
    return this.httpClient.post( this.url + 'item-post',body , option );
  }
}
