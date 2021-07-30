import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(
    public router:Router,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  mode:string='side';

  menu=[
    {
      name:'Dashboard',
      icon:'dashboard',
      url:'/admin/dashboard'
    },
  ]

  logout() {
    this.auth.signOut();
    let conf=confirm('Keluar Aplikasi?');
    if(conf)
    {
      localStorage.removeItem('appToken');
      this.router.navigate(['/login']);
    }
  }
}
