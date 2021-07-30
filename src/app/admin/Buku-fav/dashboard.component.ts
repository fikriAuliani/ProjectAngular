import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailBukuComponent } from '../detail-buku/detail-buku.component';
import { TambahBukuComponent } from '../tambah-buku/tambah-buku.component';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userData: any = {};
  title:any;
  book:any={};
  books:any=[];

  constructor(
    public dialog:MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {

   //memperbarui variabel book
    this.title='Product';
    this.auth.user.subscribe(user=>{
      this.userData = user;
      this.getBooks();
    });

  }

  loading:boolean | undefined;
  //fungsi ambil data
    getBooks()
    {
      this.loading=true;
      this.db.collection('books',ref=>{
        return ref.where('uid','==', this.userData.uid);
      }).valueChanges({idField : 'id'}).subscribe(res=>{
        console.log(res);
        this.books=res;
        this.loading=false;
      },err=>{
        this.loading=false;
        alert('Ada masalah saat mengambil data, coba lagi');
      });
    }

  tambahbuku(data: any,idx: any)
  {
    let dialog=this.dialog.open(TambahBukuComponent, {
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if(idx==-1)this.books.push(res);      
        //jika tidak maka perbarui data  
        else this.books[idx]=res; 
      }
    })
  }

  Detailbuku(data: any,idx: number)
  {
    let dialog=this.dialog.open(DetailBukuComponent, {
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if(idx==-1)this.books.push(res);      
        //jika tidak maka perbarui data  
        else this.books[idx]=res; 
      }
    })
  }

  loadingDelete:any={};
  hapusbuku(id: any, idx: any)
  {
   var conf=confirm('Apakah anda yakin menghapus buku dari favorite?');
   if (conf)
    {
      this.db.collection('books').doc(id).delete().then(res=>{
        this.books.splice(idx,1);
        this.loadingDelete[idx]=false;
      }).catch(err=>{
        this.loadingDelete[idx]=false;
        alert('Tidak dapat menghapus data');
      });
    }
  }

 }