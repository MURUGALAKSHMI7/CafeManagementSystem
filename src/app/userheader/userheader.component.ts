import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrl: './userheader.component.css'
})
export class UserheaderComponent {
  constructor(private router: Router){

  }

  ordercart() : void{
    this.router.navigate(['/order-cart']);
  }
  Userorder() : void{
    this.router.navigate(['/Userorder']);
  }
  Usermenu() : void{
    this.router.navigate(['/Usermenu']);
  }
  Aboutus() : void{
    this.router.navigate(['/Aboutus']);
  }
  Contactus() : void{
    this.router.navigate(['/Contactus']);
  }
  logout() :void{
    this.router.navigate(['']);
  }
}
