import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AdditemsComponent } from './additems/additems.component';
import { DeleteitemsComponent } from './deleteitems/deleteitems.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserorderComponent } from './userorder/userorder.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { PaymentComponent } from './payment/payment.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuitemsComponent,
    AdminhomeComponent,
    AdminheaderComponent,
    AdduserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    AdditemsComponent,
    DeleteitemsComponent,
    OrderdetailsComponent,
    AdminloginComponent,
    UserdetailsComponent,
    UserorderComponent,
    UserheaderComponent,
    UserloginComponent,
    OrderCartComponent,
    UpdateitemComponent,
    FirstPageComponent,
    AdminFooterComponent,
    UserFooterComponent,
    UserMenuComponent,
    AboutusComponent,
    ContactusComponent,
    UsersignupComponent,
    PaymentComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
