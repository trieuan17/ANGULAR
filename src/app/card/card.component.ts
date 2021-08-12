import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { LoginService } from '../services/login.service';
import { HoadonService } from '../services/hoadon.service';
import { ToastrService } from 'ngx-toastr';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public LoginService:LoginService,private product: ProductService,private router: Router,private toastr: ToastrService,
    private hoadon:HoadonService,private socket: Socket) { 
    this.LoginService.Profile(localStorage.getItem('id')).subscribe((profile:any) =>{
      this.profile=profile.data
      
      })
    
  }
  myThumbnail:any =[];
  changequality:any;
  data:any
  profile:any
  total:any=0
  soluonggio:any=0;
  myhoadon:any =[];
  
  ngOnInit(): void {
  
  
   
    if(localStorage.getItem("giohang")){
      var item = JSON.parse(localStorage.giohang);
              this.data= item;
              
              item.forEach((element:any) => {
                
                this.total += element.THANHTIEN;
                this.soluonggio+= element.SOLUONG;
              });
              this.product.changeMessage(this.soluonggio)
              
    }
    
    
  }
 
  somethingChanged(value:any,_id:any, image:any,thanhtien:any,dongia:any){
   
   if(value<1){
    this.delete(_id)
    
   }
   else{
    this.total= 0
    this.soluonggio=0
    let tim = this.data.findIndex((x:any) => x.ID == _id);
    if(tim>-1){
    
       this.data[tim].SOLUONG = parseInt(value)
       
       this.data[tim].THANHTIEN = dongia * value
       localStorage.setItem("giohang", JSON.stringify(this.data));
       
      
      
    }
   
    this.data.forEach((element:any) => {
      this.total+= element.THANHTIEN;
      this.soluonggio+=element.SOLUONG;
    });
    this.product.changeMessage(this.soluonggio)
   }
   }
   delete(_id:any){
    this.total = 0
    this.soluonggio =0
   let tim = this.data.findIndex((x:any) => x.ID == _id);
  
   this.data.splice(tim,1)
 
   localStorage.setItem("giohang", JSON.stringify(this.data));
   this.data.forEach((element:any) => {
     
    this.total += element.THANHTIEN;
     this.soluonggio+=element.SOLUONG;
   });
         if(this.data.length == 0){
           this.soluonggio=0
          
           
           localStorage.removeItem("giohang")
           this.product.changeMessage(this.soluonggio)
           window.location.reload();
         }
         else{
           this.product.changeMessage(this.soluonggio)
         }
         
  }
  input(chan:any){
    console.log(chan)
  }
  dathang(name:any, sdt:any, diachi:any, id:any){
    
   this.hoadon.hoadon(name,sdt,diachi,id,localStorage.getItem("giohang")).subscribe((data:any)=>{
     if(data.result==0){
      this.toastr.error(data.errMsg)
     }else{
       
      this.socket.emit('dathang',data.data)
       this.toastr.success("đặt hàng thành công");
       let currentUrl = this.router.url;
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
       this.router.onSameUrlNavigation = 'reload';
       this.router.navigate([currentUrl]);
     }
   })
    
  }
  xemdathang(id:any){
    this.hoadon.xemhoadon(id).subscribe((data:any)=>{
      if(data.result==0){
        this.toastr.error(data.errMsg)
       }else{
        this.myhoadon=data['data'];
          
         
         if(this.myhoadon==""){
          this.toastr.error("không có đơn hàng")
         }
         
       }
    })
  }
  huydonhang(id:any,Trangthai:any){
    
      this.hoadon.huyhoadon(id).subscribe((data:any)=>{
        console.log(data)
        if(data.result==0){
          this.toastr.error("bạn vui lòng liên hệ với SHOP để được hủy do đơn hàng đã xác nhận")
        }
        else{
          this.toastr.error("Đơn hàng đã hủy");
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
          this.socket.emit('huy',data.data)

        }
      })
    
  }
  xoa(id:any){
   this.hoadon.danhan(id,"danhan").subscribe((data:any)=>{
     if(data.result==0){
      this.toastr.error("đơn hàng đã xóa")
     }
     if(data.result==1){
      this.toastr.error("đã xóa")
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
     }
   })
   
    
   
  }
   
   
}
