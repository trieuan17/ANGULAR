import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ProductService} from '../services/product.service'
import * as $ from "jquery"
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  
  Soluong:any =1;
  thanhtien:any


 
  constructor( private product: ProductService,private httpClient:HttpClient,private router:ActivatedRoute,private toastr: ToastrService){}
data:any =[];
totalenght:any;
page:number =1;
soluonggio:any
arrGioHang:any =[];



addcard(id:any){
 if(!localStorage.getItem("token")){
   this.toastr.error("vui lòng đăng nhập để mua hàng")
 }
 else{
  this.product.postProduct(id).subscribe((data:any)=>{
    if(data.result==0){
      this.toastr.error("thêm sản phẩm thất bại")
    }
    else{
      if(localStorage.giohang == null){
        this.arrGioHang=[];
        this.arrGioHang.push({ID:data.data._id,IMAGE:data.data.Image[0] ,TEN:data.data.Name,DONGIA:data.data.Price,SOLUONG:this.Soluong,THANHTIEN:this.Soluong*data.data.Price})
        this.toastr.success("đã thêm "+ data.data.Name + " vào giỏ hàng")
      }
      else{
        this.arrGioHang =JSON.parse(localStorage.giohang);
      
      
        let index = this.arrGioHang.findIndex((x:any) => x.ID === data.data._id);
     
          if(index == -1){
            this.arrGioHang.push({ID:data.data._id,IMAGE:data.data.Image[0] ,TEN:data.data.Name,DONGIA:data.data.Price,SOLUONG:this.Soluong,THANHTIEN:this.Soluong*data.data.Price})
            this.toastr.success("đã thêm "+ data.data.Name + " vào giỏ hàng")
          }
          else{
            this.arrGioHang[index].SOLUONG +=1;
            this.toastr.success("đã thêm "+ data.data.Name + " vào giỏ hàng")
            this.arrGioHang[index].THANHTIEN = this.arrGioHang[index].SOLUONG * this.arrGioHang[index].DONGIA
          }
        }
       localStorage.setItem("giohang", JSON.stringify(this.arrGioHang));
       
       var cardfromlocal =JSON.parse(localStorage.giohang) 
       
       var total = 0
       cardfromlocal.forEach((element:any) => {
        total += element.SOLUONG
      });
      this.soluonggio = total
    
         this.product.changeMessage(this.soluonggio)
     
      
      
    }
    
  })
 }
  
}




  ngOnInit(): void {
    var cardFromlocal =JSON.stringify(localStorage.giohang)
    
    if(cardFromlocal!=undefined){
      this.arrGioHang = JSON.parse(cardFromlocal)
    }
    this.httpClient.get<any>('http://datlanh.herokuapp.com/san-pham').subscribe((kq:any)=>{
      if(kq.result ==0){
        this.toastr.error("failse loaded")
      }
      else{
        this.data= kq['data']
        this.totalenght = this.data.length;
        
      }
    })
   

    
    
   

    
  }

}
