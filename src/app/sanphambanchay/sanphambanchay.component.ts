import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,NavigationEnd,Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sanphambanchay',
  templateUrl: './sanphambanchay.component.html',
  styleUrls: ['./sanphambanchay.component.css']
})
export class SanphambanchayComponent implements OnInit {

  constructor(private router: Router,private product: ProductService,private routeractive:ActivatedRoute,private httpClient:HttpClient,private activatedRoute: ActivatedRoute,private toastr: ToastrService) { 

  }
  pramm:any
  Soluong:any =1;
  thanhtien:any

  data:any =[];
totalenght:any;
page:number =1;
soluonggio:any
arrGioHang:any =[];
mySubscription:any;
temp:any

  ngOnInit(): void {
   
    
    this.activatedRoute.queryParams.subscribe((params: Params) => {
    this.pramm =  this.activatedRoute.snapshot.params.Type
    });
   this.httpClient.get<any>("http://datlanh.herokuapp.com/san-pham/"+this.pramm).subscribe((kq:any)=>{
    if(kq.result ==0){
      this.toastr.error("failse loaded")
    }
    else{
      
      this.data= kq['data']
      console.log(this.data)
      this.totalenght = this.data.length;
    
      
    }
   })
  }
  

  addcard(id: any) {
    if (!localStorage.getItem("token")) {
      this.toastr.error("vui lòng đăng nhập để mua hàng")
    }
    else {
      this.product.postProduct(id).subscribe((data: any) => {
        if (data.result == 0) {
          this.toastr.error("thêm sản phẩm thất bại")
        }
        else {

          if (!localStorage.getItem("giohang")) {

            this.arrGioHang.push({ ID: data.data._id, IMAGE: data.data.Image[0], TEN: data.data.Name, DONGIA: data.data.Price, SOLUONG: this.Soluong, THANHTIEN: this.Soluong * data.data.Price })
            this.toastr.success("đã thêm " + data.data.Name + " vào giỏ hàng");
            localStorage.setItem("giohang", JSON.stringify(this.arrGioHang));


            localStorage.setItem("giohang", JSON.stringify(this.arrGioHang));
            var cardfromlocal = JSON.parse(localStorage.giohang)

            var total = 0
            cardfromlocal.forEach((element: any) => {
              total += element.SOLUONG
            });
            this.soluonggio = total
            this.product.changeMessage(this.soluonggio)
            
          } else {
            this.arrGioHang = JSON.parse(localStorage.giohang);
            let index = this.arrGioHang.findIndex((x: any) => x.ID == data.data._id);
            if (index == -1) {
              this.arrGioHang.push({ ID: data.data._id, IMAGE: data.data.Image[0], TEN: data.data.Name, DONGIA: data.data.Price, SOLUONG: this.Soluong, THANHTIEN: this.Soluong * data.data.Price })
              this.toastr.success("đã thêm " + data.data.Name + " vào giỏ hàng")
            }
            else {
              this.arrGioHang[index].SOLUONG += 1;
              this.toastr.success("đã thêm " + data.data.Name + " vào giỏ hàng")
              this.arrGioHang[index].THANHTIEN = this.arrGioHang[index].SOLUONG * this.arrGioHang[index].DONGIA
            }
            localStorage.setItem("giohang", JSON.stringify(this.arrGioHang));

            var cardfromlocal = JSON.parse(localStorage.giohang)

            var total = 0
            cardfromlocal.forEach((element: any) => {
              total += element.SOLUONG
            });
            this.soluonggio = total
            this.product.changeMessage(this.soluonggio)
          }



        }

      })
    }

  }
}
