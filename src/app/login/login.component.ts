import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('loginform')
  loginform!: NgForm;
  
  
  constructor( public LoginService:LoginService,private router: Router,private toastr: ToastrService) { }

  public ngOnInit(): void {
    
    
  }
  onSubmit(){
    if(!this.loginform.valid){
      this.toastr.warning("dữ liệu không hợp lệ")
      return;
    }
   
    
    // this.LoginService.PostComment({
    //   Email: this.loginform.value.email,
    //   Password: this.loginform.value.password
    // }).subscribe(data =>{
    //   console.log('data',data)
    // })
    this.LoginService
    .login( this.loginform.value.email,this.loginform.value.password).subscribe((data:any) =>{
      if(data.result == 0){
        this.toastr.warning(data.errMsg);
      }
      else{
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        
      
        window.location.replace('/')
      }
    
      })
    
  }

}
