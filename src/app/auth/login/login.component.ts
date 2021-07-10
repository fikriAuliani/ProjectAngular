import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router:Router,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  user: any={};
  hide:boolean=true;

  //form validation
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  loading:boolean | undefined;
  login(user:any)
  {
    this.loading=true;
    this.auth.signInWithEmailAndPassword(user.email, user.password).then(res=>{
      console.log(res);
      this.loading=false;
      alert('Login Berhasil');
      //localStorage.setItem('appToken',JSON.stringify(res));
      this.router.navigate(['admin/dashboard']);
    }).catch(err=>{
      this.loading=false;
      alert('Tidak dapat login');
    });
}

}
