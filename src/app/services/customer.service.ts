import { Injectable } from '@angular/core';
import {ICustomer} from "../modal/customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: ICustomer[] = [{id: 1, family: 'nasimi', phone: 1254, address: 'asdaxda'},
                           {id: 2, family: 'nargesi', phone:147, address:'jddkhh'}]

  getcustomer(){
   return this.customer
    }
  }
