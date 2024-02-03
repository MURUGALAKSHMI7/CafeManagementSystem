import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { take } from 'rxjs'; 
import { Router } from '@angular/router';
import { OrderService } from '../orderService.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  isordered: String ="isordered";
  constructor(private http:HttpClient,private userService : UserserviceService
    ,private router: Router) {}
  placeOrder(): void {
    
    //console.log(" =======>",this.isordered);
    this.userService.orderSubmit(this.userService.userid,this.isordered).pipe(take(1)).subscribe((res: any) =>{
         


      alert("Order Updated Successfully");
      this.router.navigate(['/Userorder'])
  },
      (err: HttpErrorResponse) => {
        console.log('Error Status: ', err.status);
        console.log('Error Message: ', err.message);
        alert('Something went wrong! Please try again');
      });
  
  }
  

}
