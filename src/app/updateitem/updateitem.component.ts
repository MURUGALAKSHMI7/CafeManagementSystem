import { Component, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrl: './updateitem.component.css'
})
export class UpdateitemComponent {

  @Input() itemId:number = 0;

constructor(private http:HttpClient,private userService : UserserviceService) {}
items = new FormGroup({
  dish_id : new FormControl(0),
  dish_name :new FormControl("",Validators.required),
  price : new FormControl()
    });

    ngOnInit() {
      let response= this.http.get('http://localhost:8090/cafehome/dishbyid/'+this.itemId);
      response.subscribe((data)=>{
        if(data){
          console.log(data);
          this.items.patchValue(data);
  
        }
      });
    }
    updateItem(){
      if(this.items.valid){
        const itemIdData = this.items.getRawValue();
        this.userService.updateitemByid(itemIdData.dish_id,itemIdData).pipe(take(1)).subscribe((res: any) =>{


            alert("Item Updated Successfully");
        },
        (err: any) => {
          console.log("Error  ", err);
          alert("Something went wrong! Please try again");
      });
    }
  }

}
