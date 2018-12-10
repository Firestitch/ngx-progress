import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  styleUrls: ['progress-dialog.component.scss'],
  templateUrl: 'progress-dialog.component.html'
})
export class ProgressDialogComponent {
  public config;
  public isProcessing = true;
  constructor(public dialogRef: MatDialogRef<ProgressDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {
    data.progressDialog
      .processSubscribe(() => {
        this.isProcessing = false;
      });
  }

  close(): void {
    this.dialogRef.close();
  }
}

