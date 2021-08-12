import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerform')
  registerform!: NgForm;

  constructor(public LoginService:LoginService, private toastr: ToastrService,private router: Router) { }
 

  ngOnInit(): void {
  }
  onSubmit(){
    
    if(!this.registerform.valid){
      
      this.toastr.warning('invalid data')
      return;
    }
   
    this.LoginService
    .register( this.registerform.value.email,this.registerform.value.password,this.registerform.value.name,
      this.registerform.value.address,this.registerform.value.phone,
      
      ).subscribe((data:any) =>{
      if(data.result ==0){
        this.toastr.error(data.errMsg, 'Lỗi')
      }
      else{
        
        this.toastr.success(data.errMsg);
        this.router.navigate(['/login']);
      }
      
    
      
     
      })
  }

}
