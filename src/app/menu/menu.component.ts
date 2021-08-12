import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import * as $ from "jquery"
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data:any;
  soluong:any =0;
 
  constructor(public LoginService:LoginService,private router: Router,private product: ProductService ) {
    this.LoginService.Profile(localStorage.getItem('id')).subscribe((data:any) =>{
      this.data=data;
      
      })
   

      
     
   }


  
   logout(){
    this.LoginService.Logout(localStorage.getItem('token')).subscribe((data:any) =>{
      window.location.reload();
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      this.router.navigate(['/'])
      })
    
  }
  

   
   
  ngOnInit(): void {
   
    
    
      
      this.product.currentMessage.subscribe((data:any)=>{
        
        if(localStorage.getItem('giohang')!=undefined){
            if(data==0){
              var item = JSON.parse(localStorage.giohang);
              
              item.forEach((element:any) => {
                this.soluong += element.SOLUONG;
              });
              
            } else{
              this.soluong= data
            }
          }
   })
    

   
  }
 

}
