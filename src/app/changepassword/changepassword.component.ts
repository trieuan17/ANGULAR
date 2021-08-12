import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  @ViewChild('changeform')
  changeform!: NgForm;
  constructor(public LoginService:LoginService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.changeform.valid){
      this.toastr.warning("password is invalid")
    }
    else{
      this.LoginService.change(this.changeform.value.oldpassword,this.changeform.value.password,localStorage.getItem('token')).subscribe((data:any) => {
        if(data.result == 0){
          this.toastr.error(data.errMsg);
        }
        else{
          this.toastr.success(data.errMsg)
          // this.router.navigate(['/login'])
        }
      })
    } 
    
  }

}
