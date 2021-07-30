import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { BorrowComponent } from '../borrow/borrow.component';

@Component({
  selector: 'app-pinjam',
  templateUrl: './pinjam.component.html',
  styleUrls: ['./pinjam.component.css']
})
export class PinjamComponent implements OnInit {

  userData: any = {};
  title:any;
  book:any={};
  borrow:any=[];

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
      this.db.collection('borrow',ref=>{
        return ref.where('uid','==', this.userData.uid);
      }).valueChanges({idField : 'id'}).subscribe(res=>{
        console.log(res);
        this.borrow=res;
        this.loading=false;
      },err=>{
        this.loading=false;
        alert('Ada masalah saat mengambil data, coba lagi');
      });
    }

  pinjambuku(data: any,idx: any)
  {
    let dialog=this.dialog.open(BorrowComponent, {
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if(idx==-1)this.borrow.push(res);      
        //jika tidak maka perbarui data  
        else this.borrow[idx]=res; 
      }
    })
  }

  loadingDelete:any={};
  kembalikanbuku(id: any, idx: any)
  {
   var conf=confirm('Apakah anda yakin mengembalikan buku?');
   if (conf)
    {
      this.db.collection('borrow').doc(id).delete().then(res=>{
        this.borrow.splice(idx,1);
        this.loadingDelete[idx]=false;
        alert('Buku sudah dikembalikan, Terima Kasih');
      }).catch(err=>{
        this.loadingDelete[idx]=false;
        alert('Error, Coba ulangi');
      });
    }
  }

 }

