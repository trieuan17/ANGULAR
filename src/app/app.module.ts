import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContrinhlamvuonComponent } from './contrinhlamvuon/contrinhlamvuon.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CongtringlamvuonComponent } from './congtringlamvuon/congtringlamvuon.component';

import { SanphambanchayComponent } from './sanphambanchay/sanphambanchay.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ToastrModule} from 'ngx-toastr';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileComponent } from './profile/profile.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChitietComponent } from './chitiet/chitiet.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { CardComponent } from './card/card.component';
import { PostComponent } from './post/post.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} }


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContrinhlamvuonComponent,
    LoginComponent,
    Page404Component,
    SlidebarComponent,
    CongtringlamvuonComponent,
    
    SanphambanchayComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ProfileComponent,
    ChitietComponent,
    CardComponent,
    PostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxImageZoomModule,
    NgImageSliderModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
