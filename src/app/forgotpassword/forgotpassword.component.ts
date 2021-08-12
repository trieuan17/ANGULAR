import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  @ViewChild('forgotform')
  forgotform!: NgForm;
  constructor(public LoginService:LoginService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.forgotform.valid){
      this.toastr.warning("dữ liệu không hợp lệ")
      return;
    }
    else{
      this.LoginService.forgot(this.forgotform.value.email).subscribe((data:any) => {
        if(data.result == 0){
          this.toastr.error(data.errMsg);
        }
        else{
          this.toastr.success(data.errMsg)
          this.router.navigate(['/login'])
        }
      })
    }
  }
}
