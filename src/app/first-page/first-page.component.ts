import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {
  constructor(private router: Router) { }

  adminPage(){
    this.router.navigateByUrl('/Adminlogin');
  }
  userPage(){
    this.router.navigateByUrl('/Userlogin');
  }
   
}
