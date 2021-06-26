import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tambah-buku',
  templateUrl: './tambah-buku.component.html',
  styleUrls: ['./tambah-buku.component.css']
})
export class TambahBukuComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<TambahBukuComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
  }

  saveData()
 {
   this.dialogRef.close(this.data);
 }


}
