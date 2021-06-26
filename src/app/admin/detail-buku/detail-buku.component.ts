import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-buku',
  templateUrl: './detail-buku.component.html',
  styleUrls: ['./detail-buku.component.css']
})
export class DetailBukuComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<DetailBukuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
 
  ) { }

  ngOnInit(): void {
  }

  closeData()
 {
   this.dialogRef.close(this.data);
 }

}
