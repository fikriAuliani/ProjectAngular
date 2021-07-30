import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './Buku-fav/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { PinjamComponent } from './pinjam/pinjam.component';
import { TambahBukuComponent } from './tambah-buku/tambah-buku.component';
import { FormsModule } from '@angular/forms';
import { DetailBukuComponent } from './detail-buku/detail-buku.component';
import { BorrowComponent } from './borrow/borrow.component';
import { HomeComponent } from './home/home.component';

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
        path:'home',
        component:HomeComponent
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
    PinjamComponent,
    TambahBukuComponent,
    DetailBukuComponent,
    BorrowComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
