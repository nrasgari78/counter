import { Component, OnInit } from '@angular/core';
import {ApiserService} from "../../services/apiser.service";
import {Employee, IStudents} from "../../modal/employee";
import {FormBuilder, FormGroup} from "@angular/forms";
import {filter, find,map} from "rxjs/operators";
import {from, Observable, of,pipe} from "rxjs";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  p: number = 1;
  student:any
  colors:string[]=[]
  favoritecolor:string=''
  selectedstudent:string=''
  filtername=new Array()
  employees=new Array()
  array = new Array()
  students: IStudents[]=[]
  value = 'nargesi'
  name: string = ''
  family: string = ''
  selected:any
  detail:any
  Sform = this.fb.group({
    name: [''],
    family: ['']
  })
  id:any
  l:number=0

    formselect=this.fb.group({
      students:[''],
      colors:['']
    })

form1=this.fb.group({
  selectstudents:['']
})
  constructor(private api: ApiserService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {


    this.students = this.api.getstudents()
    this.l=this.students.length
from(this.students).pipe(filter(res=>res.id===2)).subscribe(f=>this.selected=f)

  }


  ins(event:any ) {
    // this.name = this.Sform.get('name')?.value
    // this.family = this.Sform.get('family')?.value
    // console.log(this.family)
    this.name = event.target.n.value
    this.family=event.target.f.value
    this.students.push({'id': 3, "name": this.name, "family": this.family})
    this.Sform.reset()

  }
  showname(id:number){

from(this.students).pipe(filter(item=>item.id===id)).subscribe(f=>this.selectedstudent=f.name)


    // this.id=this.students.find(item=>item.id===id)
this.students.forEach(res=>{
  if(res.id===id)
    this.id=res.id
})


// this.students.forEach(res=>{
//   if(res.id===id)
//     this.selectedstudent=res.name
//
// })

  }
  remove(i:any) {
    this.students.splice(i,1)
  }

  getemplotee(){
    this.employees=this.api.getemplotee()
  }
  selectname(student:any){
    // from(this.students).pipe(filter(res=>res.id===1)).subscribe(f=>this.colors=['pink','red'])
    // from(this.students).pipe(filter(res=>res.id===2)).subscribe(f=>this.colors=['blue','pink'])
// from(this.students).subscribe(f=>{
//
//
//   if(f.id===1) this.colors=['pink','red']
//   else
//    if(f.id===2) this.colors= ['blue','pink']})
    this.student=student
//     this.student=event.target.student.value
//     this.student=this.formselect.get('students')?.value
    console.log(this.student)
    this.students.forEach(res=>{
      if(res.id===this.student){
        this.colors=['pink','red']
        alert('1')}
      else
      if(res.id===this.student){
        this.colors=['blue','pink']
        confirm('2')}
      else
this.colors=['brown']
    })
   console.log(this.colors)
  }

  showdetailstudent(){
    this.name=''
    this.family=''
    this.detail= this.form1.get('selectstudents')?.value

this.name=this.detail?.name
    this.family=this.detail?.family
console.log(this.detail)
  }
}
