import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { PinjamComponent } from './pinjam/pinjam.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'pinjam',
        component:PinjamComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProfileComponent,
    PinjamComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class AdminModule { }
