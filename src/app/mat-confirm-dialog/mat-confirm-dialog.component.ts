import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent implements OnInit {

  constructor(
    private router: Router,

    public dialogRef: MatDialogRef<MatConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) { }
    val:boolean = true;
  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close(false);
  }

  onClick1(){
    this.dialogRef.close(false);
    return this.data.leave;
  }

}
