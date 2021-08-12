import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoadonService } from '../services/hoadon.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {
  isReply:boolean=false
  constructor(private httpClient:HttpClient, private submenu:HoadonService,private router: Router) { }
  menu:any;
  menucon:any =[];
  status:boolean=false;
  url:any
  ngOnInit(): void {
    this.httpClient.get<any>("http://datlanh.herokuapp.com/full").subscribe((data:any)=>{
      if(data.result==1){
        
        this.menu= data.data;
        data.data.forEach((e:any) => {
          console.log(e.DSCon)
        });
       
      }
      
     
      
    })
  }
  clickcheck(e:any){
    this.url="/san-pham/"+e
    const currentRoute = this.url
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentRoute]); // navigate to same route
    }); 
  }
 
}
