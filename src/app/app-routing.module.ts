import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { holdReady } from 'jquery';
import {HomeComponent} from './home/home.component';
import {Page404Component} from './page404/page404.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {ChangepasswordComponent} from './changepassword/changepassword.component';
import {ProfileComponent} from './profile/profile.component';
import { GoastGuard } from './goast/goast.guard';
import {ChitietComponent} from'./chitiet/chitiet.component';
import {CardComponent} from './card/card.component';
import {SanphambanchayComponent} from './sanphambanchay/sanphambanchay.component';
import {PostComponent} from './post/post.component'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    
  },
  {
    path: 'chitiet/:id',
    component: ChitietComponent
    
  },
  {
    path: 'post',
    component: PostComponent
    
  },
  
  {
    path: 'login',
    component: LoginComponent
    
  },
 
  {
    path: 'register',
    component: RegisterComponent
    
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[GoastGuard]
    
  },
  {
    path: 'card',
    component: CardComponent,
    canActivate:[GoastGuard]
    
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent,
    canActivate:[GoastGuard]
    
  },
  {
    path: 'forgotPW',
    component: ForgotpasswordComponent
    
  },
  {
    path: 'san-pham/:Type',
    component: SanphambanchayComponent
    
  },
  {
    path: '**',
    component: Page404Component
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
