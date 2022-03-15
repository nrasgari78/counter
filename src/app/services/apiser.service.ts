import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IStudents} from "../modal/employee";
import {Observable,of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiserService {
  employee=[{number:123,family:'aliasgari',sallery:14789522},{id:2841,family:'bandari',salerry:566454421}]

  students:IStudents[]=[{id:1,name:'nasim',family:'akbari'},
             {id:2,name:'neda',family:'asgari'},
              {id:4,name:'akbar',family:'asgari'}]

  apiurl='/api/EMR/Get_Encounter'
  baseurl='http://77.104.73.162:900'
  constructor(private http:HttpClient) { }

getstudents(){
    return this.students
  }
getemplotee(){
    return this.employee
}
getpatinInfo():Observable<any>{
  const data={'encounterID':"862462"}
  const body=JSON.stringify(data)

  const headerDict = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer  ' + localStorage.getItem('token')
  }
  return this.http.post<any>(this.baseurl+this.apiurl,body,{  headers:headerDict })
}

}
