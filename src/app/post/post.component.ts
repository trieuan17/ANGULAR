import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {HoadonService} from '../services/hoadon.service'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [NgbCarouselConfig] 
})
export class PostComponent implements OnInit {
  data2:any;
  data:any;
  image:any =[];
  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(private httpClient:HttpClient,private router:ActivatedRoute,private toastr: ToastrService,config: NgbCarouselConfig,
    private hoadon:HoadonService) { 
   
  }

  ngOnInit(): void {

    this.httpClient.get<any>("http://localhost:3000/postnews").subscribe((data:any)=>{
     if(data.result==1){
       this.data=data.data

     }
    })
  }
  addclick(id:any){
    this.hoadon.postbaiviet(id).subscribe((data:any)=>{
     data.data.Image.forEach((e:any) => {
       this.data2 = e
      console.log("http://localhost:3000/assets/video/"+e);
      this.image.push("http://localhost:3000/assets/video/"+e)
     });
     
     
    })
  }
  clickden(){
    this.data2=!this.data2;
    this.image=[]
  }
 

}
