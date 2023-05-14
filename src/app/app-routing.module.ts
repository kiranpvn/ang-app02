import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Help1Component } from './help1/help1.component';
import { HrIndexComponent } from './hr/hr-index/hr-index.component';
import { OntactComponent } from './ontact/ontact.component';

const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'contact',component:OntactComponent},
    {path:'help',component:Help1Component},
    {path:'hr',component:HrIndexComponent,loadChildren:()=>import('./hr/hr.module').then(x=>x.HrModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
