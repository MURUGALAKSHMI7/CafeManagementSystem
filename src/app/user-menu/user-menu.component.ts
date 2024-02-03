import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent implements OnInit {
  menu:any;
  constructor(private http:HttpClient
    ){

  }
  ngOnInit(){
    let response= this.http.get("http://localhost:8090/cafehome/viewmenu");
    response.subscribe((data)=>this.menu=data);
  }

}
