import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit {
  title = 'admin_login';
  getData: boolean;
  model: any = {};//what type of data expecting

  constructor(
    private router: Router, private userservice: UserserviceService,private route: ActivatedRoute,
   
  ) {this.getData = false;}
  
  ngOnInit() {
  }
  isDisabled: boolean = true;
  onInput(event: any){
    let text = event.target.value;
    
    if(text==''){
      this.isDisabled = true;
    }
    else{
      this.isDisabled = false;
    }
  }
  terms()
{
  this.router.navigateByUrl('/terms');
}
  loginsubmit() : void{
    var admin_name = this.model.admin_name;
    var password = this.model.password;
    if (!admin_name) {
      alert("Admin Name cannot be empty");
      return;
    }
    if (!password) {
      alert("Password cannot be empty");
      return;
    }
  
    this.userservice.getUserData(admin_name, password).subscribe((res: boolean) => {
        this.getData = res;
        console.log(this.getData);
        
        if (this.getData == true) {
          alert("Admin Validated Successfully")
           this.router.navigateByUrl('/Adminhome')
        } else {
         alert("Invalid Admin Name or Password")
        }
      });

}


}

