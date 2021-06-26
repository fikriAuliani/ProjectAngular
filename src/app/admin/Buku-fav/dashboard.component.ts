import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailBukuComponent } from '../detail-buku/detail-buku.component';
import { TambahBukuComponent } from '../tambah-buku/tambah-buku.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title:any;
  book:any={};
  books:any=[];

  constructor(
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.title='Product';
    this.book={
      title:'Pengejar Senja',
        author:'Tere Liye',
        publisher:'Pelangi Studio',
        year:2018,
        isbn:'3298379424',
    };
    this.getBooks();
    }

    getBooks()
    {
      this.books=[
        {
          title:'Pengejar Senja',
          author:'Tere Liye',
          publisher:'Pelangi Studio',
          year:2018,
          isbn:'3298379424',
          sinopsis:'Katakan kepada masa lalu kita adalah cerita yang telah usai.'
        },
        {
          title:'Detik Waktu',
          author:'Renata Nagara',
          publisher:'Jembatan Digital',
          year:2020,
          isbn:'57983323455',
          sinopsis:'Pada sebuah garis waktu yang merangkak maju, akan ada saatnya kau ingin melompat mundur pada titik-titik kenangan tertentu.Maka, ikhlaskan saja kalau begitu. Karena sesungguhnya, yang lebih menyakitkan dari melepaskan sesuatu adalah berpegangan pada sesuatu yang menyakitimu secara perlahan.'
        }
      ];
    }

  tambahbuku(data: any,idx: number)
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

hapusbuku(idx: any)
 {
   var conf=confirm('Apakah anda yakin menghapus buku dari favorite?');
   if(conf)
   this.books.splice(idx,1);
 }

}
