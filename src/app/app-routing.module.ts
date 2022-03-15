import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";

const routes:Routes=[

  // {path:'',children:[{path:'list',component :ListComponent,data:{title:'list customers'}}]},
  {path: '**', redirectTo: ''}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



