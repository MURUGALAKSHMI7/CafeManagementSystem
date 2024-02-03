import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent implements OnInit {
  title = 'Add_user';
  model: any = {};//what type of data expecting
  userid : string="";
  username: string = "";
  email: string = "";
  password: string = "";
  phoneno: string = "";
  city: string = "";
  constructor(
    private router: Router, private userservice: UserserviceService
   
  ) {}
  ngOnInit() {
  }

AdminSubmit(): void {
  if (this.userid === '') {
    alert('UserID cannot be empty');
    return;
  }
  
  if (this.username === '') {
    alert('UserName cannot be empty');
    return;
  }
if (this.email === '') {
    alert('E-Mail cannot be empty');
    return;
  }
  if (this.password === '' ) {
    alert('Password cannot be empty');
    return;
  }
if (this.phoneno === '') {
    alert('Mobile Number cannot be empty');
    return;
  }
if (this.city === '') {
    alert('City cannot be empty');
    return;
  }
  const body: any = {
    userid : this.userid,
    city : this.city,
    email : this.email,
    password : this.password,
    phoneno : this.phoneno,
    username : this.username,
  }
  console.log(" =======>",body);
  this.userservice.AdminSubmit(body).pipe(take(1)).subscribe((res: any) =>{
      //console.log(" ", res);
      if (this.email !== '') {
        alert("User Added Successfully");
        this.router.navigateByUrl('/Adminhome');
      }
    },
    (err: HttpErrorResponse) => {
      console.log('Error Status: ', err.status);
      console.log('Error Message: ', err.message);
      alert('Something went wrong! Please try again');
    });

}

}