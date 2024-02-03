import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuitemsComponent } from '../app/menuitems/menuitems.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { Router } from 'express';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AdditemsComponent } from './additems/additems.component';
import { DeleteitemsComponent } from './deleteitems/deleteitems.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserorderComponent } from './userorder/userorder.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { PaymentComponent } from './payment/payment.component';
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [
  {path:'', component:FirstPageComponent},
  {path:'Adminlogin', component:AdminloginComponent},
  {path:'Menuitems', component:MenuitemsComponent},
  {path:'Adminhome', component:AdminhomeComponent},
  {path:'Adduser', component:AdduserComponent},
  {path:'Deleteuser', component:DeleteuserComponent},
  {path:'Additems', component:AdditemsComponent},
  {path:'Deleteitems', component:DeleteitemsComponent},
  {path:'Orderdetails', component:OrderdetailsComponent},
  {path:'Updateuser', component:UpdateuserComponent},
  {path:'Userdetails',component:UserdetailsComponent},
  {path:'Userorder',component:UserorderComponent},
  {path:'Userlogin',component:UserloginComponent},
  {path:'Ordercart',component:OrderCartComponent},
  {path:'Usermenu',component:UserMenuComponent},
  {path:'Aboutus',component:AboutusComponent},
  {path:'Contactus',component:ContactusComponent},
  {path:'order-cart',component:OrderCartComponent},
  {path:'Usersignup',component:UsersignupComponent},
  {path:'Payment',component:PaymentComponent},
  {path:'term',component:TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
