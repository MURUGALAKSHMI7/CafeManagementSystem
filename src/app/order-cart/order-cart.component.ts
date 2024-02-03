import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { take } from 'rxjs'; 
import { Router } from '@angular/router';
import { OrderService } from '../orderService.service';
@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrl: './order-cart.component.css'
})

export class OrderCartComponent implements OnInit{
  dishids :any;
  // alldishes: any[] = [];
  alldish :any;
  nValue : number = 0;
  delData: boolean = true;
  isordered: any;
  constructor(private http:HttpClient,private userService : UserserviceService
    ,private router: Router) {}

  ngOnInit() {
    let response= this.http.get('http://localhost:8090/cafehome/cartbyid/'+ this.userService.userid);
    response.subscribe((data : any)=>{
      if(data){
        console.log(data);
        this.dishids = data.map((x : any) => x.dishid);
        let dishnames = this.http.get('http://localhost:8090/cafehome/viewmenu');
        dishnames.subscribe((data1 : any )=>{
          this.alldish = data1.filter((x : any)=> this.dishids.includes(x.dish_id));
          console.log(this.alldish);
          //this.nValue = this.alldish.reduce((total: number, dish: any) => total + this.alldish.price, 0) * 4;
          this.alldish.map((z: any)=> {
            z.quantity = data.find((i: any)=> i.dishid==z.dish_id).quantity;
            z.cartid = data.find((i: any)=> i.dishid==z.dish_id).cartId;
            z.total = data.find((i: any)=> i.dishid==z.dish_id).quantity * z.price; 
          })
          //this.nValue = this.alldish.reduce((total: number, dish: any) => total + dish.price, 0) * 4;

        });
      }
    });
  }
  deletefunc(dId : any){
    this.userService.delData(dId).pipe(take(1)).subscribe((res : any) =>{  });
      
    if (this.delData == false) {
      alert('Something Went Wrong!');
      
    }else{
      alert('Item Removed From Menu Items');
         this.router.navigate(['/Userorder'])
    }

  }
  navigateToPayment(){
    this.router.navigate(['/Payment']);
  }
 }
