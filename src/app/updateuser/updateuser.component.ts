import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
import { take } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent {

@Input() userID:number = 0;

constructor(private http:HttpClient,private userService : UserserviceService) {}
user = new FormGroup({
  userid : new FormControl(0),
  username :new FormControl("",Validators.required),
  phoneno : new FormControl(),
  email:new FormControl("",Validators.email),
  password : new FormControl(""),
  city: new FormControl("")
    });

    ngOnInit() {
      let response= this.http.get('http://localhost:8090/cafehome/userbyid/'+this.userID);
      response.subscribe((data)=>{
        if(data){
          console.log(data);
          this.user.patchValue(data);
  
        }
      });
    }
    updateUser(){
      if(this.user.invalid){
        alert('Field cannot be empty')
        return;
      }
      if(this.user.valid){
        const userData = this.user.getRawValue();
        this.userService.updateuserbyid(userData.userid,userData).pipe(take(1)).subscribe((res: any) =>{
         


            alert("User Updated Successfully");
        },
        (err: any) => {
          console.log("Error  ", err);
          alert("Something went wrong! Please try again");

      });
    }
  }
}
