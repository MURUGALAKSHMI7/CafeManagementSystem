import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
url : string='http://localhost:8090'
userid: any | null = null;
//userid : any = 0;
  constructor(private http:HttpClient) { }
  //userid : any = 0;
  // Admin Validation
  getUserData(admin_name: string,password: string):  Observable<boolean>{
    return this.http.get<boolean>('http://localhost:8090/cafehome/adminlogin/'+admin_name+'/'+password);
  }
//usersave-----------------------------------------------------------

  AdminSubmit(body: any):Observable<any>{
    return this.http.post(this.url + "/cafehome/saveusers",body);
  }
  // User delete----------------------------
  getuserid(user_id: any):  Observable<boolean>{
    return this.http.delete<boolean>('http://localhost:8090/cafehome/userdelete/'+user_id);
  }
  //Add Items------------------------------------------------------------------------
  Itemsubmit(body: any):Observable<any>{
    return this.http.post(this.url + "/cafehome/saveitems",body);
  }

  // User delete----------------------------
  getitemid(dish_id: any):  Observable<boolean>{
    return this.http.delete<boolean>('http://localhost:8090/cafehome/dishdelete/'+dish_id);
  }

    updateuserbyid(uid:any, body :any):Observable<any>{
    return this.http.put(this.url + "/cafehome/userupdate/"+uid,body);

  }

  addCart(body :any):Observable<any>{
    return this.http.post(this.url + "/cafehome/addToCart",body);

  }
  // User Validation
  getUloginData(username: string,password: string):  Observable<any>{
    

    return this.http.get<any>('http://localhost:8090/cafehome/userlogin/'+username+'/'+password);
  }
  //get item by id
  getItemData(Itid: any):  Observable<boolean>{
    return this.http.delete<boolean>('http://localhost:8090/cafehome/dishdelete/'+Itid);
  }

  updateitemByid(Itid:any, body :any):Observable<any>{
    return this.http.put(this.url + "/cafehome/dishupdate/"+Itid,body);

  }
  //----------
  delData(Itid: any):  Observable<boolean>{
    return this.http.delete<boolean>('http://localhost:8090/cafehome/delData/'+Itid);
  }
  //--------------
  orderSubmit(uid:any, body :any):Observable<any>{
    return this.http.put(this.url + "/cafehome/cartupdate/"+uid,body);

  }
}