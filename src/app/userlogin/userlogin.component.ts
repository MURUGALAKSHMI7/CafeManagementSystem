import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent implements OnInit {
  title = 'admin_login';
  getData: number;
  model: any = {};//what type of data expecting

  constructor(
    private router: Router, private userservice: UserserviceService
   
  ) {this.getData = 0;}
  
  ngOnInit() {
  }

  Uloginsubmit(){
    var username = this.model.username;
    var password = this.model.password;

    this.userservice.getUloginData(username, password).subscribe((res: number) => {
        this.getData = res;
        
        if (this.getData > 0) {
          this.userservice.userid = this.getData;
          alert("User Validated...Welcome")
           this.router.navigateByUrl('/Userorder')
        } else {
         alert("Invalid users")
        }
      });


}

}
