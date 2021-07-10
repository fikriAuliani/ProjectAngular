import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public router:Router,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  user: any={};
  hide:boolean=true;

  //form validation
  //email = new FormControl('', [Validators.required, Validators.email]);
  //password = new FormControl('', [Validators.minLength(6), Validators.email]);

  loading:boolean | undefined;
  register(user:any)
  {
    this.loading=true;
    this.auth.createUserWithEmailAndPassword(user.email, user.password).then(res=>{
      console.log(res);
      this.loading=false;
      alert('Registrasi Berhasil');
      this.router.navigate(['/login']);
    }).catch(err=>{
      this.loading=false;
      alert('Tidak dapat mendaftar');
    });
}

}
