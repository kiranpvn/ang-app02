import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrIndexComponent } from './hr-index/hr-index.component';
import { HrLoginComponent } from './hr-login/hr-login.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes =[
	{path:'',
	children:[
		{path:'login',component:HrLoginComponent},
		{path:'dashboard',component:HrDashboardComponent}
  ]
  }	
];


@NgModule({
  declarations: [
    HrIndexComponent,
    HrLoginComponent,
    HrDashboardComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
  ,exports:[HrIndexComponent,HrLoginComponent,HrDashboardComponent]
})
export class HrModule { }
