import { Component, OnInit, ViewChild } from '@angular/core';

import { LoginService } from '../services/login.service';
import {NgForm} from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('editform')
  editform!: NgForm;
  @ViewChild('nameform')
  nameform!: NgForm;
  @ViewChild('adressform')
  adressform!: NgForm;
  @ViewChild('phoneform')
  phoneform!: NgForm;
  data:any;
  name:boolean = true;
  adress:boolean = true;
  phone:boolean = true;
  

  constructor(public LoginService:LoginService,private router: Router,private toastr: ToastrService) {
   
    this.LoginService.Profile(localStorage.getItem('id')).subscribe((data:any) =>{
      this.data=data.data
      console.log(this.data)
      })
   
   
   }
  
  nameclick(){
   this.name = !this.name
  }
  adressclick(){
    this.adress = !this.adress
  }
  phoneclick(){
    this.phone = !this.phone
  }
  
  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.nameform.valid){
      this.toastr.warning("dữ liệu không hợp lệ")
      return;
    }
    else{
      this.LoginService.edituser(this.nameform.value.name,this.data.Adress,this.data.Phone,localStorage.getItem('id'))
      .subscribe((data:any)=>{
        if(data.result ==0){
          this.toastr.error(data.errMsg)
        }
        else{
          this.toastr.success(data.errMsg)
          window.location.reload();
        }
      })
     
    }
  }
  phoneSubmit(){
    if(!this.phoneform.valid){
      this.toastr.warning("dữ liệu không hợp lệ")
      return;
    }
    else{
      console.log(this.phoneform.value.phone)
      this.LoginService.edituser(this.data.Name,this.data.Adress,this.phoneform.value.phone,localStorage.getItem('id'))
      .subscribe((data:any)=>{
        if(data.result ==0){
          this.toastr.error(data.errMsg)
        }
        else{
          this.toastr.success(data.errMsg)
          window.location.reload();
        }
      })
     
    }
  }
  adressSubmit(){
    if(!this.adressform.valid){
      this.toastr.warning("dữ liệu không hợp lệ")
      return;
    }
    else{
      this.LoginService.edituser(this.data.Name,this.adressform.value.adress,this.data.Phone,localStorage.getItem('id'))
      .subscribe((data:any)=>{
        if(data.result ==0){
          this.toastr.error(data.errMsg)
        }
        else{
          this.toastr.success(data.errMsg)
          window.location.reload();
        }
      })
     
    }
  }
  

}
