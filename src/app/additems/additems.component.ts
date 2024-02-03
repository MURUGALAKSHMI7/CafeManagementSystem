import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrl: './additems.component.css'
})
export class AdditemsComponent implements OnInit {
  title = 'Add_item';
  model: any = {};//what type of data expecting
  dish_id : string="";
  dish_name: string = "";
  price: string = "";
  selectedFile: any;

  constructor(
    private router: Router, private userservice: UserserviceService
   
  ) {}
  ngOnInit() {
  }
  Itemsubmit(): void {
    if (this.dish_id === '') {
      alert('Dish id cannot be empty');
      return;
    }
    if (this.dish_name === '') {
      alert('Dish name cannot be empty');
      return;
    }
  if (this.price === '') {
      alert('price cannot be empty');
      return;
    }
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('dish_id', this.dish_id);
    uploadImageData.append('dish_name', this.dish_name);
    uploadImageData.append('price', this.price);
    const body: any = {
      // dish_id : this.dish_id,
      // dish_name : this.dish_name,
      // price : this.price,
      uploadImageData,
      //type : this.selectedFile.type
    }
    console.log("=======>",body);
    this.userservice.Itemsubmit(uploadImageData).subscribe((res: any) =>{
        console.log(" ", res);
        if (this.selectedFile.name !== '') {
          alert("Items Added Successfully");
          this.router.navigateByUrl('/Adminhome');
        }
        else{
          alert("File cannot be Empty")
        }
      },
      (err: any) => {
        console.log("Error  ", err);
        alert("Something went wrong! Please try again");
    });
  
  }

  public onFileChanged(event : any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile && this.isJpegFile(this.selectedFile)) {
      // Valid JPEG file
      console.log('JPEG file is valid');
    } else {
      // Invalid file type
      alert(" Please try jpeg file");
    }
  }
  private isJpegFile(file: File): boolean {
    return file.type === 'image/jpeg' || file.type === 'image/jpg' || file.name.endsWith('.jpeg') || file.name.endsWith('.jpg');
  }
  
}
