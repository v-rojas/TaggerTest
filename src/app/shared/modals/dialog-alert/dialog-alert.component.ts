import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss']
})
export class DialogAlertComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  cerrarModal(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
