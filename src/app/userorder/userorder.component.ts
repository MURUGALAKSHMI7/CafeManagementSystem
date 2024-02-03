import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userorder',
  templateUrl: './userorder.component.html',
  styleUrl: './userorder.component.css'
})
export class UserorderComponent implements OnInit {

  items : any;
  quantity:number = 0;
  isordered: String ="isordered";
  constructor(private http:HttpClient,private userService : UserserviceService){

  }

  ngOnInit(){
    console.log(this.userService.userid)
    let response= this.http.get("http://localhost:8090/cafehome/viewmenu");
    response.subscribe((data)=>{
    this.items=data;
    this.items.map((x:any)=>{
      x.retrievedImage = 'data:image/jpeg;base64,' + x.picByte
      console.log(this.userService.userid)
 
   });
    });
   
  console.log(this.items);
  }

  addCart(item : any){
    this.quantity
    const cart :any = {
      userid : this.userService.userid,
      dishid : item.dish_id,
      quantity : item.quantity,
      isordered:"isordered"
    }
    if(item.quantity!=0){


this.userService.addCart(cart).subscribe((res:any) => {

   alert("Item Added...");
})
  }
  else{
    alert("enter valid quantity");
  }
}
}
