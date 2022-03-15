import { Injectable } from '@angular/core';
import {IUser} from "../modal/iuser";
import {Observable, of} from "rxjs";
import {filter} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginuser:IUser={user:'ali', pass:'123'}
  constructor() { }


  getuser(username:string,password:string):Observable<IUser>{

    const authi= of(this.loginuser).pipe(filter(x=>
      this.loginuser.user===username && this.loginuser.pass===password))
     return authi;
  }

}

