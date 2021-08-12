import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  data: any;
  id: any;
  pramm: any
  Soluong: any = 1;
  thanhtien: any;
  totalenght: any;
  page: number = 1;
  soluonggio: any
  arrGioHang: any = [];
  showNavigationArrows = false;
  showNavigationIndicators = false;
  myThumbnail: any = [];
  myFullreImage: any = [];
  constructor(private product: ProductService, private http: HttpClient, private router: ActivatedRoute, private toastr: ToastrService,
    private ngImgZomm: NgxImageZoomModule
  ) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.id = this.router.snapshot.paramMap.get('id');

    })

    this.http.get('http://datlanh.herokuapp.com/chitiet/' + this.id).subscribe((data: any) => {
      if (data.resul == 0) {
        this.toastr.error(data.errMsg)
      }
      else {
        this.data = data.data;
        for (var i = 0; i < this.data.Image.length; i++) {
          this.myThumbnail.push("http://datlanh.herokuapp.com/assets/img/" + this.data.Image[i])
          this.myFullreImage.push("http://datlanh.herokuapp.com/assets/img/" + this.data.Image[i])
        }



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
