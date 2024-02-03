import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {
  adminhome:any;
  constructor(private http:HttpClient){

  }
  ngOnInit(){
    let response= this.http.get("http://localhost:8090/cafehome/viewmenu");
    response.subscribe((data)=>this.adminhome=data);
  }

}
