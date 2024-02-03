import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  
  userdetails:any;
  getuserid: any;
  userSelected:boolean = false;
  selectedUserID: number = 0;
  
  constructor(private http:HttpClient,private router: Router,
    private userservice: UserserviceService){

  }
  ngOnInit(){
    let response= this.http.get("http://localhost:8090/cafehome/viewuser");
    response.subscribe((data)=>this.userdetails=data);
  }
  deleteuserfunc(uid: any){
    this.userservice.getuserid(uid).pipe(take(1)).subscribe((res: any) => { });
      console.log(this.getuserid);
    if (this.getuserid == true) {
      alert('Something Went Wrong!');
      
    }else{
      alert('User deleted Successfully');
         this.router.navigateByUrl('/Adminhome')
    }

  }

  updateuser(uid:any){
  this.userSelected =true;
  this.selectedUserID =uid;
    
  }
}

