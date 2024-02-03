import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrl: './orderdetails.component.css'
})
export class OrderdetailsComponent implements OnInit {
  vieworder:any;
  data : any;
  constructor(private http:HttpClient){

  }
  ngOnInit(){
    let response= this.http.get("http://localhost:8090/cafehome/vieworderbycart");
    response.subscribe((data)=>this.vieworder=data);
    console.log(this.data);
  }

}

