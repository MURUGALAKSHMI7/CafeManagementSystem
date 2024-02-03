import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrl: './menuitems.component.css'
})
export class MenuitemsComponent implements OnInit {
  menuitems:any;
  getItemData: any;
  itemSelected: boolean = false;
  selectedItemID : number = 0;
  constructor(private http:HttpClient,private router: Router,
    private userservice: UserserviceService){

  }
  ngOnInit(){
    let response= this.http.get("http://localhost:8090/cafehome/viewmenu");
    response.subscribe((data)=>this.menuitems=data);
  }
  deleteitemfunc(Itid : any){
    this.userservice.getItemData(Itid).pipe(take(1)).subscribe((res : any) =>{  });
      
    if (this.getItemData == true) {
      alert('Something Went Wrong!');
      
    }else{
      alert('Item Removed From Menu Items');
         this.router.navigateByUrl('/Adminhome')
    }

  }
  updateitem(Itid:any){
    this.itemSelected =true;
    this.selectedItemID =Itid;
      
    }
}
