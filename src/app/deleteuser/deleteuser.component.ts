import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrl: './deleteuser.component.css'
})
export class DeleteuserComponent implements OnInit {
  getuserid: any;
  ngOnInit() {
    
  }
  title = 'Add_user';
  model: any = {};//what type of data expecting
  constructor(
    private router: Router, private userservice: UserserviceService
   
  ) {this.getuserid = false;}

  deleteuserfunc(){
    var user_id = this.model.user_id;
    this.userservice.getuserid(user_id).subscribe((res: any) => {
      this.getuserid = res;
    if (this.getuserid == '') {
      alert('user_email must contain atleast 3 characters');
      
    }else{
      alert('User deleted Successfully');
        this.router.navigateByUrl('/Adminhome')
    }
    });
    
  }
}
