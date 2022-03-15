import {Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @ViewChildren("id") id: QueryList<ElementRef> | undefined;
  Formcounter=this.fb.group({
    inputnumbeer:['',Validators.required]
  })
 ListCounter: any[]=[];
 step:number=0


  constructor(private fb:FormBuilder,
              private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  Addcounter() {

   if(this.Formcounter.get(['inputnumbeer'])?.errors?.['required'])
     alert('مقدار ورودی خالی است')
    else{
     this.step= Math.round(this.Formcounter.get(['inputnumbeer'])?.value * 100) / 100
     this.ListCounter.push({'step':this.step,'value':0})
     this.Formcounter.get(['inputnumbeer'])?.setValue(null)
   }
  }
  setvalue(index:any,item:any) {
       this.id?.forEach((id: ElementRef) => {
         if (index == id.nativeElement.id) {
          // this.renderer.setProperty(id.nativeElement, 'innerHTML', item['step']+item['value'])
          this.ListCounter[index]={'step':item['step'],'value':item['step']+item['value']}
      }
    })
  }

  Deny() {
    this.Formcounter.reset()
    this.ListCounter=[]
  }
}
