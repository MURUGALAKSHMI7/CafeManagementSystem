import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-deleteitems',
  templateUrl: './deleteitems.component.html',
  styleUrl: './deleteitems.component.css'
})
export class DeleteitemsComponent implements OnInit {
  getitemid: any;
  ngOnInit() {
    
  }
  title = 'Add_item';
  model: any = {};//what type of data expecting
  constructor(
    private router: Router, private userservice: UserserviceService
   
  ) {this.getitemid = false;}

  deleteitemfunc(){
    var dish_id = this.model.dish_id;
    this.userservice.getitemid(dish_id).subscribe((res: any) => {
      this.getitemid = res;
    if (this.getitemid == '') {
      alert('err');
      alert('user_email must contain atleast 3 characters');
      
    }else{
      alert('User deleted Successfully');
         this.router.navigateByUrl('/Adminhome')
    }
    });
    
  }
}
